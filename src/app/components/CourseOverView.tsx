type ChecklistItem = {
  id: string;
  icon: string;
  text: string;
};

type Props = {
  checklist: ChecklistItem[] | undefined; // Allow undefined
};

export default function CourseOverview({ checklist }: Props) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">What This Course Offers</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {checklist && checklist.length > 0 ? (
            checklist.map((item) => (
              <li key={item.id} className="flex items-center p-4 bg-gray-100 rounded-lg">
                <img src={item.icon} alt="icon" className="w-12 h-12 mr-4" />
                <span>{item.text}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No items to display.</li>
          )}
        </ul>
      </div>
    </section>
  );
}
