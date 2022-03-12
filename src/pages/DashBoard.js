import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #74b9ff;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px;
`;

const GridBox = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 1fr 3fr;
`;

const Container = styled.div`
  background-color: #a29bfe;
  height: 600px;
  /* box-shadow: 10px 8px 5px rgba(0, 0, 0, 0.5); */
`;

const ProfileImg = styled.div`
  border-radius: 50%;
  width: 16em;
  height: 16em;
  border: 2px solid white;
  margin: auto;
  background: no-repeat
    url(http://jjal.today/data/file/gallery/1028612757_tfzgnpT0_8b425806e9bc8770ee9926f757d5ff046f92f11e.png);
  background-size: cover;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const ProfileBox = styled.div`
  display: block;
  background-color: white;
  height: 250px;
  width: 16em;
  margin: auto;
  margin-top: 15px;
`;

const Name = styled.span`
  display: block;
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

const InfoBox = styled.div`
  display: block;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Email = styled.span`
  display: block !important;
  color: black;
  width: 100%;
  line-height: 24px;
`;

const Phone = styled(Email)``;
const Motto = styled(Email)`
  margin-top: 5px;
`;

const Grade = styled(Email)``;

const EditBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 33px;
  background-color: #6c5ce7;
  border-radius: 10px;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #a29bfe;
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GoalBox = styled.div`
  width: 100%;
  height: 320px;
  /* background-color: #5f27cd; */
`;

const GoalTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 6px;
`;

const Explanation = styled.span`
  font-size: 10px;
  margin-top: 8px;
`;

const Goal = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: #341f97; */
  border-radius: 10px;
  border: 1px solid black;
  display: flex !important;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10px;
  div {
    display: flex;
    flex-direction: row;
    i {
      color: white;
      margin-right: 6px;
      font-size: 20px;
    }
    /* ${GoalTitle} {
      font-size: 20px;
      font-weight: bold;
      margin-right: 6px;
    } */
    div {
      border: 1px solid black;
      border-radius: 10px;
      width: 48px;
      height: 22px;
      font-size: 12px;
      padding-top: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

function DashBoard() {
  return (
    <Wrapper>
      <GridBox>
        <Container>
          <ProfileImg />
          <ProfileBox>
            <Name>Kevin</Name>
            <InfoBox>
              <Email>alone@gmail.com</Email>
              <Phone>010-0000-0000</Phone>
              <Motto>no pain, no gain</Motto>
              <Grade>🕊️ 갈매기</Grade>
            </InfoBox>
            <EditBtn>Edit profile</EditBtn>
          </ProfileBox>
        </Container>
        <ContentBox>
          <GoalBox>
            <Goal>
              <div>
                <i class="fa-regular fa-calendar-check"></i>
                <GoalTitle>숨 쉬기</GoalTitle>
                <div>진행 중</div>
              </div>
              <div>
                <Explanation>동해물과 백두산이 마르고 닯도록 하느님이</Explanation>
              </div>
            </Goal>
            <Goal>
              <div>
                <i class="fa-regular fa-calendar-check"></i>
                <GoalTitle>밥 먹기</GoalTitle>
                <div>진행 중</div>
              </div>
              <div>
                <Explanation>동해물과 백두산이 마르고 닯도록 하느님이</Explanation>
              </div>
            </Goal>
            <Goal>
              <div>
                <i class="fa-regular fa-calendar-check"></i>
                <GoalTitle>걷기</GoalTitle>
                <div>진행 중</div>
              </div>
              <div>
                <Explanation>동해물과 백두산이 마르고 닯도록 하느님이</Explanation>
              </div>
            </Goal>
          </GoalBox>
        </ContentBox>
      </GridBox>
    </Wrapper>
  );
}

export default DashBoard;