import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Bookmark from "../Mypage/Bookmark";
import { apiGetMyInfo } from "../Api/api";

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
  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
  background-position: center;
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
  const [vods, setVods] = useState([]);
  const [bookmarkedVods, setBookmarkedVods] = useState([]);

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
  // console.log(vods);
  const handleBookmarkClick = async (vod) => {
    try {
      const token = sessionStorage.getItem("token");
      const user = await apiGetMyInfo();

      const newBookmark = {
        thumbnail: vod.thumbnail,
        title: vod.title,
        date: vod.date,
        description: vod.description,
        url: vod.url,
        vodId: vod.id,
        userId: user.data.id,
      };

      const response = await fetch("http://localhost:8080/api/bookmark", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookmark),
      });
      console.log(response);
      if (response.ok) {
        setBookmarkedVods((prevBookmarks) => [...prevBookmarks, vods.id]);
      } else {
        console.error("Error bookmarking VOD:", response.statusText);
      }
    } catch (error) {
      console.error("Error bookmarking VOD:", error);
    }
  };

  return (
    <>
      <Container>
        <VodListContainer>
          {vods.length > 0 &&
            vods.map((vod) => (
              <VodBox key={vod.id}>
                <Link to={`/main/videoroom/${vod.id}`}>
                  <Vod thumbnail={vod.thumbnail}>VOD</Vod>
                </Link>
                <TextBox>
                  <Title>{vod.title}</Title>
                  <Text>{vod.date}</Text>
                </TextBox>
                <button onClick={() => handleBookmarkClick(vod)}>
                  즐겨찾기
                </button>
              </VodBox>
            ))}
        </VodListContainer>
      </Container>
      <Routes>
        <Route path="/main/bookmark" element={<Bookmark />} />
      </Routes>
    </>
  );
}
