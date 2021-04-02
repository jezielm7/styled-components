import styled, { css } from 'styled-components/native';
import { ICardStylesProps } from './interface';

export const Container = styled.View`
  height: 72px;
  margin: 24px;
  padding: 14px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['neutral-200']};
`;

const fontVariant = css`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.label};
  color: ${({ theme }) => theme.colors['neutral-700']};
`;

export const Label = styled.Text`
  ${fontVariant}
`;

export const Description = styled.Text<ICardStylesProps>`
  ${fontVariant}
  color: ${({ theme, color }) => theme.colors[color]};
  ${({ strikeThrough, color, theme }) =>
    strikeThrough && css`
     text-decoration: line-through;
     text-decoration-color: ${theme.colors[color]};
    `
  };
`;