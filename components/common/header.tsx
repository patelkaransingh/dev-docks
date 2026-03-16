import Link from "next/link";
import DevDocksLogo from "@/public/dev-docks.svg";
import Image from "next/image";
import { CompassIcon, FolderUp, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";
import Loading from "@/components/common/loading";

export default function Header() {
  const Logo = () => {
    return (
      <Link href="/" className="flex items-center gap-2 group">
        <Image src={DevDocksLogo} alt="" className="size-6" />
        <span className="text-2xl font-bold text-primary">Dev Docks</span>
      </Link>
    );
  };

  return (
    <header
      className="sticky top-0 z-50 border-b bg-background/95 
      backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <div className="wrapper px-12">
        <div className="flex items-center h-16 justify-between">
          <Logo />

          <nav className="flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium 
              text-muted-foreground hover:text-foreground transition-colors 
              hover:bg-muted/50"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/explore"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium 
              text-muted-foreground hover:text-foreground transition-colors 
              hover:bg-muted/50"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Suspense fallback={<Loading message="Loading auth..." />}>
              <Show when="signed-out">
                <SignInButton>
                  <Button variant="ghost" className="hover:bg-secondary">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button>Sign Up</Button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <UserButton />

                <Button variant="secondary" asChild>
                  <Link href="/submit">
                    <FolderUp className="size-4" />
                    Submit Project
                  </Link>
                </Button>
              </Show>
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
