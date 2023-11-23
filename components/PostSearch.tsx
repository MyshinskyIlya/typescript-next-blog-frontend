"use client";
import { getPostsBySearch } from "@/services/getPosts";
import React, { FormEventHandler, useState } from "react";
import useSWR from "swr";
// import { usePosts } from "@/store";

const PostSearch = React.memo(() => {
    const { mutate } = useSWR("posts");
    const [search, setSearch] = useState<string>("");

    // const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

    const handleSumbit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const posts = await getPostsBySearch(search);

        mutate(posts);
    };
    return (
        <form onSubmit={handleSumbit} className="searchInput">
            <input
                type="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
});

PostSearch.displayName = "PostSearch";
export default PostSearch;
