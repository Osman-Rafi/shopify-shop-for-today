import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";

import AuthOptions from "@/components/layout/AuthOptions";

const Header: React.FC = async () => {
  const cookiesStore = await cookies();
  const isAuthenticated = cookiesStore.get("customerAccessToken")?.value;

  return (
    <header className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
      <div className="text-2xl font-bold text-gray-800">
        <Link href="/">ShopForToday</Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600"
            >
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/cart" className="text-gray-700 hover:text-blue-600">
              Cart
            </Link>
          </li>
          <AuthOptions isLoggedin={!!isAuthenticated} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
