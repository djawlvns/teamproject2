import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
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
  width: 100%;
`;
const VodBox = styled.div`
  display: flex;
  width: 1191px;
`;
const Vod = styled.div`
  width: 300px;
  height: 200px;
  background-color: gray;
`;
const TextBox = styled.div`
  width: 700px;
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

const getVideoURLById = (videoId) => {
  switch (videoId) {
    case "1":
      return "https://www.youtube.com/3e8a113d-1ee4-4a44-9ad8-f4da6fcfa99b";
    case "2":
      return "https://www.youtube.com/3e8a113d-1ee4-4a44-9ad8-f4da6fcfa99b";
    default:
      return "https://www.youtube.com/3e8a113d-1ee4-4a44-9ad8-f4da6fcfa99b";
  }
};

export function VodRoom() {
  const [bookmarkedVods, setBookmarkedVods] = useState([]);
  const [setVods] = useState([]);

  const toggleBookmark = (vod) => {
    const isBookmarked = bookmarkedVods.some((v) => v.id === vod.id);

    if (isBookmarked) {
      // 북마크에서 제거
      const updatedBookmarks = bookmarkedVods.filter((v) => v.id !== vod.id);
      setBookmarkedVods(updatedBookmarks);
    } else {
      // 북마크에 추가
      setBookmarkedVods([...bookmarkedVods, vod]);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 데이터베이스 또는 API에서 VOD 정보를 가져오는 요청
        const response = await fetch("YOUR_API_ENDPOINT");
        const data = await response.json();

        // 가져온 데이터로 상태 업데이트
        setVods(data);
      } catch (error) {
        console.error("Error fetching VOD data:", error);
      }
    };

    // 데이터 로딩
    fetchData();
  }, []);
  const [vods] = useState([
    {
      id: 1,
      thumbnail:
        "https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Favatars%2FkokoaThumbnail_h8OxaLt_WUzjUct.jpg&w=1920&q=75",
      title: "카톡 클론코딩",
      date: "2024.01.08",
      url: "https://www.youtube.com/3e8a113d-1ee4-4a44-9ad8-f4da6fcfa99b",
      description: "HTML, CSS, Github",
    },
    {
      id: 2,
      thumbnail:
        "https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Favatars%2FytThumbnail_rtMv4Du.jpg&w=1080&q=75.jpg",
      title: "유튜브 클론코딩",
      date: "2024.01.08",
      url: "https://www.youtube.com/3e8a113d-1ee4-4a44-9ad8-f4da6fcfa99b",
      description: "유튜브 백엔드 + 프론트엔드 + 배포",
    },
  ]);

  return (
    <>
      <Container>
        <VodListContainer>
          <VodList>
            {vods.map((vod) => (
              <VodBox key={vod.id}>
                <Link to={`/main/videoroom/${vod.id}`}>
                  <Vod>VOD</Vod>
                </Link>
                <TextBox>
                  <Title>{vod.title}</Title>
                  <Text>{vod.date}</Text>
                </TextBox>
                <button
                  id={`bookmark-button-${vod.id}`}
                  onClick={() => toggleBookmark(vod)}
                  disabled={bookmarkedVods.some((v) => v.id === vod.id)}
                >
                  {bookmarkedVods.some((v) => v.id === vod.id)
                    ? "즐겨찾기 제거"
                    : "즐겨찾기 추가"}
                </button>
              </VodBox>
            ))}
          </VodList>
        </VodListContainer>
      </Container>
      <Routes>
        <Route
          path="/main/bookmark"
          element={
            <Bookmark
              bookmarkedVods={bookmarkedVods}
              toggleBookmark={toggleBookmark}
            />
          }
        />
      </Routes>
    </>
  );
}
