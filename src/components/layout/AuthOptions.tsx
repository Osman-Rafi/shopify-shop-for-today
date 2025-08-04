"use client";

import { logoutAction } from "@/lib/actions/auth";

type AuthOptionsProps = {
  isLoggedin: boolean;
};

const AuthOptions: React.FC<AuthOptionsProps> = ({ isLoggedin }) => {
  return (
    <div>
      {isLoggedin ? (
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="/account">Account</a>
          <form action={logoutAction}>
            <button type="submit">Logout</button>
          </form>
        </div>
      ) : (
        <a href="/login">Login</a>
      )}
    </div>
  );
};

export default AuthOptions;
