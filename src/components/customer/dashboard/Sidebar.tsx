// app/account/components/Sidebar.tsx
const menu = [
  {
    title: "Manage My Account",
    items: ["My Profile", "Address Book", "My Payment Options", "Daraz Wallet"],
  },
  {
    title: "My Orders",
    items: ["My Returns", "My Cancellations"],
  },
  {
    title: "My Reviews",
    items: [],
  },
  {
    title: "My Wishlist & Followed Stores",
    items: [],
  },
  {
    title: "Sell On Daraz",
    items: [],
  },
];

export default function Sidebar() {
  return (
    <div className="p-6 text-sm text-gray-800">
      <p className="mb-4">
        Hello, <span className="font-medium">1741613589</span>
      </p>
      <span className="inline-block mb-4 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
        ✅ Verified Account
      </span>
      <nav className="space-y-6">
        {menu.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-1 text-gray-600">
              {section.items.map((item) => (
                <li key={item} className="hover:text-black cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
