import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";

export default () => {
  return (
    <Container
      style={{
        width: "100%"
      }}
    >
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>//Your text here</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
