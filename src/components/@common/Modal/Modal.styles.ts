import styled, { css } from 'styled-components';
import Button from '../Button/Button';
import { Props } from './Modal';

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalInner = styled.div`
  position: relative;
  width: 700px;
  height: 80vh;
  border-radius: 10px;
  margin: auto;
  background: white;
  padding: 2.5rem 2rem;
`;

export const CloseButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
`;