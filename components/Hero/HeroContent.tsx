"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Dynamically import Blur, no SSR
const Blur = dynamic(() => import("@/components/Blur").then(mod => mod.Blur), { ssr: false });

interface Props {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    centered?: boolean;
    theme?: "light" | "dark";
    withBlur?: boolean;
    blurStrength?: number;
    blurSteps?: number;
    blurFalloff?: number;
    blurTint?: string;
}

export function HeroContent({
                                title,
                                subtitle,
                                ctaLabel,
                                ctaHref,
                                centered = false,
                                theme = "light",
                                withBlur = false,
                                blurStrength = 100,
                                blurSteps = 12,
                                blurFalloff = 120,
                                blurTint = "",
                            }: Props) {
    const alignment = centered ? "items-center text-center" : "items-start text-left";
    const titleColor = theme === "dark" ? "text-white" : "text-foreground";
    const subtitleColor = theme === "dark" ? "text-gray-300" : "text-muted-foreground";

    return (
        <div className="px-6 md:px-12 py-12">
            <div className={`relative flex flex-col gap-4 max-w-2xl ${alignment}`}>
                {withBlur && (
                    <Blur
                        type="radial"
                        strength={blurStrength}
                        steps={blurSteps}
                        falloffPercentage={blurFalloff}
                        tint={blurTint}
                        withBorderRadius
                    />
                )}
                <h1 className={`text-4xl font-bold ${titleColor}`}>{title}</h1>
                <p className={`text-lg ${subtitleColor}`}>{subtitle}</p>
                <Button asChild>
                    <a href={ctaHref} aria-label={ctaLabel}>
                        {ctaLabel}
                    </a>
                </Button>
            </div>
        </div>
    );
}
