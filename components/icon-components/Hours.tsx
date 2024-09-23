import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHours = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26" {...props}>
    <rect width={26} height={26} fill="currentColor" rx={5} />
    <g clipPath="url(#hours_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6 13c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7-7 3.14-7 7m8.887 2.595-2.24-2.242A.5.5 0 0 1 12.5 13V8.472a.5.5 0 0 1 1 0v4.321l2.095 2.095a.501.501 0 0 1-.708.707"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="hours_svg__a">
        <path fill="#fff" d="M6 6h14v14H6z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHours;
