"use client";

import { Metadata } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";

export default function Blog() {
    const [posts, setPosts] = useState<any[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {}, []);

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
