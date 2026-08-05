import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialCard({ item }) {
  return (
    <div
      className="
      w-[350px]
      h-[240px]
      bg-gray-300
      text-slate-950
      rounded-2xl
      shadow-md
      p-6
      flex-shrink-0
      border border-gray-100
      "
    >
      <FaQuoteLeft className="text-blue-600 text-xl mb-4" />

      <p className="text-slate-950 text-sm leading-6">
        {item.text}
      </p>

      <div className="flex items-center gap-3 mt-6">
        <img
          src={item.image}
          className="w-10 h-10 rounded-full"
        />

        <div>
          <h3 className="font-semibold">{item.name}</h3>

          <p className="text-xs text-gray-400">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}