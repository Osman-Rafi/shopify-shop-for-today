import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const shopifyClient = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
  apiVersion: "2025-07",
  publicAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN,
});
