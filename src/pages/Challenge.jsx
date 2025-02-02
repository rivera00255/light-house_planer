import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../Atom";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18vh auto;
  margin-bottom: 240px;
  color: ${(props) => props.theme.titleColor};
  @media screen and (max-width: 1350px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0xp 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f8ff;
  border-radius: 30px;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media screen and (max-width: 1350px) {
  }
  @media screen and (max-width: 768px) {
    margin: 0px 20px;
  }
`;

const Title = styled.div`
  width: 85%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 3rem;
  padding: 0.5rem 0;
  border-radius: 30px;
`;

const TagBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Tag = styled.div`
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 20px;
  text-align: center;
  margin: 0 5px;
`;

const BigTagBox = styled.div``;

const BigTag = styled.div`
  margin: 1rem;
`;

const Subscript = styled.div``;

const ContentBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 2em;
  @media screen and (max-width: 1350px) {
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContentLarge = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 2em 0 2em 6em;
  @media screen and (max-width: 1350px) {
  }
  @media screen and (max-width: 768px) {
    padding: 2em;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2em;
`;

const Desc = styled.div`
  line-height: 1.4rem;
  font-size: 0.8rem;
  color: #666;
  padding-left: 2rem;
  @media screen and (max-width: 1350px) {
  }
  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1em;
  border-radius: 20px;
  @media screen and (max-width: 1350px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0xp 20px;
  }
`;

const TextStrong = styled.strong`
  font-weight: bold;
  line-height: 2rem;
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  color: #444;
`;

const Enroll = styled.div`
  width: 90%;
  height: 55%;
  margin: 0 auto;
  border-radius: 30px;
  background: #d9e5ff;
  box-sizing: border-box;
`;

const RewardImg = styled(Image)`
  width: 160px;
  border-radius: 50%;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 4em;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.5rem 3rem;
  border: none;
  box-shadow: 3px 4px 8px #b7b7b7;
  background: #416dea;
  color: #fff;
  font-weight: bold;
  border-radius: 30px;
  margin: 1rem 0;
  &:hover {
    box-shadow: none;
    background: linear-gradient(315deg, #89d8d3, #416dea 74%);
  }
  &:active {
    background: linear-gradient(315deg, #89d8d3, #416dea 74%);
    box-shadow: 3px 4px 10px #bbb;
  }
`;

const Information = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  margin-top: 5em;
  color: #777;
  font-weight: bold;
`;

function Challenge() {
  const { id } = useParams();
  const user = useRecoilValue(userState);
  const [challenge, setChallenge] = useState();
  const [count, setCount] = useState(0);

  // const url1 = `http://localhost:8082/api/mychallenge`;
  // const url2 = `http://localhost:8082/api/challenge/${id}`;
  // const url3 = `http://localhost:8082/api/mychallenge/all/${id}`;

  const url1 =
    "http://springbootlhchallenge-env.eba-am3tqpey.us-east-1.elasticbeanstalk.com/api/mychallenge";
  const url2 = `http://springbootlhchallenge-env.eba-am3tqpey.us-east-1.elasticbeanstalk.com/api/challenge/${id}`;
  const url3 = `http://springbootlhchallenge-env.eba-am3tqpey.us-east-1.elasticbeanstalk.com/api/mychallenge/all/${id}`;

  const enrollChallenge = () => {
    if(user.id !== 0) {
      axios.post(url1, {
        userId : user.id,
        challengeId : id
      })
      .then(Response => {
        console.log('submit');
        // console.log(Response.data);
        handleCount();
        alert(Response.data);
      })
      .catch(Error => console.log(Error));
    } else {
      alert("로그인 이후 신청 가능합니다.");
    }
  };

  const handleCount = () => {
    axios
      .get(url3)
      .then((Response) => {
        setCount(Response.data);
      })
      .catch((Error) => console.log(Error));
  }

  useEffect(() => {
    axios
      .get(url2)
      .then((Response) => {
        console.log(Response.data);
        setChallenge(Response.data);
      })
      .catch((Error) => console.log(Error));
      handleCount();
  }, [setCount]);

  return (
    <Wrapper>
      <Container>
        <Title>{challenge && challenge.challengeTitle}</Title>
        <TagBox>
          <Tag>총 {challenge && challenge.period}일</Tag>
          <Tag>주 {challenge && challenge.weekCount}회</Tag>
        </TagBox>
        <BigTagBox>
          <BigTag>
            <Subscript>
              {challenge && challenge.startDay} ~ {challenge && challenge.endDay}
            </Subscript>
          </BigTag>
        </BigTagBox>
        <ContentBox>
          <ContentLarge>
            <Image
              src="https://health.chosun.com/site/data/img_dir/2018/09/10/2018091003038_0.jpg"
              alt="challenge"
            />
            <Desc>
              <Text>
                {challenge && challenge.challengeDesc}
              </Text>
              <p>
                <TextStrong>인증방법 및 주의사항</TextStrong>
                <br />
                60일동안 하루에 1번 인증샷을 촬영하셔야 합니다.
                <br />
                인증샷 피드에 인증샷이 공개됩니다.
                <br />
                스마트워치 혹은 앱 화면 "캡쳐"만 가능합니다.
                <br />
                - 동일한 사진으로 2번 이상 인증한 것으로 스탭이 판단하는 경우
                <br />
                - 다른 회원들의 신고를 받으신 경우
                <br />
                추가 증빙 요구 또는 패널티가 있을 수 있습니다.
              </p>
            </Desc>
          </ContentLarge>
          <Content>
            <Enroll>
              <RewardImg src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2266204454D8A84F32" />
              <ButtonWrapper>
                <Button onClick={enrollChallenge}>신청하기</Button>
              </ButtonWrapper>
            </Enroll>
            <Information>
              <p>신청 인원</p>
              <hr />
              <p>{count && count}명</p>
            </Information>
          </Content>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default Challenge;
