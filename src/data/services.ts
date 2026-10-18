// Service pages. Copy sticks to what FixCore Tech actually says it does: repair common
// problems on everyday devices and give a quote before any work starts. No prices,
// turnaround times or guarantees are stated because none have been provided.
import type { IconName } from './icons';

export type Service = {
	slug: string;
	name: string; // short name for nav, footer and cards
	icon: IconName;
	device: string | null; // pre-selects the quote wizard
	problem?: string; // optional pre-selected problem
	cardTitle: string;
	cardText: string;
	title: string; // page h1
	intro: string;
	problems: { icon: IconName; title: string; text: string }[];
	send: string[];
	faq: { q: string; a: string }[];
	seoDescription: string;
};

export const services: Service[] = [
	{
		slug: 'phone-repair',
		name: 'Phone repairs',
		icon: 'phone',
		device: 'phone',
		cardTitle: 'Phone repairs',
		cardText: 'Cracked screens, tired batteries, charging trouble and water damage on the phone you use every day.',
		title: 'Phone repairs in Trinidad & Tobago',
		intro:
			'Your phone is how you work, bank, chat and get around. If it is cracked, dead or acting up, tell us what happened and we will send you a quote.',
		problems: [
			{ icon: 'screen', title: 'Cracked or damaged screen', text: 'Smashed glass, lines across the display, dead spots or a touchscreen that does not respond.' },
			{ icon: 'battery', title: 'Battery problems', text: 'Drains fast, shuts off at a high percentage, gets hot or looks swollen.' },
			{ icon: 'charging', title: "Won't charge", text: 'Charges only at certain angles, not at all, or keeps dropping out. Often the charging port.' },
			{ icon: 'water', title: 'Water damage', text: 'Dropped in water or spilled on. Switch it off, do not charge it, and message us.' },
			{ icon: 'power', title: "Won't turn on", text: 'No sign of life, stuck on the logo or restarting over and over.' },
			{ icon: 'slow', title: 'Slow or freezing', text: 'Lag, crashes, apps closing or a phone that has run out of storage.' },
		],
		send: ['The make and model, for example iPhone 13 or Samsung A54', 'What happened and when it started', 'A clear photo of the damage if you can take one', 'Whether it has been dropped or got wet'],
		faq: [
			{ q: 'Can you fix my phone model?', a: 'Send us the make and model and what is wrong. We will tell you honestly whether we can help.' },
			{ q: 'My phone got wet. What should I do?', a: 'Switch it off straight away, do not try to charge it, and message us. Quick action gives it the best chance.' },
		],
		seoDescription: 'Phone repairs in Trinidad & Tobago: cracked screens, batteries, charging problems and water damage. Get a quote on WhatsApp from FixCore Tech.',
	},
	{
		slug: 'laptop-repair',
		name: 'Laptop repairs',
		icon: 'laptop',
		device: 'laptop',
		cardTitle: 'Laptop repairs',
		cardText: 'Slow, stuck or broken laptops, from cracked screens to machines that will not start.',
		title: 'Laptop repairs in Trinidad & Tobago',
		intro:
			'Work, school and everything in between runs on your laptop. Tell us what it is doing and we will tell you what it needs and what it costs.',
		problems: [
			{ icon: 'screen', title: 'Cracked or damaged screen', text: 'Cracks, lines, flickering or a display that stays black.' },
			{ icon: 'battery', title: 'Battery and charging', text: 'Does not hold a charge, only works plugged in or will not charge at all.' },
			{ icon: 'power', title: "Won't turn on", text: 'No power, no lights, or it starts and then shuts straight down.' },
			{ icon: 'slow', title: 'Slow or freezing', text: 'Takes forever to start, freezes or crashes when you are working.' },
			{ icon: 'water', title: 'Spills and water damage', text: 'Coffee, water or anything else on the keyboard. Switch it off and message us.' },
			{ icon: 'help', title: 'Not sure what is wrong', text: 'Strange noises, random restarts or odd behaviour. Describe it and we will help narrow it down.' },
		],
		send: ['The brand and model, for example Dell Inspiron 15 or MacBook Air', 'What it does or does not do', 'A photo of any damage or error message', 'Whether it has had a spill or a drop'],
		faq: [
			{ q: 'Is it worth repairing my laptop?', a: 'Tell us the model and the problem and we will give you a straight answer, including if repairing is not the best option.' },
			{ q: 'Do I need to bring the charger?', a: 'Mention it when you message us and we will confirm what to bring.' },
		],
		seoDescription: 'Laptop repairs in Trinidad & Tobago: screens, batteries, power faults, slow performance and spills. Get a quote from FixCore Tech on WhatsApp.',
	},
	{
		slug: 'desktop-repair',
		name: 'Computer & PC repairs',
		icon: 'laptop',
		device: 'laptop',
		cardTitle: 'Computer & PC repairs',
		cardText: 'Desktops and PCs that will not start, run slowly, overheat or have faulty power.',
		title: 'Computer and PC repairs in Trinidad & Tobago',
		intro: 'Desktops and PCs that stop working or misbehave. Describe what it is doing and we will tell you what we can do.',
		problems: [
			{ icon: 'power', title: "Won't turn on", text: 'No power, no display, or it starts and shuts straight down.' },
			{ icon: 'slow', title: 'Slow or freezing', text: 'Takes forever to start, freezes or crashes when you are working.' },
			{ icon: 'help', title: 'Overheating', text: 'Loud fans, random shutdowns or a machine that gets too hot.' },
			{ icon: 'battery', title: 'Power faults', text: 'Power supply problems, dead or intermittent power.' },
			{ icon: 'help', title: 'Not sure what is wrong', text: 'Odd noises, random restarts or strange behaviour. Describe it and we will help narrow it down.' },
		],
		send: ['The make and model, or the parts you know about', 'What it does or does not do', 'Any error message on screen', 'Whether it has had a spill, a drop or a power surge'],
		faq: [
			{ q: 'Is it worth repairing my PC?', a: 'Tell us the model and the problem and we will give you a straight answer, including if repairing is not the best option.' },
			{ q: 'Do you repair Windows problems?', a: 'Message us with what is happening and we will confirm what we can help with.' },
		],
		seoDescription: 'Computer and PC repairs in Trinidad & Tobago: power faults, overheating, slow performance and more. Get a quote from FixCore Tech on WhatsApp.',
	},
	{
		slug: 'diagnostics',
		name: 'Diagnostics',
		icon: 'diagnostics',
		device: null,
		problem: 'unsure',
		cardTitle: 'Diagnostics',
		cardText: 'Not sure what is wrong? Describe the symptoms and we will help work out what it needs.',
		title: 'Device diagnostics in Trinidad & Tobago',
		intro:
			'Sometimes the hardest part is knowing what is actually wrong. Describe what your device is doing and we will help you figure out the next step.',
		problems: [
			{ icon: 'help', title: 'Odd behaviour', text: 'Random restarts, strange noises, features that stop working or things that only fail sometimes.' },
			{ icon: 'power', title: 'No clear cause', text: 'It just stopped working and you do not know why.' },
			{ icon: 'slow', title: 'Getting worse over time', text: 'Slower, hotter or less reliable than it used to be.' },
			{ icon: 'quote', title: 'Is it worth repairing?', text: 'Tell us the device and the problem and we will give you a straight answer.' },
		],
		send: ['The device, make and model', 'What it is doing, in your own words', 'When it started and anything that changed before', 'Photos or a short video if the problem is visible'],
		faq: [
			{ q: 'What should I tell you?', a: 'Everything you have noticed: what happens, when, and what you have already tried. The more detail, the better.' },
			{ q: 'Will you tell me if it is not worth fixing?', a: 'Yes. We will tell you what we can do and what we cannot.' },
		],
		seoDescription: 'Not sure what is wrong with your phone or laptop? Describe the symptoms and FixCore Tech in Trinidad & Tobago will help you work it out.',
	},
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const quoteHref = (s: Pick<Service, 'device' | 'problem'>) => {
	const p = new URLSearchParams();
	if (s.device) p.set('device', s.device);
	if (s.problem) p.set('problem', s.problem);
	const q = p.toString();
	return `/${q ? `?${q}` : ''}#quote`;
};
