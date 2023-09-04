"use client";

import { useEffect } from "react";

export default function ViewCounter({
    slug,
    allViews,
    trackView,
}: {
    slug: string;
    allViews: {
        slug: string;
        count: number;
    }[];
    trackView?: boolean;
}) {
    const viewsForSlug =
        allViews && allViews.find((view) => view.slug === slug);
    const number = new Number(viewsForSlug?.count || 0);

    useEffect(() => {
        if (trackView) {
        }
    }, []);

    return (
        <p className="text-neutral-600 dark:text-neutral-400">
            {`${number.toLocaleString()} views`}
        </p>
    );
}
