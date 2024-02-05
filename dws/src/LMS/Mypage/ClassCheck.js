import styled from "styled-components";

const CheckListBox = styled.div`
  padding: 50px 200px 0px 200px;
  height: 700px;
`;
const ListTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
const CheckList = styled.div``;

const ClassCheckComponent = () => (
  <CheckListBox>
    <ListTitle>출석률</ListTitle>
    <CheckList>
      {/* ex) 이번달 수업일수 or 이번달 출석(해야하는)일수 */}
      {/* ex) 내 출석 률 */}
    </CheckList>
  </CheckListBox>
);
export default ClassCheckComponent;
