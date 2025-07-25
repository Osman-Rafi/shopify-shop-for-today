import Link from "next/link";
import Image from "next/image";

import { FeaturedProduct } from "@/app/types/featuredTypes";

const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;

export default function FeaturedProducts({
  products,
}: {
  products: FeaturedProduct[];
}) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.handle}
              className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
            >
              <Image
                width={300}
                height={300}
                src={product.image?.src || ""}
                alt={product.image?.altText || ""}
                className="rounded-xl mb-4 object-cover w-full h-48"
              />
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>

              <div
                className="text-gray-600 text-sm flex-grow"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <Link
                  href={`${SHOPIFY_DOMAIN}/products/${product.handle}`}
                  className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-800 transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
