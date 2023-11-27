import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";

export default async function Profile() {
    // Используем hepler для того, чтобы компонент оставался серверным
    const session = await getServerSession(authConfig);
    return (
        <div className="container">
            <h1>Profile Page</h1>
            {session?.user?.image && (
                <div
                    style={{
                        marginTop: "2rem",
                        display: "flex",
                        gap: "2rem",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        className="avatar"
                        src={session?.user?.image}
                        alt="avatar"
                    ></img>
                    <p>{session?.user?.name}</p>
                </div>
            )}
        </div>
    );
}
