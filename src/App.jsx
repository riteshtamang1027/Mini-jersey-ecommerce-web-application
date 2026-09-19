import Category from "./features/home/Category";
import FeatureProduct from "./features/home/FeatureProduct";
import Hero from "./features/home/Hero";
import Header from "./layouts/header";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Category/>
      <FeatureProduct/>
    </div>
  );
}
