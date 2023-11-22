import { Metadata } from "next";
import React from "react";
import Blog from "./page";
import styles from "../page.module.css";

export const metadata: Metadata = {
    title: "Blog | Next App",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <Blog></Blog>
        </>
    );
}
