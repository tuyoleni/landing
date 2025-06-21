"use client";

import React from "react";
import Image from "next/image";
import { HeroContent } from "@/components/Hero/HeroContent";
import { HeroImage } from "@/components/Hero/HeroImage";
import { heroConfig, HeroVariant } from "@/config/hero.config";

interface HeroProps {
    variant?: HeroVariant;
}

export default function Hero({ variant = "side-left" }: HeroProps) {
    const { title, subtitle, ctaLabel, ctaHref, imageUrl } = heroConfig;

    // --- COVER VARIANTS ---
    if (variant.startsWith("cover")) {
        const verticalAlignMap = {
            "cover-top": "justify-start",
            "cover-bottom": "justify-end",
            cover: "justify-center",
        };

        const contentVerticalAlign = verticalAlignMap[variant as keyof typeof verticalAlignMap];

        // Horizontal alignment: center for cover-top and cover, left for cover-bottom
        const contentHorizontalAlign =
            variant === "cover-bottom"
                ? "items-start text-left"
                : "items-center text-center";

        return (
            <section className="relative h-screen w-full flex items-center overflow-hidden">
                <Image
                    src={imageUrl}
                    alt="Hero background"
                    fill
                    className="object-cover z-10"
                    priority
                />
                <div className="absolute inset-0 z-20" />
                <div className={`relative z-30 container mx-auto h-full flex flex-col ${contentVerticalAlign}`}>
                    <div className={`flex flex-col ${contentHorizontalAlign}`}>
                        <HeroContent
                            title={title}
                            subtitle={subtitle}
                            ctaLabel={ctaLabel}
                            ctaHref={ctaHref}
                            theme="dark"
                            withBlur
                            blurStrength={100}
                            blurSteps={12}
                            blurFalloff={120}
                            blurTint="rgba(255, 255, 255, 0.5)"
                            centered={variant !== "cover-bottom"}
                        />

                    </div>
                </div>
            </section>
        );
    }

    // --- STACK-CROP VARIANT ---
    if (variant === "stack-crop") {
        return (
            <section className="w-full flex flex-col items-center space-y-8 py-16">
                <HeroContent title={title} subtitle={subtitle} ctaLabel={ctaLabel} ctaHref={ctaHref} centered />
                <HeroImage
                    src={imageUrl}
                    widthClass="w-full max-w-6xl"
                    heightClass="h-[400px]"
                    objectPosition="top"
                    rounded
                />
            </section>
        );
    }

    // --- STACK VARIANT ---
    if (variant === "stack") {
        return (
            <section className="w-full flex flex-col items-center space-y-8 py-16">
                <HeroContent title={title} subtitle={subtitle} ctaLabel={ctaLabel} ctaHref={ctaHref} centered />
                <HeroImage src={imageUrl} widthClass="w-full max-w-4xl" rounded />
            </section>
        );
    }

    // --- SIDE VARIANTS ---
    const imageOrderClass = variant === "side-left" ? "md:order-first" : "";

    return (
        <section className="w-full px-6 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col justify-center h-full">
                    <HeroContent title={title} subtitle={subtitle} ctaLabel={ctaLabel} ctaHref={ctaHref} />
                </div>
                <div className={imageOrderClass}>
                    <HeroImage src={imageUrl} rounded />
                </div>
            </div>
        </section>
    );
}
