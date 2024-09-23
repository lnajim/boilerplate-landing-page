import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="none" {...props}>
    <circle cx={18} cy={18} r={17.5} fill="#fff" stroke="#B1B3B6" />
    <g fill="#656668" clipPath="url(#EditIcon_svg__a)">
      <path d="M10.548 27.166a1.712 1.712 0 0 1-1.691-1.993l.583-3.507a2.58 2.58 0 0 1 .724-1.407L20.83 9.593a2.654 2.654 0 0 1 3.666 0l1.911 1.912a2.59 2.59 0 0 1 0 3.665L15.741 25.836a2.58 2.58 0 0 1-1.406.724l-3.508.583a2 2 0 0 1-.28.023M22.663 10.5a.92.92 0 0 0-.654.271L11.343 21.437a.92.92 0 0 0-.259.503l-.583 3.506 3.56-.53a.92.92 0 0 0 .502-.259l10.666-10.666a.924.924 0 0 0 0-1.308l-1.912-1.912a.92.92 0 0 0-.654-.271" />
      <path d="M23.985 17.247a.83.83 0 0 1-.59-.244L19 12.607a.83.83 0 0 1 0-1.178.834.834 0 0 1 1.178 0l4.396 4.396a.833.833 0 0 1-.59 1.422M26.333 27.167H18a.833.833 0 1 1 0-1.667h8.333a.833.833 0 1 1 0 1.667" />
    </g>
    <defs>
      <clipPath id="EditIcon_svg__a">
        <path fill="#fff" d="M8 8h20v20H8z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEditIcon;
