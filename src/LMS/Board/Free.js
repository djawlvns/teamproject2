import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { boardList } from "../Api/api";

const Container = styled.div`
  width: 100%;
  min-height: 600px;
  padding-left: 0;
  padding-right: 0;
  position: relative;
`;

const Tablebody = styled.div`
  width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #333;
  border-bottom: 1px solid #ccc;
`;

const Table = styled.table`
  border: 1px solid #ddd;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  border-spacing: 0;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 8%;
  right: 17%;
  margin: 20px;
`;
const WriteButton = styled.button``;

export function Free() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // boardList API에서 category가 1인 데이터만 가져옴
    const fetchData = async () => {
      try {
        const response = await boardList();
        const filteredData = response.data.data.filter(
          (item) => item.category === 1
        );
        setData(filteredData);
      } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      }
    };

    fetchData();
  }, []);

  const handleWriteButtonClick = () => {
    console.log("클릭");
  };
  return (
    <>
      <Container>
        <Tablebody>
          <Table>
            <colgroup>
              <col style={{ width: "80px" }} />
              <col />
              <col style={{ width: "10%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "10%" }} />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title} </td>
                  <td>{item.author}</td>
                  <td>{item.data} </td>
                </tr>;
              })}
            </tbody>
          </Table>
        </Tablebody>
        <ButtonContainer>
          <WriteButton onClick={handleWriteButtonClick}>글쓰기</WriteButton>
        </ButtonContainer>
      </Container>
    </>
  );
}
