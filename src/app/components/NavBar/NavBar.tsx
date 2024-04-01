import { BiTask } from "react-icons/bi";
import Link from 'next/link';
import React from 'react';
import { ThemePicker } from '@/app/themes';

export const NavBar = () => {
  const links = [
	{ href: '/', label: 'Dashboard' },
	{ href: '/tasks', label: 'Tasks' },
  ]
  return (
	<nav className="flex space-x-6  border-b mb-5 px-5 h-14 items-center">
		<Link href="/"><BiTask/></Link>
		<ul className="flex space-x-6">
			{links.map(link => {
				return (
				<Link  key={link.href} href={link.href} className="text-zinc-500 hover:text-zinc-800 transition-colors">{link.label}
				</Link>
					
				)
			})}
			
		</ul>
		<div className="flex-grow"></div>
		<div className="pr-6"><ThemePicker /></div>
	</nav>
  )
}
