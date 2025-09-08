export function Logo() {
  return (
    <div className="flex items-center space-x-4" data-testid="logo">
      {/* Hanging Tote Bag on Needle */}
      <div className="relative">
        <svg 
          className="w-8 h-10 transform -rotate-12 transition-transform duration-300 hover:rotate-6" 
          viewBox="0 0 32 40" 
          fill="none"
          style={{ filter: "drop-shadow(2px 3px 4px rgba(0,0,0,0.15))" }}
        >
          {/* Needle/Hook */}
          <path 
            d="M16 2 Q15.5 1 16 0 Q16.5 1 16 2 L16 8" 
            stroke="#8B7355" 
            strokeWidth="1.5" 
            fill="none"
          />
          <circle cx="16" cy="8" r="1" fill="#8B7355" />
          
          {/* Hanging String */}
          <path 
            d="M16 8 Q15.5 10 16 12" 
            stroke="#A0826D" 
            strokeWidth="0.8" 
            fill="none"
          />
          
          {/* Tote Bag Body */}
          <path 
            d="M8 14 Q8 13 9 13 L23 13 Q24 13 24 14 L24 32 Q24 34 22 34 L10 34 Q8 34 8 32 Z" 
            fill="#EDB7C4" 
            stroke="#D4A5B0" 
            strokeWidth="0.8"
          />
          
          {/* Tote Bag Handles */}
          <path 
            d="M12 13 Q12 10 16 10 Q20 10 20 13" 
            stroke="#D4A5B0" 
            strokeWidth="2" 
            fill="none"
          />
          
          {/* Desi Pattern - Simple Block Print Style */}
          <circle cx="13" cy="20" r="1.5" fill="#C49AA6" opacity="0.7" />
          <circle cx="19" cy="22" r="1.5" fill="#C49AA6" opacity="0.7" />
          <circle cx="16" cy="26" r="1.5" fill="#C49AA6" opacity="0.7" />
          
          {/* Small decorative dots */}
          <circle cx="11" cy="24" r="0.5" fill="#C49AA6" opacity="0.5" />
          <circle cx="21" cy="19" r="0.5" fill="#C49AA6" opacity="0.5" />
          <circle cx="14" cy="29" r="0.5" fill="#C49AA6" opacity="0.5" />
          <circle cx="18" cy="29" r="0.5" fill="#C49AA6" opacity="0.5" />
        </svg>
      </div>
      
      {/* Brand Typography */}
      <div className="flex flex-col">
        <h1 
          className="tracking-tight font-black"
          style={{
            fontSize: "36px",
            color: "#EDB7C4",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1), 1px 1px 2px rgba(237,183,196,0.3)"
          }}
        >
          Advaya
        </h1>
        <div 
          className="tracking-wider font-medium -mt-1"
          style={{
            fontSize: "12px",
            color: "#EDB7C4",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            opacity: 0.8
          }}
        >
          carry your culture
        </div>
      </div>
    </div>
  );
}
