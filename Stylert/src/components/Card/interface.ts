import { colors } from "../../theme/colors";

export enum CardStatus {
  PAGO = 'Pago',
  EM_ABERTO = 'Em aberto',
  EM_ATRASO = 'Em atraso',
  REVERTIDO = 'Revertido'
}

export interface ICardProps {
  amount: string;
  status: keyof typeof CardStatus;
}

export interface ICardStylesProps {
  color: keyof typeof colors;
  strikeThrough: boolean;
}

export type CardStatusVariant = {
  [key in keyof typeof CardStatus]: keyof typeof colors;
}