import { shopifyClient } from "@/config/shopify/shopifyClient";

import { ProductNode } from "@/app/types/featuredTypes";

import FeatureHighlights from "../components/home/FeatureHighlights";
import FeatureProducts from "../components/home/FeatureProducts";
import Hero from "../components/home/Hero";

import LatestProducts from "@/graphql/queries/getLatestProducts.graphql";

export default async function Home() {
  let featuredProducts: ProductNode[] = [];

  try {
    const { data, errors } = await shopifyClient.request(LatestProducts, {
      variables: {
        handle: "featured-products",
        first: 10,
      },
    });

    if (data) {
      const serverData = data.products?.edges || [];

      featuredProducts = serverData.map((product: ProductNode) => {
        const { handle, title, descriptionHtml, variants } = product.node;
        const { amount } = variants.edges[0].node.price;

        return {
          handle,
          title,
          descriptionHtml,
          price: amount,
        };
      });

      console.log("Mapped Featured Products:", featuredProducts);
    } else if (errors) {
      console.error("GraphQL Errors:", errors?.graphQLErrors);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <>
      <Hero />
      <FeatureHighlights />
      <FeatureProducts products={featuredProducts} />
    </>
  );
}
