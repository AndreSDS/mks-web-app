import styled from 'styled-components';

type ContainerProps = {
    shopCartOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: calc(50px + 1.5rem);

    ${({ shopCartOpen }) => shopCartOpen && `
        overflow: hidden;
    `}

    @media (min-width: 376px) {
        padding-top: calc(100px + 1.5rem);
    }

    @media (min-width: 1360px) {
        padding-top: 11rem;
    }
`;

export const Content = styled.main`
    width: 100%;
    max-width: 710px;

    @media (min-width: 376px) {
        margin-bottom: 2rem;
    }
`;