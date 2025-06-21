import {
    Home,
    Info,
    HelpCircle,
    Users,
    MessageSquare,
    Phone,
} from "lucide-react";

export const navLinks = [
    { href: "/", label: "Home", icon: <Home size={16} /> },
    { href: "#about", label: "About", icon: <Info size={16} /> },
    { href: "#how", label: "How It Works", icon: <HelpCircle size={16} /> },
    { href: "#testimonials", label: "Testimonials", icon: <Users size={16} /> },
    { href: "#faqs", label: "FAQs", icon: <MessageSquare size={16} /> },
    { href: "#contact", label: "Contact", icon: <Phone size={16} /> },
];
