import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { HeadphonesIcon } from "lucide-react";

export function MainReviews() {
    return (
        <div className="container grid gap-6 lg:gap-12 md:grid-cols-[1fr_300px] pb-8">
            <div className="space-y-8">
                <section>
                    <Card className="overflow-hidden">
                        <div className="aspect-video relative">
                            <img
                                src="/placeholder.svg?height=250&width=500"
                                alt="Featured Album Cover"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-2xl font-bold text-white mb-2">Album Title</h3>
                                <p className="text-white/90">Artist Name</p>
                            </div>
                        </div>
                        <CardContent className="grid gap-4 p-6">
                            <p className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <div className="flex items-center gap-4">
                                <Button>
                                    <HeadphonesIcon className="mr-2 h-4 w-4" />
                                    Listen Now
                                </Button>
                                <Button variant="outline">Read Review</Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Card key={i}>
                                <CardHeader className="pb-4">
                                    <img
                                        src={`/placeholder.svg?height=150&width=150&text=Album+${i}`}
                                        alt={`Album ${i}`}
                                        className="w-full aspect-square object-cover rounded-md mb-2"
                                    />
                                    <CardTitle className="text-lg">Album Title {i}</CardTitle>
                                    <CardDescription>Artist Name</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        This album is a masterpiece of modern music, blending genres and pushing boundaries...
                                    </p>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                                    <span>★★★★☆</span>
                                    <span>by User{i}</span>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
            <aside className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <ScrollArea className="h-[300px] px-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center gap-4 py-4">
                                    <Avatar>
                                        <AvatarFallback>U{i}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">User{i}</p>
                                        <p className="text-sm text-muted-foreground">
                                            Reviewed "Album Title" by Artist Name
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Popular Tags</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {["Rock", "Pop", "Hip-Hop", "Jazz", "Electronic", "Classical", "R&B", "Country"].map((tag) => (
                                <Button key={tag} variant="secondary" size="sm">
                                    {tag}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </aside>
        </div>
    )
}