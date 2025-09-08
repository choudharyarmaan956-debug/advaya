export function Logo() {
  return (
    <div className="flex items-center space-x-3" data-testid="logo">
      <h1 
        className="tracking-tight font-bold"
        style={{
          fontSize: "36px",
          color: "#EDB7C4",
          fontFamily: "'Helvetica Neue', Arial, sans-serif"
        }}
      >
        Advaya
      </h1>
      <div className="flex flex-col items-start -ml-2">
        <span
          style={{
            color: "#EDB7C4",
            fontSize: "11px",
            fontWeight: "500",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            opacity: 0.8
          }}
        >
          by Vaishnavi Verma
        </span>
      </div>
    </div>
  );
}
