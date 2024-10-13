import { AmericanTypewriter } from "../utils/fonts";

interface MenuCardProps {
  text1: string;
  text2?: string | null;
  onClick: () => void;
  active?: boolean;
}

export default function MenuCard({
  text1,
  text2,
  onClick,
  active,
}: MenuCardProps) {
  return (
    <>
      <button
        onClick={onClick}
        aria-label="Category"
        className="flex justify-center items-center"
      >
        <div
          className={`flex flex-row md:flex-col justify-center items-center px-4 py-1 ${
            active ? "border border-[#30312a]" : ""
          }  ${active ? "md:shadow-md" : "shadow-none"} ${
            AmericanTypewriter.className
          }`}
        >
          <span className={`text-black text-xl ${active ? "font-bold" : ""}`}>
            {text1}
          </span>
          {text2 && (
            <span className={`text-black text-xl ${active ? "font-bold" : ""}`}>
              {text2}
            </span>
          )}
        </div>
      </button>
      <div className="border-t border-gray-300 my-2" />
    </>
  );
}
