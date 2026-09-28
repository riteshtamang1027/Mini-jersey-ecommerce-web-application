import { Zap } from "lucide-react";
import { Link } from "react-router";
import image from '../../assets/customLabImage/customLabImage.png';

export default function CustomLabBanner() {
  return (
      <section className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-6 px-4 font-archivo sm:gap-8 sm:px-8 md:grid-cols-2 lg:gap-12 lg:px-16">
        {/* image */}
        <div className="aspect-[4/3] min-w-0 overflow-hidden rounded-xl bg-surface">
          <img className="h-full w-full object-cover" src={image} alt="Custom football jersey design workspace" />
        </div>

        {/* text or description */}
        <div className="flex min-w-0 flex-col gap-4 sm:gap-6">
          <p className="text-sm text-secondary">KITHAUS CUSTOM LAB</p>
          <h3 className="text-3xl font-extrabold leading-tight sm:text-4xl">DESIGN YOUR OWN <span className="text-secondary">LEGACY</span></h3>
          <p className="text-sm leading-6 text-muted-text">
            Make a shirt your own with an optional name and number. Open a jersey
            product to add your print selection to the demo shopping bag.
          </p>

          <Link to="/clubKits" className="flex min-h-11 w-max items-center gap-2 rounded-lg border bg-secondary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-secondary/90">
            <span>BROWSE JERSEYS</span> <Zap size={12} />
          </Link>
        </div>
      </section>
  );
}
