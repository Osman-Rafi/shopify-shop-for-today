"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { apiClient } from "@/utils/apiClient";
import { swalAlert } from "@/utils/swal";
// import { createCustomerAccessTotken } from "./api";

const Signin: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return;
    }

    setLoading(true);
    try {
      const res = await apiClient<{ success: boolean; message?: string }>(
        "/api/auth/sign-in",
        form
      );

      if (res.success) {
        router.push("/account");
      }
      console.log("Response from API:", res);
    } catch (error) {
      console.error("API call failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
            autoComplete="email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
            autoComplete="new-password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
        <p className="mt-4 text-center text-sm">
          Don&#39;t have an account?{" "}
          <a href="/sign-up" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
