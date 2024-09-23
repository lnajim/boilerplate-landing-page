import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrashSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
    <rect width={40} height={40} fill="#FF3D00" fillOpacity={0.25} rx={5} />
    <g clipPath="url(#TrashSvg_svg__a)">
      <path
        fill="#FF3D00"
        fillRule="evenodd"
        d="M17 13.333C17 12.6 17.6 12 18.333 12h4c.734 0 1.334.6 1.334 1.333v1.334h4V16h-1.334v9.667A2.327 2.327 0 0 1 24 28h-7a2.675 2.675 0 0 1-2.667-2.667V16H13v-1.333h4zm1.333 1.334h4V14a.66.66 0 0 0-.666-.667H19a.66.66 0 0 0-.667.667zM17 17.333h1.333v8H17zm2.667 0H21v8h-1.333zm2.666 0h1.334v8h-1.334z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="TrashSvg_svg__a">
        <path fill="#fff" d="M13 12h14.667v16H13z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrashSvg;
