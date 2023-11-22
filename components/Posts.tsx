import Link from "next/link";
import React from "react";
import styles from "../app/page.module.css";

type PropsPost = {
    posts: any[];
};

export const Posts = ({ posts }: PropsPost) => {
    return (
        <>
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
};
