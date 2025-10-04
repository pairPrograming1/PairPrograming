export default function Values() {
  const values = [
    "Calidad",
    "Colaboración",
    "Innovación",
    "Escalabilidad",
    "Simplicidad",
    "Escucha Activa",
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-700 dark:text-gray-200">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-12">Nuestros Valores</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {values.map((value) => (
            <span
              key={value}
              className="bg-blue-900 dark:bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-800 dark:hover:bg-blue-500 transition"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
