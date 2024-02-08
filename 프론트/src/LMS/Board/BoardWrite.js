import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import styled from "styled-components";
import { apiGetMyInfo } from "../Api/api";

const Form = styled.div``;
const Bbox = styled.div`
  label {
    display: flex;
  }
  input {
    width: 400px;
  }
`;
const Bbox2 = styled.div`
  label {
    display: flex;
  }
  textarea {
    width: 400px;
    height: 200px;
  }
`;

export default function BoardWrite({ onSuccess }) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [userid, setUserId] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    author: "",
    category: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiGetMyInfo();
        if (response.resultCode === "SUCCESS") {
          const user = response.data.loginId;

          setFormData((prevData) => ({ ...prevData, author: user }));
          console.log(response.data.loginId);
        } else {
        }
      } catch (error) {
        console.error("데이터 실패:", error);
      }
    };
    fetchUser();
  }, []);
  //   apiGetMyInfo()
  //     .then((user) => {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         author: user.loginId,
  //       }));
  //     })
  //     .catch((error) => {
  //       console.log("로그인이 안되어 있습니다.", error);
  //     });
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const categoryMapping = {
      자유게시판: 1,
      건의게시판: 2,
      문의게시판: 3,
    };

    const payload = {
      ...formData,
      category: categoryMapping[formData.category],
    };

    try {
      const response = await fetch("http://localhost:8080/api/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        onSuccess();
        setIsModalVisible(false); // 성공 시 모달 닫기
      } else {
        console.error("게시글 저장 실패");
      }
    } catch (error) {
      console.error("게시글 저장 중 오류 발생:", error);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="게시글 작성"
      open={isModalVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" type="primary" onClick={handleSubmit}>
          저장
        </Button>,
        <Button key="cancel" onClick={handleCancel}>
          취소
        </Button>,
      ]}
    >
      <Form>
        <Bbox>
          <label>카테고리:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option>===선택===</option>
            <option value="자유게시판">자유게시판</option>
            <option value="건의게시판">건의게시판</option>
            <option value="문의게시판">문의게시판</option>
          </select>
        </Bbox>
        <Bbox>
          <label>제목:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Bbox>
        <Bbox2>
          <label>내용:</label>
          <textarea name="text" value={formData.text} onChange={handleChange} />
        </Bbox2>
      </Form>
    </Modal>
  );
}
