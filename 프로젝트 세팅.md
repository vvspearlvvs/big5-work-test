# 🧠 Big5 직장인 성격 유형 테스트

MBTI로는 부족했던 당신의 진짜 성향, Big5 기반으로 찾아보세요! 현실적인 직장 상황을 바탕으로 한 20문항 테스트로 당신만의 오피스 페르소나를 발견하세요.

## ✨ 주요 기능

### 🎯 **Big5 기반 과학적 분석**
- 전세계 심리학계가 인정한 Big5 성격 이론 적용
- 개방성, 성실성, 외향성, 친화성, 신경성 5가지 특성 측정
- 유사한 big5 성격검사 : 

### 🏢 **현실적인 직장 상황 기반**
- 20문항으로 구성된 간단한 테스트 (특성별 4가지 질문)
- 실제 직장에서 마주치는 상황들을 반영
- 5분 내 완료 가능한 효율적인 설계

### 🎭 **32가지 오피스 캐릭터**
- 5가지 특성별 높음/낮음에 따라 총 32가지 오피스 캐릭터 설정.
- 🐢 안전지대 집착러
- 🚀 번뜩이는 돌격대
- 🧸 조용한 칼퇴러
- ☀️ 핵인싸 리더
- 👻 존재감 소멸러
- 🌩️ 프로 걱정러
- 🦸‍♀️ 든든한 도우미
- 🧩 논리적 설계자
- 🧘‍♀️ 평화로운 탐구자
- 💡 몽상가 예민러
- 🏃‍♀️ 자유로운 방랑자
- ✨ 친화력 만렙
- 🧐 꼼꼼한 비평가
- 🌪️ 감정의 소용돌이
- 🗣️ 시끌벅적 인싸
- 🚨 불안한 추진러
- 🚀 무대포 돌격대장
- 🧐 완벽주의 전략가
- 🌐 외로운 관찰자
- 🕊️ 평화로운 혁신가
- ⚡ 충동적 감성가
- 🤝 공감하는 리더
- 🔏 소심한 원칙주의자
- 😅 공감형 예민 보스
- 💪 책임감 만렙
- 🤝 평화로운 실세
- 🥳 파티 플래너
- 🤖 냉철한 분석가
- 🌿 조용한 사색가
- 🎭 표정 관리의 달인
- 🌟 에너자이저
- 😴 만년 피곤러

### 📱 **반응형 디자인**
- 393x852 모바일 환경 최적화
- PC, 태블릿, 모바일 모든 기기 지원
- Google Gemini 스타일의 신비로운 컬러 팔레트
- ResponsiveApp을 통한 다양한 기기별 테스트
  - iPhone, Samsung, iPad 등 다양한 디바이스 시뮬레이션
  - 실제 사용자 경험과 동일한 환경에서 테스트
  - 레이아웃 깨짐, 버튼 잘림, 텍스트 오버플로우 등 문제 사전 검증

### 🔗 **공유 기능**
- Web Share API를 통한 네이티브 공유
- 클립보드 복사 기능
- 바이럴 마케팅을 위한 친구 추천 시스템

**공유 텍스트 예시:**
```
🧠 Big5 직장인 성격 유형 테스트 결과

🎭 나의 오피스 캐릭터: 🧸 조용한 칼퇴러
맡은 일만 딱! 시간 관리 철저한 효율 추구형

내 주요 성향: 성실성 (75%)

📊 전체 결과
개방성: 25%
성실성: 75%
외향성: 30%
친화성: 45%
신경성: 20%

지금 테스트해보세요! 👉 https://big5-work-test.vercel.app
```

## 🛠️ 기술 스택

이 프로젝트는 [`EasyNext`](https://github.com/easynext/easynext)를 사용해 생성된 [Next.js](https://nextjs.org) 프로젝트입니다. 
프로젝트 세팅관련 문서는 [`ProjectSetting.md`](https://github.com/vvspearlvvs/big5-work-test/blob/main/ProjectSetting.md)를 참고해주세요! 

### Frontend
- **[Next.js 14](https://nextjs.org)** - React 기반 풀스택 프레임워크
- **[React 18](https://react.dev)** - 사용자 인터페이스 라이브러리
- **[TypeScript](https://www.typescriptlang.org)** - 타입 안전성
- **[Tailwind CSS](https://tailwindcss.com)** - 유틸리티 퍼스트 CSS 프레임워크

### UI/UX
- **[Shadcn UI](https://ui.shadcn.com)** - 재사용 가능한 UI 컴포넌트
- **[Lucide React](https://lucide.dev)** - 아이콘 라이브러리
- **[React Hook Form](https://react-hook-form.com)** - 폼 상태 관리

### 개발 도구
- **[ESLint](https://eslint.org)** - 코드 품질 관리
- **[Prettier](https://prettier.io)** - 코드 포맷팅


## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Purple-600 → Blue-600 → Cyan-500 (그라데이션)
- **Background**: Purple-900 → Blue-900 → Cyan-900
- **Text**: White, Purple-100, Purple-200
- **Accent**: Cyan-300, Blue-300, Purple-300

### 반응형 브레이크포인트
- **Mobile**: 393x852 최적화
- **sm**: 640px 이상
- **md**: 768px 이상
- **lg**: 1024px 이상
- **xl**: 1280px 이상

### 컴포넌트 스타일
- **Glassmorphism**: `bg-white/10 backdrop-blur-sm`
- **Gradient**: `bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500`
- **Hover Effects**: `transform hover:scale-105`
- **Transitions**: `transition-all duration-300`

## 📊 Big5 성격 특성

### 🧠 개방성 (Openness)
- **높음**: 창의적이고 변화를 즐김
- **낮음**: 익숙하고 실용적인 것을 선호

### ✅ 성실성 (Conscientiousness)
- **높음**: 체계적이고 책임감이 강함
- **낮음**: 자유롭고 즉흥적

### 🗣️ 외향성 (Extraversion)
- **높음**: 활발하고 사교적
- **낮음**: 조용하고 내향적

### 🤝 친화성 (Agreeableness)
- **높음**: 친절하고 신뢰할 수 있음
- **낮음**: 직설적이고 경쟁적

### 😰 신경성 (Neuroticism)
- **높음**: 예민하고 스트레스에 민감
- **낮음**: 무던하고 감정적으로 안정적

## 📱 배포

### Vercel 배포
- [Vercel Deployments](https://vercel.com/jinjus-projects-2dee0798/big5-work-test/deployments)


### 환경 변수
```env
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### 참고
- [카카오 BIG5 성격검사](https://together.kakao.com/big-five) - 유사 서비스
- [Big5 성격 이론](https://en.wikipedia.org/wiki/Big_Five_personality_traits) - 과학적 기반
- [Google Gemini](https://gemini.google.com) - 디자인 영감
- [Shadcn UI](https://ui.shadcn.com) - UI 컴포넌트
- [Lucide](https://lucide.dev) - 아이콘

---