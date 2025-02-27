import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  const navItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'counter',
      href: '/counter'
    },
    {
      label: 'input-text',
      href: '/input/text',
    },
    {
      label: 'input-button',
      href: '/input/button',
    },
    {
      label: 'input-select',
      href: '/input/select',
    },
  ]
  return (
    <ul className='flex gap-4 mb-4 '>
      {
        navItems.map(item => <li className='underline text-[yellow] ' key={item.label}>
          <Link href={item.href}  >
            {item.label}
          </Link>

        </li>)
      }
    </ul>
  )
}

export default Navbar