import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;
