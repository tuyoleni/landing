import Link from "next/link";
import { clsx } from "clsx";
import {navLinks} from "@/config/header.config";


export function Bottom({
                                    className = "",
                                    blurEffect = null,
                                }: {
    className?: string;
    blurEffect?: React.ReactNode;
}) {
    return (
        <nav
            className={clsx(
                "fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around md:hidden",
                className
            )}
        >
            {blurEffect}
            {navLinks.slice(0, 5).map(({ href, label, icon }) => (
                <Link
                    key={href}
                    href={href}
                    className="flex flex-col items-center gap-1 p-1 text-xs text-muted-foreground hover:text-primary"
                >
                    {icon}
                    <span>{label}</span>
                </Link>
            ))}
        </nav>
    );
}
