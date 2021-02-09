import React from 'react'

interface Props {
  href: string
  title: string
  className?: string
}

const Link = ({ href, className, title }: Props) => {
  return <a className={className} href={href}>{title}</a>
}

export default Link
