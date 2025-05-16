import Link from 'next/link'
import React from 'react'

const Name = ({isMain,isHero}: {isMain?: boolean,isHero?: boolean}) => {
  return (
    <Link href={"/"} className={`bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 hover:opacity-80 transition-opacity ${isHero ? "text-5xl md:text-6xl lg:text-7xl font-bold mb-8" : isMain ? "text-xl font-bold" : ""}`}>John Wick</Link>
  )
}

export default Name