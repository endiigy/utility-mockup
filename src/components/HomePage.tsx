import { useState } from "react";

interface HomePageProps {
  onLookup: (account: string, phone: string) => void;
}

export default function HomePage({ onLookup }: HomePageProps) {
  const [account, setAccount] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2 text-center text-blue-800">
        City of Gray Utility
      </h1>
      <p className="text-center text-lg">ONLINE PAYMENT CENTER</p>

      <div className="mt-10">
        <p className="text-xl mb-4 text-center">Pay in a few easy steps.</p>
        <input
          type="text"
          placeholder="Account Number"
          className="border w-full p-2 mb-2"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone (last 4 digits)"
          className="border w-full p-2 mb-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          onClick={() => onLookup(account, phone)}
          className="bg-blue-800 text-white px-4 py-2 rounded w-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
