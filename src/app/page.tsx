import FeatureHighlights from "../components/home/FeatureHighlights";
import FeatureProducts from "../components/home/FeatureProducts";
import Hero from "../components/home/Hero";

import { shopifyClient } from "@/config/shopify/shopifyClient";
import LatestProducts from "@/graphql/queries/getLatestProducts.graphql";

export default async function Home() {
  const { data } = await shopifyClient.request(LatestProducts, {
    variables: {
      handle: "sample-product",
      first: 10,
    },
  });

  console.log("Product Data:", data);
  // console.log("Product Edges:", data.products.edges);

  return (
    <>
      <Hero />
      <FeatureHighlights />
      <FeatureProducts
        products={[
          {
            id: "1",
            name: "Glow Serum",
            image: "https://example.com/glow-serum.jpg",
            price: "$29.99",
            description: "A serum that enhances your natural glow.",
          },
          {
            id: "2",
            name: "Hydration Cream",
            image: "https://example.com/hydration-cream.jpg",
            price: "$34.99",
            description: "Deeply hydrates and nourishes your skin.",
          },
          {
            id: "3",
            name: "Revitalizing Mask",
            image: "https://example.com/revitalizing-mask.jpg",
            price: "$24.99",
            description: "A mask that revitalizes tired skin.",
          },
        ]}
      />
    </>
  );
}
