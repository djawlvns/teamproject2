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

export const checkDuplicateId = async (loginId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/checkDuplicateId?loginId=${loginId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("아이디 중복 확인에 실패했습니다.");
    }

    const data = await response.json();
    return data; // 중복 여부에 대한 데이터 반환 (예시: { isDuplicate: true })
  } catch (error) {
    throw new Error("아이디 중복 확인에 실패했습니다.");
  }
};

// 로그인
export function login(user) {
  console.log(user);
  return fetch(`http://localhost:8080/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

//북마크
export const fetchBookmarkedLectures = () => {
  return fetch(`http://localhost:8080/api/bookmarks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
// {
//   id: 1,
//   thumbnail: "https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Favatars%2FkokoaThumbnail_h8OxaLt_WUzjUct.jpg&w=1920&q=75",
//   title: "카톡 클론코딩",
//   date: "2024.01.08",
//   description: "HTML, CSS, Github",
// },
// {
//   id: 2,
//   thumbnail: "https://nomadcoders.co/_next/image?url=https%3A%2F%2Fd1telmomo28umc.cloudfront.net%2Fmedia%2Fpublic%2Favatars%2FytThumbnail_rtMv4Du.jpg&w=1080&q=75.jpg",
//   title: "유튜브 클론코딩",
//   date: "2024.01.08",
//   description: "유튜브 백엔드 + 프론트엔드 + 배포",
// }
