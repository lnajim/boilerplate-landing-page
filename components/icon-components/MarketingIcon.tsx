import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarketingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26" {...props}>
    <rect width={26} height={26} fill="currentColor" rx={5} />
    <g clipPath="url(#Marketing_icon_svg__a)">
      <path
        fill="#fff"
        d="M18.63 7.837H7.37c-.756 0-1.37.614-1.37 1.37v7.304c0 .755.614 1.37 1.37 1.37h4.049l1.186 2.054a.457.457 0 0 0 .79 0l1.186-2.054h4.05c.755 0 1.369-.615 1.369-1.37V9.207c0-.756-.614-1.37-1.37-1.37m-2.133 3.54-.174 1.4a.457.457 0 0 1-.728.309l-.233-.176-1.408 1.771a.457.457 0 0 1-.715 0l-1.463-1.838-1.462 1.838a.456.456 0 1 1-.715-.568l1.82-2.288a.457.457 0 0 1 .715 0l1.462 1.839 1.037-1.304-.165-.125a.457.457 0 0 1 .097-.784l1.298-.55a.457.457 0 0 1 .634.475"
      />
    </g>
    <defs>
      <clipPath id="Marketing_icon_svg__a">
        <path fill="#fff" d="M6 7h14v14H6z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMarketingIcon;
