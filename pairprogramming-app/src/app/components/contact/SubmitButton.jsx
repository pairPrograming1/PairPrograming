// components/contact/SubmitButton.jsx
import { Button } from "../ui/Button";

export function SubmitButton({ isLoading }) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      loading={isLoading}
      className="w-full"
      icon={
        <svg
          className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      }
    >
      {isLoading ? "Enviando Mensaje..." : "Enviar Mensaje"}
    </Button>
  );
}
