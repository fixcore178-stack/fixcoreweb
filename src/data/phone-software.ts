// Phone Software & Unlocking Services: everything the new section shows.
//
// PRICES AND TIMES: edit the `softwarePricing` block below. Nothing is invented here.
// Leave `from` empty and the card shows "Quote on request". Leave `time` empty and the
// card shows "Confirmed after assessment". Fill them in and the cards, the booking form,
// the Pricing page and the search-engine data all update on the next build.
//
//   'frp-removal': { from: 'TT$250', time: 'Same day' },
import type { IconName } from './icons';

export type SoftwarePrice = {
	/** Starting price, written as you want it shown, e.g. 'TT$250'. Empty = "Quote on request". */
	from?: string;
	/** Estimated completion time, e.g. 'Same day' or '1 to 2 days'. Empty = "Confirmed after assessment". */
	time?: string;
};

export const softwarePricing: Record<string, SoftwarePrice> = {
	'frp-removal': { from: '', time: '' },
	'android-software-repair': { from: '', time: '' },
	'firmware-flashing': { from: '', time: '' },
	'bootloop-repair': { from: '', time: '' },
	'stuck-on-logo': { from: '', time: '' },
	'android-os-troubleshooting': { from: '', time: '' },
	'samsung-software': { from: '', time: '' },
	'xiaomi-software': { from: '', time: '' },
	'motorola-software': { from: '', time: '' },
	'other-android-brands': { from: '', time: '' },
	'network-unlocking': { from: '', time: '' },
	'device-diagnostics': { from: '', time: '' },
};

export const PRICE_FALLBACK = 'Quote on request';
export const TIME_FALLBACK = 'Confirmed after assessment';

export type SoftwareService = {
	id: string;
	name: string;
	icon: IconName;
	description: string;
	brands: string;
	/** Shows the IMEI field in the booking form (only where it is actually needed). */
	needsImei?: boolean;
	/** Adds a "proof of ownership" tag to the card. */
	needsOwnership?: boolean;
};

export const softwareServices: SoftwareService[] = [
	{
		id: 'frp-removal',
		name: 'FRP Lock Removal',
		icon: 'lock',
		description: 'Stuck on Google account verification after a reset? We remove FRP on supported devices once ownership is shown.',
		brands: 'Supported Samsung, Xiaomi, Motorola and other Android models',
		needsOwnership: true,
	},
	{
		id: 'android-software-repair',
		name: 'Android Software Repair',
		icon: 'wrench',
		description: 'Crashing apps, freezing, failed updates and other software faults that a normal restart or reset does not fix.',
		brands: 'Android phones',
	},
	{
		id: 'firmware-flashing',
		name: 'Firmware Flashing & Reinstallation',
		icon: 'zap',
		description: 'A clean install of the correct firmware for your model. Flashing can erase data, so we explain the risk first.',
		brands: 'Supported Android models',
	},
	{
		id: 'bootloop-repair',
		name: 'Bootloop Repair',
		icon: 'power',
		description: 'Phone restarts again and again and never reaches the home screen.',
		brands: 'Android phones',
	},
	{
		id: 'stuck-on-logo',
		name: 'Stuck on Logo Repair',
		icon: 'phone',
		description: 'Frozen on the brand logo or boot screen after an update, reset or failed install.',
		brands: 'Android phones',
	},
	{
		id: 'android-os-troubleshooting',
		name: 'Android OS Troubleshooting',
		icon: 'help',
		description: 'Battery drain, overheating, lag, signal or update errors. We work out whether it is software and what fixes it.',
		brands: 'Android phones',
	},
	{
		id: 'samsung-software',
		name: 'Samsung Software Servicing',
		icon: 'phone',
		description: 'Firmware, update and boot-problem servicing for supported Samsung Galaxy models.',
		brands: 'Samsung',
	},
	{
		id: 'xiaomi-software',
		name: 'Xiaomi Software Servicing',
		icon: 'phone',
		description: 'Software and firmware servicing for supported Xiaomi models.',
		brands: 'Xiaomi',
	},
	{
		id: 'motorola-software',
		name: 'Motorola Software Servicing',
		icon: 'phone',
		description: 'Software and firmware servicing for supported Motorola models.',
		brands: 'Motorola',
	},
	{
		id: 'other-android-brands',
		name: 'Other Supported Android Brands',
		icon: 'other',
		description: 'Another Android brand? Send the exact model and we will confirm whether we can service it.',
		brands: 'Other supported Android brands',
	},
	{
		id: 'network-unlocking',
		name: 'Network Unlocking',
		icon: 'unlock',
		description: 'Unlock eligible phones for use on other networks. Depends on the device, the network and authorisation.',
		brands: 'Eligible devices and networks',
		needsImei: true,
		needsOwnership: true,
	},
	{
		id: 'device-diagnostics',
		name: 'Device Diagnostics',
		icon: 'diagnostics',
		description: 'A proper assessment of what is wrong with your phone before you commit to a fix.',
		brands: 'Phones, all brands',
	},
];

/** Service with its configured price and time resolved (used by cards, form and structured data). */
export const resolved = softwareServices.map((s) => {
	const p = softwarePricing[s.id] ?? {};
	const from = (p.from ?? '').trim();
	const time = (p.time ?? '').trim();
	return {
		...s,
		from,
		time,
		priceLabel: from ? `From ${from}` : PRICE_FALLBACK,
		timeLabel: time || TIME_FALLBACK,
	};
});

export type ResolvedSoftwareService = (typeof resolved)[number];

// Manufacturer options for the booking form.
export const manufacturers = [
	{ value: 'Samsung', label: 'Samsung' },
	{ value: 'Xiaomi', label: 'Xiaomi (Redmi, POCO)' },
	{ value: 'Motorola', label: 'Motorola' },
	{ value: 'other', label: 'Other brand (tell us which)' },
];

export const DISCLAIMER =
	'All software servicing is subject to device compatibility and technical assessment. Customers must demonstrate ownership or provide authorization to service the device. Certain security restrictions cannot be removed. FixCore Tech does not provide unauthorized access to devices, accounts or personal information.';

export const PAGE_PATH = '/services/phone-software-unlocking';

// Questions asked before booking. These double as the FAQ structured data, so the answers on the page
// and in search results are always identical. Keep them short, true and free of promises.
export const softwareFaqs = [
	{
		q: 'Do you offer phone unlocking in Trinidad?',
		a: 'Yes, network unlocking for eligible devices and networks. Whether a phone can be unlocked depends on the device, the network and whether unlocking is authorised, so send us the exact model and we will tell you honestly if we can help.',
	},
	{
		q: 'Can you do FRP removal in Trinidad?',
		a: 'On supported devices, yes, once you show the phone is yours or that you have the owner’s authorisation, such as a receipt, the box or account details. Certain security restrictions cannot be removed, and we do not provide unauthorised access to devices or accounts.',
	},
	{
		q: 'Do you do Samsung software repair in Trinidad?',
		a: 'Yes, for supported Samsung Galaxy models. That covers firmware and update problems, boot problems and software faults. Send the exact model number and what the phone is doing and we will confirm.',
	},
	{
		q: 'Do you do Android firmware flashing in Trinidad?',
		a: 'Yes, for supported models. Flashing or reinstalling firmware can erase the phone, so we explain the risk before we start. Back up what you can first. Data recovery is offered where possible.',
	},
	{
		q: 'Can you fix an Android bootloop in Trinidad?',
		a: 'Often, yes. A phone that restarts over and over or sticks on the logo is usually a software fault, but it can also be hardware. We assess it first and quote before any work begins.',
	},
	{
		q: 'How long does phone software repair take?',
		a: 'It depends on the model and the fault. Each service shows an estimated time where one is set, and we confirm it once we have assessed your phone.',
	},
	{
		q: 'What should I bring when I drop off my phone?',
		a: 'The phone, its charger if you have it, and proof of ownership such as a receipt, the box or account details. Message us first so we can confirm the service and arrange a time.',
	},
];
