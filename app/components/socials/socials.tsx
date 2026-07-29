// Socials.tsx
import { styles } from "@/app/sharedStyling/styles";
import { socialLinks } from "@/app/data/socialData";

interface SocialsProps {
	styles: typeof styles;
}

export function Socials({ styles }: SocialsProps) {
	const icons = socialLinks.images[0];
	const links = socialLinks.links[0];
	const socialIcons = [
		{ logo: icons.linkedin, link: links.linkedin, alt: "LinkedIn Icon" },
		{ logo: icons.instagram, link: links.instagram, alt: "Instagram Icon" },
		{ logo: icons.twitter, link: links.twitter, alt: "Twitter Icon" },
	];

	return (
		<table border={0} cellPadding={0} cellSpacing={0} width="60px">
			<tbody>
				<tr>
					{socialIcons.map((icon) => (
						<td key={icon.alt} style={{ paddingRight: "4px" }}>
							<a
								href={icon.link}
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: "none" }}
							>
								<img
									src={icon.logo}
									alt={icon.alt}
									width={styles.socialIcon_width}
									height={styles.socialIcon_height}
									style={{ display: "block", border: 0 }}
								/>
							</a>
						</td>
					))}
				</tr>
			</tbody>
		</table>
	);
}
