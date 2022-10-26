import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
`;

export const ViewSidebar = styled.div`
  width: 20vh;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ViewSidebarLogo = styled.div`
  padding: 10px;
  height: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ViewNavItem = styled.div`
  padding: 10px;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  margin-right: 10px;
  color: ${(props) => props.theme.colors.inverseBackground};
  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const Input = styled.input`
  background: ${(props) => props.theme.colors.inputBackground};
  color: ${(props) => props.theme.colors.text};
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border-width: 0px;
  margin-bottom: 10px;
`;

export const Text = styled.text`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

export const Title = styled.text`
  text-align: center;
  font-size: 21px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  padding: 10px;
  border-radius: 5px;
  border-width: 0px;
  width: 300px;
  margin-bottom: 10px;
`;

export const Link = styled.a``;
