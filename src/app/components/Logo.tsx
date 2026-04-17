export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="10" fill="#0b1220" />
      <path
        d="M10 28V12h4v12h10v4H10z"
        fill="#fff"
      />
      <circle cx="29" cy="13" r="3.5" fill="#d97706" />
    </svg>
  );
}
