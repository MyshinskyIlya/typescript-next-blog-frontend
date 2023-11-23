import React from "react";
import styles from "../page.module.css";
import { Posts } from "@/components/Posts";
import PostSearch from "@/components/PostSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Next App",
};

export default function Blog() {
    return (
        <>
            <h1 className={styles.code}>Blog page</h1>
            <PostSearch></PostSearch>
            <Posts></Posts>
        </>
    );
}
