import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSupplier = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26" {...props}>
    <rect width={26} height={26} fill="currentColor" rx={5} />
    <g clipPath="url(#supplier_svg__a)">
      <path
        fill="#fff"
        d="M20 17.266V12.89a.547.547 0 0 0-.547-.547h-1.64V8.516a.547.547 0 0 0-.547-.547H12.89a.547.547 0 0 0-.547.547v3.828h-1.64a.547.547 0 0 0-.548.547v3.828H9.61a.55.55 0 0 1-.546-.547V7.64C9.063 6.736 8.327 6 7.422 6h-.875a.547.547 0 1 0 0 1.094h.875c.301 0 .547.245.547.547v8.53c0 .906.736 1.642 1.64 1.642h.641A1.643 1.643 0 0 0 11.797 20a1.642 1.642 0 0 0 1.546-2.189h3.47A1.642 1.642 0 0 0 18.36 20a1.642 1.642 0 0 0 1.48-2.347.55.55 0 0 0 .16-.387m-1.094-.547h-3.281v-3.282h1.094v.547a.547.547 0 1 0 1.093 0v-.546h1.094zm-4.375-7.657v.547a.547.547 0 0 0 1.094 0v-.546h1.094v3.28h-3.282v-3.28zm-2.187 9.297a.548.548 0 1 1-1.095-.001.548.548 0 0 1 1.095.001m-1.094-1.64v-3.282h1.094v.547a.547.547 0 1 0 1.094 0v-.546h1.093v3.28zm7.11 2.187a.547.547 0 1 1 0-1.095.547.547 0 0 1 0 1.095"
      />
    </g>
    <defs>
      <clipPath id="supplier_svg__a">
        <path fill="#fff" d="M6 6h14v14H6z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSupplier;
