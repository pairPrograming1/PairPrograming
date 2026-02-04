"use client";
import Link from "next/link";

export const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  icon,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-2.5 rounded-lg text-sm lg:text-base",
    lg: "px-8 py-3 rounded-lg text-base lg:text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${
    sizes[size]
  } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  const content = (
    <>
      {loading && (
        <div
          className={`border-2 border-white border-t-transparent rounded-full animate-spin mr-2 ${
            size === "sm" ? "w-3 h-3" : "w-4 h-4 lg:w-5 lg:h-5"
          }`}
        ></div>
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};
