// Business facts that are shown on the site only when they are filled in.
// Nothing here is invented: leave a field empty and the matching section or line
// simply does not render. Add real details here as they become available.

export const business = {
	serviceArea: 'Trinidad & Tobago',

	// Opening hours, for example: [{ days: 'Mon to Fri', time: '9:00 am to 5:00 pm' }]
	hours: [] as { days: string; time: string }[],

	// A real warranty or guarantee statement, for example: '30-day warranty on repairs.'
	warranty: '' as string,
};

// Real photos of completed repairs. Put images in /public/gallery and list them here.
// Example: { src: '/gallery/cracked-screen.jpg', alt: 'Cracked phone screen after repair', caption: 'Screen replacement' }
export const gallery: { src: string; alt: string; caption?: string; width?: number; height?: number }[] = [];

// Real customer reviews only. Example: { quote: 'Quick and honest.', name: 'Name', detail: 'Phone repair' }
export const testimonials: { quote: string; name: string; detail?: string }[] = [];

// People behind the business. Example: { name: 'Name', role: 'Technician', bio: 'Short bio.' }
export const team: { name: string; role: string; bio?: string }[] = [];
