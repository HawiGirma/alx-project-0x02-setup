import React from "react";
import { type CardProps } from "@/interfaces"; // ✅ Import CardProps

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
