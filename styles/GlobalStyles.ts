import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'graphik';
        src: url('/fonts/GraphikThin.ttf');
        font-weight:  ${theme.weight.thin};
        font-style: normal;
    }
    @font-face {
        font-family: 'graphik';
        src: url('/fonts/GraphikRegular.ttf');
        font-weight: ${theme.weight.normal};
        font-style: normal;
    }
    @font-face {
        font-family: 'graphik';
        src: url('/fonts/GraphikBlack.ttf');
        font-weight: ${theme.weight.bold};
        font-style: normal;
    }
    @font-face {
        font-family: 'graphik';
        src: url('/fonts/GraphikSuper.ttf');
        font-weight: ${theme.weight.superbold};
        font-style: normal;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        position: relative;
        font-family: 'graphik';
        color: var(--color-black);
        background-color: var(--color-white);
        overflow-x: hidden;
    }

    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    :root {
        --color-black: ${theme.color.black};
        --color-white: ${theme.color.white};
        --color-gray: ${theme.color.gray};
        --font-weight-normal: ${theme.weight.normal};
        --font-weight-bold: ${theme.weight.bold};
        --font-weight-superbold: ${theme.weight.superbold};
        --font-weight-thin: ${theme.weight.thin};
    }

`

export default GlobalStyles