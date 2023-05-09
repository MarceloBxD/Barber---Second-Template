import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border: none;
  width: 150px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  background-color: #f7c843;
  color: #000;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #efb43a;
    color: #fff;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 700;
`;
