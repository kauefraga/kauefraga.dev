import { ReactTyped } from 'react-typed';
import NavLink from './NavLink';

export default function Header() {
	return (
		<header
			className='
				flex flex-col items-center gap-2 p-4 font-mono
				md:flex-row md:justify-between md:w-7/12 md:mx-auto
				lg:text-lg
			'
		>
			<div className='flex flex-col items-center md:items-start'>
				<h2 className='font-semibold'>Kauê Fraga</h2>
				<ReactTyped
					strings={[
						'Software Developer',
						'Back end Developer',
						'Code Wizard',
						'Rustacean',
						'Gopher',
						'Typescript Enjoyer',
					]}
					typeSpeed={100}
					loop
				/>
			</div>

			<nav className='space-x-5'>
				<NavLink href='/about'>/about</NavLink>
				<NavLink href='/blog'>/blog</NavLink>
				<NavLink href='/projects'>/project</NavLink>
			</nav>
		</header>
	);
}
