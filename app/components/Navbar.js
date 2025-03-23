import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        MH Parvej
      </Link>
      <div className="space-x-6">
        <Link href="#about" className="hover:text-orange-500">About</Link>
        <Link href="#projects" className="hover:text-orange-500">Projects</Link>
        <Link href="#contact" className="hover:text-orange-500">Contact</Link>
        <Link href="#contact" className="btn btn-ghost">hi</Link>
    
      </div>
     
    </div>
  </nav>
  )
}
