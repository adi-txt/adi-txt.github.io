import React from 'react'

interface Props {
  title: string
  className?: string
}

const Subheader = ({ className, title }: Props) => {
  return <div className={className}><h6>{title}</h6></div>
}

export default Subheader
