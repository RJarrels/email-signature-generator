export interface DataProps {
	name: string;
	jobTitle: string;
	mobilePhone: string;
	layout: string;
	disclaimer: string;
	showMobilePhone: boolean;
	whiteBg: boolean;
}

export const initialInfo: DataProps = {
	name: "",
	jobTitle: "",
	mobilePhone: "",
	layout: "",
	disclaimer: "",
	showMobilePhone: false,
	whiteBg: false,
}
