import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Header from '../components/common/header';

interface IMainTemplate {
    children: React.ReactNode;
}

const MainTemplate = ({ children }: IMainTemplate) => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>{children}</main>
        </>
    );
};

export default MainTemplate;
