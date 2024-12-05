type Props = {
    title: string;
    description: string;
  };
  
  export default function CourseOverView({ title, description }: Props) {
    return (
      <section className="py-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{description}</p>
      </section>
    );
  }
  