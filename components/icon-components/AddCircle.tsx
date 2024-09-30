import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAddCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 42 42" {...props}>
    <g filter="url(#add-circle_svg__a)">
      <path
        fill="currentColor"
        d="M21 0C9.971 0 1 8.971 1 20s8.971 20 20 20 20-8.973 20-20S32.029 0 21 0m0 36.902C11.682 36.902 4.098 29.32 4.098 20S11.682 3.098 21 3.098 37.902 10.68 37.902 20 30.32 36.902 21 36.902"
      />
      <path
        fill="#fff"
        d="M28.746 18.311h-6.197v-6.196a1.549 1.549 0 1 0-3.098 0v6.196h-6.197a1.549 1.549 0 1 0 0 3.099h6.197v6.197a1.549 1.549 0 1 0 3.098 0V21.41h6.197a1.549 1.549 0 1 0 0-3.099"
      />
    </g>
    <defs>
      <filter
        id="add-circle_svg__a"
        width={42}
        height={42}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_105_61" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_105_61" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgAddCircle;
