import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={12} fill="none" {...props}>
    <path
      fill="#34B881"
      d="m21.036 6.934-4.745 4.68a1.35 1.35 0 0 1-.947.386c-.343 0-.685-.129-.947-.387a1.31 1.31 0 0 1 0-1.868l2.459-2.424H1.339A1.33 1.33 0 0 1 0 6c0-.73.6-1.32 1.34-1.32h15.516l-2.459-2.425a1.31 1.31 0 0 1 0-1.868 1.353 1.353 0 0 1 1.894 0l4.745 4.68a1.31 1.31 0 0 1 0 1.867"
    />
  </svg>
);
export default SvgArrowRight;
