import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/products/products-select";
import { ArrowRight, Spotlight } from "lucide-react";
import Link from "next/link";

export default async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <section className="py-20 bg-muted">
      <div className="wrapper">
        <div className={`flex items-center justify-between mb-8`}>
          <SectionHeader
            title="Product Spotlight"
            icon={Spotlight}
            description="Top pics from our community this week"
          />
          <Button variant={"outline"} asChild>
            <Link href={"/explore"}>
              View All
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
