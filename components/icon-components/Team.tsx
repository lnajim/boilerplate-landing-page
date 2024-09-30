import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTeam = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26" {...props}>
    <rect width={26} height={26} fill="currentColor" rx={5} />
    <path
      fill="#fff"
      d="M16.5 20h-7A1.5 1.5 0 0 1 8 18.5v-9A1.5 1.5 0 0 1 9.5 8h2V6.5A.5.5 0 0 1 12 6h2a.5.5 0 0 1 .5.5V8h2A1.5 1.5 0 0 1 18 9.5v9a1.5 1.5 0 0 1-1.5 1.5m-7-11a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-2v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V9zm3 .5h1V7h-1zm2.25 8h-3.5a.5.5 0 0 1-.5-.5v-.75a2.26 2.26 0 0 1 .945-1.835 1.75 1.75 0 1 1 2.61 0 2.26 2.26 0 0 1 .945 1.835V17a.5.5 0 0 1-.5.5m-3-1h2.5v-.25a1.25 1.25 0 0 0-2.5 0zm1.25-4a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
    />
  </svg>
);
export default SvgTeam;
