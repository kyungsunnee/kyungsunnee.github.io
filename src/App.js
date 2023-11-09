import logo from "./logo.svg";
import "./App.css";
import image from "./img/IMG_9969.jpg";
import Header from "./Header";
import profile from "./img/profile.jpeg";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="main-left">
          <div id="profile-photo-area">
            <img alt="profile photo" src={profile} id="profile-photo" />
          </div>
          <div id="profile-txt-area">
            <div id="profile-txt"></div>
          </div>
        </div>
        <div className="main-right">
          <div className="script">
            <div className="script-title">
              <div className="script-title-sq"></div>
              <div className="script-title-txt">ABOUT</div>
            </div>
            <div className="script-txt">
              구현한 서비스를 통해 사용자와 원활하고 유쾌한 의사소통을 하고
              싶습니다. 좋은 의사소통은 사용자가 서비스를 이용하는 데 편안함을
              주고 결과적으로 많은 사용자의 마음을 얻게 할 수 있다고 확신합니다.
              이러한 소통을 위해 개발 기술뿐만 아니라 유저 인터페이스도 항상
              생각하는 프론트엔드 엔지니어가 되는 것이 제 목표입니다. 서비스를
              통한 사용자와의 소통뿐 아니라 함께 하는 동료들과의 소통 역시
              중요합니다. 밝고 긍정적인 환경은 좋은 결과를 낳는 배경이 될
              것입니다. 상대의 입장을 이해하고 경청해 화기애애한 대화를 이끌 수
              있는 게 제 강점이며 다양한 경험을 배경으로 여러 분야와의 협업에서
              높은 이해도를 가지고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
