// LargeB.tsx
import type { CSSProperties } from "react";
import { EmailSignatureProps } from "@/app/data/props/emailSignatureProps";
import { formatPhoneNumber } from "@/app/scripts/formatNumber";
import { Socials } from "@/app/components/socials/socials";
import { socialLinks } from "@/app/data/socialData";

export function LargeB({
	styles,
	layouts,
	content,
	images,
}: EmailSignatureProps) {
	return (
		<div id={layouts[0]} style={{ backgroundColor: styles.table_background }}>
			<table
				border={0}
				cellPadding={0}
				cellSpacing={0}
				width="100%"
				bgcolor={styles.table_background}
				style={{ backgroundColor: styles.table_background }}
			>
				<tbody>
					<tr>
						<td style={{ padding: styles.table_padding }}>
							<table
								border={0}
								cellPadding={0}
								cellSpacing={0}
								width="100%"
								bgcolor={styles.table_background}
								style={{
									tableLayout: styles.table_layout,
									width: styles.table_width,
									backgroundColor: styles.table_background,
								}}
							>
								<tbody>
									<tr>
										<td style={{ paddingBottom: "14px" }}>
											<img
												src={images.logoLarge}
												alt="iFIT logo"
												width={styles.logo_width_large}
												height={styles.logo_height_large}
												style={{ display: "block" }}
											/>
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
															style={
																{
																	borderTop: "1px solid grey",
																	fontSize: 0,
																	lineHeight: "13px",
																	msoLineHeightRule: "exactly",
																} as CSSProperties
															}
														>
															&nbsp;
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
									<tr>
										<td
											className={`email-signature-name-${layouts[0]}`}
											style={{
												color: styles.font_color,
												fontFamily: styles.font_family,
												fontSize: styles.font_size_large,
												fontStyle: styles.font_style,
												fontWeight: styles.font_weight_name,
												lineHeight: "143%",
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
												fontSize: styles.font_size_subInfo_large,
												fontStyle: styles.font_style,
												fontWeight: styles.font_weight_subInfo,
												lineHeight: "115%",
											}}
										>
											{content.title}
										</td>
									</tr>
									<tr>
										<td
											className={`email-signature-mobile-${layouts[0]}`}
											style={{
												paddingBottom: "14px",
												color: styles.font_color,
												fontFamily: styles.font_family,
												fontSize: styles.font_size_subInfo_large,
												fontStyle: styles.font_style,
												fontWeight: styles.font_weight_subInfo,
												lineHeight: "20px",
												letterSpacing: styles.letter_spacing,
											}}
										>
											{formatPhoneNumber({ entry: content.phone, ruleset: "" })}
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
															style={
																{
																	borderTop: "1px solid grey",
																	fontSize: 0,
																	lineHeight: "13px",
																	msoLineHeightRule: "exactly",
																} as CSSProperties
															}
														>
															&nbsp;
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
									<tr>
										<td>
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
												alt="Upwards slant arrow"
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
										<td style={{ paddingTop: "3px" }}>
											<Socials styles={styles} />
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
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
