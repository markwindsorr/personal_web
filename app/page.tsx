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

function Badge(props) {
    return (
        <a
            {...props}
            target="_blank"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
        />
    );
}

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

function ChannelLink({ img, link }) {
    return (
        <a
            href={link}
            target="_blank"
            className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-2 py-2 w-full"
        >
            <img width="120" height="120" alt={img} src={img} />
            <div className="text-neutral-700 dark:text-neutral-300">
                <ArrowIcon />
            </div>
        </a>
    );
}

export default async function Page() {
    return (
        <section>
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">
                hey, I'm Mark 🔮
            </h1>
            <h3 className="font-bold text-1xl mb-8 tracking-tighter">
                Software Developer | Amateur Designer | Quant Finance
            </h3>

            <div className="prose prose-neutral dark:prose-invert">
                <p className="prose prose-neutral dark:prose-invert">
                    {`I'm a software developer & game player. Currently building `}
                    <span className="not-prose">
                        <Badge href="https://atlas-finance.io">
                            {/* <svg
                                width="13"
                                height="11"
                                viewBox="0 0 13 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-flex mr-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.5 0L13 11H0L6.5 0Z"
                                    fill="currentColor"
                                />
                            </svg> */}
                            <img
                                width="52"
                                height="30"
                                src="logoNameDark.png"
                                alt="Logo Name Dark"
                            />
                        </Badge>
                    </span>
                    {`, where we provide quantitative research tools for non-technical equity & crypto analysts using language models & vast amounts of data.`}
                </p>
            </div>
            <div className="prose prose-neutral dark:prose-invert">
                <p className="prose prose-neutral dark:prose-invert">
                    {`Looking to collaborate with others at the links below, where people can share knowledge on quantitative trading strategies, get boilerplate code & datasets `}
                </p>
            </div>
            <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
                <ChannelLink
                    img="atlasTrade.png"
                    link="https://github.com/atlas-finance-io/atlas_trade"
                />
                <ChannelLink
                    img="atlasResearch.png"
                    link="https://github.com/atlas-finance-io/atlas_research"
                />
                <ChannelLink
                    img="atlasVisual.png"
                    link="https://github.com/atlas-finance-io"
                />
            </div>

            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    <a href="https://atlas-finance.notion.site/Knowledge-Base-59230eb51f5c4847b9b66d35725c16b1?pvs=4">
                        Here
                    </a>{" "}
                    we'll maintain a collection of writings on history,
                    economics, business, politics & technology.
                </p>
            </div>

            <div className="prose prose-neutral dark:prose-invert">
                <p>Interested in what's to come.</p>
            </div>
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
            {/* <img src="/rough.png" /> */}
        </section>
    );
}
