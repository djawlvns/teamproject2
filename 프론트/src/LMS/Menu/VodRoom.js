import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Bookmark from "../Mypage/Bookmark";
import { apiGetMyInfo } from "../Api/api";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

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
        const response = await fetch("http://localhost:8080/api/vod");
        const data = await response.json();
        setVods(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching VOD data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleBookmark = async (vodId) => {
    try {
      const token = sessionStorage.getItem("token");
      const user = await apiGetMyInfo();

      const existingBookmark = bookmarkedVods.find(
        (bookmark) => bookmark.vodId === vodId
      );
      if (existingBookmark) {
        await fetch(
          `http://localhost:8080/api/bookmark/${existingBookmark.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBookmarkedVods((prevBookmarks) =>
          prevBookmarks.filter((bookmark) => bookmark.vodId !== vodId)
        );
      } else {
        const vodToAdd = vods.find((vod) => vod.id === vodId);
        const newBookmark = {
          thumbnail: vodToAdd.thumbnail,
          title: vodToAdd.title,
          date: vodToAdd.date,
          description: vodToAdd.description,
          url: vodToAdd.url,
          vodId: vodToAdd.id,
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
        if (response.ok) {
          setBookmarkedVods((prevBookmarks) => [...prevBookmarks, newBookmark]);
        } else {
          console.error("Error bookmarking VOD:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error toggling bookmark:", error);
    }
  };

  return (
    <>
      <Container>
        <VodListContainer>
          {vods.length > 0 &&
            vods.map((vod) => (
              <VodBox key={vod.id}>
                <Link to={`/main/videoroom?url=${vod.url}`}>
                  <Vod thumbnail={vod.thumbnail} />
                </Link>
                <TextBox>
                  <Title>{vod.title}</Title>
                  <Text>{vod.date}</Text>
                </TextBox>
                <button onClick={() => toggleBookmark(vod.id)}>
                  {bookmarkedVods.some(
                    (bookmark) => bookmark.vodId === vod.id
                  ) ? (
                    <MdOutlineStar style={{ width: "81px", height: "24px" }} />
                  ) : (
                    <MdOutlineStarBorder
                      style={{ width: "81px", height: "24px" }}
                    />
                  )}
                </button>
              </VodBox>
            ))}
        </VodListContainer>
      </Container>
      <Routes>
        <Route
          path="/main/bookmark"
          element={<Bookmark toggleBookmark={toggleBookmark} />}
        />
      </Routes>
    </>
  );
}
