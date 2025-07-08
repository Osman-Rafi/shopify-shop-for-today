// components/FeatureHighlights.tsx
import { Star, Leaf, Flower, TestTube } from "lucide-react";

export default function FeatureHighlights() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 mb-4" />,
      title: "Built For Shopify",
      description:
        "Loox was created exclusively for Shopify stores. It integrates seamlessly and is compatible with every theme.",
    },
    {
      icon: <Flower className="w-8 h-8 mb-4" />,
      title: "Built For Speed",
      description:
        "Loox uses a CDN to serve scripts, photos, and videos, so widgets load in less than half a second.",
    },
    {
      icon: <TestTube className="w-8 h-8 mb-4" />,
      title: "Built For You",
      description:
        "As a 100% no-code platform, Loox only takes a few clicks to set up. Our support team is on hand 24/7.",
    },
  ];

  return (
    <section className="bg-[#fef7ec] py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 inline-flex items-center bg-[#e9d6b0] px-4 py-2 rounded">
          <Star className="w-5 h-5 mr-2 text-black" />
          <span className="text-xl font-bold">4.9/5</span>
          <span className="text-xs ml-3 text-gray-600">Powered by LOOX</span>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="text-gray-800">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
