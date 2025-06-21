"use client";

import { LinearBlur } from "progressive-blur";

export function Blur({
                         side,
                         withBorderRadius,
                     }: {
    side: "top" | "bottom";
    withBorderRadius: boolean;
}) {
    return (
        <LinearBlur
            side={side}
            steps={8}
            strength={64}
            falloffPercentage={100}
            tint="rgba(255, 255, 255, 0.6)"
            style={{
                position: "absolute",
                inset: 0,
                zIndex: -1,
                borderRadius: withBorderRadius ? "inherit" : undefined,
            }}
        />
    );
}
