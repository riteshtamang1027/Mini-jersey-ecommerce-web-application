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
    <main className=" text-muted-text w-max  flex flex-col items-center gap-1">
      <section className="flex items-center gap-2 ">
        {media.map((item, i) => (
          <div className="flex flex-col items-center gap-1 w-max group">
            <div
              key={i}
              className="p-1.5 border border-gray-100 rounded-full w-max bg-gray-100 cursor-pointer"
            >
              <item.icon className="w-4 h-4 " />
            </div>
            <span className="opacity-0 group-hover:opacity-100 text-xs font-semibold">
              {item.name}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
