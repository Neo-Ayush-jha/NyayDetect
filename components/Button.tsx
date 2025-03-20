'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_white' | 'btn_dark_green' | 'btn_dark_green_outline'|'btn_outline';
    href?: string;
};

const Button = ({ type, title, icon, variant, href }: ButtonProps) => {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        }
    };

    return (
        <button
            type={type}
            className={`capitalize gap-3 flexCenter rounded-full border ${variant}`}
            onClick={handleClick}
        >
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label htmlFor={title} className="bold-16 whitespace-nowrap">{title}</label>
        </button>
    );
};

export default Button;
