import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { manageNotice } from "./Api/api";

const Container = styled.div`
  width: 100%;
  min-height: 600px;
  padding-left: 0;
  padding-right: 0;
`;

const Tablebody = styled.div`
  width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #333;
  border-bottom: 1px solid #ccc;
`;

const Table = styled.table`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  width: 1200px;
  max-width: 1200px;
  margin-bottom: 20px;
  list-style: none;

  li {
    width: 1200px;
    display: flex;
    border-bottom: 1px solid black;
    justify-content: center;
    align-items: center;
  }
  h3 {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Thead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  margin-bottom: 10px;
  width: 1200px;
  th {
    font-size: 20px;
    width: 400px;
  }
`;
export function Noticeboard() {
  const [noticeList, setNoticeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await manageNotice();
        const sortedData = response.data.sort((a, b) => b.id - a.id);
        setNoticeList(sortedData);
      } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Thead>
          <th>제목</th>
          <th>내용</th>
          <th>작성자</th>
        </Thead>
        <Tablebody>
          <Table>
            {noticeList.map((notice, index) => (
              <li key={index}>
                <h3>{notice.title}</h3>
                <p>{notice.content}</p>
                <p>{notice.author}</p>
              </li>
            ))}
          </Table>
        </Tablebody>
      </Container>
    </>
  );
}
