import Image from "next/image";

export function SidebarHeader({ shouldShowText, onToggleExpand, imageUrl }) {
  return (
    <div
      className={`p-4 border-b border-gray-800 flex items-center justify-between ${
        shouldShowText ? "" : "flex-col gap-2"
      }`}
    >
      {shouldShowText ? (
        <button
          onClick={onToggleExpand}
          className="flex items-center gap-3 transition-all duration-300 hover:opacity-80"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={imageUrl}
              alt="PairProgramming"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-bold tracking-tight text-xl">PairProgramming</h1>
        </button>
      ) : (
        <button
          onClick={onToggleExpand}
          className="flex items-center justify-center w-full transition-all duration-300 hover:opacity-80"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={imageUrl}
              alt="PairProgramming"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        </button>
      )}
    </div>
  );
}
