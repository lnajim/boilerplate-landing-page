import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBookingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} fill="none" {...props}>
    <rect width={37.143} height={37.143} fill="#34B881" rx={5} />
    <path
      fill="#fff"
      d="M19.571 9.571a1 1 0 1 0-2 0h-3a1 1 0 1 0-2 0 4 4 0 0 0-4 4v.005q.05-.005.1-.005h19.8q.051 0 .1.005v-.005a4 4 0 0 0-4-4 1 1 0 1 0-2 0z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8.571 24.571v-9.004q.05.004.1.004h19.8q.051.001.1-.004v9.004a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4m13.708-5.707a1 1 0 0 0-1.415 0l-2.293 2.293-1.293-1.293a1 1 0 0 0-1.414 1.415l2 2a1 1 0 0 0 1.415 0l3-3a1 1 0 0 0 0-1.415"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookingIcon;
