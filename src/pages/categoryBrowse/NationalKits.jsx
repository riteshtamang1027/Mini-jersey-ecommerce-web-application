import ProductCatalog from "./ProductCatalog";
import { nationalProducts } from "../../data/products.js";

function NationalKits() {
  return (
    <ProductCatalog
      title="NATIONAL TEAM KITS"
      description="Shop match-ready jerseys from the world's national teams."
      products={nationalProducts}
    />
  );
}

export default NationalKits;
