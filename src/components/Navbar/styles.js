import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  gap: 20px;
  color: #fff;
  height: fit-content;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #fff;

  &:hover {
    color: #ffff00;
    cursor: pointer;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
