import styled from "styled-components";
import BookmarkPage from "./BookmarkPage";
import { Link } from "react-router-dom";

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

const Bookmark = ({ bookmarkedVods, toggleBookmark }) => (
  <BookmarkListBox>
    <BookmarkBar>즐겨찾기</BookmarkBar>
    <ul>
      {bookmarkedVods &&
        bookmarkedVods.map((vod) => (
          <li key={vod.id}>
            <BookmarkBox>
              <Thumbnail src={vod.thumbnail} alt={vod.title} />
              <TitleBox>
                <Title>{vod.title}</Title>
                <Text>
                  {vod.date} - {vod.description}
                </Text>
                <button onClick={() => toggleBookmark(vod)}>
                  {bookmarkedVods.some((v) => v.id === vod.id)
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

export default Bookmark;
