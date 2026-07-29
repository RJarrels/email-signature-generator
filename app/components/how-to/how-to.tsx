"use client";
import { useLanguage } from "@/app/context/language-context";

export function HowTo() {
	const { locale } = useLanguage();
	const messages = locale.messages[0];

	return (
		<section>
			<div className="how-to">
				<h2>{messages.howTo}</h2>
				<ol>
					<li>{messages.how1}</li>
					<li>{messages.how2}</li>
					<li>{messages.how3}</li>
					<li>{messages.how4}</li>
					<li>{messages.how5}</li>
					<li>{messages.how6}</li>
					<li>{messages.how7}</li>
					<li>{messages.how8}</li>
				</ol>
			</div>
		</section>
	);
}
