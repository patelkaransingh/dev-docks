import Loading from "@/components/common/loading";
import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-Products";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />

      <Suspense
        fallback={
          <div className="wrapper py-12">
            <Loading message="Loading recently launched..." />
          </div>
        }
      >
        <RecentlyLaunchedProducts />
      </Suspense>
    </div>
  );
}
