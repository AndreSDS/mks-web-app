import styled from "styled-components";

export const CartButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 26px;
    background-color: #FFF;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #F0F0F0;
    }

    @media (min-width: 375px) {
        width: 90px;
        height: 45px;
        border-radius: 8px;
    }
`;

export const CartButtonIcon = styled.img`
    width: 11px;
    height: 10px;
    margin-right: 0.5rem;

    @media (min-width: 375px) {
        width: 20px;
        height: 18px;
    }
`;

export const CartButtonText = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;

    @media (min-width: 375px) {
        font-size: 18px;
        line-height: 22px;
    }
`;