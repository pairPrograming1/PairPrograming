"use client";

export const Card = ({
  children,
  className = "",
  hover = false,
  padding = "md",
  animate,
  animationDelay,
  ...props
}) => {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const classes = `bg-background-card rounded-xl border border-border-color ${
    paddings[padding]
  } ${hover ? "hover:border-brand-blue/40 hover:shadow-md transition-all duration-300" : ""} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
