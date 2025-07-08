// components/FeaturedProducts.tsx
type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
  description?: string;
};

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl mb-4 object-cover w-full h-48"
              />
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm flex-grow">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">{product.price}</span>
                <button className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-800 transition">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
