import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
    margin-bottom: 1.5rem;

    @media (min-width: 376px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 0;
    }
`;