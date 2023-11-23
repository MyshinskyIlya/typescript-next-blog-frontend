"use client";

import useSWR from "swr";

import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../app/page.module.css";
import { getAllPosts } from "@/services/getPosts";
// import { usePosts } from "@/store";
// import { shallow } from "zustand/shallow";

export const Posts = () => {
    const { data: posts, isLoading } = useSWR("posts", getAllPosts);
    // const [posts, loading, getAllPosts] = usePosts(
    //     (state) => [state.posts, state.loading, state.getAllPosts],
    //     shallow
    // );

    // useEffect(() => {
    //     getAllPosts();
    // }, [getAllPosts]);

    return isLoading ? (
        <h3 className={`${styles.center} ${styles.code}`}></h3>
    ) : (
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
