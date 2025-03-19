import Link from "next/link";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog<span className="text-blue-500 ">Habib</span>
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-xl font-medium hover:text-blue-500 transition-colors"
          >
            {" "}
            Home{" "}
          </Link>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-xl font-medium hover:text-blue-500 transition-colors"
          >
            {" "}
            Dashboard{" "}
          </Link>
        </div>
        {user ? (
          <div className="flex items-center gap-3">
            <p>{user.given_name}</p>
            <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <LoginLink className={buttonVariants()}>Login</LoginLink>
            <RegisterLink className={buttonVariants({ variant: "secondary" })}>
              Sign in
            </RegisterLink>
          </div>
        )}
      </div>
    </nav>
  );
}