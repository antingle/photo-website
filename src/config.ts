import type { ActionLink, MenuLink, SocialLink } from '~/types/links';
const LINKS: MenuLink[] = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Packages', href: '/packages' },
  { text: 'Contact', href: '/contact' },
];

const ACTIONS: ActionLink[] = [{ text: 'Book', href: '/book', type: 'primary' }];

const SOCIAL: SocialLink[] = [
  {
    icon: 'mdi:facebook',
    ariaLabel: 'Facebook Page',
    href: 'https://www.facebook.com/anthonyinglephotography',
    customClasses: ['hover:text-blue-600'],
  },
  {
    icon: 'mdi:instagram',
    ariaLabel: 'Instagram Page',
    href: 'https://www.instagram.com/ant.ing/',
    customClasses: ['hover:text-fuchsia-600'],
  },
  {
    icon: 'mdi:github',
    ariaLabel: 'Github Account',
    href: 'https://www.github.com/ingleanthony/',
    customClasses: ['hover:text-gray-900'],
  },
];

const NAME = 'Anthony Ingle Photography';
export { LINKS, NAME, SOCIAL, ACTIONS };
