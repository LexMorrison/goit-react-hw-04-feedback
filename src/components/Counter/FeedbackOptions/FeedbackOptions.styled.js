import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const ButtonItem = styled.button`
  padding: 10px 20px;
  border-radius: 3px;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #45a049;
  }
`;
