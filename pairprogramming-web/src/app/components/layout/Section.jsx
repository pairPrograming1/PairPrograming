"use client";

export const Section = ({
  children,
  className = "",
  background = "default",
  padding = "default",
}) => {
  const backgrounds = {
    default: "bg-background",
    card: "bg-card-bg",
    gradient: "bg-gradient-to-br from-background via-card-bg to-primary/10",
  };

  const paddings = {
    none: "",
    sm: "py-8 lg:py-12",
    default: "py-16 lg:py-20",
    lg: "py-20 lg:py-28",
  };

  const classes = `${backgrounds[background]} ${paddings[padding]} ${className}`;

  return <section className={classes}>{children}</section>;
};
