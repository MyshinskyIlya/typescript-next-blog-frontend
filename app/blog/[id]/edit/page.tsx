import React from "react";
import { PropsId } from "../page";

export default function EditPage({ params: { id } }: PropsId) {
    return <h1>Edit {id} page </h1>;
}
