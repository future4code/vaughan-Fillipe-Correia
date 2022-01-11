import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;

  img {
    height: 70px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const BigCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

    img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}

h4 {
    margin-bottom: 15px;

    `;

export const ImageButton = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;

  img {
    height: 50px;
    margin-right: 10px;
  }
`;

export const SmallCard = styled.div`
display: flex;
flex-direction: row;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    margin-bottom: 10px;
    height: 80px;
    gap: 10px;

    img {
    height: 50px;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;

    h4 {
    display: flex;
    align-items: center;
    justify-content: center;

    `;
