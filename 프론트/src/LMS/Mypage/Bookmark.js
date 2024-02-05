import styled from "styled-components";
import { useState, useEffect } from "react";

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
`;

const Thumbnail = styled.img`
  width: 300px;
  height: 200px;
`;

const TitleBox = styled.div`
  width: 100%-300px;
  background-color: beige;
`;

const Title = styled.div``;

const Text = styled.div``;

const Bookmark = ({ bookmarks, toggleBookmark }) => {
  const [bookmarkedVods, setBookmarkedVods] = useState([]);
  console.log(bookmarkedVods);
  return (
    <BookmarkListBox>
      <BookmarkBar>즐겨찾기</BookmarkBar>
      <ul>
        {bookmarks &&
          bookmarks.map((bookmark) => (
            <li key={bookmark.id}>
              <BookmarkBox>
                <Thumbnail src={bookmark.thumbnail} alt={bookmark.title} />
                <TitleBox>
                  <Title>{bookmark.title}</Title>
                  <Text>
                    {bookmark.date} - {bookmark.description}
                  </Text>
                  <button onClick={() => toggleBookmark(bookmark.id)}>
                    {bookmarkedVods.some((v) => v.id === bookmark.id)
                      ? "즐겨찾기 해제"
                      : "즐겨찾기 추가"}
                  </button>
                </TitleBox>
              </BookmarkBox>
            </li>
          ))}
      </ul>
    </BookmarkListBox>
  );
};

export default Bookmark;
