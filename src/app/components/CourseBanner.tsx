import React from "react";

export default function CourseBanner({ courseData }: { courseData: any }) {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black text-white py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>
          <p
            className="text-lg mb-6"
            dangerouslySetInnerHTML={{ __html: courseData.description }}
          ></p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {courseData.checklist.map((item: any) => (
              <li key={item.id} className="flex items-center gap-2">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-6 h-6"
                />
                {item.text}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">৯ম ব্যাচের ভর্তি শেষ হবে:</h3>
            <div className="flex gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">0</div>
                <span>Days</span>
              </div>
              <div>
                <div className="text-3xl font-bold">1</div>
                <span>Hours</span>
              </div>
              <div>
                <div className="text-3xl font-bold">29</div>
                <span>Minutes</span>
              </div>
              <div>
                <div className="text-3xl font-bold">31</div>
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/3 bg-white text-black rounded-lg shadow-md p-6">
          <div className="relative">
            <img
              src={courseData.media[1]?.resource_value}
              alt={courseData.title}
              className="rounded-lg"
            />
            <button className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white p-3 rounded-full">
              ▶
            </button>
          </div>
          <div className="text-center mt-6">
            <div className="text-2xl font-bold text-green-600">
              ৳{courseData.pricing?.discounted_price || 8500}
            </div>
            <div className="text-sm line-through text-gray-500">
              ৳{courseData.pricing?.original_price || 10000}
            </div>
            <div className="text-sm text-red-600">
              ৳{courseData.pricing?.discount || 1500} ছাড়
            </div>
            <button className="bg-green-600 text-white w-full py-2 mt-4 rounded-md">
              {courseData.cta_text?.value || "কোর্সটি কিনুন"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  const API_URL =
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch";

  let courseData = {};

  try {
    const response = await fetch(API_URL);
    courseData = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      courseData: courseData.data || {}, // Pass the data to the component
    },
  };
}
