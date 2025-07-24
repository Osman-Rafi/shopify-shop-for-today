// app/account/page.tsx
import ProfileCard from "@/components/customer/dashboard/ProfileCard";
import AddressBook from "@/components/customer/dashboard/AddressBook";
import RecentOrders from "@/components/customer/dashboard/RecentOrders";

export default function AccountPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Manage My Account</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <ProfileCard />
        <AddressBook />
      </div>
      <RecentOrders />
    </div>
  );
}
// app/account/components/ProfileCard.tsx