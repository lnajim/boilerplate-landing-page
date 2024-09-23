import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26" {...props}>
    <rect width={26} height={26} fill="currentColor" rx={5} />
    <path
      fill="#fff"
      d="M11.5 8H7c-.265 0-.52.11-.707.308A1.08 1.08 0 0 0 6 9.05v2.625c0 .278.105.545.293.742a.98.98 0 0 0 .707.308h4.5c.265 0 .52-.11.707-.307.188-.197.293-.464.293-.743V9.05c0-.278-.105-.546-.293-.742A.98.98 0 0 0 11.5 8m0 3.675H7V9.05h4.5zM11.5 13.775H7c-.265 0-.52.11-.707.307a1.08 1.08 0 0 0-.293.743v2.625c0 .279.105.546.293.742A.98.98 0 0 0 7 18.5h4.5c.265 0 .52-.11.707-.308.188-.197.293-.463.293-.742v-2.625c0-.278-.105-.546-.293-.742a.98.98 0 0 0-.707-.308m0 3.675H7v-2.625h4.5zM19 8h-4.5c-.265 0-.52.11-.707.308a1.08 1.08 0 0 0-.293.742v8.4c0 .279.105.546.293.742a.98.98 0 0 0 .707.308H19c.265 0 .52-.11.707-.308.188-.197.293-.463.293-.742v-8.4c0-.278-.105-.546-.293-.742A.98.98 0 0 0 19 8m0 9.45h-4.5v-8.4H19z"
    />
  </svg>
);
export default SvgDashboard;
