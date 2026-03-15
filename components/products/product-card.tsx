import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, StarIcon } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const hasVoted = false;

  return (
    <Link href={`/products/${product.id}`}>
      <Card
        className="group card-hover border-solid border-gray-400 bg-background/82
        hover:bg-background min-h-45"
      >
        <CardHeader className="flex-1">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                {product.isFeatured && (
                  <Badge>
                    <StarIcon className="size-3 fill-current" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>

            {/* voting buttons */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  "h-8 w-8 text-primary ",
                  hasVoted
                    ? "bg-primary/5 text-primary hover:bg-primary/10"
                    : "hover:bg-primary/10 hover:text-primary",
                )}
              >
                <ChevronUp className="size-5" />
              </Button>
              <span className="text-sm font-semibold transition-colors text-foreground">
                10
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  "h-8 w-8 hover:bg-primary/10 ",
                  hasVoted
                    ? "hover:text-destructive"
                    : "opacity-50 cursor-not-allowed",
                )}
              >
                <ChevronDown className="size-5" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardFooter>
          <div className="flex item-center gap-2">
            {product.tags.map((tag) => (
              <Badge key={tag} variant={"outline"}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
