import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <circle cx={12} cy={12} r={12} fill="#fff" />
    <circle cx={12} cy={12} r={11.5} stroke="#ADADAD" strokeOpacity={0.66} />
    <path
      fill="#ADADAD"
      fillOpacity={0.66}
      d="m14.032 12 3.547-3.547a1.437 1.437 0 1 0-2.032-2.032L12 9.968 8.453 6.421A1.437 1.437 0 0 0 6.42 8.453L9.968 12 6.42 15.547a1.437 1.437 0 1 0 2.032 2.032L12 14.032l3.547 3.547c.28.281.649.421 1.016.421a1.437 1.437 0 0 0 1.016-2.453z"
    />
  </svg>
);
export default SvgClose;
