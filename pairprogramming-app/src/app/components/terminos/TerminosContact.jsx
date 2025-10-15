// components/terminos/TerminosContact.jsx
export default function TerminosContact() {
  return (
    <div className="mt-8 p-4 bg-background rounded-lg border border-border-color">
      <h3 className="font-bold text-white mb-2">Contacto Legal</h3>
      <p className="text-secondary-text text-sm">
        Para preguntas sobre estos términos, contáctenos en:{" "}
        <a
          href="mailto:legal@pairprogramming.com"
          className="text-primary hover:underline"
        >
          pairprogramming@gmail.com
        </a>
      </p>
    </div>
  );
}
