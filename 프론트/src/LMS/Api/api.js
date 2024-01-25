// 가입
export function signUp(user) {
  return fetch(`http://localhost:8080/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}
// 아이디 중복확인
export const checkDuplicateId = async (loginId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/checkDuplicateId/${loginId}`,
      {
        method: "POST", // POST 방식으로 변경
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: loginId }), // 데이터를 객체로 감싸서 전달
      }
    );

    if (!response.ok) {
      throw new Error("아이디 중복 확인에 실패했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("아이디 중복 확인에 실패했습니다.");
  }
};

// export async function login(user) {
//   try {
//     console.log(user);

//     const response = await fetch(`http://localhost:8080/api/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error during login:", error);
//     throw error; // Rethrow the error to be handled by the calling code
//   }
// }

//북마크
export const fetchBookmarkedLectures = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/bookmarks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch bookmarked lectures");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching bookmarked lectures:", error);
    return [];
  }
};

// 게시판
export function boardList(board) {
  console.log(board);
  return fetch(`http://localhost:8080/api/board`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

const getAllVod = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/vod");

    if (response.ok) {
      const data = await response.json();
      console.log("VODs:", data);
      // 데이터를 상태에 설정하거나 다른 작업 수행
    } else {
      console.error("Failed to get VODs");
    }
  } catch (error) {
    console.error("Error getting VODs", error);
  }
};

// 공지사항 불러오기
