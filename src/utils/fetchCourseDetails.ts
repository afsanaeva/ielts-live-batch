const COURSE_API =
  'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch';

export default async function fetchCourseDetails() {
  try {
    const response = await fetch(COURSE_API);
    if (!response.ok) {
      throw new Error(`Failed to fetch course details: ${response.statusText}`);
    }

    const data = await response.json();

    // Example structure based on common API data:
    return {
      title: data.title || 'IELTS Live Batch',
      description: data.description || 'Join the best IELTS batch today!',
      variants: data.variants || [], // Assuming `variants` is an array
      media: data.media || [], // Assuming `media` is an array of image URLs
    };
  } catch (error) {
    console.error('Error fetching course details:', error);

    // Return fallback data in case of an error
    return {
      title: 'Error',
      description: 'Failed to load course details. Please try again later.',
      variants: [],
      media: [],
    };
  }
}
