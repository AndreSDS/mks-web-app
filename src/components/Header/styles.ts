import styled from 'styled-components';

export const HeaderContainer = styled.header`
    z-index: 2;
    background: #0F52BA;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;

    @media (min-width: 375px) {    
        height: 100px;
        padding: 2rem 4rem;
    }
`;

export const LogoImg = styled.img`
    height: 45px;
`;