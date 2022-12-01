import React from 'react';
import { Wrapper } from './header.styles';
import Link from 'next/link';

const Header = () => {
    return (
        <Wrapper>
            <Link href="/">A.NOWAK</Link>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </Wrapper>
    );
};

export default Header;
