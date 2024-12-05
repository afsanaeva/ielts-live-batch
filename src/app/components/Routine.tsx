export default function Routine({ routine }) {
    return (
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Class Routine</h2>
          <div className="overflow-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Module</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Number of Classes</th>
                </tr>
              </thead>
              <tbody>
                {routine.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.module}</td>
                    <td className="border px-4 py-2">{item.date}</td>
                    <td className="border px-4 py-2">{item.classes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
  