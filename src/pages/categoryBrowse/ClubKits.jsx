import ProductCatalog from "./ProductCatalog";
import { clubProducts } from "../../data/products.js";

export default function ClubKits() {
  return (
    <ProductCatalog
      title="EUROPEAN CLUB CHAMPIONS KITS"
      description="Performance engineered jerseys from Europe's leading clubs."
      products={clubProducts}
    />
  );
}
