import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 60px;
  flex-direction: column;
  padding-right: 60px;
  padding-top: 30px;
  z-index: 1;
`;

export const Text = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

export const BiggerText = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 250px;
`;

export const ScheduleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const ScheduleItem = styled.h1`
  font-size: 16px;
  flex-direction: column;
  padding: 10px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  gap: 10px;
  width: 240px;
  border: 2px solid #fff;
  color: #fff;
  margin: 0;
`;
