"use client";
import { copySelection } from "@/app/scripts/copyPreview";

interface CopyButtonProps {
    layout: string;
    label: string;
}
export function CopyButton({ layout, label }: CopyButtonProps) {
    return (
        <button id="copy-button" className="copy-button" onClick={() => copySelection(layout)}>
            {label}
        </button>
    )
}