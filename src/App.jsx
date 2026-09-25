import Category from "./features/category/Category";
import FeatureProduct from "./features/products/FeatureProduct";
import Hero from "./features/home/Hero";
import RetroVault from "./features/home/RetroVault";
import NewProductCard from "./features/products/NewProductCard";
import NewsLetter from "./features/home/NewsLetter";
import CustomLabBanner from "./features/home/CustomLabBanner";

export default function App() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Category />
      <FeatureProduct />
      <RetroVault />
      <NewProductCard />
      <CustomLabBanner/>
      <NewsLetter />
    </div>
  );
}
