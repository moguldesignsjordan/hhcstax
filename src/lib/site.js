export const SUPABASE_URL = "https://pxoifhytdjffrfdhqrdb.supabase.co";
export const SUPABASE_KEY = "sb_publishable_yMdgnAlo3q35e1YWHWyiQA_E0e9b5u3";
export const SUBMIT_URL = `${SUPABASE_URL}/functions/v1/site-submit`;
export const ADMIN_LOGIN_URL = "https://app.hhcstax.com/admin-login";
export const CONTACT = {
  email: "LevelUp@HHCSTAX.COM",
  emailHref: "mailto:levelup@hhcstax.com",
  phoneDisplay: "844.600.HHCS (4427)",
  phoneHref: "tel:+18446004427",
  location: "Westland, Michigan",
  legalName: "HutHut Consulting Services LLC",
};
export async function submitForm(e, t) {
  let n;
  try {
    n = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
      },
      body: JSON.stringify({
        kind: e,
        ...t,
      }),
    });
  } catch {
    throw new Error(
      "We could not reach our server. Check your connection and try again.",
    );
  }
  let r = {};
  try {
    r = await n.json();
  } catch {}
  if (!n.ok || !r.ok)
    throw new Error(
      r.error || "Something went wrong. Please try again, or email us.",
    );
  return r;
}
export const money = (e) => "$" + e.toLocaleString("en-US");
