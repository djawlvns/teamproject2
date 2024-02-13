import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { boardList } from "../Api/api";
import { Button } from "antd";
import BoardWrite from "./BoardWrite";

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
  td {
    text-align: center;
  }
  tr {
    border-bottom: 1px solid black;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 90%;
  right: 10%;
`;

export function Free() {
  const [posts, setPosts] = useState([]);
  const [isWriting, setIsWriting] = useState(false);

  const handleWriteButtonClick = () => {
    setIsWriting(true);
  };
  const handleWriteSuccess = (newPost) => {
    setIsWriting(false);
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await boardList();

        if (response.resultCode === "SUCCESS") {
          const posts = response.data;
          setPosts(posts);
          console.log(posts);
        } else {
        }
      } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      }
    };

    fetchData();
  }, [posts]);

  return (
    <>
      <Container>
        <Tablebody>
          <Table>
            <colgroup>
              <col style={{ width: "80px" }} />
              <col style={{ width: "25%" }} />
              <col />
              <col style={{ width: "15%" }} />
            </colgroup>
            <thead>
              <tr>
                <th>순번</th>
                <th>제목</th>
                <th>내용</th>
                <th>글쓴이</th>
              </tr>
            </thead>
            <tbody>
              {posts
                .filter((item) => item.category === "1")
                .map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title} </td>
                    <td>{item.text} </td>
                    <td>{item.author}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Tablebody>
        <ButtonContainer>
          <Button onClick={handleWriteButtonClick}>글쓰기</Button>
        </ButtonContainer>
      </Container>
      {isWriting && <BoardWrite onSuccess={handleWriteSuccess} />}
    </>
  );
}
