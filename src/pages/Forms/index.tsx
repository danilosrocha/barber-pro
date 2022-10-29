import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import usePersistedState from '../../utils/usePersistedState';
import { Container, View, Logo, Input, Button, Link, Text } from './styles';
import Header from '../../components/Header/index';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import { Sidebar } from '../../components/Sidebar';


const Forms: React.FC = () => {
  // const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  // const toggleTheme = () => {
  //   setTheme(theme.title === 'light' ? dark : light);
  // };
  return (
    <Container>
      {/* <Header toggleTheme={toggleTheme}/> */}
      <Sidebar>
      </Sidebar>
      <View>
        <Text>Bem vindo ao Formulário</Text>
      </View>
    </Container>
  );
};

export default Forms;
