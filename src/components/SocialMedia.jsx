import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const media = [
  {
    icon: FaInstagram,
    name: "Instagram",
  },
  {
    icon: FaXTwitter,
    name: "Twitter",
  },
  {
    icon: FaFacebookF,
    name: "Facebook",
  },
  {
    icon: FaYoutube,
    name: "Youtube",
  },
];

export default function SocialMedia() {
  return (
    <div className="flex w-max flex-col items-center gap-1 text-muted-text">
      <section className="flex items-center gap-2 ">
        {media.map((item) => (
          <div key={item.name} className="group flex w-max flex-col items-center gap-1">
            <div
              className="w-max cursor-pointer rounded-full border border-gray-100 bg-gray-100 p-1.5"
            >
              <item.icon className="h-4 w-4" />
            </div>
            <span className="text-xs font-semibold opacity-0 group-hover:opacity-100">
              {item.name}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
