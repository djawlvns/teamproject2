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
// 정보 가져오기
export function user(user) {
  const token = sessionStorage.getItem("token");
  return fetch(`http://localhost:8080/api/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
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
    const token = sessionStorage.getItem("token");
    const response = await fetch(`http://localhost:8080/api/bookmark`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
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
  const token = sessionStorage.getItem("token");
  return fetch(`http://localhost:8080/api/board`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
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

// 자기 아이디 정보
export function apiGetMyInfo() {
  const token = sessionStorage.getItem("token");
  return fetch("http://localhost:8080/api/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(),
  }).then((response) => response.json());
}

// 공지사항 불러오기
export const manageNotice = async (id, noticeData, method) => {
  try {
    const token = sessionStorage.getItem("token");
    const url = id
      ? `http://localhost:8080/api/notice/${id}`
      : "http://localhost:8080/api/notice";

    const response = await fetch(url, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: method !== "GET" ? JSON.stringify(noticeData) : undefined,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to ${method.toLowerCase()} notice`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error ${method.toLowerCase()}ing notice:`, error);
  }
};

// 시간표 불러오기
export const manageSchedule = async (id, ScheduleData, method) => {
  try {
    const token = sessionStorage.getItem("token");
    const url = id
      ? `http://localhost:8080/api/schedules/${id}`
      : "http://localhost:8080/api/schedules";

    const response = await fetch(url, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: method !== "GET" ? JSON.stringify(ScheduleData) : undefined,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to ${method.toLowerCase()} Schedule`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error ${method.toLowerCase()}ing Schedule:`, error);
    throw error;
  }
};

//유저프로필
export const fetchAllUsers = async () => {
  try {
    const token = sessionStorage.getItem("token");
    const response = await fetch(`http://localhost:8080/api/allUsers`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch all users");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};
