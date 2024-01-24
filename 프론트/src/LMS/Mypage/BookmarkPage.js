import React, { useState, useEffect } from "react";
import Bookmark from "./Bookmark";
import { fetchBookmarkedLectures } from "../Api/api";

const BookmarkPage = () => {
  const [bookmarkedLectures, setBookmarkedLectures] = useState([]);

  useEffect(() => {
    // 페이지가 처음 로딩될 때 즐겨찾기한 강의 목록을 가져오도록 설정.
    fetchBookmarkedLectures()
      .then((data) => {
        setBookmarkedLectures(data); // 가져온 데이터로 상태 업데이트
      })
      .catch((error) => {
        console.error("Error fetching bookmarked lectures:", error);
      });
  }, []);

  return <Bookmark bookmarkedLectures={bookmarkedLectures} />;
};

export default BookmarkPage;
