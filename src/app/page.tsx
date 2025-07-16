import { getLatestProducts } from "@/app/api/getFeaturedProducts";

import FeatureHighlights from "../components/home/FeatureHighlights";
import FeatureProducts from "../components/home/FeatureProducts";
import Hero from "../components/home/Hero";

export default async function Home() {
  const featuredProducts = await getLatestProducts("featured-products", 10);

  return (
    <>
      <Hero />
      <FeatureHighlights />
      <FeatureProducts products={featuredProducts ?? []} />
    </>
  );
}
