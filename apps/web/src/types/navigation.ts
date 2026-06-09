type NavigationLink = {
  label: string;
  href: string;
  type: "link";
};

type NavigationDropdown = {
  label: string;
  type: "dropdown";
  items: {
    label: string;
    href: string;
  }[];
};

type NavigationItem = NavigationLink | NavigationDropdown;
