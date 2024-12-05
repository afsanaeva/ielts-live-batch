import { fetchCourseData } from '../utils/fetchCourseDetails';
import HeaderSection from './components/HeaderSection';
import CourseOverview from './components/CourseOverView';
import Instructors from './components/InstructorSection';
import FAQ from './components/CourseOverView';
import Routine from './components/Routine';
import CourseBanner from './components/CourseBanner';

export default async function Page() {
  const courseData = await fetchCourseData();
  if (!courseData || !courseData.data) return <div>Failed to load data.</div>;

  const { title, description, checklist, sections } = courseData.data;

  // Extract sections
  const instructorsSection = sections.find((s) => s.type === 'instructors')?.values || [];
  const faqSection = sections.find((s) => s.type === 'faq')?.values || [];
  const routineSection = sections.find((s) => s.type === 'routine')?.values || [];

  return (
    <main>
      <HeaderSection
        title={title}
        description={description}
        ctaText="Enroll Now"
      />
      <CourseBanner courseData={courseData.data} />
     <CourseOverview checklist={checklist || []} />
     <Instructors instructors={instructorsSection} />
      <Routine routine={routineSection} />
      <FAQ faqs={faqSection} />
    </main>
  );
}
