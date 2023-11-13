import logo from "./logo.svg";
import "./App.css";
import image from "./img/IMG_9969.jpg";
import Header from "./Header";
import profile from "./img/profile.jpeg";

import reactico from "./img/skill/atom.png";
import jsico from "./img/skill/java-script-logo.png";
import cssico from "./img/skill/files (1).png";
import htmlico from "./img/skill/files.png";
import illustico from "./img/skill/illustrator.png";
import photoshopico from "./img/skill/photoshop.png";
import figmaico from "./img/skill/figma (1).png";
import mostico from "./img/skill/bing.png";
import linkedico from "./img/link.png";
import favico from "./img/favourite2.png";
import leftquotesico from "./img/left-quotes-sign.png";

function App() {
  const icoList = [
    jsico,
    htmlico,
    cssico,
    reactico,
    photoshopico,
    illustico,
    figmaico,
    mostico,
  ];

  const driveList = [
    "https://drive.google.com/drive/folders/1QWlPgaCqMKGHMnAJACjrE6QgnkXRIlHa?usp=sharing",
    "https://drive.google.com/drive/folders/1MjXZrN3UtCytbSvNYSVIVukR6P4KunMp?usp=sharing",
    "https://drive.google.com/drive/folders/1MjXZrN3UtCytbSvNYSVIVukR6P4KunMp?usp=sharing",
    "",
    "https://drive.google.com/drive/folders/1ms4pta5De2ItbbVL9j0y2e_8sc9D1aDa?usp=sharing",
    "https://drive.google.com/drive/folders/1ms4pta5De2ItbbVL9j0y2e_8sc9D1aDa?usp=sharing",
    "https://drive.google.com/drive/folders/1e3DuSadAaMGKuCF6UgEUX4EYHQLIx2Sk?usp=sharing",
    "https://drive.google.com/drive/folders/1N47d9IrmgIoVv4MZupPWWjYwS84pj1BX?usp=sharing",
  ];

  return (
    <div className="App">
      <div className="main-container">
        <div className="main-left">
          <div id="profile-photo-area">
            <img alt="profile photo" src={profile} id="profile-photo" />
          </div>
          <div id="profile-txt-area">
            <div id="profile-txt">
              <div id="education">
                <div className="strong mobile-hidden font-size-18px">
                  ✏️ Education
                </div>
                <div className="education-title strong">
                  <span className="mobile-veiw pencil">✏️ </span>
                  Communivity College
                </div>
                <div className="date">09.03 - 15.02</div>
                <div className="education-script">
                  명지전문대,
                  <br />
                  산업 정보 디자인학과
                </div>
                <div className="education-title strong">
                  <span className="mobile-veiw pencil">✏️ </span>Boot camp
                </div>
                <div className="date">21.06 - 21.12</div>
                <div className="education-script">
                  Code States,
                  <br />
                  Advanced Software Engineering
                  <br />
                  Immersive Program, 31th
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="script">
            <div className="script-title">
              <div className="script-title-sq"></div>
              <div className="script-title-txt">ABOUT</div>
            </div>
            <div className="script-txt">
              <strong>커뮤니케이션</strong>
              <br />
              사용자와의 원활한 의사소통을 핵심가치로 삼습니다. 경험을 통해 모든
              사용자에게 편안하고 유쾌한 경험을 제공하는 것에 목표를 두며, 항상
              사용자 인터페이스를 고려하는 자세를 유지하고 있습니다. 이를 통해
              사용자가 서비스를 보다 편리하게 이용할 수 있는 환경을 조성하고자
              합니다.
              <br />
              <br />
              <strong>용감함</strong>
              <br />
              처음 사용하는 툴에 대한 두려움이 없으며, 높은 적응력과 학습 능력을
              가지고 있습니다. 이전에 경험하지 못한 업무가 주어져도 가지고있는
              지식과 다양한 수단을 적극적으로 활용하는 자세를 갖추고 있습니다.
              이러한 태도는 불확실한 업무 상황에서도 안정적이며 효용 가능한
              해결책을 제시하는 데 도움이 될 것입니다.
              <br />
              <br />
              <strong>꾸준함</strong>
              <br />
              꾸준한 학습 의지는 최신 트렌드를 파악하고 빠르게 적응하는 데 큰
              역할을 합니다. 업계의 동향을 주시하며 끊임없이 학습하고, 새로운
              기술을 터득하여 업무에 적용합니다. 이는 지속적인 전문성 강화를
              통해 기업의 현대적인 모습을 구축하는 데 도움이 될 것입니다.
              <br />
              <br />
              <strong>끈질김</strong>
              <br />
              끈질김은 뛰어난 결과물을 이끌어내는 데 결정적인 역할을 합니다.
              마지막까지 수정 및 보완 작업을 통해 최고의 결과를 창출합니다.
              <br />
              <br />
              <br />
              <div id="goal-script">
                " 서비스를 통한 사용자와의 원활한 의사소통은 물론, 팀 내에서의
                긍정적인 커뮤니케이션을 통해 협업의 효율성을 극대화하고자 하는
                목표를 가지고 있습니다. 사용자 경험 개선 및 팀 내 협업을
                강화하여 효율적이고 창의적인 결과물을 만들어내고 싶습니다. "
              </div>
            </div>

            <div className="empty_space"></div>
            <div className="script-title">
              <div className="script-title-sq"></div>
              <div className="script-title-txt">TOOLS</div>
            </div>
            <div className="script-txt height-reset">
              <div className="script-title-script text-center mgt-10px ">
                Empowering Creativity with
              </div>
              <div className="skill-area">
                {icoList.map((icon, index) => (
                  <a href={driveList[index]} target="_/blank">
                    <img
                      className="skill-ico"
                      key={index}
                      src={icon}
                      alt={`icon-${index}`}
                    />
                  </a>
                ))}
              </div>

              <div className="empty_space mgt_top80"></div>
              <div className="script-title">
                <div className="script-title-sq"></div>
                <div className="script-title-txt mgt-title">PROJECT</div>
              </div>
              <div className="script-txt">
                <strong className="font-size-18px">DONUT</strong>
                <a
                  href="https://www.figma.com/file/2wnFKEuS2WJiDvo696Aztw/DONUT?node-id=133%3A121"
                  target="_/blank"
                >
                  <img src={linkedico} className="linked-ico" />
                </a>
                <br />
                Front-end Developer & Designer <br />
                <div className="date">21.11 - 21.12</div>
                <div className="left-bolder">
                  <strong className="project-script">
                    LP 유저들을 위한 커뮤니티로서 LP에 대한 소통을 하고 사진을
                    공유하고 최신 발매 앨범과 인기 앨범, 최근 거래가 등을 확인할
                    수 있는 서비스를 제공합니다.
                  </strong>
                </div>
                <ul>
                  <li>소셜 로그인 / 로그인 상태 관리</li>
                  <li>게시판 페이지 / 게시판 상세 페이지</li>
                  <li>마이 페이지 / 정보 변경 기능</li>
                  <li>댓글 기능 구현</li>
                  <li>Notion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
