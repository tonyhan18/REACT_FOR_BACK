import styled from "styled-components";

const Todo = () => {
  //변수

  // 함수

  return (
    <Container>
      <Title>제목</Title>
      <form>
        <InputWrapper>
          <InputText></InputText>
          <BtnSubmit>+</BtnSubmit>
        </InputWrapper>
      </form>
      <List>
        <Item>
          <label>
            <Checkbox type="checkbox" />
            <Content>아이템입니다.</Content>
          </label>
          <BtnDelete>X</BtnDelete>
        </Item>
      </List>
    </Container>
  );
};

// 컴포넌트
const Container = styled.div`
  //위치
  margin: 0 auto;
  margin-top: 6rem;
  //크기
  width: 512px;
  //꾸미기
  background-color: grey;
  border-radius: 5px;
  overflow: hidden;
`;

const Title = styled.div`
  //위치
  display: flex;
  justify-content: center;
  align-items: center;
  // 크기
  height: 4rem;
  font-size: 1.5rem;
  font-family: sans-serif;
  color: white;
  // 꾸미기
  background-color: #22b8cf;
`;
const InputWrapper = styled.div`
  //위치
  display: flex;
  //크기
  //꾸미기
  background-color: #495057;
`;
const InputText = styled.input`
  flex: 1;
  padding: 0.5rem;
  padding-left: 1rem;

  font-size: 1.125rem;
  background: none;
  border: none;
  outline: none;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
`;
const BtnSubmit = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  outline: none;
  color: white;
  background-color: #868e96;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background-color: #adb5bd;
  }
`;
const List = styled.ul``;

const Item = styled.li`
  display: flex;
  padding: 10px;

  label {
    flex: 1;
    display: flex;
    align-items: center;
  }
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Checkbox = styled.input`
  background: none;
  border: none;
  outline: none;
`;
const Content = styled.div`
  padding-left: 0.5rem;
`;
const BtnDelete = styled.button`
  border-radius: 1px;

  background: none;
  border: none;
  outline: none;
`;

export default Todo;
