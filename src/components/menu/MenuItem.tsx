import Link from "next/link";

export interface menuItemInterface {
    url: string;
    label: string;
}

export const MenuItem = ({url, label}: menuItemInterface) => {
    return (
        <li className="">
            <Link href={url}>
                {label}
            </Link>
        </li>
    );
}