import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.secundary};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`