"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * A wrapper around Next.js Image that defers loading until after the component has mounted.
 * This helps prioritize text content and interactivity.
 */
export default function DeferredImage({ src, alt, fill, className, sizes, priority = false, width, height, ...props }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Defer image loading until after the initial mount
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        // Return a placeholder during SSR and initial mount
        return (
            <div className={`bg-neutral-200 dark:bg-neutral-800 animate-pulse ${className}`}
                style={fill ? { position: 'absolute', inset: 0 } : { width: width || '100%', height: height || 'auto' }}
            />
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill={fill}
            width={width}
            height={height}
            className={className}
            sizes={sizes}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            {...props}
        />
    );
}
