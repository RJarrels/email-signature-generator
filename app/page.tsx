"use client";
import { useState } from "react";
import { Form } from "./components/form/form";
import { LargeA } from "./components/signatures/largeA";
import { LargeB } from "./components/signatures/largeB";
import { SmallA } from "./components/signatures/smallA";
import { SmallB } from "./components/signatures/smallB";
import { HowTo } from "./components/how-to/how-to";
import { CopyButton } from "./components/buttons/copyButton";
import { initialInfo } from "./scripts/data";
import { styles } from "./sharedStyling/styles";
import { images } from "@/app/data/images";
import { formatPhoneNumber } from "./scripts/formatNumber";
import { useLanguage } from "./context/language-context";

export default function Home() {
	const [info, setInfo] = useState(initialInfo);
	const { locale } = useLanguage();
	const messages = locale.messages[0];

	const dynamicStyles = {
		...styles,
		table_background: info.whiteBg ? "#ffffff" : "#f4f5f7",
	};

	const content = {
		name: info.name,
		title: info.jobTitle,
		phone: info.mobilePhone,
		disclaimer: locale.disclaimer,
		website: "iFIT.com",
	};

	const signatureImages = {
		logoLarge: images.awsImages[0].ifitLarge,
		logoSmall: images.awsImages[0].ifitSmall,
		arrowIcon: images.awsImages[0].arrowIcon,
	};

	return (
		<main>
			<h1 className="title">{messages.heading}</h1>

			<Form info={info} setInfo={setInfo} />

			<hr />

			<section className="preview-section">
				<div id="preview-largeA">
					<LargeA
						styles={dynamicStyles}
						layouts={["largeA"]}
						content={content}
						images={signatureImages}
						formatPhoneNumber={formatPhoneNumber}
					/>
				</div>
				<CopyButton layout="largeA" label={messages.copy} />
			</section>

			<section className="preview-section">
				<div id="preview-largeB">
					<LargeB
						styles={dynamicStyles}
						layouts={["largeB"]}
						content={content}
						images={signatureImages}
						formatPhoneNumber={formatPhoneNumber}
					/>
				</div>
				<CopyButton layout="largeB" label={messages.copy} />
			</section>

			<section className="preview-section">
				<div id="preview-smallA">
					<SmallA
						styles={dynamicStyles}
						layouts={["smallA"]}
						content={content}
						images={signatureImages}
						formatPhoneNumber={formatPhoneNumber}
					/>
				</div>
				<CopyButton layout="smallA" label={messages.copy} />
			</section>

			<section className="preview-section">
				<div id="preview-smallB">
					<SmallB
						styles={dynamicStyles}
						layouts={["smallB"]}
						content={content}
						images={signatureImages}
						formatPhoneNumber={formatPhoneNumber}
					/>
				</div>
				<CopyButton layout="smallB" label={messages.copy} />
			</section>

			<HowTo />
		</main>
	);
}
