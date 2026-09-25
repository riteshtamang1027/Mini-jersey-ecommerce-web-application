import { Zap } from "lucide-react";
import image from '../../assets/customLabImage/customLabImage.png';

export default function CustomLabBanner() {
  return (
    <main className="px-16">
      <section className="flex items-center justify-between gap-12 w-full overflow-hidden h-92 font-archivo">
        {/* image */}
        <div className="w-1/2 ">
          <img src={image} alt="" />
        </div>

        {/* text or description */}
        <div className="flex flex-col  gap-6 w-1/2">
          <p className="text-sm text-secondary">KITHAUS CUSTOM LAB</p>
          <h3 className="text-4xl font-extrabold scale-y-120">DESIGN YOUR OWN <span className="text-secondary">LEGACY</span></h3>
          <p className="text-sm text-muted-text">
            Add your name, select your favorite historical number font, choose
            team crest placements, and pick from our elite material options.
            Individually manufactured to tournament standards.
          </p>

          <button className="text-xs font-semibold border bg-secondary rounded-lg px-4 py-2 text-white flex items-center gap-2 w-max cursor-pointer">
            <span>ENTER CREATOR STUDIO</span> <Zap size={12} />
          </button>
        </div>
      </section>
    </main>
  );
}
