import type { SVGProps } from "react";

export function BracesIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M6 10H18" />
      <path d="M6 14H18" />
      <path d="M9 7V17" />
      <path d="M15 7V17" />
      <path d="M7 7V10C7 10 7 12 9 12C11 12 11 10 11 10V7" />
      <path d="M13 7V10C13 10 13 12 15 12C17 12 17 10 17 10V7" />
      <path d="M7 17V14C7 14 7 12 9 12" />
      <path d="M11 17V14C11 14 11 12 9 12" />
      <path d="M13 17V14C13 14 13 12 15 12" />
      <path d="M17 17V14C17 14 17 12 15 12" />
    </svg>
  );
}
