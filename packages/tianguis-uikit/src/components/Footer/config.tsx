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
      /*   {
        label: "Blog",
        href: "https://pancakeswap.medium.com/",
      }, */
      {
        label: "Community",
        href: "https://t.me/tianguisfinance",
      },
      /*   {
        label: "CAKE",
        href: "https://docs.tianguis.finance/tokenomics/cake",
      }, */
      /*  {
        label: "—",
      }, */
      /*  {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      }, */
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
        label: "English",
        href: "https://t.me/pancakeswap",
      },
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
  /*  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/pancakeswap",
  }, */
  /* {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/pancakeswap_official",
  }, */
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
