import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ColorRadioInputProps extends HTMLAttributes<HTMLInputElement> {
  radioColor: string;
}

export const ColorRadioInput = styled.input<ColorRadioInputProps>`
  appearance: none;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${({ radioColor }) => radioColor};
  }

  &:checked::after {
    content: '✔';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    color: white;
  }
`;

export const ColorRadioLabelText = styled.span`
  display: none;
`;