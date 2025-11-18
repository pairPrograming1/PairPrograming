
"use client";

export default function LoadingSpinner({
  size = "md",
  color = "primary",
  text = "",
  className = "",
}) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const colors = {
    primary: "border-primary",
    accent: "border-accent",
    white: "border-white",
    gray: "border-gray-400",
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizes[size]} border-4 ${colors[color]} border-t-transparent rounded-full animate-spin`}
      ></div>
      {text && <p className="mt-2 text-secondary-text text-sm">{text}</p>}
    </div>
  );
}
