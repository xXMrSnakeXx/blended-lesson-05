import React from "react";
import exchangeRates from "../rate.json";
import { Title, List, Item, Text } from "../components/Home/Home.styled";

const Home = () => {
  return (
    <>
      <Title>Current exchange rate</Title>
      <List>
        {exchangeRates.map(({ id, symbol, rate }) => (
          <Item key={id}>
            <Text> 1 {symbol}</Text> = <Text>{rate} UAH</Text>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Home;
