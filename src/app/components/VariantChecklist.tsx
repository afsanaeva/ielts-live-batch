type Props = {
    variants: Array<{ id: string; name: string }>;
  };
  
  export default function VariantChecklist({ variants }: Props) {
    return (
      <section className="py-8">
        <h2 className="text-2xl font-bold">Variants</h2>
        <ul className="mt-4">
          {variants.map((variant) => (
            <li key={variant.id} className="mb-2">
              {variant.name}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  