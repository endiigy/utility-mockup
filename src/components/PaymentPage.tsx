interface PaymentPageProps {
  onBack: () => void;
}

export default function PaymentPage({ onBack }: PaymentPageProps) {
  //const today = new Date().toLocaleString();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-xl font-bold mb-4 text-center">
        Enter your payment information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-6 rounded shadow">
        <div>
          <p><strong>Notice Number:</strong> 004952</p>
          <p><strong>Location:</strong> 123 WHITE LANE</p>
          <input type="text" placeholder="Name on Card" className="border w-full p-2 mt-2" />
          <input type="text" placeholder="Street" className="border w-full p-2 mt-2" />
          <input type="text" placeholder="City" className="border w-full p-2 mt-2" />
          <input type="text" placeholder="Zip Code" className="border w-full p-2 mt-2" />
          <input type="text" placeholder="Phone" className="border w-full p-2 mt-2" />
        </div>

        <div>
          <div className="mb-2">
            <label>Card Type</label>
            <select className="border w-full p-2">
              <option>-- Select --</option>
              <option>Visa</option>
              <option>MasterCard</option>
            </select>
          </div>
          <input type="text" placeholder="Card Number" className="border w-full p-2 mt-2" />
          <div className="flex gap-2 mt-2">
            <select className="border p-2 w-1/2">
              <option>-- Month --</option>
            </select>
            <select className="border p-2 w-1/2">
              <option>-- Year --</option>
            </select>
          </div>
          <input type="text" placeholder="Security Code" className="border w-full p-2 mt-2" />

          <div className="mt-4">
            <p><strong>Amount Due:</strong> $80.11</p>
            <p><strong>Convenience Fee:</strong> $2.61</p>
            <p><strong>Payment Total:</strong> $82.72</p>
          </div>

          <div className="mt-4 text-red-600">
            <p><strong>Potential double payment:</strong> A payment was made on 5/15/2025 2:25:49 PM.</p>
            <p>Please review your records before paying again.</p>
          </div>

          <div className="flex justify-between mt-4">
            <button onClick={onBack} className="bg-gray-400 px-4 py-2 rounded text-white">Back</button>
            <button className="bg-blue-800 px-4 py-2 rounded text-white">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
