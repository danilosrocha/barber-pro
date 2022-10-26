import logoImg from '../../../public/logo192.png';
import { useNavigate } from 'react-router-dom';
import { Container, View, Logo, Input, Button, Link, Text } from './styles';

const Register: React.FC = () => {
  const navigate = useNavigate();
  function goToHome() {
    navigate('/');
  }

  return (
    <Container>
      <View>
        <Logo
          src={
            'https://cdn.pixabay.com/photo/2016/09/12/05/41/van-gogh-1663090_960_720.jpg'
          }
        />
        <Input placeholder="Digite seu nome" type="text" />
        <Input placeholder="Digite seu e-mail" type="email" />
        <Input placeholder="Digite sua senha" type="password" />
        <Button onClick={goToHome}>Registrar</Button>

        <Link href="/login">
          <Text>
            Já possui uma conta? <strong>Faça Login!</strong>
          </Text>
        </Link>
      </View>
    </Container>
  );
};

export default Register;
