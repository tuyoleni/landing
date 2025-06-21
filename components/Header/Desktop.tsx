import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {navLinks} from "@/config/header.config";

export function Desktop() {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-6">
                {navLinks.slice(1).map(({ href, label }) => (
                    <NavigationMenuItem key={href}>
                        <NavigationMenuLink asChild>
                            <Link href={href}>
                                {label}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
