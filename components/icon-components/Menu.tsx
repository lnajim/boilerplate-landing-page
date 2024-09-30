import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" viewBox="0 0 26 26" {...props}>
    <rect width={26} height={26} fill="none" rx={5} />
    <g clipPath="url(#menu_svg__a)">
      <path
        fill="white"
        d="M20 12.563h-1.01a6.01 6.01 0 0 0-5.443-5.444V6h-1.094v1.119a6.01 6.01 0 0 0-5.444 5.444H6v1.093h2.683a3.82 3.82 0 0 0-1.152 2.735V20h4.375v-1.422c0-.301.246-.547.547-.547h2.188a3.83 3.83 0 0 0 3.828-3.828q-.002-.29-.094-.547H20zm-5.36 4.374h-2.357v.01a1.643 1.643 0 0 0-1.47 1.631v.328H8.625v-2.515a2.74 2.74 0 0 1 2.734-2.735h3.282a.548.548 0 0 1 0 1.094h-3.828v1.094h3.828c.904 0 1.64-.736 1.64-1.64a.548.548 0 0 1 1.094 0 2.737 2.737 0 0 1-2.734 2.733M8.11 12.563A4.93 4.93 0 0 1 13 8.189a4.93 4.93 0 0 1 4.891 4.374z "
      />
    </g>
    <defs>
      <clipPath id="menu_svg__a">
        <path d="M6 6h14v14H6z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMenu;
