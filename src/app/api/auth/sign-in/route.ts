import { NextResponse } from "next/server";
import { shopifyClient } from "@/config/shopify/shopifyClient";
import customerAccessTokenCreate from "@/graphql/mutations/customerAccessTokenCreate.graphql";

export const POST = async (request: Request) => {
  try {
    const { email, password } = await request.json();

    const variables = { input: { email, password } };

    const { data, errors } = await shopifyClient.request(
      customerAccessTokenCreate,
      { variables }
    );
    if (errors && Object.keys(errors).length) {
      return NextResponse.json(
        { success: false, message: errors.message },
        { status: 400 }
      );
    }

    const customerErrors =
      data?.customerAccessTokenCreate?.customerUserErrors || [];

    if (customerErrors.length) {
      const messages = customerErrors
        .map((error: { message: string }) => error.message)
        .join(", ");
      return NextResponse.json(
        { success: false, message: messages },
        { status: 400 }
      );
    }

    const accessToken =
      data?.customerAccessTokenCreate?.customerAccessToken?.accessToken;
    if (accessToken) {
      const response = NextResponse.json({ success: true });

      response.cookies.set("customerAccessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60, // 1 day
      });
      return response;
    }

    return NextResponse.json(
      { success: false, message: "Authentication failed" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
};
