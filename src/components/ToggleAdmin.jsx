import { useState } from "react";

const Toggle = ({ checked, onToggle }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <>
      <label
        className={`relative inline-flex items-center justify-center cursor-pointer me-5 sm:me-0`}
      >
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
      </label>
      <p className="text-sm font-semibold text-gray-900 dark:text-gray-300">
        {isChecked ? "Aktif" : "Non Aktif"}
      </p>
    </>
  );
};

export default Toggle;
