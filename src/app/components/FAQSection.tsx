export default function FAQ({ faqs }) {
    return (
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <ul className="space-y-4">
            {faqs.map((faq) => (
              <li key={faq.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                <h3 className="font-bold">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  