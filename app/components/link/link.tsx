import Link from "next/link";

interface linkProps {
	img: string;
	alt: string;
	href: string;
}
export function iFITLink({ img, alt, href }: linkProps) {
	return (
		<Link href={href} target="_blank" rel="noopener noreferrer">
			iFIT.com
			<img src={img} alt={alt} />
		</Link>
	);
}
