import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
`;

export const View = styled.div`
  width: 640px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  height: 200px;
  width: 400px;
  border-radius: 20px;
  margin-bottom: 20px;
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

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  padding: 10px;
  border-radius: 5px;
  border-width: 0px;
  width: 300px;
  margin-bottom: 10px;
`;

export const Link = styled.a``;
