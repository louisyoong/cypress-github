import React, { useState } from "react";
import { useRouter } from "next/router";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (username === "devlouis" && password === "222222") {
      console.log("Login successful");
      setLoginError(false);
      router.push("/dashboard");
    } else {
      console.log("Login failed");
      setLoginError(true);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            {loginError && (
              <p className="text-center text-red-500 text-sm">
                * Invalid username or password
              </p>
            )}
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <button
              onClick={handleLogin}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 mt-4
            text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
