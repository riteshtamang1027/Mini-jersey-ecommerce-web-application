import Category from "./features/category/Category";
import FeatureProduct from "./features/products/FeatureProduct";
import Hero from "./features/home/Hero";
import RetroVault from "./features/home/RetroVault";
import NewProductCard from "./features/products/NewProductCard";


export default function App() {
  return (
    <div>
     
      <Hero />
      <Category/>
      <FeatureProduct/>
      <RetroVault/>
      <NewProductCard/>
    
    </div>
  );
}
