// SmallA.tsx
import { EmailSignatureProps } from "@/app/data/props/emailSignatureProps";
import { Socials } from "@/app/components/socials/socials";
import { socialLinks } from "@/app/data/socialData";

export function SmallA({
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
					backgroundColor: styles.table_background,
				}}
			>
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
								paddingBottom: "14px",
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
							align="left"
							height="13px"
							style={{ fontSize: 0, lineHeight: "13px" }}
						>
							<table
								border={0}
								cellPadding={0}
								cellSpacing={0}
								width={styles.line_width}
							>
								<tbody>
									<tr>
										<td
											style={{
												borderTop: "1px solid grey",
												fontSize: 0,
												lineHeight: "13px",
											}}
										>
											&nbsp;
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
					<tr>
						<td align="left">
							<table border={0} cellPadding={0} cellSpacing={0} width="150px">
								<tbody>
									<tr>
										<td
											style={{ verticalAlign: "middle", paddingRight: "10px" }}
										>
											<img
												src={images.logoSmall}
												alt="iFIT Logo small"
												width={styles.logo_width_small}
												height={styles.logo_height_small}
												style={{ display: "block" }}
											/>
										</td>
										<td style={{ verticalAlign: "top" }}>
											<table
												border={0}
												cellPadding={0}
												cellSpacing={0}
												width="100%"
											>
												<tbody>
													<tr>
														<td align="left">
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
														<td align="left" style={{ paddingTop: "4px" }}>
															<Socials styles={styles} />
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
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
								paddingTop: styles.disclaimer_padding,
							}}
						>
							{content.disclaimer}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
