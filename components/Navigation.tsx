"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Navlink = {
    label: string;
    href: string;
};

type PropsNavigation = {
    navLinks: Navlink[];
};

export default function Navigation({ navLinks }: PropsNavigation) {
    const pathname = usePathname();

    return (
        <>
            {navLinks.map((i: Navlink) => {
                const isAcive = pathname === i.href;

                return (
                    <Link
                        key={i.label}
                        href={i.href}
                        className={isAcive ? "active" : ""}
                    >
                        {i.label}
                    </Link>
                );
            })}
        </>
    );
}
