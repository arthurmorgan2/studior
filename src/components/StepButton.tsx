import React from "react";

interface StepButtonProps {
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

const StepButton: React.FC<StepButtonProps> = ({
  index,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      } rounded-full w-8 h-8 flex items-center justify-center`}>
      {index + 1}
    </button>
  );
};

export default StepButton;
