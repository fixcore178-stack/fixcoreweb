// Global site data. Update contact details here and they change everywhere.

export const SITE_TITLE = "FixCore";
export const SITE_TAGLINE = "Phone and laptop repairs";
export const SITE_DESCRIPTION =
	"FixCore repairs phones, laptops and other tech in Trinidad & Tobago. Tell us what's broken on WhatsApp and we'll send you a quote.";

// NOTE: 7200146 is assumed to be a Trinidad & Tobago number (+1 868).
// Change WHATSAPP_NUMBER if that's wrong. Use digits only, with country code.
export const WHATSAPP_NUMBER = "18687200146";
export const WHATSAPP_DISPLAY = "720-0146";
export const WHATSAPP_MESSAGE = "Hi FixCore, I need help with a repair.";
export const whatsappUrl = (message: string) =>
	`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
export const WHATSAPP_URL = whatsappUrl(WHATSAPP_MESSAGE);

export const INSTAGRAM_HANDLE = "@fixcore.tt";
export const INSTAGRAM_URL = "https://www.instagram.com/fixcore.tt";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590167055988";
