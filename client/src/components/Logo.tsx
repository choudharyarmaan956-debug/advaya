export function Logo() {
  return (
    <div className="flex items-center group" data-testid="logo">
      {/* Premium Brand Typography */}
      <div className="flex flex-col justify-center">
        <h1 
          className="font-serif font-black leading-none tracking-tight text-[hsl(345,56%,27%)] transition-all duration-300 group-hover:text-[hsl(16,57%,51%)]"
          style={{
            fontSize: "36px",
            textShadow: "2px 2px 4px hsl(345,56%,27%,0.12), 1px 1px 2px rgba(0,0,0,0.08)",
            letterSpacing: "-0.02em"
          }}
        >
          Advaya
        </h1>
        <div 
          className="font-sans font-semibold tracking-wider text-[hsl(16,57%,51%)] transition-all duration-300 group-hover:text-[hsl(332,64%,70%)] -mt-1"
          style={{
            fontSize: "13px",
            opacity: 0.9,
            letterSpacing: "0.08em",
            textTransform: "lowercase"
          }}
        >
          carry your culture
        </div>
      </div>
    </div>
  );
}
