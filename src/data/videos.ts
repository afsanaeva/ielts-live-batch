export async function getServerSideProps() {
  const courseDetails = await fetch('API_URL').then((res) => res.json());

  return {
    props: {
      title: courseDetails.title,
      subtitle: courseDetails.description,
      timer: '1 Day, 2 Hours',
      features: courseDetails.features,
      instructors: courseDetails.instructors,
      media: courseDetails.media,
      faqs: courseDetails.faqs,
    },
  };
}
