import React from 'react'

const Mail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    aria-labelledby="aboutIconTitle"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    color="#eee"
    stroke="#eee"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

export default Mail
