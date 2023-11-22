import React from "react";
import Navigation from "./Navigation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
];

function TheHeader() {
    return (
        <header>
            <Navigation navLinks={navItems}></Navigation>
        </header>
    );
}

export default TheHeader;
