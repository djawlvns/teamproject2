import styled from "styled-components";
import React, { useState } from "react";
import Bookmark from "../Mypage/Bookmark";

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

  const toggleBookmark = (lectureId, lectures) => {
    // 해당 강의를 즐겨찾기 했는지 확인하고, 상태를 업데이트.
    const lectureIndex = bookmarkedLectures.findIndex(
      (lecture) => lecture.id === lectureId
    );
    const newBookmarkedLectures = [...bookmarkedLectures];

    if (lectureIndex === -1) {
      // 즐겨찾기 목록에 없으면 추가
      const selectedLecture = lectures.find((lec) => lec.id === lectureId);
      newBookmarkedLectures.push({
        id: selectedLecture.id,
        title: selectedLecture.title,
        date: selectedLecture.date,
        thumbnail: selectedLecture.thumbnail,
        description: selectedLecture.description,
      });
    } else {
      // 즐겨찾기 목록에 있으면 제거
      newBookmarkedLectures.splice(lectureIndex, 1);
    }

    setBookmarkedLectures(newBookmarkedLectures);
  };

  const [lectures] = useState([
    {
      id: 1,
      thumbnail:
        "https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Favatars%2FkokoaThumbnail_h8OxaLt_WUzjUct.jpg&w=1920&q=75",
      title: "카톡 클론코딩",
      date: "2024.01.08",
      description: "HTML, CSS, Github",
    },
    {
      id: 2,
      thumbnail:
        "https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Favatars%2FytThumbnail_rtMv4Du.jpg&w=1080&q=75.jpg",
      title: "유튜브 클론코딩",
      date: "2024.01.08",
      description: "유튜브 백엔드 + 프론트엔드 + 배포",
    },
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
        <Bookmark bookmarkedLectures={bookmarkedLectures} />
      </Container>
    </>
  );
}
