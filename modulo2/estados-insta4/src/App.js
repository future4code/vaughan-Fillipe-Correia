import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={
            "https://images.generated.photos/_eLx0hk7J_yH3i6QMV8K6iC6o1AmWFK2Zj86XwSf7H0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvYjEwZDlk/ODctMTMwOS00Zjdl/LWE3MWYtOThmNTI1/Yzk4ODk5LmpwZw.jpg"
          }
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post
          nomeUsuario={"Fillipe"}
          fotoUsuario={
            "https://images.generated.photos/SjKqjo2lSuQUXExn-Sn_V6xG_JfSfxbZCnXpyirqENA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvNDFhMzQ4/ODYtMDJlNS00ZWM5/LWIzNjktYTg5NDg0/ODc5MGI5LmpwZw.jpg"
          }
          fotoPost={"https://picsum.photos/id/232/200/150"}
        />

        <Post
          nomeUsuario={"Roberto"}
          fotoUsuario={
            "https://images.generated.photos/HmSwNiKcS7MWs4PAL1pmq0AIsJ4RaAchWw29ANQqRwA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvZmYxZWE5/MzQtNDhmZS00ZmIw/LTk2YjgtOTVkMDlj/YThmNmUwLmpwZw.jpg"
          }
          fotoPost={"https://picsum.photos/id/237/200/150"}
        />
      </MainContainer>
    );
  }
}

export default App;
