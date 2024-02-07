import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { manageSchedule } from "./Api/api";

const Container = styled.div`
  width: 100%;
  min-height: 600px;
  padding: 0;
`;

const TableBody = styled.div`
  width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #333;
  border-bottom: 1px solid #ccc;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  width: 100%;
  margin-bottom: 20px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
  }

  div.schedule {
    width: 100%;
    display: flex;
    border-bottom: 1px solid black;
    justify-content: space-between;
    padding: 10px;
  }
`;

const Thead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  padding: 10px;
  width: 1200px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
  }
`;

export function ScheduleBoard() {
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await manageSchedule(); // 스케줄 데이터 가져오는 API 호출
        setScheduleList(response.data); // API 응답에서 데이터 설정
      } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Thead>
          <span>시간</span>
          <span>과목</span>
        </Thead>
        <TableBody>
          <Table>
            {scheduleList.map((schedule, index) => (
              <div className="schedule" key={index}>
                <span>{schedule.time}</span>
                <span>{schedule.subject}</span>
              </div>
            ))}
          </Table>
        </TableBody>
      </Container>
    </>
  );
}
