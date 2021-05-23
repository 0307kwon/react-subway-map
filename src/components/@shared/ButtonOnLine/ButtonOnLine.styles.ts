import styled from 'styled-components';
import PALETTE from '../../../constants/palette';

export const ButtonOnLineContainer = styled.div`
  position: relative;
  height: 3rem;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${PALETTE.GRAY[200]};
    position: absolute;
    top: 50%;
  }

  & > button {
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 0;
    right: 3.5rem;
  }
`;