import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowUpRight,
  EyeIcon,
  Shapes,
  Telescope,
  UsersIcon,
} from "lucide-react";
import StatsCard from "@/components/landing-page/stats-card";

const LiveBadge = () => {
  return (
    <Badge variant={"outline"} className={`p-3 mb-8 text-sm backdrop-blur-sm`}>
      <span className={`relative flex gap-2 h-2 w-2`}>
        <span
          className={`animate-ping absolute inline-flex 
            h-full w-full rounded-full bg-primary opacity-75`}
        ></span>
        <span
          className={`animate-ping relative inline-flex 
            h-2 w-2 rounded-full bg-primary opacity-75`}
        ></span>
      </span>
      <span className={`text-muted-foreground`}>
        Join thousands of developers sharing their work
      </span>
    </Badge>
  );
};

const statsData = [
  { icon: ArrowUpRight, value: "7.5K+", lable: "Projects Shared" },
  {
    icon: UsersIcon,
    value: "10K+",
    lable: "Active Developers",
    hasBorder: true,
  },
  { icon: EyeIcon, value: "50K+", lable: "Monthly Visitors" },
];

export default function HeroSection() {
  return (
    <section className={`relative overflow-hidden`}>
      <div className={"wrapper"}>
        <div
          className={`flex flex-col items-center justify-center
            py-10 text-center`}
        >
          <LiveBadge />
          <h1
            className={`text-4xl md:text-5xl lg:text-7xl font-bold
            tracking-tight max-w-5xl mb-6`}
          >
            Share What You've Built, Discover What's Launching
          </h1>
          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl
            leading-relaxed mb-10`}
          >
            A community platform for developers to showcase their apps, AI
            tools, SaaS products and creative projects. Authentic lauches, real
            builders, genuine feedback.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 mb-12`}>
            <Button asChild size="lg" className={`text-base px-8`}>
              <Link href="/submit">
                <Shapes className="size-5" />
                Share Your Project
              </Link>
            </Button>
            <Button
              variant={"secondary"}
              asChild
              size="lg"
              className={`text-base px-8`}
            >
              <Link href="/explore">
                Explore Projects
                <Telescope className="size-5" />
              </Link>
            </Button>
          </div>
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full`}
          >
            {statsData.map((stat) => (
              <StatsCard key={stat.lable} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
