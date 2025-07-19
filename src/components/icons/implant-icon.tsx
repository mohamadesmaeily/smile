import type { SVGProps } from "react";

export function ImplantIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 4.5c1.4-1.4 3.6-1.4 5 0 1.4 1.4 1.4 3.6 0 5L12 14.5l-5-5c-1.4-1.4-1.4-3.6 0-5 1.4-1.4 3.6-1.4 5 0z" />
      <path d="M12 14.5v7" />
      <path d="M9 21.5h6" />
      <path d="M10 17.5h4" />
      <path d="M11 14.5h2" />
    </svg>
  );
}
