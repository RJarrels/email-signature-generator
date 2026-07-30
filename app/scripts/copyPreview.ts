let hideTimeoutId: ReturnType<typeof setTimeout> | undefined;

function showMessage(msg: string) {
	const target = document.getElementById("message-box");
	if (!target) return;
	target.textContent = msg;
	target.classList.add("visible");
	if (hideTimeoutId) clearTimeout(hideTimeoutId);
	hideTimeoutId = setTimeout(() => {
		target.classList.remove("visible");
	}, 2000);
}

export function copySelection(mode: string) {
	mode = mode || "";
	let range = document.createRange();
	if (mode == "largeA") {
		range.selectNodeContents(document.querySelector("#preview-largeA")!);
	} else if (mode == "largeB") {
		range.selectNodeContents(document.querySelector("#preview-largeB")!);
	} else if (mode == "smallA") {
		range.selectNodeContents(document.querySelector("#preview-smallA")!);
	} else if (mode == "smallB") {
		range.selectNodeContents(document.querySelector("#preview-smallB")!);
	} else {
		// for now only dark layout is supported, but we could change this to a switch etc if needed
		alert("Something went wrong, please try again or contact support.");
	}
	var selection = window.getSelection()!;
	selection.removeAllRanges();
	selection.addRange(range);
	try {
		document.execCommand("copy"); // deprecated yes, but still works!
		// set copy success message 😁
		showMessage("Copied to Clipboard!");
		// reset the selction
	} catch (err) {
		console.error("Failed to copy the selection!", "error");
		// set copy failed message 😢
		showMessage("Something went wrong...");
	}
	// de-select the preview
	selection.removeAllRanges();
}