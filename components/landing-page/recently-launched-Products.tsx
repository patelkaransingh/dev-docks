import EmptyState from "@/components/common/empty-state";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import { CalendarClock, RocketIcon } from "lucide-react";

export default function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts = [];

  return (
    <div className="py-20">
      <div className="wrapper">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />
        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={CalendarClock}
            message="No proudcts launched in last week. Check back soon for new launches!"
          />
        )}
      </div>
    </div>
  );
}
