export const NAME = "Anthony Ingle";
export const DESCRIPTION = "Landscape and portrait photography by Anthony Ingle.";
export const TWITTER_CREATOR = "@ingleant";

export type PageKey = "places" | "people" | "about";

export const LINKS: { key: PageKey; text: string; href: string }[] = [
  { key: "places", text: "Places", href: "/places" },
  { key: "people", text: "People", href: "/people" },
  { key: "about", text: "About", href: "/about" },
];

export const INSTAGRAM = "https://www.instagram.com/ant.ing/";
export const EMAIL = "anthony@anthonyinglephotos.com";
