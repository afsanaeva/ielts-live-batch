const COURSE_API = 'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch';

export async function fetchCourseData() {
  try {
    const response = await fetch(COURSE_API);
    if (!response.ok) throw new Error('Failed to fetch course data');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
