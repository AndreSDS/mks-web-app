import { Container, Card, CardImage, CardHeader, CardDescription, CardButtonAdd } from './styles';

export const ShimmerComponent = () => {
    const arrayMock = [1, 2, 3, 4, 5, 6];

  return (
    <Container data-testid="shimmer">
        {arrayMock.map((item, index) => (
          <Card key={index}>
            <CardImage />

            <CardHeader />

            <CardDescription />

            <CardButtonAdd />
          </Card>
        ))}
    </Container>
  );
}
