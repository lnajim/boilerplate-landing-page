import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNotes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26" {...props}>
    <rect width={26} height={26} fill="currentColor" rx={5} />
    <g fill="#fff" clipPath="url(#notes_svg__a)">
      <path d="M16.883 6.542 9.77 13.655a2.9 2.9 0 0 0-.854 2.062v.783a.583.583 0 0 0 .583.583h.783a2.9 2.9 0 0 0 2.063-.854l7.111-7.112a1.823 1.823 0 0 0 0-2.575 1.863 1.863 0 0 0-2.574 0m1.75 1.75-7.112 7.113c-.33.326-.774.51-1.238.512h-.2v-.2c.002-.464.186-.909.512-1.238l7.112-7.112a.67.67 0 0 1 .926 0 .655.655 0 0 1 0 .925" />
      <path d="M19.417 11.238a.583.583 0 0 0-.584.583v2.929H16.5a1.75 1.75 0 0 0-1.75 1.75v2.333H8.917a1.75 1.75 0 0 1-1.75-1.75V8.917a1.75 1.75 0 0 1 1.75-1.75h5.274a.583.583 0 1 0 0-1.167H8.917A2.92 2.92 0 0 0 6 8.917v8.166A2.92 2.92 0 0 0 8.917 20h6.616a2.9 2.9 0 0 0 2.063-.854l1.55-1.55A2.9 2.9 0 0 0 20 15.533v-3.712a.583.583 0 0 0-.583-.583M16.77 18.32a1.74 1.74 0 0 1-.854.467V16.5a.583.583 0 0 1 .583-.583h2.29a1.76 1.76 0 0 1-.467.854z" />
    </g>
    <defs>
      <clipPath id="notes_svg__a">
        <path fill="#fff" d="M6 6h14v14H6z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotes;
