export function Logo() {
  return (
    <div className="flex items-center space-x-3" data-testid="logo">
      {/* Decorative Indian-inspired pattern */}
      <svg 
        className="h-8 w-8 text-[#C1623C]" 
        viewBox="0 0 32 32" 
        fill="none"
      >
        {/* Mandala-inspired geometric pattern */}
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
        {/* Decorative dots in cardinal directions */}
        <circle cx="16" cy="4" r="1.5" fill="currentColor" />
        <circle cx="28" cy="16" r="1.5" fill="currentColor" />
        <circle cx="16" cy="28" r="1.5" fill="currentColor" />
        <circle cx="4" cy="16" r="1.5" fill="currentColor" />
        {/* Diagonal dots */}
        <circle cx="23" cy="9" r="1" fill="currentColor" opacity="0.7" />
        <circle cx="23" cy="23" r="1" fill="currentColor" opacity="0.7" />
        <circle cx="9" cy="23" r="1" fill="currentColor" opacity="0.7" />
        <circle cx="9" cy="9" r="1" fill="currentColor" opacity="0.7" />
      </svg>
      
      {/* Brand name with gradient */}
      <div className="relative">
        <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-[#6B1F2A] via-[#C1623C] to-[#D6A419] bg-clip-text text-transparent tracking-wide">
          Advaya
        </h1>
        {/* Subtle tagline */}
        <div className="text-[10px] font-sans text-[#7A8C6D] tracking-widest uppercase opacity-75 -mt-1">
          Carry Culture
        </div>
      </div>
    </div>
  );
}
