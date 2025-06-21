"use client";

import { LinearBlur, RadialBlur } from "progressive-blur";
import React from "react";

type BlurType = "linear" | "radial";

interface BlurProps {
    type?: BlurType;
    side?: "top" | "bottom"; // only relevant for linear
    steps?: number;
    strength?: number;
    falloffPercentage?: number;
    tint?: string;
    withBorderRadius?: boolean;
}

export function Blur({
                         type = "linear",
                         side = "top",
                         steps = 8,
                         strength = 64,
                         falloffPercentage = 100,
                         tint = "rgba(255, 255, 255, 0.6)",
                         withBorderRadius = false,
                     }: BlurProps) {
    const commonStyle: React.CSSProperties = {
        position: "absolute",
        inset: 0,
        zIndex: -1,
        borderRadius: withBorderRadius ? "inherit" : undefined,
    };

    if (type === "radial") {
        return (
            <RadialBlur
                steps={steps}
                strength={strength}
                falloffPercentage={falloffPercentage}
                tint={tint}
                style={commonStyle}
            />
        );
    }

    return (
        <LinearBlur
            side={side}
            steps={steps}
            strength={strength}
            falloffPercentage={falloffPercentage}
            tint={tint}
            style={commonStyle}
        />
    );
}
