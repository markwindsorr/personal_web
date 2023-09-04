import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
    const blogs = allBlogs.map((post) => ({
        url: `https://markwindsor.ca/blog/${post.slug}`,
        lastModified: post.publishedAt,
    }));

    const routes = ["", "/blog", "/uses"].map((route) => ({
        url: `https://markwindsor.ca${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes, ...blogs];
}
