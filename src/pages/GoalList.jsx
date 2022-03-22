import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1200px;
  margin: 20vh auto;
  min-height: 100vh;
  margin-bottom: 240px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const SearchWrapper = styled.div`
display: flex;
justify-content: center;
`;

const SearchForm = styled.form``;

const Select = styled.select`
width: 80px;
text-align: center;
height: 2rem;
`;

const SearchInput = styled.input`
height: 2rem;
margin-right: 1rem;
`;

const Button = styled.button`
  padding: 0.4rem 1rem;
  border: none;
  box-shadow: ${props => props.theme.boxShadow};
  background: ${(props) => props.backgroundColor || "#416dea"};
  color: #fff;
  border-radius: 30px;
  margin: 1rem 0;
  margin-left: ${(props) => props.marginLeft && "2rem"};
  &:hover {
    box-shadow: none;
    background: ${(props) =>
      props.hoverColor || "linear-gradient(315deg, #89d8d3, #416dea 74%)"};
  }
  &:active {
    background: ${(props) =>
      props.hoverColor || "linear-gradient(315deg, #89d8d3, #416dea 74%)"};
    box-shadow: 3px 4px 10px #bbb;
  }
`;

const List = styled.div`
  width: 90%;
  height: 80px;
  background: #fafafa;
  border-radius: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.titleColor};
  display: flex;
  align-items: center;
  margin: 1rem auto;
`;

const Title = styled.div`
flex-grow: 2;
margin-left: 2rem;
`;

const Tag = styled.div`
width: 48px;
height: 48px;
background: ${props => props.background || '#416dea'};
border-radius: 50%;
margin-right: 2rem;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 0.9rem;
`;

function GoalList() {
  return ( 
    <Container>
      <Wrapper>
        <SearchWrapper>
          <SearchForm>
            <Select>
              <option>전체</option>
              <option>성공</option>
              <option>실패</option>
            </Select>
            <SearchInput></SearchInput>
            <Button>Search</Button>
          </SearchForm>
        </SearchWrapper>
        <List>
          <Title>완료된 목표</Title>
          <Tag>성공</Tag>
        </List>
        <List>
          <Title>완료된 목표</Title>
          <Tag background={'#373737'}>실패</Tag>
        </List>
      </Wrapper>
    </Container>
   );
}

export default GoalList;