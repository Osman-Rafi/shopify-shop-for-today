import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      <div className="z-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover the Latest Trends in Fashion
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Shop the best deals on clothing, accessories, and more. Free shipping
          on orders over $50!
        </p>
        <a
          href="/shop"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded shadow hover:bg-indigo-50 transition"
        >
          Shop Now
        </a>
      </div>
      <div className="mt-10 md:mt-0 md:ml-8 flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80"
          alt="Fashion Banner"
          className="w-80 h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
