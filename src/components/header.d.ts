export interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

interface ActionLink extends Link {
  type?: string;
}

export interface MenuLink extends Link {
  links?: Array<Link>;
}
