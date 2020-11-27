import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --bg-color: #F9F9F9;
        --main-color: #B266FF:
    }

    * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100%;
        background-color: var(--bg-color);
    }

    @keyframes pop {
        from {
            opacity: 0%;
            transform: scale(0.9);
        }
        50% {
            transform: scale(1.1);
        }
        to {
            opacity: 100%;
            transform: scale(1);
        }
    }
`;