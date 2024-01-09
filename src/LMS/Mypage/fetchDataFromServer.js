import axios from "axios";

// 데이터를 가져올 API 엔드포인트를 정의.
const apiUrl = "https://example.com/api/data";

// 데이터를 가져오는 함수를 정의.
const fetchDataFromServer = async () => {
  try {
    // Axios를 사용하여 서버에 GET 요청.
    const response = await axios.get(apiUrl);

    // 서버에서 받아온 데이터를 반환.
    return response.data;
  } catch (error) {
    // 오류가 발생한 경우 적절히 처리.
    console.error("Error fetching data:", error);
    throw error; // 예외를 다시 던져서 호출자에게 전달.
  }
};

export default fetchDataFromServer;
