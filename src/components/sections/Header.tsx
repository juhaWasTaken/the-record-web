import { AlbumIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Header() {
    return (
        <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center max-w-7xl mx-auto">
                <Link href="/" className="flex items-center space-x-2">
                    <AlbumIcon className="h-6 w-6" />
                    <span className="font-bold">The Record</span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium ml-6">
                    <Link href="/">Home</Link>
                    <Link href="/reviews">Reviews</Link>
                    <Link href="/lists">Lists</Link>
                    <Link href="/discover">Discover</Link>
                </nav>
                <div className="flex items-center space-x-4 ml-auto">
                    <form className="relative">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search albums..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </form>
                    {/* <Button variant="ghost" size="icon">
                    <UserIcon className="h-5 w-5" />
                    <span className="sr-only">User account</span>
                    </Button> */}
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </header>
    )
}