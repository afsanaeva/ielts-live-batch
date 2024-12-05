export default function HeaderSection({ title, description, ctaText }) {
    return (
      <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-4">{description}</p>
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg">
            {ctaText}
          </button>
        </div>
      </header>
    );
  }
  