import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo, 
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from "./styles"

export interface DataListProps extends TransactionCardProps{
  id: string;
}

export function Dashboard(){
  const data: DataListProps[] =[{
    id: "1",
    type: "positive",
    title: "Desenvolvimento de site",
    amount: "R$ 33.000,00",
    category: {name: "Vendas", icon: "dollar-sign"},
    date: "23/09/2021"
  },
  {
    id: "2",
    type: "negative",
    title: "Hamburgueria",
    amount: "R$ 13.000,00",
    category: {name: "Alimentação", icon: "coffee"},
    date: "25/09/2021"
  },
  {
    id: "3",
    type: "negative",
    title: "Aluguel do apartamento",
    amount: "R$ 1.700,00",
    category: {name: "Casa", icon: "shopping-bag"},
    date: "30/10/2021"
  }

];

  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/32868362?v=4' }}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Lucas</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>
    
    <HighlightCards >
      <HighlightCard 
        type = "up"
        title="Entradas" 
        amount="R$ 33.400,00"
        lastTransaction="Última entrada dia 03 de março"
      />

      <HighlightCard
        type = "down"
        title="Saídas" 
        amount="R$ 1.2590,00"
        lastTransaction="Última saída dia 13 de março"
      />

      <HighlightCard 
        type="total"
        title="Total" 
        amount="R$ 16.141,00"
        lastTransaction="01 à 16 de abril"
      />
    </HighlightCards>

    <Transactions>
      <Title>Listagem</Title>

      <TransactionsList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>  <TransactionCard data={item}/>}
      />

     
    </Transactions>
    </Container>

  )
}
