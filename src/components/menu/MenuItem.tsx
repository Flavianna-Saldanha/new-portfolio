import Link from "next/link";

export interface menuItemInterface {
    url: string;
    label: string;
}

export const MenuItem = ({url, label}: menuItemInterface) => {
    return (
        <li>
            <Link href={url}>
                <span className="hover:text-violet-500/20">{label}</span>
            </Link>
        </li>
    );
}