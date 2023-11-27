import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function SignIn() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                placeItems: "center",
                gap: "1rem",
                width: "320px",
                margin: "0 auto",
            }}
        >
            <h1>Sign In Page</h1>
            <SignInForm></SignInForm>
            <GoogleButton></GoogleButton>
        </div>
    );
}
