export const Cherry = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8C32 8 28 16 20 20C12 24 8 32 8 32" stroke="#0A7D4D" strokeWidth="3" strokeLinecap="round"/>
    <path d="M32 8C32 8 36 16 44 20C52 24 56 32 56 32" stroke="#0A7D4D" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="16" cy="44" r="12" fill="#E8532D" stroke="#070606" strokeWidth="3"/>
    <circle cx="48" cy="44" r="12" fill="#E8532D" stroke="#070606" strokeWidth="3"/>
    <ellipse cx="12" cy="40" rx="3" ry="2" fill="#FFF6E5" opacity="0.6"/>
    <ellipse cx="44" cy="40" rx="3" ry="2" fill="#FFF6E5" opacity="0.6"/>
  </svg>
);

export const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L18 12L28 14L18 16L16 26L14 16L4 14L14 12L16 2Z" fill="#FEC1E8" stroke="#070606" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const Flower = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="12" r="8" fill="#FEC1E8" stroke="#070606" strokeWidth="2"/>
    <circle cx="12" cy="24" r="8" fill="#FED8E7" stroke="#070606" strokeWidth="2"/>
    <circle cx="36" cy="24" r="8" fill="#FAE6E7" stroke="#070606" strokeWidth="2"/>
    <circle cx="16" cy="36" r="8" fill="#FEE1C4" stroke="#070606" strokeWidth="2"/>
    <circle cx="32" cy="36" r="8" fill="#FEC1E8" stroke="#070606" strokeWidth="2"/>
    <circle cx="24" cy="24" r="6" fill="#E8532D" stroke="#070606" strokeWidth="2"/>
  </svg>
);

export const Smiley = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#FEE1C4" stroke="#070606" strokeWidth="3"/>
    <circle cx="16" cy="20" r="3" fill="#070606"/>
    <circle cx="32" cy="20" r="3" fill="#070606"/>
    <path d="M14 30C14 30 18 36 24 36C30 36 34 30 34 30" stroke="#070606" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="10" cy="24" r="4" fill="#FEC1E8" opacity="0.6"/>
    <circle cx="38" cy="24" r="4" fill="#FEC1E8" opacity="0.6"/>
  </svg>
);

export const Heart = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 42L6 24C2 20 2 12 8 8C14 4 20 8 24 14C28 8 34 4 40 8C46 12 46 20 42 24L24 42Z" fill="#E8532D" stroke="#070606" strokeWidth="3" strokeLinejoin="round"/>
    <ellipse cx="14" cy="16" rx="4" ry="3" fill="#FFF6E5" opacity="0.5"/>
  </svg>
);

export const Star = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L28 18H44L31 28L36 44L24 34L12 44L17 28L4 18H20L24 4Z" fill="#FEE1C4" stroke="#070606" strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
);

export const Cloud = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52 32H12C6 32 2 28 2 22C2 16 6 12 12 12C12 6 18 2 26 2C34 2 40 8 40 14C44 12 50 14 54 18C58 22 58 28 52 32Z" fill="#FFF6E5" stroke="#070606" strokeWidth="3"/>
  </svg>
);
