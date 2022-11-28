import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Container = styled.div`
    width: 720px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 376px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const Card = styled.div`
    width: 217px;
    height: 304px;
    background: white;
    padding: 1.5rem 1rem;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const CardImage = styled(Skeleton)`
    width: 111px;
    height: 138px;
    margin-bottom: 1rem;
`;

export const CardHeader = styled(Skeleton)`
    width: 184px;
    height: 2rem;
    margin-bottom: 1rem;
`;

export const CardDescription = styled(Skeleton)`
    width: 184px;
    height: 1.5rem;
    margin-bottom: 1rem;
`;

export const CardButtonAdd = styled(Skeleton)`
    width: 217px;
    height: 2rem;
`;