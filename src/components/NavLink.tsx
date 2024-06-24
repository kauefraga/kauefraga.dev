import type { AnchorHTMLAttributes } from 'react';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: string;
}

export default function NavLink({ children, ...anchorProps }: NavLinkProps) {
	return (
		<a
			{...anchorProps}
			className='hover:underline decoration-violet-600 decoration-2'
		>
			{children}
		</a>
	);
}
