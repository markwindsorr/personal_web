function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default async function Page() {
    return (
        <section>
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">
                hey, I'm Mark👋
            </h1>
            <h3 className="font-bold text-1xl mb-8 tracking-tighter">
                Software Engineer | Design | Quant Finance
            </h3>
            <img src="/rough.png" />

            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    I love to design, build and understand systems. Most
                    specifically how humans organize.{" "}
                </p>
            </div>

            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Over the past decade, I've written content on my blog and
                    newsletter. I try to keep things simple. You'll find writing
                    about technologies I'm interested in at the time, or how I'm
                    learning and growing in my career, sharing knowledge along
                    the way.
                </p>
            </div>

            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    I invest small angel checks into early stage startups
                    building tools for developers.
                </p>
            </div>

            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    I've also worked with or advised companies like Convex,
                    Fauna, Plasmic, and more about developer marketing, DevRel,
                    and building open-source communities.
                </p>
            </div>
            <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
                <li>
                    <a
                        className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://twitter.com/leeerob"
                    >
                        <ArrowIcon />
                        <p className="h-7 ml-2">follow me</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}
