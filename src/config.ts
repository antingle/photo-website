import type { ActionLink, MenuLink, SocialLink } from "~/types/links";
const LINKS: MenuLink[] = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const ACTIONS: ActionLink[] = [{ text: "Book", href: "/book", type: "primary" }];

const SOCIAL: SocialLink[] = [
  {
    icon: "mdi:facebook",
    ariaLabel: "Facebook Page",
    href: "https://www.facebook.com/anthonyinglephotography",
    customClasses: ["hover:text-blue-600"],
  },
  {
    icon: "mdi:instagram",
    ariaLabel: "Instagram Page",
    href: "https://www.instagram.com/ant.ing/",
    customClasses: ["hover:text-fuchsia-600"],
  },
  {
    icon: "mdi:github",
    ariaLabel: "Github Account",
    href: "https://www.github.com/ingleanthony/",
    customClasses: ["hover:text-gray-900"],
  },
];

const CONTACT: SocialLink[] = [
  {
    icon: "mdi:facebook",
    ariaLabel: "Facebook Page",
    href: "https://www.facebook.com/anthonyinglephotography",
    customClasses: ["hover:text-blue-600"],
  },
  {
    icon: "mdi:instagram",
    ariaLabel: "Instagram Page",
    href: "https://www.instagram.com/ant.ing/",
    customClasses: ["hover:text-fuchsia-600"],
  },
  {
    icon: "ic:baseline-phone",
    ariaLabel: "Phone Number",
    href: "tel:7273310866",
    customClasses: ["hover:text-gray-600"],
  },
  {
    icon: "ic:round-mail-outline",
    ariaLabel: "Email",
    href: "mailto:anthony@anthonyinglephotos.com",
    customClasses: ["hover:text-teal-800"],
  },
];

const NAME = "Anthony Ingle Photography";
const DESCRIPTION =
  "Anthony Ingle is a photographer located in Tallahassee, Florida and the Florida State University area";

export { LINKS, NAME, DESCRIPTION, SOCIAL, ACTIONS, CONTACT };
