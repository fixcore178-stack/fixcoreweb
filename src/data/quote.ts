// Single source of truth for the quote wizard options. Used by the page markup,
// the wizard script and the service pages (for ?device= / ?problem= prefill).
import type { IconName } from './icons';

export type DeviceOption = { value: string; label: string; icon: IconName; hint: string };
// `devices` limits a problem to some devices (by device value). Leave it out to show it for every device.
export type ProblemOption = { value: string; label: string; phrase: string; icon: IconName; hint: string; devices?: string[] };

export const devices: DeviceOption[] = [
	{ value: 'phone', label: 'Phone', icon: 'phone', hint: 'iPhone, Samsung and more' },
	{ value: 'laptop', label: 'Laptop', icon: 'laptop', hint: 'Windows, Mac, Chromebook' },
	{ value: 'computer', label: 'Desktop or PC', icon: 'desktop', hint: 'Towers, desktops and custom PCs' },
	{ value: 'other', label: 'Something else', icon: 'other', hint: 'Tell us what it is' },
];

const NOT_PC = ['phone', 'laptop', 'other'];

export const problems: ProblemOption[] = [
	{ value: 'screen', label: 'Cracked screen', phrase: 'Cracked or damaged screen', icon: 'screen', hint: 'Glass, lines, dead spots', devices: NOT_PC },
	{ value: 'battery', label: 'Battery', phrase: 'Battery problem (drains fast or shuts off)', icon: 'battery', hint: 'Drains fast or swollen', devices: NOT_PC },
	{ value: 'charging', label: "Won't charge", phrase: "Won't charge / charging port", icon: 'charging', hint: 'Port or cable issues', devices: NOT_PC },
	{ value: 'display', label: 'No picture', phrase: 'No picture on the screen', icon: 'monitor', hint: 'Powers on but the screen stays black', devices: ['computer'] },
	{ value: 'heat', label: 'Overheating', phrase: 'Overheating, loud fans or random shutdowns', icon: 'heat', hint: 'Hot, loud fans, shuts itself off', devices: ['computer'] },
	{ value: 'software', label: 'Windows or virus', phrase: 'Windows, virus or software problem', icon: 'shield', hint: 'Reinstall, drivers, malware', devices: ['computer'] },
	{ value: 'water', label: 'Water damage', phrase: 'Water damage', icon: 'water', hint: 'Dropped or spilled on' },
	{ value: 'power', label: "Won't turn on", phrase: "Won't turn on", icon: 'power', hint: 'No power or stuck on logo' },
	{ value: 'slow', label: 'Slow or freezing', phrase: 'Slow, freezing or crashing', icon: 'slow', hint: 'Lag, crashes, storage' },
	{ value: 'unsure', label: 'Not sure', phrase: "Not sure what's wrong", icon: 'help', hint: "We'll help work it out" },
];

export const deviceByValue = (v: string | null | undefined) => devices.find((d) => d.value === v);
export const problemByValue = (v: string | null | undefined) => problems.find((p) => p.value === v);
export const problemsFor = (device: string | null | undefined) => problems.filter((p) => !p.devices || (!!device && p.devices.includes(device)));
