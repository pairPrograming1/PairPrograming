"use client";

export const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-gray-400 font-semibold mb-2 text-sm">
          {label} {required && "*"}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-500 transition-all text-sm ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
        {...props}
      />
    </div>
  );
};
