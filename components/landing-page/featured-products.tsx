import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Spotlight } from "lucide-react";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "NoteFlow",
    description:
      "A minimal note-taking SaaS designed for developers to capture ideas and organize knowledge quickly.",
    tags: ["SaaS", "Notes", "Productivity"],
    votes: 245,
    isFeatured: true,
  },
  {
    id: 2,
    name: "LaunchDeck",
    description:
      "Create and share beautiful product launch pages without writing code.",
    tags: ["SaaS", "Marketing", "NoCode"],
    votes: 387,
    isFeatured: false,
  },
  {
    id: 3,
    name: "DevTrack",
    description:
      "A lightweight issue tracker built for indie developers and small teams.",
    tags: ["Tracker", "Project", "SaaS"],
    votes: 198,
    isFeatured: true,
  },
  {
    id: 4,
    name: "UIBlocks",
    description:
      "A library of ready-to-use UI components for faster frontend development.",
    tags: ["UI", "Components", "Developer"],
    votes: 421,
    isFeatured: false,
  },
];

export default function FeaturedProducts() {
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
