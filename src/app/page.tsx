import CourseOverView from "./components/CourseOverView";
import fetchCourseDetails from "../utils/fetchCourseDetails";

export default async function Page() {
  const courseDetails = await fetchCourseDetails();

  return (
    <main className="container mx-auto px-4 py-8">
      <CourseOverView
        title={courseDetails.title}
        description={courseDetails.description}
      />
    
    </main>
  );
}
