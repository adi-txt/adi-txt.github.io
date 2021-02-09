import React from 'react'

interface Props {
  title: string
  className?: string
}

const Header = ({ className, title }: Props) => {
  return <div className={className}><h5>{title}</h5></div>
}

export default Header
