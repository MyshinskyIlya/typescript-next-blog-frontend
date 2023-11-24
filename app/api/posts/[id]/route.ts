import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
// import { redirect } from "next/navigation";

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;

    const headersList = headers();
    const type = headersList.get("Content-Type");
    //logic delete post

    const cookieList = cookies();
    cookieList.set("foo", "12345");

    const foo = cookieList.get("foo")?.value;
    const coo3 = cookieList.get("coo3")?.value;

    console.log(cookieList);

    // redirect("/blog");
    return NextResponse.json({ id, type, foo, coo3 });
}
