// SmallB.tsx
import { EmailSignatureProps } from "@/app/data/props/emailSignatureProps";
import { formatPhoneNumber } from "@/app/scripts/formatNumber";
import { Socials } from "@/app/components/socials/socials";
import { socialLinks } from "@/app/data/socialData";

export function SmallB({
	styles,
	layouts,
	content,
	images,
}: EmailSignatureProps) {
	return (
		<div style={{ padding: styles.table_padding }}>
			<table
				border={0}
				cellPadding={0}
				cellSpacing={0}
				width="100%"
				style={{
					tableLayout: styles.table_layout,
					width: styles.table_width,
					paddingLeft: "20px",
					paddingTop: "20px",
					paddingRight: "20px",
					paddingBottom: "12px",
					backgroundColor: styles.table_background,
				}}
			>
				<tbody>
					<tr>
						<td
							style={{
								borderRight: "1px solid black",
								paddingRight: "10px",
								verticalAlign: "middle",
								width: "80px",
							}}
						>
							<table border={0} cellPadding={0} cellSpacing={0}>
								<tbody>
									<tr>
										<td>
											<img
												src={images.logoSmall}
												alt="iFIT Logo small"
												width={styles.logo_width_small}
												height={styles.logo_height_small}
												style={{ display: "block" }}
											/>
										</td>
									</tr>
									<tr>
										<td style={{ paddingTop: "5px" }}>
											<a
												href={socialLinks.links[0].ifit}
												target="_blank"
												rel="noopener noreferrer"
												style={{
													textDecoration: "none",
													color: styles.font_color,
													fontFamily: styles.font_family,
													fontSize: styles.font_size_subInfo_small,
													fontStyle: styles.font_style,
													fontWeight: styles.font_weight_name,
													lineHeight: "20px",
												}}
											>
												{content.website}
											</a>
											<img
												src={images.arrowIcon}
												alt="Arrow"
												width={styles.arrow_size}
												height={styles.arrow_size}
												style={{
													display: "inline-block",
													verticalAlign: "middle",
												}}
											/>
										</td>
									</tr>
									<tr>
										<td style={{ paddingTop: "4px" }}>
											<Socials styles={styles} />
										</td>
									</tr>
								</tbody>
							</table>
						</td>
						<td
							style={{
								paddingLeft: "10px",
								verticalAlign: "middle",
								width: "auto",
								height: "100px",
							}}
						>
							<table border={0} cellPadding={0} cellSpacing={0} width="100%">
								<tbody>
									<tr>
										<td
											className={`email-signature-name-${layouts[0]}`}
											style={{
												color: styles.font_color,
												fontFamily: styles.font_family,
												fontSize: styles.font_size_small,
												fontStyle: styles.font_style,
												fontWeight: styles.font_weight_name,
												lineHeight: "25px",
											}}
										>
											{content.name}
										</td>
									</tr>
									<tr>
										<td
											className={`email-signature-title-${layouts[0]}`}
											style={{
												color: styles.font_color,
												fontFamily: styles.font_family,
												fontSize: styles.font_size_subInfo_small,
												fontStyle: styles.font_style,
												fontWeight: styles.font_weight_subInfo,
												lineHeight: "18px",
											}}
										>
											{content.title}
										</td>
									</tr>
									<tr>
										<td
											className={`email-signature-mobile-${layouts[0]}`}
											style={{
												color: styles.font_color,
												fontFamily: styles.font_family,
												fontSize: styles.font_size_subInfo_small,
												fontStyle: styles.font_style,
												fontWeight: styles.font_weight_subInfo,
												lineHeight: "20px",
												letterSpacing: styles.letter_spacing,
											}}
										>
											{formatPhoneNumber({ entry: content.phone, ruleset: "" })}
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
					<tr>
						<td colSpan={2} style={{ paddingTop: styles.disclaimer_padding }}>
							<table border={0} cellPadding={0} cellSpacing={0} width="100%">
								<tbody>
									<tr>
										<td
											className="disclaimer"
											align="left"
											style={{
												lineHeight: "12px",
												color: styles.font_color,
												fontFamily: styles.font_family,
												fontSize: styles.font_size_subInfo_small,
												fontWeight: styles.font_weight_subInfo,
											}}
										>
											{content.disclaimer}
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
