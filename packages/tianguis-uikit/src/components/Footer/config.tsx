import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://t.me/tianguisfinance",
      },
      {
        label: "Community",
        href: "https://t.me/tianguisfinance",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://t.me/tianguisfinance",
      },
      {
        label: "Troubleshooting",
        href: "https://t.me/tianguisfinance",
      },
      {
        label: "Guides",
        href: "https://t.me/tianguisfinance",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/tianguis-finance",
      },
      {
        label: "Documentation",
        href: "https://t.me/tianguisfinance",
      },
      {
        label: "Bug Bounty",
        href: "https://t.me/tianguisfinance",
      },
      {
        label: "Audits",
        href: "https://t.me/tianguisfinance",
      },
      {
        label: "Careers",
        href: "https://t.me/tianguisfinance",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/tianguis_fi",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "Español",
        href: "https://t.me/tianguisfinance",
      },
      {
        label: "Announcements",
        href: "https://t.me/tianguisfinance",
      },
    ],
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/tianguis-finance/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `es${i}`,
  language: `Español${i}`,
  locale: `Locale${i}`,
}));
