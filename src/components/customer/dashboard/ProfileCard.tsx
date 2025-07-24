export default function ProfileCard() {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">Personal Profile</h4>
        <button className="text-blue-600 text-sm">EDIT</button>
      </div>
      <p className="text-sm text-gray-700 mb-2">1741613589</p>
      <label className="flex items-center space-x-2 text-sm text-gray-700">
        <input type="checkbox" checked readOnly />
        <span>Receive marketing SMS</span>
      </label>
    </div>
  );
}
