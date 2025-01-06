import styled from "styled-components";

export const StyledWrapper = styled.div`
    .styled-button {
        position: relative;
        padding: 1rem 2rem;
        font-size: 1.1rem;
        font-weight: bold;
        color: #ffffff;
        background: linear-gradient(to bottom, #171717, #242424);
        border-radius: 9999px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.4);
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #292929;

        @media (max-width: 600px) {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
        }
    }

    .styled-button::before {
        content: "";
        position: absolute;
        top: -2px;
        right: -1px;
        bottom: -1px;
        left: -1px;
        background: linear-gradient(to bottom, #292929, #000000);
        z-index: -1;
        border-radius: 9999px;
        transition: all 0.2s ease;
        opacity: 1;
    }

    .styled-button:active {
        transform: translateY(2px);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 1), 0 5px 10px rgba(0, 0, 0, 0.4);
    }

    .styled-button .inner-button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to bottom, #171717, #242424);
        width: 40px;
        height: 40px;
        margin-left: 10px;
        border-radius: 50%;
        box-shadow: 0 0 1px rgba(0, 0, 0, 1);
        border: 1px solid #252525;
        transition: all 0.2s ease;

        @media (max-width: 600px) {
            width: 35px;
            height: 35px;
        }
    }

    .styled-button .inner-button::before {
        content: "";
        position: absolute;
        top: -2px;
        right: -1px;
        bottom: -1px;
        left: -1px;
        background: linear-gradient(to bottom, #292929, #000000);
        z-index: -1;
        border-radius: 9999px;
        transition: all 0.2s ease;
        opacity: 1;
    }

    .styled-button .inner-button .icon {
        filter: drop-shadow(0 10px 20px rgba(26, 25, 25, 0.9)) drop-shadow(0 0 4px rgba(0, 0, 0, 1));
        transition: all 0.4s ease-in-out;

        @media (max-width: 600px) {
            height: 25px;
            width: 25px;
        }
    }

    .styled-button .inner-button .icon:hover {
        filter: drop-shadow(0 10px 20px rgba(50, 50, 50, 1)) drop-shadow(0 0 20px rgba(2, 2, 2, 1));
        transform: rotate(-35deg);
    }
`;
