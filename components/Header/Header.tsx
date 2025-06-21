"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import { Desktop } from "./Desktop";
import { Bottom } from "./Bottom";
import { LinearBlur } from "progressive-blur";

type HeaderVariant = "default" | "bottom" | "floating";
type StyleVariant = "none" | "bordered" | "progressiveBlur";

interface HeaderProps {
    variant?: HeaderVariant;
    styleVariant?: StyleVariant;
}

export default function Header({
                                   variant = "default",
                                   styleVariant = "none",
                               }: HeaderProps) {
    const showBlur = styleVariant === "progressiveBlur";

    const layoutClasses: Record<HeaderVariant, string> = {
        default: "sticky top-0 left-0 right-0 z-50",
        floating: "sticky top-4 left-4 right-4 z-50 rounded-full",
        bottom: "",
    };

    const styleClasses: Record<Exclude<StyleVariant, "progressiveBlur">, string> = {
        none: "bg-white",
        bordered: "bg-white border-gray-200",
    };

    const Blur = ({
                      side,
                      withBorderRadius,
                  }: {
        side: "top" | "bottom";
        withBorderRadius: boolean;
    }) =>
        showBlur ? (
            <LinearBlur
                side={side}
                steps={8}
                strength={100}
                falloffPercentage={100}
                tint="#fff"
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: -1,
                    borderRadius: withBorderRadius ? "inherit" : undefined,
                }}
            />
        ) : null;

    if (variant === "bottom") {
        const desktopStyle =
            styleVariant === "bordered"
                ? `${styleClasses.bordered} md:border-b`
                : styleClasses.none;
        const mobileStyle =
            styleVariant === "bordered"
                ? `${styleClasses.bordered} border-t`
                : styleClasses.none;

        return (
            <>
                <header
                    className={clsx(
                        "hidden w-full md:block",
                        layoutClasses.default,
                        !showBlur && desktopStyle
                    )}
                >
                    <Blur side="top" withBorderRadius={false} />
                    <nav className="container relative mx-auto flex items-center justify-between px-6 py-4">
                        <Link href="/" className="text-xl font-bold">
                            YourLogo
                        </Link>
                        <Desktop />
                        <Button asChild size="sm" className="ml-4">
                            <Link href="#cta">Book a Call</Link>
                        </Button>
                    </nav>
                </header>
                <Bottom
                    className={!showBlur ? mobileStyle : "bg-white/0"}
                    blurEffect={<Blur side="bottom" withBorderRadius={false} />}
                />
            </>
        );
    }

    const headerStyle =
        styleVariant === "bordered"
            ? `${styleClasses.bordered} border-b`
            : styleClasses.none;

    return (
        <header
            className={clsx(
                "w-full",
                layoutClasses[variant],
                !showBlur && headerStyle
            )}
        >
            <Blur side="top" withBorderRadius={variant === "floating"} />
            <nav
                className={clsx(
                    "container relative mx-auto flex items-center justify-between px-6 py-4",
                    variant === "floating" && "px-4 py-2"
                )}
            >
                <Link href="/" className="text-xl font-bold">
                    YourLogo
                </Link>
                <Desktop />
                <Button asChild size="sm" className="ml-4">
                    <Link href="#cta">Book a Call</Link>
                </Button>
            </nav>
        </header>
    );
}
