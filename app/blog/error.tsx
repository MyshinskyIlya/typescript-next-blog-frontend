"use client";

import React from "react";

export default function Error({ error }: { error: Error }) {
    error && console.warn("ERROR ===========>" + error.message);

    return <h1>Oops... error</h1>;
}
