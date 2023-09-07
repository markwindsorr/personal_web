import ExtLink from "./components/ext-link";
import GitHub from "./svgs/github";
import Twitter from "./svgs/twitter";
import Envelope from "./svgs/envelope";
import LinkedIn from "./svgs/linkedin";

const contacts = [
    {
        Comp: Twitter,
        alt: "twitter icon",
        link: "https://twitter.com/atlas_assistant",
    },
    {
        Comp: GitHub,
        alt: "github icon",
        link: "https://github.com/markwindsorr",
    },
    {
        Comp: LinkedIn,
        alt: "linkedin icon",
        link: "https://www.linkedin.com/in/markwindsorr/",
    },
    {
        Comp: Envelope,
        alt: "envelope icon",
        link: "mailto:markwindsorr@atlas-finance.io",
    },
];

export default async function Page() {
    return (
        <section>
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">
                hey, I'm Mark👋
            </h1>
            <h3 className="font-bold text-1xl mb-8 tracking-tighter">
                Software Engineer | Amateur Designer | Quant Finance
            </h3>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 26,
                }}
            >
                {contacts.map(({ Comp, link, alt }) => {
                    return (
                        <ExtLink
                            style={{
                                color: "white",
                                marginInline: 14,
                            }}
                            key={link}
                            href={link}
                            aria-label={alt}
                        >
                            <Comp height={32} style={{ color: "white" }} />
                        </ExtLink>
                    );
                })}
            </div>
            <img src="/rough.png" />

            <div className="prose prose-neutral dark:prose-invert">
                <p>I love to design and build 🔨.</p>
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    Here we'll maintain a collection of writings on history,
                    economics, business, politics & technology.
                </p>
            </div>

            <div className="prose prose-neutral dark:prose-invert">
                <p>Interested in what's to come.</p>
            </div>

            {/* <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
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
            </ul> */}
        </section>
    );
}
