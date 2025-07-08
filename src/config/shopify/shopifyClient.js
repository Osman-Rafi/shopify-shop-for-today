import {createStorefrontApiClient} from '@shopify/storefront-api-client';

export const shopifyClient = createStorefrontApiClient({
  storeDomain: 'http://shopfortodayy.myshopify.com',
  apiVersion: '2025-07',
  publicAccessToken: "462d5f9712f0970d277ffce7f70104e2",
});