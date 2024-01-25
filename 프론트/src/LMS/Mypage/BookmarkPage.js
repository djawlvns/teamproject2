// import React, { useState, useEffect } from "react";
// import { fetchBookmarkedLectures } from "../Api/api";

// function BookmarkPage() {
//   const [bookmarkedLectures, setBookmarkedLectures] = useState([]);

//   useEffect(() => {
//     // 북마크된 강의 목록을 가져오는 API 호출
//     fetchBookmarkedLectures()
//       .then((data) => setBookmarkedLectures(data))
//       .catch((error) =>
//         console.error("Error fetching bookmarked lectures:", error)
//       );
//   }, []);

//   return (
//     <div>
//       <ul>
//         {bookmarkedLectures.map((lecture) => (
//           <li key={lecture.id}>
//             <p>{lecture.title}</p>
//             {/* 기타 데이터를 표시 */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BookmarkPage;
