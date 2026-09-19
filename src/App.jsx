import Category from "./features/home/Category";
import Hero from "./features/home/Hero";
import Header from "./layouts/header";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Category/>
    </div>
  );
}
