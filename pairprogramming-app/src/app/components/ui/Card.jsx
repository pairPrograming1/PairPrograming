"use client";

export const Card = ({
  children,
  className = "",
  hover = false,
  padding = "md",
  animate, // Extraemos animate para que no se pase al div
  animationDelay, // También extraemos animationDelay
  ...props
}) => {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const classes = `bg-gray-900 rounded-lg border border-gray-800 ${
    paddings[padding]
  } ${hover ? "hover:border-gray-700 transition-all duration-200" : ""} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
