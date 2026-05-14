export const Container = ({ children, className = "", size = "default" }) => {
  const sizes = {
    default: "max-w-6xl",
    expanded: "max-w-4xl",
    full: "max-w-full px-6",
  };

  const classes = `mx-auto transition-all duration-500 ${sizes[size]} ${className}`;

  return <div className={classes}>{children}</div>;
};
