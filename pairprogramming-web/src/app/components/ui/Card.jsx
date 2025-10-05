"use client";

export const Card = ({
  children,
  className = "",
  hover = false,
  padding = "md",
  animate, // Extraemos animate para que no se pase al div
  ...props
}) => {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const classes = `glass-card rounded-xl border border-border-color ${
    paddings[padding]
  } ${hover ? "hover-lift transition-all duration-300" : ""} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
