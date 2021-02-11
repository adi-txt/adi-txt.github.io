import React from 'react'

import LogoIcon from 'icons/LogoIcon'

interface Props {
  className?: string
}

const HeaderLogo = ({ className }: Props) => {
  return (
    <div className={className}>
      <LogoIcon />
    </div>
  )
}

export default HeaderLogo
