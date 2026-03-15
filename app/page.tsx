import FeaturedProducts from "@/components/landing-page/featured-products";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-Products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <RecentlyLaunchedProducts />
    </div>
  );
}
