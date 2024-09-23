import * as React from 'react';
import type { SVGProps } from 'react';
const SvgJobMarket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 42 42" {...props}>
    <g fill="currentColor" filter="url(#job-market_svg__a)">
      <path d="M13.188 4.688a1.562 1.562 0 1 0 3.124 0c0-.862.701-1.563 1.563-1.563h6.25c.862 0 1.563.7 1.563 1.563a1.562 1.562 0 1 0 3.125 0A4.693 4.693 0 0 0 24.125 0h-6.25a4.693 4.693 0 0 0-4.687 4.688M36.313 9.375H5.686A4.693 4.693 0 0 0 1 14.063v3.124c0 2.551 1.229 4.82 3.125 6.246v11.88A4.693 4.693 0 0 0 8.813 40h24.374a4.693 4.693 0 0 0 4.688-4.687v-11.88A7.8 7.8 0 0 0 41 17.188v-3.125a4.693 4.693 0 0 0-4.687-4.688m1.562 7.813a4.693 4.693 0 0 1-4.687 4.687H27.25a1.562 1.562 0 1 0 0 3.125h5.938q.803-.001 1.562-.157v10.47c0 .861-.7 1.562-1.562 1.562H8.811c-.861 0-1.562-.7-1.562-1.562v-10.47A8 8 0 0 0 8.813 25h5.937a1.562 1.562 0 1 0 0-3.125H8.813a4.693 4.693 0 0 1-4.688-4.687v-3.125c0-.862.7-1.563 1.563-1.563h30.625c.861 0 1.562.7 1.562 1.563z" />
      <path d="M21 21.875c-.863 0-1.562.7-1.562 1.563v3.125a1.562 1.562 0 1 0 3.125 0v-3.125c0-.863-.7-1.563-1.563-1.563" />
    </g>
    <defs>
      <filter
        id="job-market_svg__a"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_105_63" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_105_63" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgJobMarket;
