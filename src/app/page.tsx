'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, Clock, Target, Brain, TrendingUp, CheckCircle } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 md:py-16">
        {/* 1. Hero Section */}
        <div className="text-center mb-4 sm:mb-8 md:mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 animate-fade-in">
            🧠 나의 진짜 오피스 페르소나 찾기
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-100 max-w-2xl mx-auto font-medium px-1 sm:px-2">
            MBTI로는 부족했던 당신의 성향, Big5 기반으로 찾아보세요.
          </p>
        </div>

        {/* Main CTA */}
        <div className="flex justify-center mb-4 sm:mb-8 md:mb-16">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-600 text-white px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-2 sm:py-3 md:py-4 lg:py-6 text-xs sm:text-sm md:text-base lg:text-xl rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link href="/test">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-1 sm:mr-2 md:mr-3" />
              Big5 기반 오피스 페르소나 테스트 하기
            </Link>
          </Button>
        </div>

        {/* 2. Why This Test is Special */}
        <div className="max-w-4xl mx-auto mb-4 sm:mb-8 md:mb-16">
          <div className="text-center mb-3 sm:mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
              🏢 이 테스트가 특별한 이유
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-purple-100 font-medium">
              바쁜 직장인을 위한 맞춤형 Big5 성격 분석
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            {/* Big5 */}
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-md border border-purple-500/30">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
                  <Brain className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-purple-300">Big5 기반</h3>
              </div>
              <p className="text-purple-100 text-xs sm:text-sm font-medium">전세계 심리학계가 인정한 성격 이론</p>
            </div>
            
            {/* 20문항 */}
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-md border border-blue-500/30">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-blue-300">단 5분 컷, 20문항</h3>
              </div>
              <p className="text-blue-100 text-xs sm:text-sm font-medium">현실적인 직장 상황 중심 질문</p>
            </div>
            
            {/* 12유형 */}
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-md border border-cyan-500/30">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-cyan-300">32가지 캐릭터</h3>
              </div>
              <p className="text-cyan-100 text-xs sm:text-sm font-medium">당신만의 직장인 페르소나 발견</p>
            </div>
          </div>
        </div>

        {/* 3. Big5 성격 진단 소개 */}
        <div className="max-w-4xl mx-auto mb-4 sm:mb-8 md:mb-16">
          <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm border border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl md:text-2xl text-center text-white mb-3 sm:mb-4 md:mb-6">
                Big5 성격 진단이란?
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg text-center text-purple-100 leading-relaxed font-medium">
                Big5는 아래 5가지 특성을 측정하여 개인의 고유한 기질과 성향 조합을 보여줍니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <div className="group p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105 border border-purple-500/30">
                  <h3 className="font-bold text-purple-300 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">💡 Openness (개방성)</h3>
                  <p className="text-purple-100 text-xs sm:text-sm leading-relaxed font-medium">
                    <strong>새로운 경험에 대한 개방적 자세.</strong>
                  </p>
                  <p className="text-purple-100 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed font-medium">
                    호기심이 많고 상상력이 풍부해 창의적으로 문제를 해결.
                  </p>
                  <div className="mt-2 sm:mt-3 text-xs text-purple-400">
                    높음: 호기심, 창의적 | 낮음: 현실적, 실용적
                  </div>
                </div>

                <div className="group p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 transform hover:scale-105 border border-blue-500/30">
                  <h3 className="font-bold text-blue-300 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">✅ Conscientiousness (성실성)</h3>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed font-medium">
                    <strong>계획성과 자기 통제 능력.</strong>
                  </p>
                  <p className="text-blue-100 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed font-medium">
                    책임감이 강하고 꼼꼼하며, 목표 달성을 위해 꾸준히 노력.
                  </p>
                  <div className="mt-2 sm:mt-3 text-xs text-blue-400">
                    높음: 체계적, 신중함 | 낮음: 자유분방, 느긋함
                  </div>
                </div>

                <div className="group p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 hover:from-cyan-500/30 hover:to-cyan-600/30 transition-all duration-300 transform hover:scale-105 border border-cyan-500/30">
                 <h3 className="font-bold text-cyan-300 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base"> 🤹 Extraversion (외향성)</h3>
                  <p className="text-cyan-100 text-xs sm:text-sm leading-relaxed font-medium">
                    <strong>사교적이고 활동적인 성향.</strong>
                  </p>
                  <p className="text-cyan-100 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed font-medium">
                    사람들과 어울리며 에너지가 넘쳐 팀워크를 중시하는 경향.
                  </p>
                  <div className="mt-2 sm:mt-3 text-xs text-cyan-400">
                    높음: 사교적, 활발함 | 낮음: 조용함, 차분함
                  </div>
                </div>

                <div className="group p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 transform hover:scale-105 border border-purple-500/30">
                  <h3 className="font-bold text-purple-300 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">😇 Agreeableness (친화성)</h3>
                  <p className="text-purple-100 text-xs sm:text-sm leading-relaxed font-medium">
                     <strong>타인에 대한 배려와 협동심.</strong>
                  </p>
                  <p className="text-purple-100 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed font-medium">
                    온화하고 이타적이며, 팀 내 갈등을 중재하고 화합을 이끔
                  </p>
                  <div className="mt-2 sm:mt-3 text-xs text-purple-400">
                    높음: 다정함, 친절함 | 낮음: 냉정함, 냉소적
                  </div>
                </div>

                <div className="group p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 transform hover:scale-105 border border-blue-500/30">
                  <h3 className="font-bold text-blue-300 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">😰 Neuroticism (신경증)</h3>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed font-medium">
                    <strong>스트레스 민감성과 정서적 안정성.</strong>
                  </p>
                  <p className="text-blue-100 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed font-medium">
                    감정 기복이 있지만 위기 상황에 대한 응기응변에 능함.
                  </p>
                  <div className="mt-2 sm:mt-3 text-xs text-blue-400">
                    높음: 예민함, 민감함 | 낮음: 무던함, 안정적
                  </div>
                </div>

                <div className="group p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 transform hover:scale-105 border border-purple-500/30">
                  <h3 className="font-bold text-purple-300 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">🌊 OCEAN, Big5의 별칭 </h3>
                  <p className="text-purple-100 text-xs sm:text-sm leading-relaxed font-medium">
                    Big5는 각 특성의 앞글자를 따서 <span className="font-semibold text-cyan-300">OCEAN</span>이라고도 불려요.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4. MBTI vs Big5 */}
        <div className="max-w-4xl mx-auto mb-4 sm:mb-8 md:mb-16">
          <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm border border-purple-500/20">
            <CardHeader className="text-center">
              <CardTitle className="text-lg sm:text-xl md:text-2xl text-center text-white mb-3 sm:mb-4 md:mb-6">
                🤔 Big5는 MBTI와 어떤게 다른가요?
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg text-center text-purple-100 leading-relaxed font-medium">
                MBTI는 16가지로 유형으로 딱 잘라서 구분하지만,<br/>
                BIG5는 각각의 성향을 연속적인 스펙트럼으로 측정해요.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl text-center border border-purple-500/30">
                <p className="text-purple-100 font-medium mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                  <strong>현실적인 직장 상황 기반 질문</strong>으로 당신을 알아보세요.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-6 mb-3 sm:mb-4 md:mb-6">
                  {/* 캐릭터 1 메시지 창 */}
                  <div className="flex flex-col items-center">
                    <div className="border-2 border-cyan-400 rounded-xl px-2 sm:px-3 md:px-5 py-1 sm:py-2 md:py-3 shadow text-xs sm:text-sm font-semibold text-cyan-300 mb-1 sm:mb-2 min-w-[70px] sm:min-w-[80px] md:min-w-[90px] text-center bg-transparent">
                      🧸 조용한 칼퇴러
                    </div>
                  </div>
                  {/* 캐릭터 2 메시지 창 */}
                  <div className="flex flex-col items-center">
                    <div className="border-2 border-cyan-400 rounded-xl px-2 sm:px-3 md:px-5 py-1 sm:py-2 md:py-3 shadow text-xs sm:text-sm font-semibold text-cyan-300 mb-1 sm:mb-2 min-w-[70px] sm:min-w-[80px] md:min-w-[90px] text-center bg-transparent">
                      ☀️ 핵인싸 리더
                    </div>
                  </div>
                  {/* 캐릭터 3 메시지 창 */}
                  <div className="flex flex-col items-center">
                    <div className="border-2 border-cyan-400 rounded-xl px-2 sm:px-3 md:px-5 py-1 sm:py-2 md:py-3 shadow text-xs sm:text-sm font-semibold text-cyan-300 mb-1 sm:mb-2 min-w-[70px] sm:min-w-[80px] md:min-w-[90px] text-center bg-transparent">
                      🧐 꼼꼼한 비평가
                    </div>
                  </div>
                </div>
                
                <p className="text-purple-200 font-medium mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                  당신은 어떤 오피스 페르소나인가요?!
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-600 text-white px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-4 lg:py-6 text-xs sm:text-sm md:text-base lg:text-xl rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/test">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-1 sm:mr-2 md:mr-3" />
                    이제 당신의 진짜 오피스 페르소나를 만나보세요!
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
