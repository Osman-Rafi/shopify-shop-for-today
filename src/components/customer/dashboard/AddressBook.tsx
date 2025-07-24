// app/account/components/AddressBook.tsx
export default function AddressBook() {
  return (
    <div className="bg-white p-4 rounded shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Address Book</h4>
        <button className="text-blue-600 text-sm">EDIT</button>
      </div>
      <div>
        <h5 className="text-xs font-medium text-gray-500">DEFAULT SHIPPING ADDRESS</h5>
        <p className="font-semibold">OSMAN</p>
        <p className="text-sm text-gray-700">Niloy-54, Raja Gaur gobind hill, Chowhatta<br />Sylhet - Sylhet Sadar - Ambarkhana<br />(+880) 1741613589</p>
      </div>
      <div>
        <h5 className="text-xs font-medium text-gray-500">DEFAULT BILLING ADDRESS</h5>
        <p className="font-semibold">Osman</p>
        <p className="text-sm text-gray-700">House-26, Monwara cottage, Islampur, Mejortila<br />Sylhet - Sylhet Sadar - Khadim Para<br />(+880) 1741613589</p>
      </div>
    </div>
  );
}
