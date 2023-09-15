import type { Metadata } from "next";
import Link from "next/link";

const allBlogs = [
    {
        slug: "system",
        title: "System",
        publishedAt: "Sept. 2nd, 2023",
        link: "https://atlas-finance.notion.site/System-Document-df85fdc30c1d494bbb588ed786344927?pvs=4",
    },
];

export default async function BlogPage() {
    return (
        <section>
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">
                writings.
            </h1>

            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Here we'll maintain a collection of knowledge bases on
                    history, economics, business, politics & technology.
                </p>
            </div>

            {allBlogs
                .sort((a, b) => {
                    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className="flex flex-col space-y-1 mb-4"
                        href={post.link}
                    >
                        <div className="w-full flex flex-col">
                            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                                {post.title}
                            </p>
                        </div>
                    </Link>
                ))}
        </section>
    );
}
