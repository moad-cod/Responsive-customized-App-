import React from 'react'


type NavItems = {
  title: string
  url: string
}


const Navbar = () => {
  const navItems: NavItems[] = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ]
  return (
    <div className='flex justify-between items-center px-6 py-4 bg-green-600 lg:px-20'>
      <img src="public/logo.svg" alt="/" className='w-12 h-12 cursor-pointer'/>
      <ul className='flex gap-4 bg-amber-200 p-2 text-l font-bold'>
        {navItems.map((item) => (
          <li key={item.title}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
