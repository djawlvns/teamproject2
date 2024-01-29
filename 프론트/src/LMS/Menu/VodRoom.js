import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Bookmark from "../Mypage/Bookmark";

const Container = styled.div`
  display: flex;
  height: 1000px;
  padding: 50px 200px 0px 200px;
`;
const VodListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 1200px;
  height: 100%;
  max-height: 1200px;
  overflow-y: auto;
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

export function VodRoom() {
  const [bookmarkedVods, setBookmarkedVods] = useState([]);
  const [vods, setVods] = useState([]);

  const toggleBookmark = async (vod) => {
    try {
      const isBookmarked = bookmarkedVods.some((v) => v.id === vod.id);

      if (isBookmarked) {
        // 북마크에서 제거
        const updatedBookmarks = bookmarkedVods.filter((v) => v.id !== vod.id);
        setBookmarkedVods(updatedBookmarks);
      } else {
        // 북마크에 추가
        setBookmarkedVods([...bookmarkedVods, vod]);
      }

      // 서버에 북마크 정보 업데이트
      await fetch("http://localhost:8080/${vod.id}/bookmark/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      console.log("addVodToBookmark");
      // 성공적으로 서버에 업데이트되면, 서버에서 다시 북마크 목록을 가져옴
      const updatedBookmarksResponse = await fetch(
        "http://localhost:8080/${vod.id}/bookmark"
      );
      const updatedBookmarks = await updatedBookmarksResponse.json();
      setBookmarkedVods(updatedBookmarks);
    } catch (error) {
      console.error("Error updating bookmark:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에서 VOD 목록을 가져옴
        const response = await fetch("http://localhost:8080/api/vod");
        const data = await response.json();

        // 가져온 데이터로 상태 업데이트
        setVods(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching VOD data:", error);
      }
    };

    // 데이터 로딩
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <VodListContainer>
          {vods.length > 0 &&
            vods.map((vod) => (
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
