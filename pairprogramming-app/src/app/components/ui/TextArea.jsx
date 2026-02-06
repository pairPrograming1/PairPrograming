"use client";

export const TextArea = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  rows = 5,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-secondary-text font-semibold mb-2 text-sm">
          {label} {required && "*"}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 bg-background-secondary/50 text-foreground placeholder-secondary-text/50 resize-none transition-all duration-300 text-sm ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
        {...props}
      />
    </div>
  );
};
