import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  height: 1000px;
  padding: 50px 200px 0px 200px;
`;
const VodList = styled.div``;
const VodListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const VodBox = styled.div`
  display: flex;
  width: 80%;
`;
const Vod = styled.div`
  width: 300px;
  height: 200px;
  background-color: gray;
`;
const TextBox = styled.div`
  width: 100%-300px;
  height: 200px;
  position: relative;
  button {
    position: absolute;
    top: 10px;
    right: -900%;
  }
`;
const Title = styled.div``;
const Text = styled.div``;

export function VodRoom() {
  const [bookmarkedLectures, setBookmarkedLectures] = useState([]);
  const toggleBookmark = (lectureId) => {
    // 해당 강의를 즐겨찾기 했는지 확인하고, 상태를 업데이트.
    const lectureIndex = bookmarkedLectures.findIndex(
      (lecture) => lecture.id === lectureId
    );
    const newBookmarkedLectures = [...bookmarkedLectures];

    if (lectureIndex === -1) {
      // 즐겨찾기 목록에 없으면 추가
      newBookmarkedLectures.push({
        id: lectureId,
        title: "강의 제목",
        date: "2024.01.04",
      });
    } else {
      // 즐겨찾기 목록에 있으면 제거
      newBookmarkedLectures.splice(lectureIndex, 1);
    }

    setBookmarkedLectures(newBookmarkedLectures);
  };

  const [lectures, setLectures] = useState([
    { id: 1, title: "강의 1" },
    { id: 2, title: "강의 2" },
  ]);

  return (
    <>
      <Container>
        <VodListContainer>
          <VodList>
            {lectures.map((lecture) => (
              <VodBox key={lecture.id}>
                <Vod>VOD</Vod>
                <TextBox>
                  <Title>{lecture.title}</Title>
                  <Text>{lecture.date}</Text>
                  {/* 강의 즐겨찾기 토글 버튼 */}
                  <button onClick={() => toggleBookmark(lecture.id)}>
                    {bookmarkedLectures.some((lec) => lec.id === lecture.id)
                      ? "즐겨찾기 해제"
                      : "즐겨찾기 추가"}
                  </button>
                </TextBox>
              </VodBox>
            ))}
          </VodList>
        </VodListContainer>
      </Container>
    </>
  );
}
