import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const media = [
  {
    icon: FaInstagram,
    name: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    icon: FaXTwitter,
    name: "Twitter",
    href: "https://x.com/",
  },
  {
    icon: FaFacebookF,
    name: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    icon: FaYoutube,
    name: "Youtube",
    href: "https://www.youtube.com/",
  },
];

export default function SocialMedia() {
  return (
    <div className="flex w-max flex-col items-center gap-1 text-muted-text">
      <section className="flex items-center gap-2 ">
        {media.map((item) => (
          <a key={item.name} href={item.href} target="_blank" rel="noreferrer" aria-label={`Visit ${item.name}`} className="group flex w-max flex-col items-center gap-1">
            <span className="w-max rounded-full border border-border bg-surface-raised p-1.5 transition-colors group-hover:bg-secondary group-hover:text-white">
              <item.icon className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold opacity-0 group-hover:opacity-100">
              {item.name}
            </span>
          </a>
        ))}
      </section>
    </div>
  );
}
