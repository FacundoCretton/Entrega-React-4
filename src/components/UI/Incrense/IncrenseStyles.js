import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IncrenseStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ bgColor }) => bgColor || '#6B8E23CC'};
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
    
  }
`;