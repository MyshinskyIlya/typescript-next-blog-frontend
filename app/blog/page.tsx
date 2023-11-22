import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import styles from "../page.module.css";

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60,
        },
    });

    return response.json();
}

export const metadata: Metadata = {
    title: "Blog | Next App",
};

export default async function page() {
    const posts = await getData();
    return (
        <>
            <h1 className={styles.code}>Blog page</h1>
            <ul>
                {posts.map((i: any) => (
                    <Link
                        href={`/blog/${i.id}`}
                        key={i.id}
                        className={styles.code}
                    >
                        <li className={styles.card}>
                            {i.id}.{" "}
                            {i.title.slice(0, 1).toUpperCase() +
                                i.title.slice(1) +
                                "."}
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    );
}
