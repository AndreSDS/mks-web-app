import styled from 'styled-components';

type ContainerProps = {
    isCartOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
    z-index: 3;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #0F52BA;
    display: ${({isCartOpen}) => isCartOpen ? 'flex' : 'hidden'};
    flex-direction: column;
    align-items: space-between;
    overflow-y: auto;
    padding-top: 1.5rem;
    padding-bottom: calc(160px + 1.5rem);
    width: 0;

    transition: width 0.2s ease-in-out;

    ${({ isCartOpen }) => isCartOpen && `
        width: 90%;
    `}

    @media (min-width: 376px) {
        ${({ isCartOpen }) => isCartOpen && `
            width: 486px;
        `}
    }
`;

export const ShopCartHeader = styled.header`
    padding-left: 2rem;
    display: flex;
    margin-bottom: 2rem;

    h1 {
        font-weight: 700;
        font-size: 27px;
        line-height: 33px;
        color: #FFFFFF;
        width: 166px;
    }
`

export const ButtonCloseCart = styled.button<ContainerProps>`
    border: none;
    outline: none;
    background-color: #000000;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    color: #FFF;
    margin-left: auto;
    margin-right: 15px;

    span {
        font-weight: 400;
        font-size: 44px;
        line-height: 15px;
        color: #0F52BA;
    }

    @media (min-width: 376px) {
        width: 38px;
        height: 38px;

        span {
        font-size: 28px;
        line-height: 15px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.75rem;
`;

export const ShopCartFooter = styled.footer`
    z-index: 3;
    position: fixed;
    bottom: 0;
    background-color: #0F52BA;
    width: 90%;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    

    @media (min-width: 376px) {
        width: 486px;
    }
`;

export const TotalPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    flex: 1;

    h1, span {
        font-weight: 700;
        font-size: 28px;
        line-height: 15px;color: #FFFFFF;
    }
`;

export const ButtonCheckout = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    height: 65px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-weight: 700;
        font-size: 20px;
        line-height: 15px;
        color: #FFFFFF;
    }
`;