// Business facts that are shown on the site only when they are filled in.
// Nothing here is invented: leave a field empty and the matching section or line
// simply does not render. Add real details here as they become available.

export const business = {
	serviceArea: 'Trinidad & Tobago',

	// Opening hours, for example: [{ days: 'Mon to Fri', time: '9:00 am to 5:00 pm' }]
	hours: [
		{ days: 'Mon to Fri', time: '5:00 pm to 10:00 pm' },
		{ days: 'Sat and Sun', time: '9:00 am to 10:00 pm' },
	] as { days: string; time: string }[],

	// A real warranty or guarantee statement, for example: '30-day warranty on repairs.'
	warranty: '7-day warranty on faulty parts we fitted. Does not cover breakage or deliberate damage.' as string,
};

// Real photos of completed repairs. Put images in /public/gallery and list them here.
// Example: { src: '/gallery/cracked-screen.jpg', alt: 'Cracked phone screen after repair', caption: 'Screen replacement' }
export const gallery: { src: string; alt: string; caption?: string; width?: number; height?: number }[] = [];

// Real customer reviews only. Example: { quote: 'Quick and honest.', name: 'Name', detail: 'Phone repair' }
export const testimonials: { quote: string; name: string; detail?: string }[] = [];

// People behind the business. Example: { name: 'Name', role: 'Technician', bio: 'Short bio.' }
export const team: { name: string; role: string; bio?: string }[] = [];

// "From" prices in TTD, from local competitor research. Final price depends on model and fault.
// Confirm with your own supplier costs before publishing changes.
export const prices: Record<string, { item: string; from: string }[]> = {
	phone: [
		{ item: 'Screen (common Android models)', from: 'TT$400' },
		{ item: 'Screen (iPhone or flagship)', from: 'TT$900' },
		{ item: 'Battery (Android)', from: 'TT$250' },
		{ item: 'Battery (iPhone)', from: 'TT$500' },
		{ item: 'Charging port', from: 'TT$250' },
	],
	laptop: [
		{ item: 'Screen', from: 'TT$700' },
		{ item: 'Battery', from: 'TT$450' },
		{ item: 'Charging port', from: 'TT$350' },
		{ item: 'Keyboard', from: 'TT$400' },
		{ item: 'Cleaning or thermal paste', from: 'TT$150' },
	],
};

export const policies = {
	deposit: 'A minimum 50% deposit is required when we need to order parts.',
	storage: 'Repaired and unclaimed devices are kept in storage for 1 year.',
	dataRecovery: 'Data recovery is offered where possible.',
	
	coverage: 'We do not travel. Drop off or collect your device at our Curepe location, 3 Alice Street, Curepe.',
	address: '3 Alice Street, Curepe',
	owner: 'Christopher Brathwaite',
	repairTime: 'Repair time depends on the problem and what needs fixing. Most jobs take a few hours.',
	payment: 'Credit and debit cards, bank transfer, or cash on collection.',
	dropOff: 'Simple repairs are often done while you wait. Jobs that take longer, or need parts, are drop-off.',
};
