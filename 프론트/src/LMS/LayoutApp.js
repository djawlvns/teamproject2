import { QueryClient, QueryClientProvider } from "react-query";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Error } from "./Error";
import { Logout } from "./HeaderBar/Logout";
import { Login } from "./HeaderBar/Login";
import { Layout } from "./Layout";
import { ClassRoom } from "./Menu/ClassRoom";
import { VodRoom } from "./Menu/VodRoom";
import { Board } from "./Menu/Board";
import { Mypage } from "./Mypage/Mypage";
import { Notice } from "./Notice";
import { Schedule } from "./Schedule";
import { Register } from "./HeaderBar/Register";
import { Sregister } from "./HeaderBar/Sregister";
import { Tregister } from "./HeaderBar/Tregister";
import { Layout2 } from "./Layout2";
import { Free } from "./Board/Free";
import { Suggestion } from "./Board/Suggestion";
import { Qna } from "./Board/Qna";
import { LiveRoom } from "./Menu/LiveRoom";
import VideoRoom from "./Menu/VideoRoom";
import { Define } from "./Define";
import { Adminpage } from "./Admin/Adminpage";
import { Profile } from "./Admin/Profile";

const client = new QueryClient();
export const MyContext = createContext();

export function LayoutApp() {
  const [myGlobalState, setMyGlobalState] = useState(null);

  return (
    <>
      <QueryClientProvider client={client}>
        <MyContext.Provider value={{ myGlobalState, setMyGlobalState }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}>
                <Route index element={<Login />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="/join" element={<Layout2 />}>
                <Route index element={<Register />} />
                <Route path="register" element={<Register />} />
                <Route path="sregister" element={<Sregister />} />
                <Route path="tregister" element={<Tregister />} />
              </Route>
              <Route path="/main" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="logout" element={<Logout />} />
                <Route path="classroom" element={<ClassRoom />} />
                <Route path="classroom/live" element={<LiveRoom />} />
                <Route path="vodroom" element={<VodRoom />} />
                <Route path="videoroom/:videoId" element={<VideoRoom />} />
                <Route path="define" element={<Define />} />
                <Route path="board" element={<Board />}>
                  <Route path="free" element={<Free />} />
                  <Route path="suggestion" element={<Suggestion />} />
                  <Route path="qna" element={<Qna />} />
                </Route>
                <Route path="mypage" element={<Mypage />} />
                <Route path="notice" element={<Notice />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="adminpage" element={<Adminpage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </QueryClientProvider>
    </>
  );
}
