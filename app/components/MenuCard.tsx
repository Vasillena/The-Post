import { KyivMachine } from "../utils/fonts";

interface MenuCardProps {
  text1: string;
  onClick: () => void;
  active?: boolean;
}

export default function MenuCard({ text1, onClick, active }: MenuCardProps) {
  return (
    <>
      <button
        onClick={onClick}
        aria-label="Category"
        className="flex justify-center items-center"
      >
        <div
          className={`flex flex-row md:flex-col justify-center items-center min-w-44 h-12 md:h-16 px-2 gap-2 md:gap-0 ${
            active ? "border border-[#30312a]" : ""
          }  ${active ? "md:shadow-md" : "shadow-none"} ${
            KyivMachine.className
          }`}
        >
          <span className={`text-black text-xl ${active ? "font-bold" : ""}`}>
            {text1}
          </span>
        </div>
      </button>
    </>
  );
}
