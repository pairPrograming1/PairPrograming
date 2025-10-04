export default function SectionCard({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
      {children}
    </div>
  );
}
