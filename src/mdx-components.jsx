import Link from 'next/link';

function A(props) {
	return <Link {...props}>{props.children}</Link>;
}

export function useMDXComponents(components) {
	return { a: A, ...components };
}
