export default function Instructors({ instructors }) {
    return (
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Meet Your Instructors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {instructors.map((instructor) => (
              <div key={instructor.name} className="text-center bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-24 h-24 mx-auto rounded-full"
                />
                <h3 className="mt-4 font-bold">{instructor.name}</h3>
                <p className="text-gray-600">{instructor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  