import React, { useState } from "react";
import { Modal, Button } from "antd";
import styled from "styled-components";

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
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        onSuccess();
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
      visible={isModalVisible}
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
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </Bbox2>
      </Form>
    </Modal>
  );
}
