import { CONTACT } from "@/data/site-content";

/** Opens Gmail compose in the browser instead of the system mail client. */
export function gmailComposeUrl(
  to: string = CONTACT.email,
  subject?: string,
  body?: string,
): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
  });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}
