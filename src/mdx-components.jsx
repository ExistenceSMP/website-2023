import Link from 'next/link';

function A(props) {
	return (
		<Link target={props.href.startsWith('/') ? '_self' : '_blank'} {...props}>
			{props.children}
		</Link>
	);
}

export function useMDXComponents(components) {
	return { a: A, ...components };
}
