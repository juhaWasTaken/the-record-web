import { AlbumIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <AlbumIcon className="h-6 w-6" />
                    <p className="text-center text-sm leading-loose md:text-left">
                        Built by the music lovers. The Record © 2023.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="/about" className="text-sm">About</Link>
                    <Link href="/privacy" className="text-sm">Privacy</Link>
                    <Link href="/terms" className="text-sm">Terms</Link>
                </div>
            </div>
        </footer>
    )
}