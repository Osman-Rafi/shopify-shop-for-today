// app/account/components/RecentOrders.tsx
const orders = [
  {
    id: "676844392714607",
    date: "19/07/2025",
    image: "/images/item1.jpg",
    total: "৳ 755",
  },
  {
    id: "676844392514607",
    date: "19/07/2025",
    image: "/images/item2.jpg",
    total: "৳ 655",
  },
  {
    id: "676573374114607",
    date: "12/07/2025",
    image: "/images/item3.jpg",
    total: "৳ 334",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h4 className="font-semibold mb-4">Recent Orders</h4>
      <table className="w-full text-sm text-left text-gray-700">
        <thead>
          <tr className="border-b">
            <th className="py-2">Order #</th>
            <th>Placed On</th>
            <th>Items</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="py-2">{order.id}</td>
              <td>{order.date}</td>
              <td>
                <img src={order.image} alt="Item" className="h-10 w-10 object-cover" />
              </td>
              <td>{order.total}</td>
              <td>
                <button className="text-blue-600 text-sm">MANAGE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
