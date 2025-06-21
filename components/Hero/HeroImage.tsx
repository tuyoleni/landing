"use client";

import React from "react";
import Image from "next/image";

interface HeroImageProps {
    src: string;
    rounded?: boolean;
    fit?: "cover" | "contain";
    widthClass?: string;
    heightClass?: string;
    className?: string;
    objectPosition?: "top" | "center" | "bottom"; // New prop to control crop focus
}

export function HeroImage({
                              src,
                              rounded = false,
                              fit = "cover",
                              widthClass = "w-full",
                              heightClass = "h-auto",
                              className = "",
                              objectPosition = "center", // Default to center focus
                          }: HeroImageProps) {
    return (
        <div className={`${widthClass} ${className}`}>
            <Image
                src={src}
                alt="Hero"
                width={1200}
                height={800}
                className={`w-full ${heightClass} object-${fit} object-${objectPosition} ${ // New class is used here
                    rounded ? "rounded-2xl shadow-lg" : ""
                }`}
                priority
            />
        </div>
    );
}