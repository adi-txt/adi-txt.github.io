import React from 'react'

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="24"
    aria-labelledby="aboutIconTitle"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="#eee"
    color="#eee"
    stroke="#eee"
    {...props}
  >
    <path d="M3.96307 18L5.40341 13.696H11.9659L13.4148 18H16.7898L10.6364 0.545454H6.73295L0.588068 18H3.96307ZM6.25568 11.1562L8.61648 4.125H8.75284L11.1136 11.1562H6.25568ZM29.3672 8.00284H17.3672V10.5426H29.3672V8.00284ZM41.3672 8.00284H29.3672V10.5426H41.3672V8.00284ZM43.0888 0.545454V18H46.1229V5.98295H46.2848L51.1087 17.9489H53.3757L58.1996 6.00852H58.3615V18H61.3956V0.545454H57.5263L52.3445 13.1932H52.1399L46.9581 0.545454H43.0888Z" />
  </svg>
)

export default LogoIcon
