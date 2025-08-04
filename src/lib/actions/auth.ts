"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const cookieStore = await cookies();

  // Remove the customer access token
  cookieStore.delete("customerAccessToken");

  // Optionally, invalidate the token on Shopify's end if needed
  // await shopifyClient.customerAccessTokenDelete(token)

  redirect("/");
}
