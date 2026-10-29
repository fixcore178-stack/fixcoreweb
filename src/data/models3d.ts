// The real 3D models used across the site. All four are CC BY 4.0 from Sketchfab, so the credit text
// below is shown under every viewer and in the footer. Files are versioned (-v1) because
// public/_headers caches /models/* for a year; rename to -v2 if a model is ever re-exported.
export type ModelKey = 'pc' | 'phone' | 'laptop' | 'wrench';

export type Model3D = {
	src: string;
	poster: string;
	orbit: string; // starting camera angle
	ratio: string; // CSS aspect-ratio of the viewer frame
	size: string; // shown on the Save-Data tap-to-load button
	label: string; // alt text for the viewer and poster
	title: string; // title of the original work
	url: string;
	author: string;
	authorUrl: string;
	changes: string; // CC BY asks us to say what we changed
	noun?: string; // "your PC will differ"
};

export const models: Record<ModelKey, Model3D> = {
	pc: {
		src: '/models/gaming-pc-v1.glb',
		poster: '/models/gaming-pc-poster-v1.webp',
		orbit: '-38deg 74deg auto',
		ratio: '1',
		size: '3 MB',
		label: 'Interactive 3D model of a gaming PC with a glass side panel showing the graphics card, cooler, memory and power supply. Drag to rotate.',
		title: 'Custom Gaming PC',
		url: 'https://sketchfab.com/3d-models/custom-gaming-pc-1a24273417534f69afa0f7c62b643ffc',
		author: 'Yolala1232',
		authorUrl: 'https://sketchfab.com/Yolala1232',
		changes: 'Compressed for web, floor removed.',
		noun: 'PC',
	},
	phone: {
		src: '/models/samsung-s26-v1.glb',
		poster: '/models/samsung-poster-v1.webp',
		orbit: '200deg 76deg auto',
		ratio: '4 / 5',
		size: '30 KB',
		label: 'Interactive 3D model of a Samsung Galaxy S26 phone. Drag to rotate.',
		title: 'Samsung Galaxy S26 Black [ LOW-POLY ]',
		url: 'https://sketchfab.com/3d-models/samsung-galaxy-s26-black-low-poly-dee00a72ae6b49daafb93c20bc04991f',
		author: 'darky.vip21',
		authorUrl: 'https://sketchfab.com/darky.vip21',
		changes: 'Compressed for web.',
		noun: 'phone',
	},
	laptop: {
		src: '/models/lenovo-v1.glb',
		poster: '/models/lenovo-poster-v1.webp',
		orbit: '22deg 70deg auto',
		ratio: '5 / 4',
		size: '1 MB',
		label: 'Interactive 3D model of a Lenovo laptop with its lid open. Drag to rotate.',
		title: 'lenovo',
		url: 'https://sketchfab.com/3d-models/lenovo-565aea3028e54b4883e89577c971a43c',
		author: 'elyas_baloch',
		authorUrl: 'https://sketchfab.com/elyas_baloch',
		changes: 'Compressed for web, body shade and screen wallpaper changed.',
		noun: 'laptop',
	},
	wrench: {
		src: '/models/wrench-v1.glb',
		poster: '/models/wrench-poster-v1.webp',
		orbit: '8deg 82deg auto',
		ratio: '1',
		size: '200 KB',
		label: 'Interactive 3D model of an adjustable wrench. Drag to rotate.',
		title: 'Adjustable Spanner/Wrench',
		url: 'https://sketchfab.com/3d-models/adjustable-spannerwrench-e13f98a9d7364510a65042d4c42e7a9c',
		author: 'CGWorker',
		authorUrl: 'https://sketchfab.com/CGWorker',
		changes: 'Compressed for web, steel finish added and turned to face the camera.',
	},
};

export const LICENSE_URL = 'http://creativecommons.org/licenses/by/4.0/';
