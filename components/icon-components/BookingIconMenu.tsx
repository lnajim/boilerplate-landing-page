import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBookingIconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" {...props}>
    <rect width={26} height={26} fill="#656668" rx={5} />
    <path
      fill="#fff"
      d="M13.7 6.7a.7.7 0 1 0-1.4 0h-2.1a.7.7 0 1 0-1.4 0A2.8 2.8 0 0 0 6 9.5v.003l.07-.003h13.86q.036 0 .07.003V9.5a2.8 2.8 0 0 0-2.8-2.8.7.7 0 1 0-1.4 0z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6 17.2v-6.303l.07.003h13.86l.07-.003V17.2a2.8 2.8 0 0 1-2.8 2.8H8.8A2.8 2.8 0 0 1 6 17.2m9.595-3.995a.7.7 0 0 0-.99 0L13 14.81l-.905-.905a.7.7 0 0 0-.99.99l1.4 1.4a.7.7 0 0 0 .99 0l2.1-2.1a.7.7 0 0 0 0-.99"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookingIconMenu;
