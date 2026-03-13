import React from "react";

function FormInput({
  label,
  type = "text",
  value,
  onChange,
  theme,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className={`text-sm ${theme.subText}`}>
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        {...props}
        className={`px-3 py-2 rounded-lg border ${theme.border} ${theme.card} ${theme.text}`}
      />
    </div>
  );
}

export default FormInput;