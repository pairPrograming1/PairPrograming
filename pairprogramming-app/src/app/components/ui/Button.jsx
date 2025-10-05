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
    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none";

  const variants = {
    primary: "btn-primary primary-shimmer hover:shadow-lg",
    outline:
      "btn-outline border border-primary text-primary hover:bg-primary/10",
    secondary: "glass-card hover:bg-primary/20 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 rounded-lg text-sm lg:text-base",
    lg: "px-8 py-4 rounded-xl text-base lg:text-lg",
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
