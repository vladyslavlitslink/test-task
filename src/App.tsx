import { Header, Table, Title, Container } from 'components';
import { StyledAppContainer } from './styles';

function App() {
  return (
    <StyledAppContainer>
      <Header />

      <Container>
        <Title size="md" color="gray900" fontWeight="regular">
          Settings
        </Title>
        <Table />
      </Container>
    </StyledAppContainer>
  );
}

export default App;
