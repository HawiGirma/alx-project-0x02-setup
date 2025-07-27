import { CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => (
  <div className="p-4 border rounded shadow">
    <h2 className="text-lg font-bold">{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;
