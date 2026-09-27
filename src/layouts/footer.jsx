import BrandMark from "../components/BrandMark";
import SocialMedia from "../components/SocialMedia";

const footerLinks = [
  {
    title: "SHOP KITS",
    links: [
      "Club Jerseys",
      "National Teams",
      "Retro Vault",
      "Customizer Lab",
      "Limited Drops",
      "Accessories",
    ],
  },
  {
    title: "CUSTOMER CARE",
    links: [
      "Delivery & Returns",
      "Size Advisor",
      "Track Your Order",
      "Vapor Knit Care",
      "Contact Us",
      "FAQ",
    ],
  },
  {
    title: "KITHAUS LAB",
    links: [
      "Our Story",
      "Terrace Culture Journal",
      "Sustainability Protocol",
      "Partners & Teams",
      "Affiliates",
      "Careers",
    ],
  },
];

export default function Footer() {
  return (
    <div className="mt-12 border-t border-gray-200 bg-gray-50 font-archivo">
      <footer className="mx-auto max-w-[1440px] px-4 pt-10 sm:px-8 sm:pt-12 lg:px-16">
        <section className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 flex w-full flex-col items-start gap-4 lg:col-span-1">
            <BrandMark />

            <p className="max-w-md text-sm leading-6 text-muted-text lg:text-[13px]">
              Premium sports apparel and curated jersey archive for true
              collectors. Wear the heritage, feel the competition. Inspired by
              global terrace culture.
            </p>

            <SocialMedia />
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="w-full">
              <h3 className="mb-4 text-xs font-bold leading-none tracking-wide text-secondary sm:mb-5 sm:text-sm">
                {section.title}
              </h3>

              <ul className="space-y-3 sm:space-y-3.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs leading-5 text-muted-text transition-colors duration-200 hover:text-secondary sm:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-200 py-5 text-center sm:mt-12 sm:flex-row sm:text-left">
          <p className="text-[10px] leading-5 text-muted-text sm:text-xs">
            © 2026 KITHAUS GLOBAL LTD. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] leading-5 text-muted-text sm:text-xs">
            BUILT FOR THE LOVE OF THE GAME.
          </p>
        </section>
      </footer>
    </div>
  );
}
