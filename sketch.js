// Total Variables
let gm = 0;
let error = 0;
let recent_frame = 0;
let windowWidth = 1600*3/5;
let windowHeight = 900*3/5;
let startButtonImage2

//sound
let fullBgm;        
let miniGame1Bgm;
let miniGame2Bgm;
let miniGame3Bgm;
let miniGame4Bgm;
let miniGame1Draw 
let miniGame1Lose 
let miniGame1Win 
let sAllNextButton;
let sFinalResult;
let sMiniGame1Result;
let sMiniGame2EnterBasket;
let sMiniGame2PoopenterBasket;
let sMiniGame3BallMixing;
let sMiniGame3BallMove;
let sMiniGame3RedBtn;
let sMiniGame4Heart;

// User
let user_name = '';
let user_point = 0;

// Home
let name_enter_announce = true;

// Game 1
let bgImage;
let preGameBgImage;
let startButtonImage;
let images = [];
let currentImageIndex = 0;
let lastChangeTime = 0;
let changeInterval = 100;
let questionMarkImage;
let userChoiceImages = [];
let clickedImages = [];
let selectedIndex = -1;
let gameResultImage = null;
let gameEnded = false;
let gameStarted = false;
let explanationImage;
let explanationStartTime = -1;
let explanationDuration = 5000; // 설명 화면 표시 시간
let gifBackground;
let mini1next;
let resultGifStartTime = -1;
let showResultGif = false;

let resultImages = {
  Win: null,
  Lose: null,
  Draw: null
};

let resultGifImages = {
  Win: null,
  Lose: null,
  Draw: null
};


// 시계 관련 변수
let stopwatchImage;
let countdown = 7; // 7초 카운트다운
let countdownFontSize = 30;
let countdownStartTime = -1;

let isHoveringChoice = [false, false, false];
let customFont;
let gameResult = ""; // 게임 결과

// Game 2
let start_level = 10;
let end_level = 2400;
let clover_list = [];
let clover_cnt = 0;
let clover_time = 20;
let golden_cnt = 10;
let gold_cnt = 0;

let poop_list = [];
let poop_cnt = 0;

class Clover{
  constructor(x0, v0, g){
    this.gold = g;
    this.pos = [x0, start_level];
    this.vel = [0, v0];
    this.life = true;
  }
  fall(){
    if(this.pos[1]>end_level + 200){
      this.vel = [0,0];
      this.life = false;
    }else{
      this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];
    }
  }
}

class Poop{
  constructor(x0, v0){
    this.pos = [x0, start_level];
    this.vel = [0, v0];
    this.life = true;
  }
  fall(){
    if(this.pos[1]>end_level + 200){
      this.vel = [0,0];
      this.life = false;
    }else{
      this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];
    }
  }
}

//Game 3
let mini3_mini3_bgImage; // 현재 배경 이미지
let mini3_mini3_preGameBg, mini3_mini3_gameBg, mini3_mini3_nextBg, mini3_mini3_finalBg, mini3_mini3_postGameBg; // 다섯 배경 이미지
let mini3_mini3_pressStartBtn; // 시작 버튼 이미지
let mini3_mini3_noticeImg, mini3_mini3_toggleImg, mini3_mini3_toggleRecImg, mini3_mini3_halfBallImage, mini3_mini3_explanationImage, mini3_mini3_gcloverImage, mini3_mini3_confettiGif; // 추가 이미지
let mini3_completeImages = []; // 랜덤 complete 이미지 배열
let mini3_nextBtn, mini3_nextBtn2; // 다음 버튼 이미지

let mini3_mini3_btnX, mini3_mini3_btnY, mini3_mini3_btnWidth, mini3_mini3_btnHeight; // 버튼 위치와 크기
let mini3_noticeVisible = false; // 알림 이미지 가시성
let mini3_toggleVisible = false; // 토글 이미지 가시성
let mini3_buttonVisible = true; // 시작 버튼 가시성
let mini3_toggleLastChangeTime = 0; // 토글 상태 변경 시점
let mini3_toggleInterval = 500; // 토글 상태 변경 간격 (0.5초)
let mini3_gameStarted = false; // 게임이 시작되었는지 여부

let mini3_balls = []; // 공 이미지 배열
let mini3_halfBalls = []; // 반쪽 공 이미지 배열
let mini3_objects = []; // 공과 반쪽 공 객체 배열
let mini3_isMixing = false; // 뒤섞이는 모션 여부
let mini3_mixingStartTime = 0; // 섞이는 시작 시간
let mini3_showHalfBall = false; // MiniGame3_Asset_HalfBall_1 등장 여부
let mini3_halfBallScale = 0; // 반쪽 공 확장 비율
let mini3_explanationStartTime = 0; // 설명 문구 출력 타이머
let mini3_halfBallClicks = 0; // 공 클릭 횟수
let mini3_bounceY = 0; // 공 튀는 효과 Y좌표
let mini3_isBouncing = false; // 튀는 상태
let mini3_showComplete = false; // complete 이미지 표시 여부
let mini3_selectedCompleteImage; // 랜덤 선택된 complete 이미지
let mini3_gcloverStartTime; // gclover 표시 시작 시간

// ToggleRec 관련 변수
let mini3_rotationAngle = 0; // 현재 회전 각도
let mini3_rotationSpeed = 5; // 회전 속도

// Step 1: 추가된 변수
let mini3_explanationVisible = false;  // 설명 이미지 표시 여부
let mini3_explanationDelayTime = 2000; // 2초 후 설명 이미지 표시
let mini3_showGclover = false; // gclover 표시 여부

// 공 관련 추가 변수
let mini3_ballOpacity = 0; // 공의 투명도 (서서히 나타나게)
let mini3_ballAppearSpeed = 2.6; // 공이 나타나는 속도 (수정하여 빠르게 나타나도록 설정)
let mini3_ballIsVisible = false; // 공이 완전히 나타났는지 여부

// 클로버 관련 추가 변수
let mini3_gcloverScale = 0; // 클로버 이미지의 크기 (서서히 커지도록 설정)
let mini3_gcloverAppearSpeed = 0.07; // 클로버가 커지는 속도
let mini3_isGcloverVisible = false; // 클로버가 완전히 나타났는지 여부

// 변수: 마우스가 Next 버튼 위에 있는지 여부
let mini3_isOverNextBtn = false; // 마우스가 nextBtn 위에 있는지 여부
let mini3_nextBtnState = mini3_nextBtn; // 버튼 상태, 기본 nextBtn

let mini3_rotationStartTime = -1; // 회전 시작 시간을 기록할 변수
let mini3_isRotationStarted = false; // 회전이 시작되었는지 여부를 체크하는 변수

// 공과 반쪽 공 객체
// 공과 반쪽 공 객체
class MovingObject {
  constructor(img, startY, speed, startX) {
    this.img = img;
    this.x = startX; // 고정된 x 값
    this.y = startY; // 고정된 y 값
    this.speed = speed;
    this.isMixing = false; // 섞기 전 상태
    this.mixRangeX = [380, 550]; // 제한된 X 범위
    this.mixRangeY = [240, 340]; // 제한된 Y 범위
    this.directionX = random([-1, 1]) * random(3, 6);
    this.directionY = random([-1, 1]) * random(3, 6);

    // 불투명도 변수 초기화
    this.opacity = 0; // 불투명도 0으로 설정
    this.opacitySpeed = 3; // 불투명도 증가 속도
    
    // 회전 변수 추가
    this.angle = 0; // 초기 회전 각도
    this.rotationSpeed = random(1, 5); // 회전 속도
  }

  update() {
    // 불투명도가 100%에 도달하면 섞이기 시작
    if (this.opacity < 255) {
      this.opacity += this.opacitySpeed; // 서서히 불투명도 증가
    } else if (!this.isMixing) {
      this.isMixing = true; // 불투명도가 완전히 나타나면 섞기 시작
      // 섞기 시작할 때 현재 위치에서 섞기 시작하도록 보장
      this.directionX = random([-1, 1]) * random(3, 6);
      this.directionY = random([-1, 1]) * random(3, 6);
    }

    if (this.isMixing) {
      // X축과 Y축 방향으로 움직임
      this.x += this.directionX;
      this.y += this.directionY;

      // X축 범위 제한
      if (this.x <= this.mixRangeX[0] || this.x >= this.mixRangeX[1]) {
        this.directionX = -this.directionX + random(-0.3, 0.3); // 부드러운 방향 변경
        this.x = constrain(this.x, this.mixRangeX[0], this.mixRangeX[1]); // X축 경계에 갇히지 않게 조정
      }

      // Y축 범위 제한
      if (this.y <= this.mixRangeY[0] || this.y >= this.mixRangeY[1]) {
        this.directionY = -this.directionY + random(-0.3, 0.3); // 부드러운 방향 변경
        this.y = constrain(this.y, this.mixRangeY[0], this.mixRangeY[1]); // Y축 경계에 갇히지 않게 조정
      }

      // 속도 제한
      this.directionX = constrain(this.directionX, -6, 6);
      this.directionY = constrain(this.directionY, -6, 6);
      
      // 회전 업데이트 (회전 속도 적용)
      this.angle += this.rotationSpeed; // 회전각도 증가
    }
  }

  display() {
    // 불투명도 적용하여 공 그리기
    tint(255, this.opacity); // 공에 불투명도 적용

    // 이미지 회전
    push(); // 회전 변환 적용 전 상태 저장
    translate(this.x + 25, this.y + 25); // 공의 중심을 기준으로 회전
    rotate(radians(this.angle)); // 회전 적용
    image(this.img, -25, -25, 50, 50); // 공 이미지 표시 (이미지의 중심을 기준으로 회전)
    pop(); // 변환 상태 리셋
    
    noTint(); // 불투명도 리셋
  }
}

//game4
let mini4_stopwatchImage;
let mini4_heartsScoreImage;
let mini4_explanationImage;
let mini4_rabbit0Image, mini4_rabbit1Image, mini4_rabbit2Image;
let mini4_countdown = 7; // 7 seconds countdown
let mini4_timerRunning = false; // Flag to control the timer
let mini4_currentRabbitImage;
let mini4_customFont;
let mini4_lastTime = 0; // To keep track of time for countdown
let mini4_pressCount = 0; // Variable to keep track of spacebar presses
let mini4_countdownFinished = false; // Flag to stop further changes to pressCount and countdown
let mini4_completeImage;
let mini4_bgImageWithNothing;
let mini4_nextButtonImage;
let mini4_nextButtonHoverImage; // Add hover state image
let mini4_basket;
let mini4_hearts = []; // Array to store heart objects
let mini4_heartImages = []; // Array to store the heart images

let mini4_preGameBgImage;
let mini4_preGameButtonImage;
let mini4_gameStarted = false;

// Custom 1
let cus1_dx = 80;
let cus1_dy = 80;
let cus1_x0 = 440;
let cus1_y0 = 180;
let cus1_selected_icon = 1;
let cus1_selected_ment = 1;

// Custom 2
let cus2_dx = 140;
let cus2_dy = 50;
let cus2_x0 = 520;  
let cus2_y0 = 175;
let cus2_selected_color = 10;
let cus2_selected_bgs = 10;

//Back
let backward = 0;

//QR
// Supabase 클라이언트 생성
const supabaseUrl = 'https://macohdyxynalgylmoujt.supabase.co';  // Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hY29oZHl4eW5hbGd5bG1vdWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMDkyNDMsImV4cCI6MjA0ODU4NTI0M30.VctPCHYIDd63-xDNpZwKoIQnxWOta7C13clR0L28XSA';  // Supabase Key
//const supabase = supabase.createClient(supabaseUrl, supabaseKey);  // Supabase 클라이언트 생성
let resetButtonImage; // Reset 버튼 이미지
let resetButtonWidth, resetButtonHeight; // Reset 버튼의 크기
let qrexplainVisible = false; 
// Setup

function resetGame() {
  gm = 0; // 게임 상태를 홈 화면으로 초기화
  user_name = ''; 
  user_point = 0; 
  name_enter_announce = true; 
  // Game 1 관련 변수 초기화
  currentImageIndex = 0;
  lastChangeTime = 0;
  changeInterval = 100;
  currentImageIndex = 0;
  lastChangeTime = 0;
  changeInterval = 100;
  selectedIndex = -1;
  gameResultImage = null;
  gameEnded = false;
  gameStarted = false;
  explanationStartTime = -1;
  explanationDuration = 5000; // 설명 화면 표시 시간
  

  resultGifStartTime = -1;
  showResultGif = false;
  countdown = 7; // 7초 카운트다운
  countdownFontSize = 30;
  countdownStartTime = -1;
  isHoveringChoice = [false, false, false];
  gameResult = ""; // 게임 결과
  // 마우스 hover 상태 초기화
  for (let i = 0; i < isHoveringChoice.length; i++) {
    isHoveringChoice[i] = false;
  }
  // Game 2 초기화
  clover_cnt = 0;
  gold_cnt = 0;
  golden_cnt = 10;
  poop_cnt = 0;
  clover_list = [];
  poop_list = [];

  // Game 3 초기화
  mini3_mini3_bgImage = mini3_mini3_preGameBg; 
  mini3_gameStarted = false;
  mini3_showComplete = false;
  mini3_showHalfBall = false;
  mini3_halfBallClicks = 0;
  mini3_isBouncing = false;
  mini3_isRotationStarted = false;
  mini3_mixingStartTime = 0;
  mini3_gcloverStartTime = undefined;
  mini3_isMixing = false;
  mini3_explanationVisible = false;
  mini3_showGclover = false;
  mini3_isGcloverVisible = false;
  mini3_gcloverScale = 0;
  mini3_halfBallScale = 0;
  mini3_noticeVisible = false; // 알림 이미지 가시성
  mini3_toggleVisible = false; // 토글 이미지 가시성
  mini3_buttonVisible = true; // 시작 버튼 가시성
  mini3_toggleLastChangeTime = 0; // 토글 상태 변경 시점
  mini3_toggleInterval = 500; // 토글 상태 변경 간격 (0.5초)
  mini3_gameStarted = false; // 게임이 시작되었는지 여부
  mini3_objects = []; // 공과 반쪽 공 객체 배열
  mini3_isMixing = false; // 뒤섞이는 모션 여부
  mini3_mixingStartTime = 0; // 섞이는 시작 시간
  mini3_showHalfBall = false; // MiniGame3_Asset_HalfBall_1 등장 여부
  mini3_halfBallScale = 0; // 반쪽 공 확장 비율
  mini3_explanationStartTime = 0; // 설명 문구 출력 타이머
  mini3_halfBallClicks = 0; // 공 클릭 횟수
  mini3_bounceY = 0; // 공 튀는 효과 Y좌표
  mini3_isBouncing = false; // 튀는 상태
  mini3_showComplete = false; // complete 이미지 표시 여부
  mini3_selectedCompleteImage; // 랜덤 선택된 complete 이미지
  mini3_rotationAngle = 0; // 현재 회전 각도
  mini3_rotationSpeed = 5; // 회전 속도
  mini3_explanationVisible = false;  // 설명 이미지 표시 여부
  mini3_explanationDelayTime = 2000; // 2초 후 설명 이미지 표시
  mini3_showGclover = false; // gclover 표시 여부
  mini3_explanationVisible = false;  // 설명 이미지 표시 여부
  mini3_explanationDelayTime = 2000; // 2초 후 설명 이미지 표시
  mini3_showGclover = false; // gclover 표시 여부
  // 공 관련 추가 변수
  mini3_ballOpacity = 0; // 공의 투명도 (서서히 나타나게)
  mini3_ballAppearSpeed = 2.6; // 공이 나타나는 속도 (수정하여 빠르게 나타나도록 설정)
  mini3_ballIsVisible = false; // 공이 완전히 나타났는지 여부

  // 클로버 관련 추가 변수
  mini3_gcloverScale = 0; // 클로버 이미지의 크기 (서서히 커지도록 설정)
  mini3_gcloverAppearSpeed = 0.07; // 클로버가 커지는 속도
  mini3_isGcloverVisible = false; // 클로버가 완전히 나타났는지 여부

  // 변수: 마우스가 Next 버튼 위에 있는지 여부
  mini3_isOverNextBtn = false; // 마우스가 nextBtn 위에 있는지 여부
  mini3_nextBtnState = mini3_nextBtn; // 버튼 상태, 기본 nextBtn

  mini3_rotationStartTime = -1; // 회전 시작 시간을 기록할 변수
  mini3_isRotationStarted = false; // 회전이 시작되었는지 여부를 체크하는 변수

  // Game4 초기화
  mini4_gameStarted = false;
  mini4_explanationImage = loadImage('game4/MiniGame4_Asset_Explanation.png');
  mini4_countdown = 7;
  mini4_timerRunning = false;
  mini4_pressCount = 0;
  mini4_countdownFinished = false;
  mini4_hearts = []; // 하트 배열 초기화

  // Custom 초기화
  cus1_selected_icon = int(random(0,7));
  cus1_selected_ment = int(random(0,2));
  cus2_selected_color = 10;
  cus2_selected_bgs = 10;

  backward = 0;
  
  // frameCount 기반 로직 초기화
  recent_frame = frameCount;

  qrexplainVisible = false;

  const qrCodeDiv = document.querySelector('#qr-code');
  if (qrCodeDiv) {
    qrCodeDiv.style.display = 'none';
  }

  // 필요하다면 사운드, 애니메이션, 타이머 등을 모두 초기 상태로
}

// Image
function preload() {
  //Load Font
  font = loadFont('GmarketSansTTFMedium.ttf');

  //Home
  home_bg = loadImage('home/Home_Background_withoutButton.png');
  home_start_img = loadImage('home/Home_Asset_Button_Start!.png');
  home2_bg = loadImage('home/Home2_Background.png');
  home2_enter_img = loadImage('home/Home2_Asset_EnterName.png');
  home2_next_img = loadImage('home/Home2_Asset_Button_Next.png');
  home_mouse = loadImage('home/Home_Asset_Mouse.png')

  //Game 1
  // 시작전 이미지 로드
  game1_prebg = loadImage('game1/MiniGame1_Background_PreGame.png');
  game1_prestart_img = loadImage('game1/MiniGame1_Asset_PreGame_PressStart-2.png');
  bgImage = loadImage('game1/game1_Background.png');
  preGameBgImage = loadImage('game1/MiniGame1_Background_PreGame.png');
  startButtonImage = loadImage('new/MiniGame3_Asset_PreGame_ClickStart1.png');
  startButtonImage2 = loadImage('new/MiniGame3_Asset_PreGame_ClickStart2.png')
  images[0] = loadImage('game1/game1_Asset_center_p.png');
  images[1] = loadImage('game1/game1_Asset_center_s.png');
  images[2] = loadImage('game1/game1_Asset_center_r.png');
  questionMarkImage = loadImage('game1/game1_Asset_questionmark.png');
  userChoiceImages[0] = loadImage('game1/game1_Asset_choose_p.png');
  userChoiceImages[1] = loadImage('game1/game1_Asset_choose_s.png');
  userChoiceImages[2] = loadImage('game1/game1_Asset_choose_r.png');
  clickedImages[0] = loadImage('game1/game1_Asset_clicked_p.png');
  clickedImages[1] = loadImage('game1/game1_Asset_clicked_s.png');
  clickedImages[2] = loadImage('game1/game1_Asset_clicked_r.png');
  resultImages.Win = loadImage('game1/game1_Background_result_YouWin.png');
  resultImages.Lose = loadImage('game1/game1_Background_result_YouLose.png');
  resultImages.Draw = loadImage('game1/game1_Background_result_Draw.png');
  stopwatchImage = loadImage('game1/game1_Asset_timer.png');
  customFont = loadFont('game1/adooE.otf');
  explanationImage = loadImage('game2/MiniGame2_Asset_Explanation.png');
  gifBackground = loadImage('game1/MiniGame1_Asset_MovingRabbit.gif');
  resultGifImages.Win = loadImage('game1/MiniGame1_Asset_RabbitWin.png');
  resultGifImages.Lose = loadImage('game1/MiniGame1_Asset_RabbitLose.png');
  resultGifImages.Draw = loadImage('game1/MiniGame1_Asset_RabbitDraw.png');
  mini1next = loadImage('game1/game1_Asset_result_Nextbtn2.png')

  //Game 2
  game2_prebg = loadImage('game2/MiniGame2_Background_PreGame.png');
  game2_prestart_img = loadImage('new/MiniGame3_Asset_PreGame_ClickStart1.png');
  startButtonImage2 = loadImage('new/MiniGame3_Asset_PreGame_ClickStart2.png')
  game2_notice = loadImage('game2/MiniGame2_Asset_Explanation.png')
  gclover_img = loadImage('game2/game2_Asset_item_gclover.png');
  yclover_img = loadImage('game2/game2_Asset_item_yclover.png');
  poop_img = loadImage('game2/game2_Asset_item_poop.png');
  gclover_cnt_img = loadImage('game2/game2_Asset_cnt_gclover.png');
  yclover_cnt_img = loadImage('game2/game2_Asset_cnt_yclover.png');
  poop_cnt_img = loadImage('game2/game2_Asset_cnt_poop.png');
  game2_bg = loadImage('game2/game2_Background_option2.png');
  timer_img = loadImage('game2/game2_Asset_timer.png');
  basket1_img = loadImage('game2/game2_Asset_basket.png')
  basket2_img = loadImage('game2/MiniGame2_Asset_basket2.png');
  game2_result = loadImage('game2/MiniGame2_Asset_result_chart2.png');
  game2_nextbtn = loadImage('game2/MiniGame2_Asset_result_Nextbtn.png');
  game2_nextbtn2 = loadImage('game2/MiniGame2_Asset_result_Nextbtn2.png');

  //Game3
  mini3_mini3_preGameBg = loadImage('game3/MiniGame3_Background_PreGame.png');
  mini3_mini3_gameBg = loadImage('game3/MiniGame3-1_Background.png');
  mini3_mini3_nextBg = loadImage('game3/MiniGame3-2_Background.png');
  mini3_mini3_finalBg = loadImage('game3/MiniGame3-3_Background.png');
  mini3_mini3_postGameBg = loadImage('game3/MiniGame3_Background_PostGame.png');
  mini3_mini3_pressStartBtn = loadImage('new/MiniGame3_Asset_PreGame_ClickStart1.png');
  startButtonImage2 = loadImage('new/MiniGame3_Asset_PreGame_ClickStart2.png')
  
  mini3_mini3_noticeImg = loadImage('game3/MiniGame3_Asset_pre_notice.png');
  mini3_mini3_toggleImg = loadImage('game3/MiniGame3_Asset_Toggle.png');
  mini3_mini3_toggleRecImg = loadImage('game3/MiniGame3_Asset_ToggleRec.png');
  mini3_mini3_halfBallImage = loadImage('game3/MiniGame3_Asset_HalfBall_1.png');
  mini3_mini3_explanationImage = loadImage('game3/MiniGame3_Asset_Explanation2.png');
  mini3_mini3_gcloverImage = loadImage('new/MiniGame3_Asset_Box.png');


  // complete 이미지 배열
  mini3_completeImages = [
    loadImage('game3/MiniGame3_Asset_Complete_ProfC.png'),
    loadImage('game3/MiniGame3_Asset_Complete_Poop.png'),
    loadImage('game3/MiniGame3_Asset_Complete_Perf.png'),
    loadImage('game3/MiniGame3_Asset_Complete_Diamond.png'),
    loadImage('game3/MiniGame3_Asset_Complete_Bomb.png'),
    loadImage('game3/MiniGame3_Asset_Complete_A.png'),
  ];

  // Confetti GIF 로드
  mini3_mini3_confettiGif = loadImage('game3/Confetti.gif'); // Confetti GIF 경로 설정

  // 다음 버튼 이미지
  mini3_nextBtn = loadImage('game3/MiniGame3_Asset_result_Nextbtn.png');
  mini3_nextBtn2 = loadImage('game3/MiniGame3_Asset_result_Nextbtn2.png');

  // 공과 반쪽 공 이미지 로드
  for (let i = 1; i <= 5; i++) {
    mini3_balls.push(loadImage(`game3/MiniGame3_Asset_Ball_${i}.png`));
    mini3_halfBalls.push(loadImage(`game3/MiniGame3_Asset_HalfBall_${i}.png`));
  }

  //game4
  mini4_bgImage = loadImage('game4/MiniGame4_Background.png');
  mini4_bgImageWithNothing = loadImage('game4/MiniGame4_Background_withNothing.png');
  mini4_stopwatchImage = loadImage('game4/MiniGame4_Asset_Stopwatch.png');
  mini4_heartsScoreImage = loadImage('game4/MiniGame4_Asset_HeartsScore.png');
  mini4_explanationImage = loadImage('game4/MiniGame4_Asset_Explanation.png');
  mini4_rabbit0Image = loadImage('game4/MiniGame4_Asset_Rabbit_0.png');
  mini4_rabbit1Image = loadImage('game4/MiniGame4_Asset_Rabbit_1.png');
  mini4_rabbit2Image = loadImage('game4/MiniGame4_Asset_Rabbit_2.png');
  mini4_completeImage = loadImage('game4/MiniGame4_Asset_Complete.png');
  mini4_nextButtonImage = loadImage('game4/MiniGame4_Asset_result_Nextbtn.png');
  mini4_nextButtonHoverImage = loadImage('game4/MiniGame4_Asset_result_Nextbtn2.png'); // Hover state image
  mini4_basket = loadImage('game4/MiniGame4_Asset_Basket.png');
  mini4_customFont = loadFont('game4/adooE.otf');

  // Load heart images
  for (let i = 1; i <= 5; i++) {
    mini4_heartImages.push(loadImage(`game4/MiniGame4_Asset_Heart_${i}.png`));
  }

  // Pre-game game4
  mini4_preGameBgImage = loadImage('game4/MiniGame4_Background_PreGame.png');
  mini4_preGameButtonImage = loadImage('new/MiniGame3_Asset_PreGame_ClickStart1.png');
  startButtonImage2 = loadImage('new/MiniGame3_Asset_PreGame_ClickStart2.png')

  //game result
  result_bg = loadImage('gameresult/Result_Background.png');
  result_0 = loadImage('gameresult/Result_Asset_100.png');
  result_1 = loadImage('gameresult/Result_Asset_8099.png');
  result_2 = loadImage('gameresult/Result_Asset_6079.png');
  result_3 = loadImage('gameresult/Result_Asset_3059.png');
  result_4 = loadImage('gameresult/Result_Asset_1029.png');

  results = [result_0,result_1,result_2,result_3,result_4];

  result_font = loadFont('gameresult/GmarketSansTTFBold.ttf');

  //custom1
  cus1_bg = loadImage('cus1/Cus_Background.png');
  cus1_icon = [];
  cus1_icon_clicked = [];
  cus1_ment = [];
  cus1_ment_clicked = [];
  cus1_frame = [];
  cus1_list = ['Luck', 'Aca', 'Fan', 'Job', 'Heart', 'Health', 'Daily', 'Money'];

  for (let i = 0; i <= 7; i++) {
    cus1_icon.push(loadImage('cus1/Cus_Asset_'+cus1_list[i]+'_0.png'));
    cus1_icon_clicked.push(loadImage('cus1/Cus_Asset_'+cus1_list[i]+'_1.png'));
    temp = [];
    temp_clicked = [];
    temp_frame = [];
    for(let j = 1; j<= 3; j++){
      temp.push(loadImage('cus1/Cus_Asset_'+cus1_list[i]+`_${j}_0.png`));
      temp_clicked.push(loadImage('cus1/Cus_Asset_'+cus1_list[i]+`_${j}_1.png`));
      temp_frame.push(loadImage('cus1/Cus_Asset_Frame'+cus1_list[i]+`_${j}.png`));
    }
    cus1_ment.push(temp);
    cus1_ment_clicked.push(temp_clicked);
    cus1_frame.push(temp_frame);
  }

  //Custom 2
  cus2_bg = loadImage('cus2/Cus2_Background.png');
  cus2_bgs = [];
  cus2_bgs_selected = [];
  cus2_color = [];
  cus2_color_selected = [];
  cus2_frame = [];
  cus2_list = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink'];
  cus2_gray = [];
  for(let i=1; i<=6; i++){
    cus2_gray.push(loadImage(`cus2/Cus2_Asset_Color_Gray_${i}.png`));
  }

  for(let i=0;i<=6;i++){
    cus2_color.push(loadImage('cus2/Cus2_Asset_'+cus2_list[i]+`_0.png`));
    cus2_color_selected.push(loadImage('cus2/Cus2_Asset_'+cus2_list[i]+`_1.png`));
    temp = [];
    for(let j=1;j<=6;j++){
      temp.push(loadImage('cus2/Cus2_Asset_Color_'+cus2_list[i]+`_${j}.png`));
    }
    cus2_frame.push(temp);
  }
  for(let i=1;i<=6;i++){
    cus2_bgs.push(loadImage('cus2/Cus2_Asset_'+`${i}_0.png`));
    cus2_bgs_selected.push(loadImage('cus2/Cus2_Asset_'+`${i}_1.png`));
  }

  // Loading
  loading = loadImage('Loading_Background.gif');

  // Back
  cus_back = [];
  for (let i = 0; i <= 7; i++) {
    cus_back.push(loadImage('back/Final_Asset_Frame'+cus1_list[i]+'_Back.png'));
  }
  Reset_img = loadImage('back/Final_Asset_Reset.png');

  // Ending
  ending_bg1 = loadImage('ending/Final_Background-1.png');
  ending_bg2 = loadImage('new/Final_Background-2_new.png');
  finger = loadImage('ending/Final_Asset-1_Finger.png');

  fullBgm = loadSound('music/Full_bgm.mp3'); // Ensure the path is correct
  miniGame1Bgm = loadSound('music/MiniGame1_bgm.mp3');
  miniGame2Bgm = loadSound('music/MiniGame2_bgm.mp3');
  miniGame3Bgm = loadSound('music/MiniGame3_bgm.mp3');
  miniGame4Bgm = loadSound('music/MiniGame4_bgm.mp3');
  qrexplain = loadImage('new/Final_Asset_Explanation.png')

  miniGame1Draw = loadSound('music/MiniGame1_se_Draw.mp3');
  miniGame1Lose = loadSound('music/MiniGame1_se_Lose.mp3');
  miniGame1Win = loadSound('music/MiniGame1_se_Win.mp3');

  sAllNextButton = loadSound('music/All_se_NextButton.mp3');
  sFinalResult = loadSound('music/Final_se_Result.mp3');
  sMiniGame1Result = loadSound('music/MinGame3_se_Result.mp3');
  sMiniGame2EnterBasket = loadSound('music/MiniGame2_se_enterBasket.mp3');
  sMiniGame2PoopenterBasket = loadSound('music/MiniGame2_se_PoopenterBasket.mp3');
  sMiniGame3BallMixing = loadSound('music/MiniGame3_se_BallMixing.mp3');
  sMiniGame3BallMove = loadSound('music/MiniGame3_se_BallMove.mp3');
  sMiniGame3RedBtn = loadSound('music/MiniGame3_se_redBtn.wav');
  sMiniGame4Heart = loadSound('music/MiniGame4_se_heart.mp3');
  
  card_sound = loadSound('music/Home_se_pageturn.mp3');

  fullBgm.setVolume(0.34); // FullBgm 볼륨을 30%로 설정
  miniGame1Bgm.setVolume(0.34); // MiniGame1Bgm 볼륨을 30%로 설정
  resetButtonImage = loadImage('new/Final_Asset_Reset.png');

}

//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

  //Game2
  red_frame = 0;
  //Game3
  mini3_mini3_bgImage = mini3_mini3_preGameBg; // 초기 배경 설정

  // 버튼 위치와 크기 설정
  mini3_mini3_btnWidth = 190; // 버튼 너비
  mini3_mini3_btnHeight = 50; // 버튼 높이
  mini3_mini3_btnX = 480 - mini3_mini3_btnWidth / 2; // 버튼 중앙 위치 조정
  mini3_mini3_btnY = 490 - mini3_mini3_btnHeight / 2; // 버튼 중앙 위치 조정

  //Game4
  mini4_currentRabbitImage = mini4_rabbit0Image;

  //Custom
  cus1_selected_icon = int(random(0,7));
  cus1_selected_ment = int(random(0,2));

  //QR
  supabase = createClient(
    supabaseUrl,
    supabaseKey
  );
 currentStartButtonImage = startButtonImage;
}
let currentStartButtonImage;
let alastChangeTime = 0;
let achangeInterval = 700;  // 1초마다 이미지 변경


// Draw Function


function draw() {

  if (gm == 1) {
    if (fullBgm && !fullBgm.isPlaying()) {
      fullBgm.loop(); // Full_bgm.mp3 재생
      miniGame1Bgm.stop(); // miniGame1Bgm이 이미 재생 중이라면 정지
    }
  } else if (gm >= 2 && gm <= 8) {
    if (miniGame1Bgm && !miniGame1Bgm.isPlaying()) {
      miniGame1Bgm.loop(); // MiniGame1_bgm.mp3 재생
      fullBgm.stop(); // fullBgm이 이미 재생 중이라면 정지
    }
  } else if (gm == 9 || gm >= 10) {
    if (fullBgm && !fullBgm.isPlaying()) {
      fullBgm.loop(); // Full_bgm.mp3 재생
      miniGame1Bgm.stop(); // miniGame1Bgm이 이미 재생 중이라면 정지
    }
  }


  if(gm == 0){
    image(home_bg, 0, 0, windowWidth, windowHeight);
    image(home_start_img, windowWidth/2-120-10*sin(frameCount * 0.05)*3/5/2, windowHeight*0.7-80+3*sin(frameCount * 0.05)*3/5/2, 400*3/5+10*sin(frameCount * 0.05)*3/5, 250*3/5+3*sin(frameCount * 0.05)*3/5);
  }
  else if(gm == 1){
    image(home2_bg, 0, 0, windowWidth, windowHeight);
    image(home2_enter_img, 900*3/5, 500*3/5+40-15, 557*3/5, 83*3/5);
    image(home2_next_img, 900*3/5, 600*3/5+60-15, 557*3/5, 100*3/5);

    if(name_enter_announce){
      push();
      textSize(30*3/5);
      fill(200);
      textFont(font);
      text("이름을 입력해주세요.", 1020*3/5+5, 560*3/5+40-19);
      pop();
    }
    
  }
  else if(gm == 2){
    if (!gameStarted) {
      // 시작 화면
      background(preGameBgImage);
      let startButtonWidth = 960 * 0.2;
      let startButtonHeight = 540 * 0.09;
      let startButtonX = (960 - startButtonWidth) / 2;
      let startButtonY = 540 * 0.88;
  
      // 1초마다 이미지를 교체
      if (millis() - alastChangeTime > achangeInterval) {
        if (currentStartButtonImage === startButtonImage) {
          currentStartButtonImage = startButtonImage2;  // 첫 번째 이미지에서 두 번째 이미지로 변경
        } else {
          currentStartButtonImage = startButtonImage;  // 두 번째 이미지에서 첫 번째 이미지로 변경
        }
        alastChangeTime = millis();  // 변경 시간을 갱신
      }
  
      // 현재 이미지 표시
      image(currentStartButtonImage, startButtonX, startButtonY, startButtonWidth, startButtonHeight);
    }else if (millis() - explanationStartTime < explanationDuration) {
    // 설명 화면
    background(bgImage);
    
  
      displayGameImages();

      let remainingTime = Math.ceil((explanationDuration - (millis() - explanationStartTime)) / 1000);  // 남은 시간 계산
    if (remainingTime > 0) {

      image(
        explanationImage,
        width / 2 - explanationImage.width * 0.4+35,
        height / 2 - explanationImage.height * 0.5+100,
        explanationImage.width * 0.7,
        explanationImage.height * 0.65
      );

      // 카운트다운 숫자 표시
      push();
      fill(243,91,91);
      textFont(customFont);
      textSize(80);
      textAlign(CENTER, CENTER);
      text(remainingTime, 960 / 2, 540 * 0.8-150);  // 카운트다운 숫자 위치
      pop();
    }
  
      // 설명 이미지
     
  
      // 토끼 gif
  
  
      // gifBackground는 showResultGif가 true일 때만 그리지 않음
      image(gifBackground, -50, 80, width / 1.5-5, height / 1.5+26);
    } else if (showResultGif) {
      // 결과 PNG 화면
    
      if (gameResult === "Lose") resultGif = resultGifImages.Win;
      if (gameResult === "Win") resultGif = resultGifImages.Lose;
      if (gameResult === "Draw") resultGif = resultGifImages.Draw;


      background(bgImage);
      image(resultGif, 8, 540 / 2 - 163, 300, 400);

      let selectedChoiceImage = userChoiceImages[selectedIndex];

        if (selectedChoiceImage) {
  // userChoiceImages 대신 images 배열로 실제 표시
      let displayImage = images[selectedIndex]; // images 배열에서 선택된 인덱스의 이미지 참조
      if (displayImage) {
      image(displayImage, 570, 230, 138, 138); 
       }// images 배열의 선택된 이미지 표시}
      }

      displayGameImages();
  
      // 3초 후 결과 화면 종료
      if (millis() - resultGifStartTime >= 3000) {
        showResultGif = false;
        gameEnded = true;
      }
    } else if (!gameEnded) {
      // 게임 화면
      background(bgImage);
      
      if(showResultGif){
       image(gifBackground, -50, 80, width / 1.5-5, height / 1.5+26)}

       let questionSize = width * 0.11;
       image(questionMarkImage, width * 0.6, height * 0.47, questionSize, questionSize);
       //gameimanges에서 빼옴 

       
  
  
      image(stopwatchImage, windowWidth / 2 - 40, windowHeight - 120, 80, 90);
  
      if (millis() - lastChangeTime > changeInterval) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lastChangeTime = millis();
      }
  
      if (millis() - countdownStartTime >= 1000) {
        if (countdown > 0) {
          countdown--;
          countdownStartTime = millis();
        } else if (!gameEnded) {
          gameResultImage = { image: resultImages.Lose, width: windowWidth, height: windowHeight };
          gameEnded = true;
        }

        

      
      }
      push();
      fill(0);
      textFont(customFont);
      textSize(countdownFontSize);
      textAlign(CENTER, CENTER);
      text(countdown, 960 / 2+1, 540 * 0.867-2);
      pop();
      displayGameImages();
    }
  
    if (gameEnded) {
      // 결과 이미지의 크기와 위치 계산
      let resultWidth = gameResultImage.width;
      let resultHeight = gameResultImage.height;
      let resultX = 960 * 0.5 - resultWidth * 0.5;
      let resultY = 540 * 0.5 - resultHeight * 0.5;
  
      // Next 버튼 위치와 크기 정의
      let nextButtonWidth = 109
      let nextButtonHeight = 45
      let nextButtonX = 960 * 0.5 - nextButtonWidth / 2-1;  // 화면 중앙에 위치하도록 설정
      let nextButtonY = 318  // 하단에 배치
  
  
      image(
        gameResultImage.image,
        resultX,
        resultY,
        resultWidth,
        resultHeight
      );

      if (
        mouseX > nextButtonX &&
        mouseX < nextButtonX + nextButtonWidth &&
        mouseY > nextButtonY &&
        mouseY < nextButtonY + nextButtonHeight
      ) {
        image(mini1next, nextButtonX, nextButtonY, nextButtonWidth, nextButtonHeight);
      }  
      if (mouseIsPressed) {
        if (
          mouseX > nextButtonX &&
          mouseX < nextButtonX + nextButtonWidth &&
          mouseY > nextButtonY &&
          mouseY < nextButtonY + nextButtonHeight
        ) {
          console.log("Next button clicked");
          // 버튼 클릭 시 추가 기능을 처리합니다.
        }
      }
      


    }
  }
  else if(gm == 3){
    image(game2_prebg, 0,0,windowWidth,windowHeight);
    let startButtonWidth = width * 0.2;
    let startButtonHeight = height * 0.10;
    let startButtonX = (width - startButtonWidth) / 2;
    let startButtonY = height * 0.86;
  
    if (millis() - alastChangeTime > achangeInterval) {
      if (currentStartButtonImage === startButtonImage) {
        currentStartButtonImage = startButtonImage2;  // 첫 번째 이미지에서 두 번째 이미지로 변경
      } else {
        currentStartButtonImage = startButtonImage;  // 두 번째 이미지에서 첫 번째 이미지로 변경
      }
      alastChangeTime = millis();  // 변경 시간을 갱신
    }

    // 현재 이미지 표시
    image(currentStartButtonImage, startButtonX, startButtonY, startButtonWidth, startButtonHeight);
  }
  else if(gm == 4){
    image(game2_bg, 0, 0, windowWidth, windowHeight);
    image(game2_notice, windowWidth / 2 - game2_notice.width * 0.25,windowHeight / 2 - game2_notice.height * 0.25,game2_notice.width * 0.5,game2_notice.height * 0.5)
    push();
    fill(243,91,91);
    textFont(customFont);
    textSize(80);
    textAlign(CENTER, CENTER);
    text(5-int((frameCount-recent_frame)/60), 960 / 2, 540 * 0.8-200);  // 카운트다운 숫자 위치
    pop();

    if(frameCount-recent_frame > 300){
      gm ++;
      recent_frame = frameCount;
    }
  }
  else if(gm == 5){
    // Clover
    image(game2_bg, 0, 0, windowWidth, windowHeight);
    if(frameCount % 20 == 0 ){
      if(int(random(0,10)) == 0){
        clover_list[clover_list.length] = new Clover(random(100*0.6, windowWidth-100*0.6), 5,true);
        golden_cnt--;
      }else{
        clover_list[clover_list.length] = new Clover(random(100*0.6, windowWidth-100*0.6), random(10*0.6, 20*0.6),false);
      }
    }
      
    if(clover_time-(frameCount-recent_frame)/60<0.1){
      gm++;
      recent_frame = frameCount;
    }

    for(let i=0; i<clover_list.length;i++){
      clover_list[i].fall();
      if(clover_list[i].gold){
        image(yclover_img,clover_list[i].pos[0], clover_list[i].pos[1], 50*0.6, 50*0.6);
      }else{
        image(gclover_img,clover_list[i].pos[0], clover_list[i].pos[1], 50*0.6, 50*0.6);
      }
        
      if(clover_list[i].pos[1]>800*0.6 && clover_list[i].pos[1]<800*0.6+basket2_img.height/2 && clover_list[i].pos[0] < mouseX+basket2_img.width/4 && clover_list[i].pos[0] > mouseX -basket2_img.width/4){
        if(clover_list[i].gold){
          gold_cnt++;
          red_frame = frameCount;
          sMiniGame2EnterBasket.play();
        }else{
          clover_cnt++;
          red_frame = frameCount;
          sMiniGame2EnterBasket.play();
        }
        clover_list.splice(i,1);
      }
      else if(clover_list[i].pos[1]>900*0.6){
        clover_list.splice(i,1);
      }  
    }
    
    if(int(random(0,15)) == 1){
      poop_list[poop_list.length] = new Poop(random(400*0.6, windowWidth-400*0.6), 20)
    }
    for(let i=0;i<poop_list.length;i++){
      if(poop_list[i].life){
        poop_list[i].fall();
        image(poop_img,poop_list[i].pos[0], poop_list[i].pos[1], 50*0.6, 50*0.6)
        if(poop_list[i].pos[1]>800*0.6 && poop_list[i].pos[1]<800*0.6+basket2_img.height/2 && poop_list[i].pos[0] < mouseX+basket2_img.width/4 && poop_list[i].pos[0] > mouseX -basket2_img.width/4){
          poop_cnt ++;
          red_frame = frameCount;
          poop_list.splice(i,1);
          sMiniGame2PoopenterBasket.play();
        }
        else if(poop_list[i].pos[1]>900*0.6){
          poop_list.splice(i,1);
        }
      }else{
       poop_list.splice(i,1);
      }
    }
    push();
    imageMode(CENTER);
    image(timer_img, windowWidth*0.95, windowHeight*0.10, timer_img.width*0.6, timer_img.height*0.6);
    pop();
    
    push();
    fill(130,110,92);
    textSize(50*0.35);
    textFont(mini4_customFont);
    text(`X ${clover_cnt}`, 330*0.4+40+20, 82*0.4+10); 
    text(`X ${gold_cnt}`, 130*0.4+40 -17, 82*0.4+10);
    text(`X ${poop_cnt}`, 530*0.6+20-29, 82*0.4+10);
    pop();
    push();
    fill(0);
    textFont(mini4_customFont);
    textSize(50*0.45);
    textAlign(CENTER, CENTER);
    text(nf(int(clover_time-(frameCount-recent_frame)/60),2), windowWidth*0.95, windowHeight*0.10+2);
    pop();
      
    if(mouseX>1500*0.6){
      if(frameCount-red_frame <= 5){
        image(basket2_img, windowWidth - basket2_img.width/2, 800*0.6, basket2_img.width/2, basket2_img.height/2);
      }else{
        image(basket1_img, windowWidth - basket2_img.width/2, 800*0.6, basket2_img.width/2, basket2_img.height/2);
      }
    }else if(mouseX<100*0.6){
      if(frameCount-red_frame <= 5){
        image(basket2_img, 0, 800*0.6, basket2_img.width/2, basket2_img.height/2);
      }else{
        image(basket1_img, 0, 800*0.6, basket2_img.width/2, basket2_img.height/2);
      }
    }else{
      if(frameCount-red_frame <= 5){
        image(basket2_img, mouseX-basket2_img.width/4, 800*0.6, basket2_img.width/2, basket2_img.height/2);
      }else{
        image(basket1_img, mouseX-basket2_img.width/4, 800*0.6, basket2_img.width/2, basket2_img.height/2);
      }
    }
  }
  
  else if(gm == 6){
    image(game2_bg, 0, 0, windowWidth, windowHeight);
    for(let i=0; i<clover_list.length;i++){
      if(clover_list[i].life){
        if(clover_list[i].gold){
          image(yclover_img,clover_list[i].pos[0], clover_list[i].pos[1], 50*0.6, 50*0.6);
        }else{
          image(gclover_img,clover_list[i].pos[0], clover_list[i].pos[1], 50*0.6, 50*0.6);
        }
      }
    }
    for(let i=0;i<poop_list.length;i++){
      if(poop_list[i].life){
        image(poop_img,poop_list[i].pos[0], poop_list[i].pos[1], 50*0.6, 50*0.6);
      }
    }

    image(game2_result, windowWidth/2 - game2_result.width*0.75*0.6, windowHeight*0.1, game2_result.width*1.5*0.6, game2_result.height*1.5*0.6);
    if(mouseX >windowWidth/2-game2_nextbtn.width*0.75*0.6 && mouseX < windowWidth/2+game2_nextbtn.width*0.75*0.6 && mouseY > windowHeight*0.685 && mouseY < windowHeight*0.685+game2_nextbtn.height*1.5*0.6){
      image(game2_nextbtn2, windowWidth/2-game2_nextbtn.width*0.75*0.6, windowHeight*0.685, game2_nextbtn.width*1.5*0.6, game2_nextbtn.height*1.5*0.6);
    }
    else{
      image(game2_nextbtn, windowWidth/2-game2_nextbtn.width*0.75*0.6, windowHeight*0.685, game2_nextbtn.width*1.5*0.6, game2_nextbtn.height*1.5*0.6);
    }

    push();
    fill(0);
    textFont(mini4_customFont);
    textSize(40*0.4);
    fill(130,110,92)
    text(clover_cnt, windowWidth/2+20*0.6+7, 525*0.6-1 );
    text(gold_cnt,  windowWidth/2+20*0.6+7, 480*0.6-1);
    text(poop_cnt,  windowWidth/2+20*0.6+7, 568*0.6-1);
    pop();

  }
  else if(gm==7){
    // 현재 배경 이미지 그리기
  push();
  imageMode(CORNER);
  image(mini3_mini3_bgImage, 0, 0, width, height);

  // 시작 버튼이 보이는 경우 버튼 이미지 그리기
  if (mini3_buttonVisible) {
    image(currentStartButtonImage, mini3_mini3_btnX, mini3_mini3_btnY, mini3_mini3_btnWidth, mini3_mini3_btnHeight);
  }

  // 버튼 이미지 변경 로직
  if (millis() - alastChangeTime > achangeInterval) {
    if (currentStartButtonImage === mini3_mini3_pressStartBtn) {
      currentStartButtonImage = startButtonImage2;  // 첫 번째 이미지에서 두 번째 이미지로 변경
    } else {
      currentStartButtonImage = mini3_mini3_pressStartBtn;  // 두 번째 이미지에서 첫 번째 이미지로 변경
    }
    alastChangeTime = millis();  // 이미지 변경 시간을 갱신
  }

  // 알림 이미지 표시
  if (mini3_noticeVisible) {
    image(mini3_mini3_noticeImg, 250, height / 2, 500, 65);
  }

  if (mini3_gameStarted && millis() - mini3_toggleLastChangeTime > mini3_toggleInterval) {
    mini3_toggleVisible = !mini3_toggleVisible;
    mini3_toggleLastChangeTime = millis();
  }

  if (mini3_toggleVisible) {
    image(mini3_mini3_toggleImg, width / 2 - 39, 249 + 120 - 13, 52, 52);
  }

  // 회전하는 ToggleRec 표시
  // 회전하는 ToggleRec 표시
if (mini3_mini3_bgImage === mini3_mini3_nextBg && !mini3_showHalfBall) {
  // 2초 후에 회전 시작
  if (!mini3_isRotationStarted && millis() - mini3_mixingStartTime > 2700) {
    mini3_rotationStartTime = millis(); // 회전 시작 시간 기록
    mini3_isRotationStarted = true; // 회전 시작 플래그 설정
  }
  push();
  if (!mini3_isRotationStarted) {
    imageMode(CENTER);
    image(mini3_mini3_toggleRecImg, 449, height / 2 + 202, 60, 55); // 회전 전 이미지 표시
  }
  pop();
  
    // 2초가 지난 후에 회전 적용 
    if (mini3_isRotationStarted) {
      // 회전 시작 직후에 mixing 사운드를 한 번만 재생하도록 추가
      if (!sMiniGame3BallMixing.isPlaying()) {
        sMiniGame3BallMixing.play(); // mixing 사운드 재생
        setTimeout(() => {
          sMiniGame3BallMixing.stop(); // 5초 후에 사운드 멈춤
        }, 3000);  // 5000ms = 5초
      }
    
      push();
      translate(449, height / 2 + 202); // 회전할 이미지의 기준점 설정
      rotate(radians(mini3_rotationAngle)); // 회전 적용
      imageMode(CENTER);
      image(mini3_mini3_toggleRecImg, 0, 0, 60, 55); // 회전하는 토글Rec 이미지 그리기
      pop();
    
      mini3_rotationAngle += mini3_rotationSpeed; // 회전 각도 업데이트
      if (mini3_rotationAngle >= 360) {
        mini3_rotationAngle = 0; // 회전 각도가 360을 넘으면 초기화
      }
    }
  }

  // 공과 반쪽 공 애니메이션 처리
  if (mini3_mini3_bgImage === mini3_mini3_nextBg) {
    if (mini3_isMixing && !sMiniGame3BallMixing.isPlaying()) {
      sMiniGame3BallMixing.play(); // 공 섞이는 소리 재생
    }
  
    for (let obj of mini3_objects) {
      obj.update();
      obj.display();
    }

    // 3초가 지나면 배경 변경 및 반쪽 공 등장
    if (millis() - mini3_mixingStartTime > 5000) {
      mini3_mini3_bgImage = mini3_mini3_finalBg;
      mini3_showHalfBall = true;
      mini3_explanationStartTime = millis();  // 설명 문구 타이머 시작
    }
  }

  // 반쪽 공 확장 애니메이션
  if (mini3_showHalfBall) {
    push();
    imageMode(CENTER);

    if (mini3_isBouncing) {
      mini3_bounceY = sin(frameCount * 0.3) * 10; // 튀는 효과
    }

    if (mini3_halfBallClicks < 3) {
      // 반쪽 공 확장: 7배 이상 커지지 않도록 제한
      if (mini3_halfBallScale < 1.5 * 60) {  // 60은 원래 이미지 크기 (원래 크기의 7배)
        mini3_halfBallScale += 3.; // 확장 속도 조절
      } else {
        mini3_halfBallScale = 1.5 * 60; // 크기가 7배가 되었으면 더 이상 커지지 않도록 설정
      }

      if (!sMiniGame3BallMove.isPlaying()) {
        sMiniGame3BallMove.play(); // 공 크기 증가 효과
      }
    
    
      // 반쪽 공 그리기
      image(mini3_mini3_halfBallImage, width / 2 + 8, height / 2 - mini3_bounceY, mini3_halfBallScale, mini3_halfBallScale);
    } else {
      // 클로버 서서히 커지는 효과
      if (mini3_gcloverScale < 1) {
        mini3_gcloverScale += mini3_gcloverAppearSpeed; // 서서히 커짐
      } else {
        if (!mini3_gcloverStartTime) {
          mini3_gcloverStartTime = millis(); // 클로버가 완전히 나타날 때 타이머 시작
        }
        mini3_isGcloverVisible = true; // 클로버가 완전히 나타났을 때
      }
      
      // 클로버 이미지 그리기
      image(mini3_mini3_gcloverImage, 492, 270, 130 * mini3_gcloverScale, 130 * mini3_gcloverScale); // 클로버 크기 적용
      mini3_showGclover = true;
      
      // gclover 표시 후 2초 뒤에 complete 화면으로 전환
      if (mini3_isGcloverVisible && millis() - mini3_gcloverStartTime > 2000 && !mini3_showComplete) {
        mini3_mini3_bgImage = mini3_mini3_postGameBg; // 결과 화면으로 전환
        mini3_score = random([0, 1, 2, 3, 4, 5])
        mini3_selectedCompleteImage = mini3_completeImages[mini3_score]; // 랜덤 complete 이미지 선택
        mini3_showComplete = true; // complete 화면 표시
      }
    }

    // 2초 후에 설명 이미지 표시
    if (millis() - mini3_explanationStartTime > 1000 && !mini3_showGclover) {
      mini3_explanationVisible = true;
      image(mini3_mini3_explanationImage, width / 2, height / 2 +100, 500, 60); // 설명 이미지
    }

    // gclover 이미지가 나타나면 설명 이미지 숨김
    if (mini3_showGclover && millis() - mini3_gcloverStartTime > 3000) {
      mini3_explanationVisible = false; // gclover가 표시된 후 설명 이미지를 숨김
    }

    // Confetti GIF 표시
    if (mini3_showGclover) {
      image(mini3_mini3_confettiGif, 500,300, 960, 540); // Confetti GIF 위치 조정
    }
  }

  // complete 화면 표시
  if (mini3_showComplete) {
    image(mini3_selectedCompleteImage, width / 2 , height / 2-50 , 350, 460);

    if (!sMiniGame1Result.isPlaying()) {
      sMiniGame1Result.play(); // 결과 소리 재생
    }

    
    // Next 버튼 겹치게 표시 (마우스 오버 상태에 따라 nextBtn2가 보이도록)
    image(mini3_nextBtnState, width / 2, height - 149, 125, 50); 
  }
  pop();
  }
  else if(gm == 8){
    if (!mini4_gameStarted) {
      // 게임 시작 전 화면
      background(mini4_preGameBgImage);
      let startButtonWidth = 960 * 0.2;
      let startButtonHeight = 540 * 0.09;
      let startButtonX = (960 - startButtonWidth) / 2;
      let startButtonY = (540 - startButtonHeight) / 2+225; // 버튼 중앙 배치
  
      // 0.7초마다 이미지 변경
      if (millis() - alastChangeTime > achangeInterval) {
        if (currentStartButtonImage === mini4_preGameButtonImage) {
          currentStartButtonImage = startButtonImage2;  // 첫 번째 이미지에서 두 번째 이미지로 변경
        } else {
          currentStartButtonImage = mini4_preGameButtonImage;  // 두 번째 이미지에서 첫 번째 이미지로 변경
        }
        alastChangeTime = millis();  // 변경 시간을 갱신
      }
  
      image(currentStartButtonImage, startButtonX, startButtonY, startButtonWidth, startButtonHeight);  // 시작 버튼 표시
    } else {
      // 게임이 시작된 후 화면
      image(mini4_bgImage, 0, 0, 960, 540);
  
      if (mini4_stopwatchImage) {
        image(mini4_stopwatchImage, 860, 10, 80, 90);
      }
  
      if (mini4_heartsScoreImage) {
        image(mini4_heartsScoreImage, 15, 15, 120, 40);
      }
  
      for (let i = 0; i < mini4_hearts.length; i++) {
        let heart = mini4_hearts[i];
        image(heart.image, heart.x, heart.y, heart.size, heart.size);
        heart.size -= 1;
        heart.y += heart.speedY;
  
        if (heart.y <= 0) {
          heart.size = 150;
          let startPos = floor(random(3));
          let newY = height;
  
          if (startPos === 0) {
            heart.x = 300 + random(-50, 50);
          } else if (startPos === 1) {
            heart.x = 480 + random(-50, 50);
          } else {
            heart.x = 600 + random(-50, 50);
          }
  
          heart.speedY = random(-30, -40);
          heart.y = newY;
        }
      }
  
      image(mini4_basket, 130, 410);
      if (mini4_countdown <= 0 && mini4_countdownFinished) {
        image(mini4_bgImageWithNothing, 0, 0, 960, 540);
        image(mini4_completeImage, 320, 0, 330, 420);
        push();
        textFont(mini4_customFont);
        fill(130, 110, 92);
        textSize(24);
        textAlign(CENTER, CENTER);
        text(mini4_pressCount, 528, 293);
        pop();
        // Change the button image when hovered
        if (mouseX > 420 && mouseX < 545 && mouseY > 342 && mouseY < 392) {
          image(mini4_nextButtonHoverImage, 420, 342, 125, 50);
        } else {
          image(mini4_nextButtonImage, 420, 342, 125, 50);
        }

        image(home_mouse, mouseX, mouseY);  // 커서 이미지를 그리기

        // 다른 코드가 실행되지 않게 return을 없애거나 아래에 다른 코드 추가
    
        return;
      }
  
      if (!mini4_timerRunning && mini4_countdown === 7) {
        push();
        fill(0);
        textFont(mini4_customFont);
        textAlign(CENTER, CENTER);
        textSize(34);
        text(mini4_countdown, 900, 60);
        pop();
      }
  
      if (mini4_timerRunning && mini4_countdown > 0) {
        push();
        textFont(mini4_customFont);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(34);
        text(mini4_countdown, 900, 58);
        pop();
  
        let currentTime = millis();
        if (currentTime - mini4_lastTime >= 1000) {
          mini4_countdown--;
          mini4_lastTime = currentTime;
        }
      }
  
      if (mini4_countdown <= 0 && !mini4_countdownFinished) {
        mini4_timerRunning = false;
        mini4_countdown = 0;
        mini4_countdownFinished = true;
      }
  
      image(mini4_currentRabbitImage, -15, -30, 1000, 550);
      push();
      textFont(mini4_customFont);
      fill(130, 110, 92);
      textSize(20);
      textAlign(LEFT, TOP);
      text(`X ${mini4_pressCount}`, 80, 25);
      pop();
  
      if (mini4_explanationImage && !mini4_timerRunning) {
        image(mini4_explanationImage, 219, 300, 530, 80);
      }
    }
  }
  else if(gm == 9){
     
    image(result_bg, 0, 0, windowWidth, windowHeight);
    if(user_point>= 100){
      user_score = 0;
    }else if(user_point < 100 && user_point >=80){
      user_score = 1;
    }else if(user_point < 80 && user_point >=60){
      user_score = 2;
    }else if(user_point < 60 && user_point >=30){
      user_score = 3;
    }else{
      user_score = 4;
    }

    image(results[user_score], windowWidth/2 - results[user_score].width/2, 285, results[user_score].width, results[user_score].height);
    push();
    textFont(result_font);
    textSize(18);
    fill(130, 110, 92);
    text(user_name, 370, 250);
    textAlign(CENTER, CENTER);
    fill(232,119,83);
    text(user_point+"점", 556, 243);
    pop();
  }
  else if(gm == 10){
    image(cus1_bg, 0, 0, windowWidth, windowHeight);
    if(cus2_selected_bgs < 10 && cus2_selected_color < 10){
      push();
      imageMode(CENTER);
      image(cus2_frame[cus2_selected_color][cus2_selected_bgs], 250+3.5, windowHeight/2+7,cus2_gray[0].width*1.05,cus2_gray[0].height*1.05);
      pop();
    }else{
      push();
      imageMode(CENTER);
      image(cus2_gray[0], 250+3.5, windowHeight/2+7,cus2_gray[0].width*1.05,cus2_gray[0].height*1.05);
      pop();
    }
    
    for(let i=0; i<=7; i++){
      if(i%3 == 2){
        cus1_ddy = cus1_dy/2
      }else{
        cus1_ddy = 0
      }
      if(cus1_selected_icon == i){
        image(cus1_icon_clicked[i], cus1_x0 + cus1_dx*(i%3), cus1_y0 + cus1_dy*(int(i/3)) +cus1_ddy);
        for(let j=0; j<=2; j++){
          if(cus1_selected_ment == j){
            image(cus1_ment_clicked[i][j], 260+cus1_x0, 60+cus1_y0+j*cus1_dy/3);
          }else{
            image(cus1_ment[i][j], 260+cus1_x0, 60+cus1_y0+j*cus1_dy/3);
          }
        }
      }else{
        image(cus1_icon[i], cus1_x0 + cus1_dx*(i%3), cus1_y0 + cus1_dy*(int(i/3))+cus1_ddy);
      }
    }
    if(cus1_selected_icon<9 && cus1_selected_ment<9){
      push();
      imageMode(CENTER);
      image(cus1_frame[cus1_selected_icon][cus1_selected_ment], 250+3.5, windowHeight/2+7);
      pop();
    }
    
  }
  else if(gm == 11){
    
    image(cus2_bg,0,0,windowWidth,windowHeight);
    if(cus2_selected_bgs < 10 && cus2_selected_color < 10){
      push();
      imageMode(CENTER);
      image(cus2_frame[cus2_selected_color][cus2_selected_bgs], 250+3.5, windowHeight/2+7,cus2_gray[0].width*1.05,cus2_gray[0].height*1.05);
      pop();
    }else if(cus2_selected_bgs < 10){
      push();
      imageMode(CENTER);
      image(cus2_gray[cus2_selected_bgs], 250+3.5, windowHeight/2+7,cus2_gray[0].width*1.05,cus2_gray[0].height*1.05);
      pop();
    }
    else{
      push();
      imageMode(CENTER);
      image(cus2_gray[0], 250+3.5, windowHeight/2+7,cus2_gray[0].width*1.05,cus2_gray[0].height*1.05);
      pop();
    }

    push();
    imageMode(CENTER);
    image(cus1_frame[cus1_selected_icon][cus1_selected_ment], 250+3.5, windowHeight/2+7);
    pop();
    
    for(let i=0; i<=5; i++){
      if(cus2_selected_bgs == i){
        image(cus2_bgs_selected[i], cus2_x0 +cus2_dx*(i%2)-(cus2_bgs_selected[0].width - cus2_bgs[0].width)/2, cus2_y0+cus2_dy*(int(i/2))-(cus2_bgs_selected[0].height - cus2_bgs[0].height)/2);
      }else{
        image(cus2_bgs[i], cus2_x0 +cus2_dx*(i%2), cus2_y0+cus2_dy*(int(i/2)));
      }
      
    }

    for(let i=0; i<=6; i++){
      if(cus2_selected_color == i){
        image(cus2_color_selected[i], 510 + 40*i -(cus2_color_selected[0].width-cus2_color[0].width)/2, 365-(cus2_color_selected[0].height-cus2_color[0].height)/2);
      }else{
        image(cus2_color[i], 510 + 40*i, 365);
      }
      
    }
  }
  else if(gm == 12){
    image(loading, 0, 0, windowWidth, windowHeight);
    if(frameCount-recent_frame > 60*5){
      gm++;
    }
  }
  else if(gm == 13){
    image(ending_bg1,0,0,windowWidth,windowHeight);
    image(finger, windowWidth/2+5*sin(frameCount * 0.05), windowHeight/2+40+5*sin(frameCount * 0.05), finger.width+10*sin(frameCount * 0.05), finger.height+10*sin(frameCount * 0.05));
  }
  else if(gm == 14){
    image(ending_bg2,0,0,windowWidth,windowHeight);
    image(Reset_img, windowWidth*0.8, windowHeight*0.88);
    if(frameCount - recent_frame>=30){
      imgRate = 1;
    }else{
      imgRate = (frameCount - recent_frame)/30;
    }
  
    if(backward%4 == 0){
      push();
      imageMode(CENTER);
      translate(windowWidth/2, 0);
      scale(imgRate, 1);
      image(cus2_frame[cus2_selected_color][cus2_selected_bgs], 0, windowHeight/2-100,cus2_frame[0][0].width*1.3, cus2_frame[0][0].height*1.3);
      image(cus1_frame[cus1_selected_icon][cus1_selected_ment], 0, windowHeight/2-100,cus1_frame[0][0].width*1.2, cus1_frame[0][0].height*1.2);
      pop();
    } else if(backward%4 == 1){
      push();
      imageMode(CENTER);
      translate(windowWidth/2, 0);
      scale(1-imgRate, 1);
      image(cus2_frame[cus2_selected_color][cus2_selected_bgs], 0, windowHeight/2-100,cus2_frame[0][0].width*1.3, cus2_frame[0][0].height*1.3);
      image(cus1_frame[cus1_selected_icon][cus1_selected_ment], 0, windowHeight/2-100,cus1_frame[0][0].width*1.2, cus1_frame[0][0].height*1.2);
      pop();
      if(1-imgRate == 0){
        recent_frame = frameCount;
        backward += 1
      }
    } else if(backward%4 == 2){
      push();
      imageMode(CENTER);
      translate(windowWidth/2, 0);
      scale(imgRate, 1);
      image(cus2_frame[cus2_selected_color][cus2_selected_bgs], 0, windowHeight/2-100,cus2_frame[0][0].width*1.3, cus2_frame[0][0].height*1.3);
      image(cus_back[cus1_selected_icon],0, windowHeight/2-100,cus_back[0].width*1.3, cus_back[0].height*1.3);
      pop();
      if(1-imgRate == 0){
        push();
        translate(windowWidth/2,0);
        textSize(17);
        textFont(font);
        textAlign(CENTER, CENTER);
        fill(0);
        text(user_name, 2, windowHeight*0.25+2);
        pop();
      }
    } else if(backward%4 == 3){
      push();
      imageMode(CENTER);
      translate(windowWidth/2, 0);
      scale(1-imgRate, 1);
      image(cus2_frame[cus2_selected_color][cus2_selected_bgs], 0, windowHeight/2-100,cus2_frame[0][0].width*1.3, cus2_frame[0][0].height*1.3);
      image(cus_back[cus1_selected_icon],0, windowHeight/2-100,cus_back[0].width*1.3, cus_back[0].height*1.3);
      pop();
      if(1-imgRate == 0){
        recent_frame = frameCount;
        backward += 1;
      }
    }
  
    // 여기서 1초(60프레임) 후에 캡쳐
    if (recent_frame + 60 == frameCount) {
      captureAndUpload();
    }
  
    // QR 설명 이미지 지속 표시
    if (qrexplainVisible) {
      image(qrexplain, width / 2 - qrexplain.width / 2, height - 200);
    }
  }
  
  push();
  imageMode(CENTER);
  image(home_mouse, mouseX, mouseY);
  pop();
  
}


function displayGameImages() {
  
  // 중앙 이미지 표시
  let img = images[currentImageIndex];
  let imgSize = 960 * 0.15;
  let centerX = 960 * 0.25;
  let centerY = 540 * 0.55 - imgSize * 0.5;
  image(img, centerX, centerY, imgSize, imgSize);

  // 물음표 표시
  

  // 선택 버튼들 표시
  for (let i = 0; i < userChoiceImages.length; i++) {
    let choiceX = 960 * 0.8;
    let choiceY = 540 * (0.2 + i * 0.23);
    let choiceSize = 960 * 0.1;

    if (selectedIndex === i) {
      image(clickedImages[i], choiceX, choiceY, choiceSize, choiceSize);
    } else if (isHoveringChoice[i]) {
      image(clickedImages[i], choiceX, choiceY, choiceSize, choiceSize);
    } else {
      image(userChoiceImages[i], choiceX, choiceY, choiceSize, choiceSize);
    }
  }
}

// 클릭 여부를 저장할 변수

// Update mouse hover detection for user choices when gm == 1
function mouseMoved() {
  if (gm == 2) {
    for (let i = 0; i < userChoiceImages.length; i++) {
      let choiceX = 960 * 0.8;
      let choiceY = 540 * (0.2 + i * 0.23);
      let choiceSize = 960 * 0.1;

      // 마우스가 선택지 이미지 위에 있을 때 클릭된 이미지로 변경
      if (
        mouseX > choiceX &&
        mouseX < choiceX + choiceSize &&
        mouseY > choiceY &&
        mouseY < choiceY + choiceSize
      ) {
        isHoveringChoice[i] = true; // 마우스가 선택지 위에 있을 때
      } else {
        isHoveringChoice[i] = false; // 마우스가 선택지 위에 없을 때
      }
    }
  }

  if (gm == 7) {  // 기존 코드
    if (
      mouseX > width / 2 - 62.5 && mouseX < width / 2 + 62.5 &&
      mouseY > height - 199+20 && mouseY < height - 149+20
    ) {
      mini3_isOverNextBtn = true;
      mini3_nextBtnState = mini3_nextBtn2; // 마우스가 버튼 위에 있을 때 nextBtn2로 변경
    } else {
      mini3_isOverNextBtn = false;
      mini3_nextBtnState = mini3_nextBtn; // 마우스가 버튼 위에 없을 때 기본 nextBtn으로 변경
    }
  }
}



// Mouse Click
let canSelect = false; // 클릭을 허용할지 여부를 제어하는 변수

function mousePressed() {
  // 게임 상태가 0일 때 (홈 화면)
  if (gm == 0 && mouseX > windowWidth / 2 - 200 * 3 / 5 && mouseX < windowWidth / 2 + 200 * 3 / 5 && mouseY > windowHeight * 0.8 -80 && mouseY < windowHeight * 0.8 -80 + 250 * 3 / 5) {
    gm++; // 게임 상태 변경
  }
  // 게임 상태가 1일 때 (이름 입력 화면)
  else if (gm == 1 && mouseX > 900 * 3 / 5 && mouseX < 1457 * 3 / 5 && mouseY > 500 * 3 / 5+40 && mouseY < 583 * 3 / 5+40 && name_enter_announce) {
    name_enter_announce = false;
    input = createInput('럭키');
    input.position(570, 475+35-15);
    input.size(280, 35);
    input.style('text-align', 'center');
    input.style('font-size', '20px');
    input.style('font-family', 'CustomFont');
    input.style('color', '#69523D');
    input.style('border', 'none');
    input.style('outline', 'none');
  } else if (gm == 1 && mouseX > 900 * 3 / 5 && mouseX < 1457 * 3 / 5 && mouseY > 600 * 3 / 5+60-15 && mouseY < 700 * 3 / 5+60-15 && input.value() != '' && input.value().length == 4) {
    user_name = input.value().slice(-2);
    input.remove();
    gm++;
  }
  // 게임 상태가 2일 때 (게임 시작 화면)
  else if (gm == 2 && !gameStarted) {
    let startButtonWidth = width * 0.2;
    let startButtonHeight = height * 0.09;
    let startButtonX = (width - startButtonWidth) / 2;
    let startButtonY = height * 0.88;

    if (mouseX > startButtonX && mouseX < startButtonX + startButtonWidth && mouseY > startButtonY && mouseY < startButtonY + startButtonHeight) {
      gameStarted = true;
      explanationStartTime = millis();
      countdownStartTime = millis();
      canSelect = false;
      isMouseClicked = true;

    }
  } else if (gm == 2 && !gameEnded && millis() - explanationStartTime >= explanationDuration) {
    canSelect = true; // 설명 후 선택 가능

    if (canSelect) {
      for (let i = 0; i < userChoiceImages.length; i++) {
        let choiceX = width * 0.8;
        let choiceY = height * (0.2 + i * 0.23);
        let choiceSize = width * 0.1;

        if (mouseX > choiceX && mouseX < choiceX + choiceSize && mouseY > choiceY && mouseY < choiceY + choiceSize) {
          selectedIndex = i;
          determineWinner(); // 승패 결정 함수 호출
          break;
        }
      }
    }
  }
  // 게임 상태가 2이고 게임이 끝난 후 Next 버튼 클릭
  else if (gm == 2 && gameEnded && mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 && mouseY > windowHeight * 0.6 && mouseY < windowHeight * 0.7) {
    gm++;
    sAllNextButton.stop();  // 이전 소리가 계속 나지 않도록 멈추고
    sAllNextButton.play();  // 새로 소리 재생

    isMouseClicked = false;
  }
  // 게임 상태가 3일 때 (게임 3 시작 버튼 클릭)
  else if (gm == 3 && mouseX > width * 0.4 && mouseX < width * 0.6 && mouseY > height * 0.90 && mouseY < height * 0.97) {
    gm++;
    recent_frame = frameCount;
  }
  // 게임 상태가 6일 때 (게임 2 끝난 후 Next 버튼 클릭)
  else if (gm == 6 && mouseX > windowWidth / 2 - game2_nextbtn.width * 0.75 * 0.6 && mouseX < windowWidth / 2 + game2_nextbtn.width * 0.75 * 0.6 && mouseY > windowHeight * 0.685 && mouseY < windowHeight * 0.685 + game2_nextbtn.height * 1.5 * 0.6) {
    gm++;
    user_point += clover_cnt - poop_cnt + gold_cnt * 3;
    recent_frame = frameCount;
     sAllNextButton.stop();
    sAllNextButton.play();
  }
  // 게임 상태가 7일 때 (게임 3 관련 처리)
  else if (gm == 7) {
    if (mini3_buttonVisible && mouseX > mini3_mini3_btnX && mouseX < mini3_mini3_btnX + mini3_mini3_btnWidth && mouseY > mini3_mini3_btnY && mouseY < mini3_mini3_btnY + mini3_mini3_btnHeight) {
      mini3_buttonVisible = false;
      mini3_mini3_bgImage = mini3_mini3_gameBg;
      mini3_noticeVisible = true;
      mini3_toggleVisible = true;
      mini3_gameStarted = true;
      
    }

    // 공 클릭 시
    if (mini3_showHalfBall && mini3_halfBallClicks < 3) {
      let distance = dist(mouseX, mouseY, width / 2, height / 2);
      if (distance < mini3_halfBallScale / 2) {
        mini3_halfBallClicks++;
        mini3_isBouncing = true;

        // 3회 클릭 후 공 제거
        if (mini3_halfBallClicks === 3) {
          mini3_isBouncing = false;
        }
      }
    }

    // 토글 이미지 클릭 시
    if (mini3_toggleVisible && mouseX > width / 2 - 70 && mouseX < width / 2 + 25 && mouseY > 244 + 110 && mouseY < 244 + 110 + 50) {
      mini3_mini3_bgImage = mini3_mini3_nextBg;
      mini3_toggleVisible = false;
      mini3_noticeVisible = false;
      mini3_gameStarted = false;
      initializeObjects();
      mini3_mixingStartTime = millis();
    }

    // Next 버튼 클릭 시
    if (mouseX > width / 2 - 62.5 && mouseX < width / 2 + 62.5 && mouseY > height - 199+20 && mouseY < height - 149+20 && mini3_showComplete) {
      mini3_nextBtnState = mini3_nextBtn2; // 클릭 시 nextBtn2로 변경
      user_point += [5, 0, 25, 15, 10, 20][mini3_score];
      gm++;
      sAllNextButton.stop();
      sAllNextButton.play();

    }
  }
  // 게임 상태가 8일 때 (게임 4 시작 버튼 클릭)
  else if (gm == 8) {
    if (!mini4_gameStarted && mouseX > 365 && mouseX < 595 && mouseY > 455 && mouseY < 525) { // 버튼의 새로운 클릭 영역으로 변경
      mini4_gameStarted = true;
    } else if (mini4_countdown <= 0 && mouseX > 420 && mouseX < 545 && mouseY > 342 && mouseY < 392) {
      gm++;
      if (mini4_pressCount >= 75) {
        user_point += 25;
      } else {
        user_point += (int(mini4_pressCount / 15) + 1) * 5;
      }
    }
  }
  // 게임 상태가 9일 때 (게임 결과 화면 Next 버튼 클릭)
  else if (gm == 9 && mouseX > windowWidth / 2 - 100 && mouseX < windowWidth / 2 + 100 && mouseY > 0.82 * windowHeight && mouseY < 0.88 * windowHeight) {
    gm++;
    sAllNextButton.stop();
    sAllNextButton.play();

  }
  // 게임 상태가 10일 때 (커스텀 1 선택)
  else if (gm == 10) {
    for (let i = 0; i <= 7; i++) {
      if(i%3 == 2){
        cus1_ddy = cus1_dy/2
      }else{
        cus1_ddy = 0
      }

      if (mouseX > cus1_x0 + cus1_dx * (i % 3) && mouseX < cus1_x0 + cus1_dx * (i % 3) + cus1_icon[i].width && mouseY > cus1_y0 + cus1_dy * (int(i / 3))+cus1_ddy && mouseY < cus1_y0 + cus1_dy * (int(i / 3)) + cus1_icon[i].height+cus1_ddy) {
        cus1_selected_icon = i;
      }
    }
    for (let i = 0; i <= 2; i++) {
      if (mouseX > 260 + cus1_x0 && mouseX < 260 + cus1_x0 + cus1_ment[0][0].width && mouseY > 60 + cus1_y0 + i * cus1_dy / 3 && mouseY < 60 + cus1_y0 + i * cus1_dy / 3 + cus1_ment[0][0].height) {
        cus1_selected_ment = i;
      }
    }
    if (cus1_selected_icon < 9 && cus1_selected_ment < 9 && mouseX > windowWidth / 2 + 20 && mouseX < windowWidth / 2 + 60 && mouseY > windowHeight * 0.8 && mouseY < windowHeight * 0.9) {
      gm++;
    }
  }
  // 게임 상태가 11일 때 (커스텀 2 선택)
  else if (gm == 11) {
    for (let i = 0; i <= 5; i++) {
      if (mouseX > cus2_x0 + cus2_dx * (i % 2) && mouseX < cus2_x0 + cus2_dx * (i % 2) + cus2_bgs[i].width && mouseY > cus2_y0 + cus2_dy * (int(i / 2)) && mouseY < cus2_y0 + cus2_dy * (int(i / 2)) + cus2_bgs[i].height) {
        cus2_selected_bgs = i;
      }
    }
    for (let i = 0; i <= 6; i++) {
      if (mouseX > 510 + 40 * i && mouseX < 510 + 40 * i + cus2_color[i].width && mouseY > 365 && mouseY < 365 + cus2_color[i].height) {
        cus2_selected_color = i;
      }
    }
    if(mouseY > windowHeight * 0.8 && mouseY < windowHeight * 0.9){
      if(mouseX < windowWidth / 2 - 40 && mouseX > windowWidth / 2 - 80){
        gm = 10;
      }
      else if (cus2_selected_color < 9 && cus2_selected_bgs < 9 && mouseX > windowWidth / 2 + 20 && mouseX < windowWidth / 2 + 60) {
        gm++;
        recent_frame = frameCount;
      }
    }
  }
  // 게임 상태가 13일 때 (엔딩 화면)
  else if (gm == 13) {
    gm++;
    recent_frame = frameCount;
    card_sound.play();
  }
  // 14
  else if (gm == 14) {
    if (mouseX > windowWidth / 2 - cus1_frame[0][0].width * 1.3 / 2 && mouseX < windowWidth / 2 + cus1_frame[0][0].width * 1.3 / 2 && mouseY > windowHeight / 2 - 100 - cus1_frame[0][0].height * 1.3 / 2 && mouseY < windowHeight / 2 - 100 + cus1_frame[0][0].height * 1.3 / 2) {
      backward += 1;
      recent_frame = frameCount;
      card_sound.play();
  
      // 2초 후에 QR 설명 이미지 표시
    
    } else if (mouseX > windowWidth * 0.8 && mouseX < windowWidth * 0.8 + Reset_img.width && mouseY > windowHeight * 0.88 && mouseY < windowHeight * 0.88 + Reset_img.height) {
      hideQRCode();
      resetGame();
    }
  }
}


// function for game1
function determineWinner() {
  if (selectedIndex === -1) return;

  let result = "";

  // 게임 규칙에 맞게 승패 결정
  if (selectedIndex === currentImageIndex) {
    result = "Draw";  // 비김
    miniGame1Draw.play();   
  } else if (
    (selectedIndex === 0 && currentImageIndex === 2) || // 보 > 바위
    (selectedIndex === 1 && currentImageIndex === 0) || // 가위 > 보
    (selectedIndex === 2 && currentImageIndex === 1)    // 바위 > 가위
  ) {
    result = "Win";  // 승리
    miniGame1Win.play(); 
  } else {
    result = "Lose"; // 패배
    miniGame1Lose.play(); 
  }

  gameResult = result;

  // 결과 PNG 표시 준비
  showResultGif = true;
  resultGifStartTime = millis();

  // 게임 결과에 맞는 이미지 설정
  if (result === "Win") {
    gameResultImage = { image: resultImages.Win, width: 960, height: 540 };
  } else if (result === "Lose") {
    gameResultImage = { image: resultImages.Lose, width: 960, height: 540 };
  } else {
    gameResultImage = { image: resultImages.Draw, width: 960, height: 540 };
  }

  // 선택된 이미지 표시 (결과에 맞게)
  
}

//function for game3
function initializeObjects() {
  mini3_objects = [];
  for (let i = 0; i < 9; i++) { // 공의 개수를 10개로 증가시킴
    let randomSpeed = random(5, 10); // 속도를 빠르게 조정
    let startX = random(380, 550); // 고정된 x 값
    let startY = random(300, 350); // 고정된 y 값
    mini3_objects.push(new MovingObject(mini3_balls[i % mini3_balls.length], startY, randomSpeed, startX)); // mini3_balls 배열의 길이를 초과하지 않도록 설정
    mini3_objects.push(new MovingObject(mini3_halfBalls[i % mini3_halfBalls.length], startY, randomSpeed, startX)); // mini3_halfBalls 배열의 길이를 초과하지 않도록 설정
  }
}

//function for game4

function keyPressed() {
  if (key === ' ' && !mini4_timerRunning && !mini4_countdownFinished) {
    mini4_explanationImage = null;
    mini4_countdown = 7;
    mini4_timerRunning = true;
    mini4_countdownFinished = false;
    mini4_pressCount = 0;

    for (let i = 0; i < 13; i++) {
      let heartImage = mini4_heartImages[i % mini4_heartImages.length];
      let startPos = floor(random(3));
      let x, y, speedX, speedY;

      if (startPos === 0) {
        x = 170 + random(-50, 30);
        y = 400 + random(-50, 50);
        speedX = random(10, 20);
        speedY = random(-6, -14);
      } else if (startPos === 1) {
        x = 480 + random(-50, 30);
        y = 400 + random(-50, 50);
        speedX = random(10, 20);
        speedY = random(-6, -14);
      } else {
        x = 790 + random(-50, 30);
        y = 400 + random(-50, 50);
        speedX = random(-20, -10);
        speedY = random(-6, -14);
      }

      mini4_hearts.push({
        image: heartImage,
        x: x,
        y: y,
        size: 100,
        speedX: speedX,
        speedY: speedY
      });
    }
    if (!sMiniGame4Heart.isPlaying()) {
      sMiniGame4Heart.play(); // 소리가 재생되지 않았다면 소리 재생
    }
  }

  if (key === ' ' && mini4_timerRunning && !mini4_countdownFinished) {
    mini4_currentRabbitImage = (mini4_currentRabbitImage === mini4_rabbit1Image) ? mini4_rabbit2Image : mini4_rabbit1Image;
    mini4_pressCount++;

    if (!sMiniGame4Heart.isPlaying()) {
      sMiniGame4Heart.play(); // 소리가 재생되지 않았다면 소리 재생
    }
  }
}

//QR


const dataURLtoFile = (dataurl, fileName) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
};

async function captureAndUpload() {
  let currentFrameImage = get(386,29,187,282); 
  let pg = createGraphics(187*1.5, 282*1.5); 
    pg.image(currentFrameImage,0,0,187*1.5, 282*1.5)
    let extendeimage = pg.get()
    let base64Image = extendeimage.canvas.toDataURL();

  //const canvas = document.querySelector('canvas');  // 캔버스에서 이미지 데이터 가져오기
  //const dataUrl = canvas.toDataURL('image/jpeg');  // 이미지 데이터 URL로 변환

  const imageName = `public/image_${Date.now()}.jpg`;  // 이미지 파일 이름 (현재 시간 기준)
  const imageFile = dataURLtoFile(base64Image, imageName)
  // Supabase에 이미지 업로드
  const { data, error } = await supabase.storage
      .from('test')  // 'test' 버킷에 업로드
      .upload(imageName, imageFile, {  // Base64 데이터를 업로드
          contentType: 'image/jpeg',
          upsert: true
      });

  // 업로드 오류 처리
  if (error) {
      console.error('이미지 업로드 실패:', error.message);
      alert('이미지 업로드 실패: ' + error.message);  // 오류 메시지 사용자에게 표시
      return;
  }

  console.log('이미지 업로드 성공:', data);  // 업로드 성공 시 로그

  // 업로드된 이미지 URL 얻기
  
  const imageUrl = `https://macohdyxynalgylmoujt.supabase.co/storage/v1/object/public/test/${imageName}`;
  console.log('업로드된 이미지 URL:', imageUrl);


  // QR 코드 생성
  generateQRCode(imageUrl);


  qrexplainVisible = true
}

// QR 코드 생성 함수
function generateQRCode(url) {
  const qrCodeDiv = document.querySelector('#qr-code');
  qrCodeDiv.innerHTML = '';  // 기존 QR 코드 제거

  qrCodeDiv.style.display = 'block';

  qrCodeDiv.style.position = 'absolute';  // 절대 위치 설정
  qrCodeDiv.style.top = `${windowHeight+100}px`;         // 세로 중앙으로 위치 설정
  qrCodeDiv.style.left = `${windowWidth/2}px`;;           // 가로 중앙으로 위치 설정
  qrCodeDiv.style.transform = 'translate(-50%, -50%)';  // 정확한 중앙 정렬

  new QRCode(qrCodeDiv, {
    text: url,
    width: 100,   // QR 코드 너비
    height: 100,   // QR 코드 높이
    correctLevel: QRCode.CorrectLevel.H,  // 오류 수정 수준 설정 (필요시)
});

// 생성된 QR 코드의 스타일을 CSS로 변경
const qrCodeSVG = qrCodeDiv.querySelector('svg');
  if (qrCodeSVG) {
      const paths = qrCodeSVG.querySelectorAll('path');
      paths.forEach(path => {
          path.setAttribute('fill', '#FFFFFF');  // QR 코드 바코드 색을 흰색으로 설정
      });
      qrCodeSVG.style.backgroundColor = 'transparent'; // 배경을 투명으로 설정
  }
}
function hideQRCode() {
  const qrCodeDiv = document.querySelector('#qr-code');
  qrCodeDiv.style.display = 'none';  // QR 코드가 담긴 div의 display를 'none'으로 설정하여 숨깁니다.
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
