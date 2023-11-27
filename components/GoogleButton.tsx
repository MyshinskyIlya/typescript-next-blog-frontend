"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";

export const GoogleButton = () => {
    const searchParams = useSearchParams();

    const callbackUrl = searchParams.get("callbackUrl") || "/";

    return (
        <button
            className="signIn-btn"
            onClick={() => signIn("google", { callbackUrl })}
        >
            Sign in with Google
        </button>
    );
};
