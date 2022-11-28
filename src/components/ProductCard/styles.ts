import styled from 'styled-components';

type CardProps = {
    shopCart: boolean;
}

export const CardContainer = styled.div<CardProps>`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    width: 250px;
    height: ${({ shopCart }) => shopCart ? '220px' : '330px'};
    overflow: hidden;
    margin: 0 auto;
    padding-top: 15px;
    padding-bottom: ${({ shopCart }) => shopCart && '20px'};
    display: flex;
    flex-direction: column;
    justify-content: ${({ shopCart }) => shopCart ? 'flex-start' : 'space-between'};

    @media (min-width: 376px) {
        width: ${({ shopCart }) => shopCart ? '380px' : '217px'};
        height: ${({ shopCart }) => shopCart ? '95px' : '304px'};
        box-shadow: ${({ shopCart }) => shopCart && '-2px 2px 10px rgba(0, 0, 0, 0.05)'};
        padding: ${({ shopCart }) => shopCart && '1.25rem 1.5rem'};
    }
`;

export const ClearProductButton = styled.div<CardProps>`
    background-color: transparent;
    height: 25px;
    width: 20px;
    display: ${({shopCart}) => shopCart ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: -60px;
    margin-left: 185px;
    z-index: 1;

    span {
        font-weight: 400;
        font-size: 40px;
        color: #000;
    }

    @media (min-width: 376px) {
        display: none;

        ${({ shopCart }) => shopCart && `
            display: flex;
            background-color: #000;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            margin-bottom: -40px;
            margin-left: 375px;
 
            span {
                font-size: 14px;
                color: #fff;
            }
        `}
    }
`;

export const CardContent = styled.div<CardProps>`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    @media (min-width: 376px) {
        flex-direction: ${({ shopCart }) => shopCart && 'row'};
        padding: ${({ shopCart }) => shopCart && '0'};
        margin-top: ${({ shopCart }) => shopCart && '0'};
        justify-content: space-between;
    }
`;

export const CardImageContainer = styled.div<CardProps>`
    width: 100%;
    height: ${({ shopCart }) => shopCart ? '95px' : '158px'};
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (min-width: 376px) {
        justify-content: center;
        height: ${({ shopCart }) => shopCart ? '57px' : '138px'};
        margin-right: ${({ shopCart }) => shopCart && '0.5rem'};
    }
    
`;

export const CardImage = styled.img<CardProps>`
    height: ${({ shopCart }) => shopCart ? '95px' : '158px'};
    object-fit: contain;
    
    @media (min-width: 376px) {
        height: ${({ shopCart }) => shopCart ? '57px' : '138px'};
        margin-left: ${({ shopCart }) => shopCart ? '0' : '0'};
    }
`;

export const CardHeader = styled.header<CardProps>`
    display: flex;
    flex-direction: ${({ shopCart }) => shopCart ? 'column' : 'row'};
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${({ shopCart }) => shopCart ? '20px' : '35px'};
    margin: 0.5rem 0;

    @media (min-width: 376px) {
        width: ${({ shopCart }) => shopCart && '100%'};
        height: ${({ shopCart }) => shopCart && '30px'};
        flex-direction: ${({ shopCart }) => shopCart && 'row'};

        p {
            margin-bottom: 0;
        }
    }
`;

export const CardTitle = styled.p<CardProps>`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2C2C2C;
    margin-bottom: 0.75rem;
    text-align: left;

    @media (min-width: 376px) {
        width: ${({ shopCart }) => shopCart ? '110px' : 'auto'};
        font-size: ${({ shopCart }) => shopCart && '13px'};
        line-height: ${({ shopCart }) => shopCart && '17px'};
    }
`;

export const CardDescription = styled.p<CardProps>`
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: #2C2C2C;

    ${({ shopCart }) => shopCart && `
        display: none;
    `}
`;

export const CardButtonsContainer = styled.div<CardProps>`
    display: flex;
    align-items: center;
    width: ${({ shopCart }) => shopCart ? '100%' : 'auto'};
    justify-content: ${({ shopCart }) => shopCart ? 'space-between' : 'flex-end'};
    border-radius: 5px;

    @media (min-width: 376px) {
        width: ${({ shopCart }) => shopCart ? '140px' : '64px'};
        height: ${({ shopCart }) => shopCart ? '30px' : 'auto'};
    }
`;

export const CardButtonQuantity = styled.div<CardProps>`
    height:  35px;
    width: 100px;
    background-color: #fff;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        flex: 1;
        text-align: center;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
    }

    span:first-child {
        cursor: pointer;
        border-right: 0.2px solid #BFBFBF;
    }

    span:last-child {
        cursor: pointer;
        border-left: 0.2px solid #BFBFBF;
    }

    ${({ shopCart }) => !shopCart && `
        display: none;
    `}

    @media (min-width: 376px) {
        font-size: ${({ shopCart }) => shopCart && '12px'};
        line-height: ${({ shopCart }) => shopCart && '16px'};
        height:  ${({ shopCart }) => shopCart && '25px'};
        width: ${({ shopCart }) => shopCart && '60px'};
    }
`

export const CardButtonPrice = styled.div<CardProps>`
    background-color: #373737;
    height: ${({ shopCart }) => shopCart ? '35px' : '30px'};
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;

    @media (min-width: 376px) {
        height: ${({ shopCart }) => shopCart ? '17px' : '26px'};
        background-color: ${({ shopCart }) => shopCart && 'transparent'};
        
        span {
            color: ${({ shopCart }) => shopCart && '#000'};
        }
    }
`;

export const CardPrice = styled.span`
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    color: #FFFFFF;
`;

export const CardButtonAdd = styled.div<CardProps>`
    width: 100%;
    height: 2rem;
    background: #0F52BA;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s ease-in-out background-color;

    ${({ shopCart }) => shopCart && `
        display: none;
    `}

    img {
        margin-right: 1rem;
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
    }

    &:hover {
        background: #0B48A8;
    }
`;
