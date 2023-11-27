"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEventHandler } from "react";

export const SignInForm = () => {
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });

        if (res && !res.error) {
            router.push("/");
        } else {
            alert("Incorrect login or password");
            console.log(res);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="signIn-form">
            <label htmlFor="email">Email</label>
            <input type="email" id="name" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Sign In</button>
        </form>
    );
};
