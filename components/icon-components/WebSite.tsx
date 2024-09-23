import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWebSite = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <mask
      id="web-site_svg__a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance'
      }}
    >
      <path d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#web-site_svg__a)">
      <path
        fillRule="evenodd"
        d="M7.464 0h5.073c1.135 0 2.039 0 2.768.06.746.06 1.382.188 1.965.485a5 5 0 0 1 2.185 2.185c.297.583.425 1.22.486 1.965a26 26 0 0 1 .058 2.008l.001.76V10a.833.833 0 0 1-1.667 0V7.5H1.667v5c0 1.18 0 2.016.054 2.669.052.643.152 1.036.309 1.344.32.627.83 1.137 1.457 1.457.308.157.7.257 1.344.31.653.053 1.488.053 2.669.053H10A.833.833 0 0 1 10 20H7.464c-1.136 0-2.04 0-2.769-.06-.746-.06-1.382-.188-1.965-.485A5 5 0 0 1 .545 17.27c-.297-.583-.424-1.22-.485-1.965C0 14.575 0 13.672 0 12.537V7.464l.001-.84C.004 5.87.015 5.236.06 4.696.12 3.95.248 3.313.545 2.73A5 5 0 0 1 2.73.545C3.313.248 3.95.121 4.695.06 5.425 0 6.328 0 7.464 0M1.676 5.833h16.648c-.007-.38-.02-.71-.045-1.002-.052-.643-.152-1.036-.309-1.344a3.33 3.33 0 0 0-1.457-1.457c-.308-.157-.7-.257-1.344-.31-.653-.053-1.489-.053-2.669-.053h-5c-1.18 0-2.016 0-2.669.054-.643.052-1.036.152-1.344.309-.628.32-1.137.83-1.457 1.457-.157.308-.257.7-.31 1.344-.023.293-.037.622-.044 1.002m2.49-2.5c.46 0 .834.373.834.834v.008a.833.833 0 1 1-1.667 0v-.008c0-.46.373-.834.834-.834m2.5 0c.46 0 .834.373.834.834v.008a.833.833 0 0 1-1.667 0v-.008c0-.46.373-.834.834-.834m2.5 0c.46 0 .834.373.834.834v.008a.833.833 0 1 1-1.667 0v-.008c0-.46.373-.834.834-.834m4.167 5c.46 0 .833.373.833.834v.831a.833.833 0 0 1-1.666 0v-.831c0-.46.373-.834.833-.834m-4.215.804a.833.833 0 0 1 1.178-.006l1.123 1.11a.833.833 0 0 1-1.172 1.185l-1.122-1.11a.833.833 0 0 1-.007-1.179m4.937 4.97 1.23 3.161.335-.995c.133-.393.472-.675.874-.742l.502-.082zm-2.05-.67c-.371-.957.62-1.815 1.503-1.412l5.842 2.665c1.009.46.792 1.93-.282 2.106l-1.975.326-.715 2.121c-.333.987-1.719 1.015-2.095.048zM7.5 13.332c0-.46.373-.833.833-.833h1.684a.833.833 0 1 1 0 1.667H8.333a.833.833 0 0 1-.833-.834"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default SvgWebSite;