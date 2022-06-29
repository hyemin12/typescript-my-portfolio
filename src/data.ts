export const data = {
  works: [
    {
      filter: "React",
      id: "movie",
      title: "영화검색사이트",
      describtion:
        "imdb api를 이용해서 인기 영화, 상영예정 영화, 평점이 높은 영화목록을 가져오고 영화 상세정보를 볼 수 있는 프로젝트이다.",
      date: "2022-03-08",
      tool: ["REACT", "imdb API", "Sass", "netlify"],
      features: [
        "1. 인기 영화, 현재 상영중인 영화, 개봉 예정 영화, 높은 평점 영화 정보 가져오기",
        "2. 해당 영화 제목 클릭 시 영화 상세정보 페이지로 이동하기",
      ],
      git: "https://github.com/hyemin12/react-movie-app",
      url: "https://react-movie-app-1f5ff8.netlify.app/",
    },
    {
      filter: "Vanilla JS",
      id: "moment",
      title: "크롬 앱",
      describtion:
        "노마드코더의 바닐라JS 크롬 앱을 클론 코딩하였다. 이름을 입력하면 사용이 가능하다. 날씨 정보, 랜덤으로 나오는 명언, 투두 작성이 가능하다.",
      date: "2022-02-21",
      tool: ["HTML", "CSS", "Javascript", "open weather api", "git-pahge"],
      features: [
        "1. open weather api를 활용한 날씨 정보 확인",
        "2. local storage의 username 값을 확인하여 로그인 / 홈 화면을 나타냄",
        "3. 페이지가 새로고침될 때마다 새로운 명언 & 배경이미지가 나타남",
        "4. 투두 리스트 작성",
      ],
      git: "https://github.com/hyemin12/vanillaJS-chrome-app",
      url: "https://hyemin12.github.io/vanillaJS-chrome-app/",
    },
    {
      filter: "Typescript",
      id: "tsc-todo",
      title: "투두리스트",
      describtion: "타입스크립트를 공부하고 처음으로 진행한 프로젝트이다. ",
      date: "2022-03-15",
      tool: ["React", "Typescript", "Redux", "Sass", "netlify"],
      features: [
        "1. 할일 등록 및 삭제 기능",
        "2. 남은 할일 갯수 확인",
        "3. 현재 날짜 확인",
      ],
      git: "https://github.com/hyemin12/typescript-todo-app",
      url: "https://hm-tsc-typescript.netlify.app",
    },

    {
      filter: "Vanilla JS",
      id: "starbucks",
      title: "starbucks 2017",
      describtion:
        "스타벅스 홈페이지를 클론 코딩하였다. 메인페이지와 로그인페이지로 이루어져 있다. ",
      date: "2021-05-22",
      tool: [
        "HTML",
        "CSS",
        "Javascript",
        "open Graph",
        "swiper",
        "lodash",
        "GSAP & ScrollToPlugin",
        "scrollmagic",
        "git-pahge",
      ],
      git: "https://github.com/hyemin12/vanilla-starbucks-app",
      url: "https://starbucks-responsive-app-ee135b.netlify.app",
    },
    {
      filter: "Vanilla JS",
      id: "wordle",
      img: "wordle-1",
      title: "Wordle 게임",
      describtion:
        "요즘 인기가 많은 단어를 맞추는 게임 wordle을 자바스크립트로만으로 구현한 프로젝트. 게임방법은 단어를 입력하고, Enter 버튼을 눌러 제출하기. 제출 시 각 타일의 색상이 변경되어 정답 단어에 얼마나 가까웠는지를 보여줌",
      date: "2022-03-20",
      tool: ["HTML", "CSS", "Javascript", "git-pahge"],
      features: [
        "1. 키보드를 누르면 해당 값이 칸에 입력되고, 제출 시 채점됨 ",
        "2. 밝은 모드 / 어두운 모드로 모드 선택 가능",
      ],
      git: "https://github.com/hyemin12/vanillaJS-wordle-app",
      url: "https://hyemin12.github.io/vanillaJS-wordle-app/",
    },
    {
      filter: "React",
      id: "dashboard",
      title: "대시보드",
      describtion:
        "다양한 API를 통해 정보를 가져오고, 해야할 일 목록 작성, 음악 플레이 등 다양한 작업을 할 수 있는 대쉬보드다. 또한 개인 포트폴리오 페이지에서 포트폴리오도 확인 가능하며, 좌측 이름 옆 화살표를 클릭하면 프로필 확인이 가능하다.",
      date: "2022-03-20",
      tool: [
        "React",
        "react-h5-audio-player",
        "@fullcalendar/react",
        "open weather api",
        "Corona-19-API",
        "netlify",
      ],
      features: [
        "1. widget을 통한 정보 확인 (현재시간, d-day, 날씨, 북마크, 코로나 19, 명언)",
        "2. 투두리스트와 캘린더를 통해 스케줄 확인 및 정리 가능",
        "3. 개인 작업물 목록과 상세 내용 확인 가능",
        "4. 좌측 이름 옆 화살표 클릭시 프로필 확인 가능",
      ],
      git: "https://github.com/hyemin12/react-dashboard-app2",
      url: "https://lucid-yonath-d614bb.netlify.app/",
    },
    {
      filter: "Vanilla JS",
      id: "paint",
      title: "그림판",
      describtion:
        "노마드코더의 바닐라JS 그림판을 클론 코딩하였다. 캔버스에서 그림을 그릴 수 있으며, 이미지를 저장할 수 있다. ",
      date: "2022-02-22",
      tool: ["HTML", "CSS", "Javascript", "Canvas events", "git-pahge"],
      features: [
        "1. 그리기 모드 / 채우기(페인트) 모드 선택 가능 ",
        "2. 브러쉬 크기 및 색상 선택 가능",
        "3. save 버튼을 통해 그린 이미지 저장 가능",
      ],
      git: "https://github.com/hyemin12/vanillaJS-paint-app",
      url: "https://hyemin12.github.io/vanillaJS-paint-app/",
    },
    {
      filter: "Typescript",
      id: "mysite2",
      title: "포트폴리오 사이트",
      describtion: "",
      date: "2022-06-19",
      tool: ["react", "Typescript", "typeit", "netlify"],
      features: [
        "1. 포트폴리오 필터 기능",
        "2. typeit 라이브러리를 이용한 타자효과",
      ],
      git: "https://github.com/hyemin12/typescript-my-portfolio",
      url: "https://hm-tsc-typescript.netlify.app/",
    },
    {
      filter: "jQuery",
      id: "stranger",
      title: "비밀의 숲2 프로모션",
      describtion:
        "비밀의 숲2 방영 기념 프로모션 페이지를 제작하였다. jQery 풀페이지 플러그인을 사용하여 제작하였고, 비밀의 숲만의 미스테리한, 어두운 분위기를 디자인에 녹이려고 하였다.",
      date: "2020-08-15",
      tool: ["HTML", "CSS", "jQuery", "git-pahge", "Photoshop"],
      features: [
        "1. 등장인물 소개",
        "2. 관련 사진 및 동영상 확인",
        "3. 시즌 줄거리 확인",
      ],
      git: "https://github.com/hyemin12/web-design-portfolio/01Stranger2/",
      url: "https://hyemin12.github.io/web-design-portfolio/01Stranger2/",
    },
    {
      filter: "React",
      id: "twitter",
      title: "트위터 클론 코딩",
      describtion:
        "리액트와 파이어베이스를 이용하여 만든 트위터 클론 프로젝트이다. 소셜(구글, 깃허브)로 회원가입 로그인이 가능하며, 게시물을 작성할 때 사진 첨부 및 사진 미리보기가 가능하다. 현재는 router 오류로 인해 배포된 페이지를 확인할 수 없다.",
      date: "2021-04-25",
      tool: ["react", "firebase"],
      features: [
        "1. 회원가입 및 로그인, 로그아웃",
        "2. 새로운 게시물 등록",
        "3. 사진 첨부 및 사진 미리보기 기능",
      ],
      git: "https://github.com/hyemin12/react-firebase-twitter",
      url: "준비중입니다.",
    },
    {
      filter: "React",
      id: "gomintalk",
      title: "리슨 클론 코딩",
      describtion:
        "요즘 뜨고 있는 Lysn bubble을 클론코딩하였다. 모바일 버전만 제공하기때문에, 550px 이상에서는 화면을 줄여달라는 화면만 표시된다. scss 패키지를 이용해서 css를 작성하였다. 프로필창에서 친구를 클릭하면 프로필 이미지 화면이 나타나고, 채팅을 보낼 수 있다.",
      date: "2022-05-20",
      tool: ["React", "Sass", "react-live-clock", "netlify"],
      features: [
        "1. 내 프로필과 친구들 목록 확인",
        "2. 채팅방 - 친구와 주고받은 메세지 확인",
      ],
      git: "https://github.com/hyemin12/gomin-talk-app",
      url: "https://wizardly-hermann-7fecb3.netlify.app/",
    },
    {
      filter: "ect",
      id: "lottecard",
      title: "롯데카드 프로모션",
      describtion:
        "가정의 달을 맞아 롯데카드 기프트카드 판매 촉진 및 이벤트 홍보의 프로모션 페이지를 디자인하였다. 아기자기한 일러스트 이미지를 사용하여 사랑스러운 분위기를 표현하였으며, 롯데카드에서 자주 사용하는 핑크-블루 톤과 캐릭터를 사용하여 롯데카드 배너 느낌을 연출하였다.",
      date: "2020-05-27",
      tool: ["Photoshop"],
      url: "https://github.com/hyemin12/react-dashboard-app2/blob/master/public/img/portfolio/lottecard2.jpg?raw=true",
    },
    {
      filter: "ect",
      id: "travel",
      title: "여행사 프로모션",
      describtion:
        "여행 SNS 공유 이벤트 참여 촉진 및 홍보의 프로모션 페이지를 디자인하였다. 전체적인 컨셉을 부다페스트로 설정하여 부다페스트 관련 이미지들을 사용하였고,그랜드 부다페스트호텔 포스터에 사용된 핑크-보라계열 색을 사용하여 부다페스트 느낌을 연출하였다.",
      date: "2020-03-20",
      tool: ["Photoshop"],
      url: "https://github.com/hyemin12/react-dashboard-app2/blob/master/public/img/portfolio/travel2.jpg?raw=true",
    },
    {
      filter: "jQuery",
      id: "melon",
      title: "음악스트리밍 멜론",
      describtion:
        "인기차트가 사라진 멜론 음악 스트리밍 사이트를 리뉴얼하였다. 작게 나누어져있던 콘텐츠들을 크고 심플한 레이아웃에 맞춰 배치하였다. 또한 멜론 티켓과 연계하여 공연 배너 등 다양한 콘텐츠를 노출시키고자 하였다.",
      date: "2020-07-21",
      tool: ["HTML", "CSS", "jQuery", "git-pahge", "Photoshop"],
      git: "https://github.com/hyemin12/web-design-portfolio/04Melon/",
      url: "https://hyemin12.github.io/web-design-portfolio/04Melon/",
    },
    {
      filter: "Vanilla JS",
      id: "responsive1",
      img: "responsive1-1",
      title: "반응형 사이트 - readOnly",
      describtion:
        "html5up 사이트의 readOnly 마크업하였다. 각각 서브 페이지를 별도의 html 파일로 만들지 않고, tab 형태로 제작하였다.",
      date: "2022-04-12",
      tool: ["HTML", "CSS", "Javascript", "git-pahge"],
      ect: "https://html5up.net/read-only",
      git: "https://github.com/hyemin12/responsive-webstie-readOnly",
      url: "https://hyemin12.github.io/responsive-webstie-readOnly/",
    },
    {
      filter: "Vanilla JS",
      id: "responsive2",
      img: "responsive2-1",
      title: "반응형 사이트 - massively",
      describtion:
        "html5up 사이트의 massively를 마크업하였다. 각각 서브 페이지를 별도의 html 파일로 만들지 않고, tab 형태로 제작하였다.",
      date: "2022-04-12",
      tool: ["HTML", "CSS", "Javascript", "git-pahge"],
      ect: "https://html5up.net/massively",
      git: "https://github.com/hyemin12/responsive-webstie-massively",
      url: "https://hyemin12.github.io/responsive-webstie-massively/",
    },
    {
      filter: "Vanilla JS",
      id: "responsive3",
      img: "responsive3-1",
      title: "반응형 사이트 - funny Flakes",
      describtion: "flake 회사의 메인페이지를 마크업하였다.",
      date: "2022-04-10",
      tool: ["HTML", "CSS", "Javascript", "git-pahge"],
      ect: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbimORE%2FbtrE8N156Ne%2FEE9eIvq1Zd9k414O3vNH80%2Fimg.jpg",
      git: "https://github.com/hyemin12/responsive-webstie-funnyFlakes",
      url: "https://hyemin12.github.io/responsive-webstie-funnyFlakes/",
    },
    {
      filter: "Vanilla JS",
      id: "responsive4",
      img: "responsive4-1",
      title: "반응형 사이트 - forty",
      describtion: "forty 회사의 메인페이지를 마크업하였다.",
      date: "2022-06-29",
      tool: ["HTML", "CSS", "Javascript", "git-pahge"],
      ect: "https://html5up.net/forty",
      git: "https://github.com/hyemin12/responsive-webstie-forty/",
      url: "https://hyemin12.github.io/responsive-webstie-forty/",
    },
  ],
  social: [
    { id: "social_github", url: "https://github.com/hyemin12" },
    { id: "social_blog", url: "https://hyemin-12.tistory.com/" },
  ],
};
