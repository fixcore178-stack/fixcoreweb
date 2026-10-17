// Site-wide motion and interaction: smooth scrolling, scroll reveals, parallax,
// pointer tilt and light. Everything degrades to plain static content when
// JavaScript is off or the visitor prefers reduced motion.
import Lenis from 'lenis';

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ----- Smooth scrolling (Lenis). Touch keeps native momentum. ----- */
let lenis: Lenis | null = null;
if (!reduce) {
	lenis = new Lenis({
		duration: 1.15,
		easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smoothWheel: true,
	});
	const raf = (time: number) => {
		lenis?.raf(time);
		requestAnimationFrame(raf);
	};
	requestAnimationFrame(raf);
}

// The mobile menu locks the page while open
document.addEventListener('fx:lock', (e) => {
	const locked = (e as CustomEvent<boolean>).detail;
	if (locked) lenis?.stop();
	else lenis?.start();
	root.style.overflow = locked && !lenis ? 'hidden' : '';
});

const NAV_OFFSET = -96;
const scrollToEl = (el: Element, immediate = false) => {
	if (lenis) lenis.scrollTo(el as HTMLElement, { offset: NAV_OFFSET, immediate, duration: 1.4 });
	else el.scrollIntoView({ behavior: reduce || immediate ? 'auto' : 'smooth', block: 'start' });
};

// In-page links glide instead of jumping
document.addEventListener('click', (e) => {
	const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
	if (!a || a.target === '_blank' || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
	const url = new URL(a.href, location.href);
	if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
	const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
	if (!el) return;
	e.preventDefault();
	history.pushState(null, '', url.hash);
	scrollToEl(el);
});

// Landing on /#section from another page: settle on the section under the floating nav
window.addEventListener('load', () => {
	if (!location.hash) return;
	const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
	if (el) setTimeout(() => scrollToEl(el, true), 60);
});

/* ----- Scroll reveal ----- */
const revealEls = document.querySelectorAll<HTMLElement>('.reveal, .reveal-lines');
if (reduce || !('IntersectionObserver' in window)) {
	revealEls.forEach((el) => el.classList.add('in'));
} else {
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('in');
				io.unobserve(entry.target);
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
	);
	revealEls.forEach((el) => io.observe(el));
}

/* ----- Scroll-linked effects, batched into one frame per scroll ----- */
const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const progressEls = Array.from(document.querySelectorAll<HTMLElement>('[data-progress]'));
const fab = document.querySelector<HTMLElement>('[data-fab]');
const hideFab = Array.from(document.querySelectorAll<HTMLElement>('[data-hide-fab]'));
let ticking = false;

const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));

const update = () => {
	ticking = false;
	const y = window.scrollY;
	const vh = window.innerHeight;
	root.style.setProperty('--sy', String(Math.round(y)));

	if (!reduce) {
		for (const el of parallax) {
			const r = el.getBoundingClientRect();
			if (r.bottom < -200 || r.top > vh + 200) continue;
			const speed = parseFloat(el.dataset.parallax || '0.1');
			const offset = (r.top + r.height / 2 - vh / 2) * -speed;
			el.style.setProperty('--py', `${offset.toFixed(1)}px`);
		}
	}

	// Timeline progress: 0 when the block enters the lower third, 1 when it is mostly read
	for (const el of progressEls) {
		const r = el.getBoundingClientRect();
		const p = reduce ? 1 : clamp((vh * 0.72 - r.top) / (r.height * 0.9));
		el.style.setProperty('--p', p.toFixed(3));
		el.querySelectorAll<HTMLElement>('[data-step]').forEach((step, i, all) => {
			const need = all.length === 1 ? 0 : i / (all.length - 1);
			step.classList.toggle('on', p >= need - 0.02);
		});
	}

	// Shown after the hero, but tucked away while the quote form or contact options are on screen
	const covered = hideFab.some((el) => {
		const r = el.getBoundingClientRect();
		return r.top < vh * 0.85 && r.bottom > vh * 0.15;
	});
	fab?.classList.toggle('show', y > 520 && !covered);
};

const queue = () => {
	if (ticking) return;
	ticking = true;
	requestAnimationFrame(update);
};
window.addEventListener('scroll', queue, { passive: true });
window.addEventListener('resize', queue);
update();

/* ----- Pointer tilt and spotlight on glass cards (mouse and pen only) ----- */
if (finePointer && !reduce) {
	document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
		const max = parseFloat(card.dataset.tilt || '5');
		card.addEventListener('pointermove', (e) => {
			const r = card.getBoundingClientRect();
			const px = (e.clientX - r.left) / r.width;
			const py = (e.clientY - r.top) / r.height;
			card.style.setProperty('--ry', `${((px - 0.5) * 2 * max).toFixed(2)}deg`);
			card.style.setProperty('--rx', `${((0.5 - py) * 2 * max).toFixed(2)}deg`);
			card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
			card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
			card.classList.add('tilting');
		});
		card.addEventListener('pointerleave', () => {
			card.style.setProperty('--rx', '0deg');
			card.style.setProperty('--ry', '0deg');
			card.classList.remove('tilting');
		});
	});

	// The hero scene leans toward the pointer
	const scene = document.querySelector<HTMLElement>('[data-scene]');
	const host = scene?.closest<HTMLElement>('[data-scene-host]') ?? scene;
	if (scene && host) {
		let raf = 0;
		window.addEventListener(
			'pointermove',
			(e) => {
				cancelAnimationFrame(raf);
				raf = requestAnimationFrame(() => {
					const r = host.getBoundingClientRect();
					const x = clamp((e.clientX - r.left) / r.width, -0.2, 1.2) - 0.5;
					const yy = clamp((e.clientY - r.top) / r.height, -0.2, 1.2) - 0.5;
					scene.style.setProperty('--sry', `${(x * 14).toFixed(2)}deg`);
					scene.style.setProperty('--srx', `${(yy * -10).toFixed(2)}deg`);
				});
			},
			{ passive: true },
		);
	}
} else {
	// Touch: spotlight only needs a start position
	document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => card.removeAttribute('data-tilt'));
}
