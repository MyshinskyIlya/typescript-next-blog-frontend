"use client";
import { getPostsBySearch } from "@/services/getPosts";
import React, { FormEventHandler, useState } from "react";

type PropsSearch = {
    onSearch: (value: any[]) => void;
};

export const PostSearch = React.memo(({ onSearch }: PropsSearch) => {
    const [search, setSearch] = useState<string>("");

    const handleSumbit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const posts = await getPostsBySearch(search);

        onSearch(posts);
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
