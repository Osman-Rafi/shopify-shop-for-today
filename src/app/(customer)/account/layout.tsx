import Sidebar from "@/components/customer/dashboard/Sidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white shadow-md">
        <Sidebar />
      </aside>
     
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
