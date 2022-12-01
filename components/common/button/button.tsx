import React from 'react';
import Link from 'next/link';
import { StyledButton } from './button.styles';
import ArrowIcon from '../../../assets/icons/arrow-right.svg';
import { UrlObject } from 'url';

interface IButton {
    children: string;
    href: string | UrlObject;
}

const Button = ({ children, href }: IButton) => {
    return (
        <StyledButton>
            <Link href={href}>
                {children}
                <ArrowIcon />
            </Link>
        </StyledButton>
    );
};

export default Button;
