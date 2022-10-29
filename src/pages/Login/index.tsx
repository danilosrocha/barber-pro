import logoImg from '../../../public/logo192.png';
import { useNavigate } from 'react-router-dom';
import { Container, View, Logo, Input, Button, Link, Text } from './styles';

const Login: React.FC = () => {

  const navigate = useNavigate();
  function goToHome() {
    navigate("/")
  }

  return (
    <Container>
      <View>
        <Logo
          src={
            'https://cdn.pixabay.com/photo/2016/09/12/05/41/van-gogh-1663090_960_720.jpg'
          }
        />
        <Input placeholder="Digite seu e-mail" type="email" />
        <Input placeholder="Digite sua senha" type="password" />
        <Button onClick={goToHome}>Acessar</Button>

        <Link href="/register">
          <Text>
            Ainda não possui uma conta? <strong>Cadastre-se!</strong>
          </Text>
        </Link>
      </View>
    </Container>
  );
};

export default Login;
