import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInButton = () => {
  return (
    <button
      type="button"
      className="btn bg-black hover:bg-black/80"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      <FcGoogle size={20} /> Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
