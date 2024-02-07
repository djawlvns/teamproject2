import styled from "styled-components";
import { useState, useEffect } from "react";
import { fetchBookmarkedLectures } from "../Api/api";

const BookmarkBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const BookmarkListBox = styled.div`
  padding: 50px 100px 0px 100px;
  li {
    list-style: none;
  }
`;

const BookmarkList = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const BookmarkBox = styled.div`
  display: flex;
  width: 100%;
  list-style: none;
`;

const Thumbnail = styled.img`
  width: 300px;
  height: 150px;
`;

const TitleBox = styled.div`
  width: 100%-300px;
  padding-left: 12px;
`;

const Title = styled.div`
  font-size: 30px;
`;

const Text = styled.div`
  font-size: 16px;
`;

const Bookmark = ({ toggleBookmark }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await fetchBookmarkedLectures();
        if (response.resultCode === "SUCCESS") {
          setBookmarks(response.data);
        } else {
          console.error("error", response.message);
        }
      } catch (error) {
        console.error("Error fetching bookmarked lectures:", error);
      }
    };
    fetchBookmarks();
  }, []);
  console.log(bookmarks.map((bookmark) => bookmark.id));
  return (
    <BookmarkListBox>
      <BookmarkBar>즐겨찾기</BookmarkBar>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
            <BookmarkBox>
              <Thumbnail src={bookmark.thumbnail} alt={bookmark.title} />
              <TitleBox>
                <Title>{bookmark.title}</Title>
                <Text>
                  {bookmark.date} - {bookmark.description}
                </Text>
                <button onClick={() => toggleBookmark(bookmark.id)}></button>
              </TitleBox>
            </BookmarkBox>
          </li>
        ))}
      </ul>
    </BookmarkListBox>
  );
};

export default Bookmark;
