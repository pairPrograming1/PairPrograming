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
        <label className="block text-gray-400 font-semibold mb-2 text-sm">
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
        className={`w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-500 resize-none transition-all text-sm ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
        {...props}
      />
    </div>
  );
};
