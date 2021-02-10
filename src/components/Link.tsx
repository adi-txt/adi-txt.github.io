import React from 'react'

interface Props {
  href: string
  title: string
  className?: string
}

const Link = ({ href, className, title }: Props) => {
  return (
    <span className="underline">
      <a className={className} href={href}>{title}</a>
    </span>
  )
}

export default Link
