import { Metadata } from "next";
import React from "react";

export type PropsId = {
    params: {
        id: string;
    };
};

export async function generateMetadata({
    params: { id },
}: PropsId): Promise<Metadata> {
    const post = await getPost(id);

    return {
        title: `${id} | ${post.title}`,
    };
}

async function getPost(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return response.json();
}

export default async function Post({ params: { id } }: PropsId) {
    const post = await getPost(id);

    return (
        <>
            <h1>
                Post {id}. {post.title.toUpperCase()}
            </h1>
            <p>
                {post.body.slice(0, 1).toUpperCase() + post.body.slice(1) + "."}
            </p>
            <></>
        </>
    );
}
