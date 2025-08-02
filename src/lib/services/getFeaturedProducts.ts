import { ProductNode, FeaturedProduct } from "@/app/types/featuredTypes";
import { shopifyClient } from "@/config/shopify/shopifyClient";
import LatestProducts from "@/graphql/queries/getLatestProducts.graphql";

export const getLatestProducts = async (handle: string, first: number) => {
  let featuredProducts: FeaturedProduct[] = [];

  try {
    const { data, errors } = await shopifyClient.request(LatestProducts, {
      variables: {
        handle: handle,
        first: first,
      },
    });

    if (data) {
      const serverData = data.products?.edges || [];

      featuredProducts = serverData.map((product: ProductNode) => {
        const { handle, title, descriptionHtml, variants } = product.node;
        const { amount } = variants.edges[0].node.price;
        const { altText, src } = variants.edges[0].node.image || {};

        return {
          handle,
          title,
          descriptionHtml,
          price: amount,
          image: {
            altText: altText || "",
            src: src || "",
          },
        };
      });
      // console.log("Mapped Featured Products:", featuredProducts[0]);
      return featuredProducts;

    } else if (errors) {
      console.error("GraphQL Errors:", errors?.graphQLErrors);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
