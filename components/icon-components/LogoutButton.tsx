import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLogoutButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 30 30" {...props}>
    <rect width={30} height={30} fill="currentColor" rx={5} />
    <rect width={30} height={30} stroke="currentColor" rx={5} />
    <path
      fill="#fff"
      d="M21.942 14.689c-.078-.078-.078-.156-.156-.233l-2.337-2.334a.754.754 0 0 0-1.09 0 .75.75 0 0 0 0 1.09l1.012 1.01H15.79c-.468 0-.78.311-.78.778s.312.778.78.778h3.582l-1.012 1.01a.75.75 0 0 0 0 1.09c.156.155.39.233.545.233s.39-.078.545-.233l2.337-2.334c.078-.077.156-.155.156-.233a.86.86 0 0 0 0-.622"
    />
    <path
      fill="#fff"
      d="M17.736 19.744c-.857.467-1.792.7-2.726.7A5.415 5.415 0 0 1 9.558 15a5.415 5.415 0 0 1 5.452-5.444c.934 0 1.869.233 2.726.7.39.233.857.077 1.09-.312.234-.388.078-.855-.311-1.088C17.425 8.31 16.255 8 15.01 8A6.976 6.976 0 0 0 8 15c0 3.889 3.115 7 7.01 7a6.96 6.96 0 0 0 3.505-.933c.389-.234.467-.7.311-1.09-.233-.31-.7-.466-1.09-.233"
    />
  </svg>
);
export default SvgLogoutButton;
