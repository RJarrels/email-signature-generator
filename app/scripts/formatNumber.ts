interface PhoneProps {
    entry: string;
    ruleset: string;
}

export function formatPhoneNumber({ entry, ruleset }: PhoneProps): string {
    let cleaned = ("" + entry).replace(/\D/g, "");
    
    switch (ruleset) {
        case "en-us":
            // cap at 10 digits, or 11 if a leading "1" country code is present
            const maxDigits = cleaned.startsWith("1") ? 11 : 10;
            cleaned = cleaned.slice(0, maxDigits);

            let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                let intlCode = match[1] ? "+1 " : "";
                return [intlCode, "", match[2], ".", match[3], ".", match[4]].join("");
            }
            // Fallback while the number isn't complete yet
            return cleaned;
            
        default:
            cleaned = ("" + entry).replace(/-|\)/gi, ".");
            cleaned = cleaned.replace("(", " ");
            cleaned = cleaned.replace(/[a-z]/gi, "");
            return cleaned;
    }
}
