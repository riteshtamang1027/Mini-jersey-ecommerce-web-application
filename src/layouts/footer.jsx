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
    <main className="font-archivo px-16 pt-8 mt-8 border-t border-gray-200">
      <footer>
        <section className="grid grid-cols-4 gap-8">
          {/* Brand */}
          <div className="w-full flex flex-col gap-4">
            <BrandMark />

            <p className="text-base text-muted-text">
              Premium sports apparel and curated jersey archive for true
              collectors. Wear the heritage, feel the competition. Inspired by
              global terrace culture.
            </p>

          {/* Social media links */}
           <SocialMedia/>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="w-full">
              <h3 className="mb-5 text-base font-bold leading-none  text-secondary">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-normal leading-none text-muted-text transition-colors duration-200 "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="flex items-center justify-center border-t border-gray-200 py-4 mt-8">
          <p className="text-xs text-muted-text">
            © 2026 KITHAUS GLOBAL LTD. ALL RIGHTS RESERVED.
          </p>
        </section>
      </footer>
    </main>
  );
}
