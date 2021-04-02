import React from 'react';
import { Text } from 'react-native'; 

import {
  ICardProps,
  CardStatus,
  ICardStylesProps,
  CardStatusVariant
} from './interface';

import { Container, Label, Description } from './styles';

const Card = ({ amount, status }: ICardProps) => {
  // const isPaid = status === 'PAGO' ? 'success-400' : 'warning-400';

  const statusVariant: CardStatusVariant = {
    PAGO: 'success-400',
    EM_ABERTO: 'warning-400',
    EM_ATRASO: 'error-400',
    REVERTIDO: 'neutral-400',
  }

  const isStatusReversed = status === 'REVERTIDO';

  return (
    <Container>
      <Label>{amount}</Label>
      <Description
        color={statusVariant[status]}
        strikeThrough={isStatusReversed}
      >
        {CardStatus[status]}
      </Description>
    </Container>
  );
};

export default Card;
