"use client";

import { BiTask } from "react-icons/bi";
import Link from 'next/link';
import React from 'react';
import { ThemePicker } from '@/app/themes';
import classnames from "classnames";
import { usePathname } from "next/navigation";

export const NavBar = () => {

  const currentPath = usePathname();
  console.log(currentPath);
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
				<Link  key={link.href} href={link.href} className={classnames({
					"font-medium": link.href === currentPath,
					"text-zinc-900": link.href === currentPath,
					"text-zinc-500": link.href !== currentPath,
					"hover:text-zinc-800 transition-colors": true,
				})}>
					{link.label}
			
				</Link>
					
				)
			})}
			
		</ul>
		<div className="flex-grow"></div>
		<div className="pr-6"><ThemePicker /></div>
	</nav>
  )
}
