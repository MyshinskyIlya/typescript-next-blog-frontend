"use client";

import React, { FC, useEffect, useState } from "react";
import styles from "../page.module.css";
import { getAllPosts } from "@/services/getPosts";
import { Posts } from "@/components/Posts";

const Blog: FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {loading ? (
                <h3 className={`${styles.center} ${styles.code}`}></h3>
            ) : (
                <>
                    <h1 className={styles.code}>Blog page</h1>
                    <Posts posts={posts}></Posts>
                </>
            )}
        </>
    );
};

export default Blog;
