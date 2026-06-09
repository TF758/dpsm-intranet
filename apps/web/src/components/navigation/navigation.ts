// src/config/navigation.ts

export const navigation = [
  {
    label: "Home",
    href: "/",
    type: "link",
  },
  {
    label: "Staff",
    href: "/staff",
    type: "link",
  },
  {
    label: "Resources",
    href: "/resources",
    type: "link",
  },
  {
    label: "News",
    href: "/news",
    type: "link",
  },
  {
    label: "Contact",
    href: "/contact",
    type: "link",
  },
  {
    label: "Departments",
    type: "dropdown",
    items: [
      {
        label: "DPSM",
        href: "/departments/dpsm",
      },
      {
        label: "HRM",
        href: "/departments/hrm",
      },
      {
        label: "FMU",
        href: "/departments/fmu",
      },
      {
        label: "ODD",
        href: "/departments/odd",
      },
    ],
  },
];
