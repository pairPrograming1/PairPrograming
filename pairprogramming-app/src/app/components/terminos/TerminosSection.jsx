
export default function TerminosSection({ title, content, isLast = false }) {
  return (
    <div
      className={`border-b border-border-color pb-6 ${
        isLast ? "last:border-b-0" : ""
      }`}
    >
      <h2 className="text-xl font-bold text-primary mb-4">{title}</h2>
      <div className="text-secondary-text leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </div>
  );
}
