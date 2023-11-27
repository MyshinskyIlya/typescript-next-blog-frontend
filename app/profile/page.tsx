import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";

export default async function Profile() {
    // Используем hepler для того, чтобы компонент оставался серверным
    const session = await getServerSession(authConfig);
    return (
        <div>
            <h1>Profile of {session?.user?.name}</h1>
            {session?.user?.image && (
                <img src={session?.user?.image} alt="avatar"></img>
            )}
        </div>
    );
}
