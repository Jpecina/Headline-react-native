import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class MainPageHeader extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='add' />
            </Button>
          </Left>
          <Body>
            <Title>Saved Articles</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search"/>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}