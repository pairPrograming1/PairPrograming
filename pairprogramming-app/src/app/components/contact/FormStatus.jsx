// components/contact/FormStatus.jsx
export function FormStatus({ status }) {
  if (status !== "success") return null;

  return (
    <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 animate-pulse">
      <div className="flex items-center justify-center space-x-2">
        <span className="text-lg">✅</span>
        <p className="font-medium text-center text-sm">
          ¡Mensaje enviado con éxito! Te contactaremos dentro de 24 horas.
        </p>
      </div>
    </div>
  );
}
