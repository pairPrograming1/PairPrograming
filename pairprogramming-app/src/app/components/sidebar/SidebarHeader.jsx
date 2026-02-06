import Image from "next/image";
import Link from "next/link";

export function SidebarHeader({ shouldShowText, onToggleExpand, imageUrl }) {
  return (
    <div
      className={`p-4 border-b border-border-color flex items-center justify-between ${
        shouldShowText ? "" : "flex-col gap-2"
      }`}
    >
      {shouldShowText ? (
        <>
          <Link
            href="/"
            className="flex items-center gap-3 transition-all duration-300 hover:opacity-80"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 shadow-md shadow-brand-blue/10">
              <Image
                src={imageUrl}
                alt="PairProgramming"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-bold tracking-tight text-xl">
              <span className="text-brand-blue">pair</span>
              <span className="text-foreground">programming</span>
            </h1>
          </Link>
          <button
            onClick={onToggleExpand}
            className="p-1.5 rounded-lg hover:bg-hover-bg text-secondary-text hover:text-brand-blue transition-all duration-300 flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="11 17 6 12 11 7" />
              <polyline points="18 17 13 12 18 7" />
            </svg>
          </button>
        </>
      ) : (
        <button
          onClick={onToggleExpand}
          className="flex items-center justify-center w-full transition-all duration-300 hover:opacity-80"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden shadow-md shadow-brand-blue/10">
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
