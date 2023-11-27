"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SessionProvider, useSession } from "next-auth/react";

type Navlink = {
    label: string;
    href: string;
};

type PropsNavigation = {
    navLinks: Navlink[];
};

export default function Navigation({ navLinks }: PropsNavigation) {
    const pathname = usePathname();
    const session = useSession();

    console.log(session);

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
