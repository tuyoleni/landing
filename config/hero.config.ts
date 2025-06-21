export type HeroVariant =
    | "side-left"
    | "side-right"
    | "stack"
    | "stack-crop"
    | "cover"
    | "cover-top"
    | "cover-bottom";

export interface HeroContentConfig {
    title: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    imageUrl: string;
}

export const heroConfig: HeroContentConfig = {
    title: "Transform the way you plan, teach, and lead.",
    subtitle: "An AI-powered assistant that saves time and amplifies impact for educators.",
    ctaLabel: "Get Started",
    ctaHref: "#cta",
    imageUrl: "/images/hero.jpg",
};