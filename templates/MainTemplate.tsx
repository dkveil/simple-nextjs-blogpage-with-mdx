import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';

interface IMainTemplate {
    children: React.ReactNode;
}

const MainTemplate = ({ children }: IMainTemplate) => {
    return (
        <>
            <GlobalStyles />
            <main>{children}</main>
        </>
    );
};

export default MainTemplate;
