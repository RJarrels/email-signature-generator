import {styles} from "@/app/sharedStyling/styles";
export interface EmailSignatureProps {
	styles: typeof styles;
	layouts: string[];
	content: {
		name: string;
		title: string;
		phone: string;
		disclaimer: string;
		website?: string;
	};
	images: {
		logoLarge?: string;
		logoSmall?: string;
		arrowIcon?: string;
	};
	formatPhoneNumber: (props: { entry: string; ruleset: string }) => string;
}