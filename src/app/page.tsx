'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, Clock, Target, Brain, TrendingUp, CheckCircle } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        {/* 1. Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            🧠 Big5 기반 직장인 유형 테스트
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          MBTI로는 부족했던 당신의 진짜 오피스 페르소나를 찾아보세요
          </p>
        </div>

        {/* Main CTA */}
        <div className="flex justify-center mb-16">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link href="/test">
              <ArrowRight className="w-6 h-6 mr-3" />
              바로 테스트 시작
            </Link>
          </Button>
        </div>

        {/* 2. Why This Test is Special */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                🏢 이 테스트가 특별한 이유
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                직장인을 위한 상황 중심 검사
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">직장 상황 기반 질문</h4>
                      <p className="text-gray-600 text-sm">'팀 회의 중 의견 충돌', '데드라인 압박' 같은 리얼한 상황</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">12가지 오피스 페르소나 캐릭터</h4>
                      <p className="text-gray-600 text-sm">보고 웃고, 생각하게 되는 공감형 유형 묘사</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Big5 스펙트럼 분석</h4>
                      <p className="text-gray-600 text-sm">나의 강점/약점은? 누구와 잘 맞을까? 어떻게 일해야 더 효율적일까?</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">5분 내외, 간단하고 몰입되는 구성</h4>
                      <p className="text-gray-600 text-sm">지루할 틈 없이, 직장인의 현실에 딱 맞는 질문만 골랐습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 3. Big5 성격 진단 소개 */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900 mb-6">
                Big5 성격 진단이란?
              </CardTitle>
              <CardDescription className="text-lg text-center text-gray-700 leading-relaxed">
                Big5는 아래 5가지 특성을 측정하여 개인의 고유한 기질과 성향 조합을 보여줍니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-bold text-purple-800 mb-3 text-base">Openness (개방성)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    새로운 경험과 아이디어에 대한 개방적 태도. 창의성, 호기심, 예술성을 포함합니다.
                  </p>
                  <div className="mt-3 text-xs text-purple-600">
                    높음: 유연함, 모험적 | 낮음: 완고함, 실용적
                  </div>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-bold text-blue-800 mb-3 text-base">Conscientiousness (성실성)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    계획성과 책임감, 자기 통제 능력. 조직화, 목표 지향성, 신중함을 포함합니다.
                  </p>
                  <div className="mt-3 text-xs text-blue-600">
                    높음: 체계적, 신중함 | 낮음: 자유분방, 느긋함
                  </div>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-bold text-green-800 mb-3 text-base">Extraversion (외향성)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    사교성과 활발한 사회적 상호작용. 에너지, 열정, 대화 능력을 포함합니다.
                  </p>
                  <div className="mt-3 text-xs text-green-600">
                    높음: 사교적, 활발함 | 낮음: 조용함, 차분함
                  </div>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-bold text-orange-800 mb-3 text-base">Agreeableness (친화성)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    협력적이고 신뢰할 수 있는 성향. 동정심, 협력, 신뢰성을 포함합니다.
                  </p>
                  <div className="mt-3 text-xs text-orange-600">
                    높음: 다정함, 친절함 | 낮음: 냉정함, 냉소적
                  </div>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-bold text-red-800 mb-3 text-base">Neuroticism (신경증)</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    스트레스와 부정적 감정에 대한 민감도. 불안, 우울, 감정적 불안정성을 포함합니다.
                  </p>
                  <div className="mt-3 text-xs text-red-600">
                    높음: 예민함 | 낮음: 무던함
                  </div>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 transform hover:scale-105">
                  <h3 className="font-bold text-gray-800 mb-3 text-base"> Big5의 별칭, OCEAN 🌊</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                   Big5는 각 특성의 앞글자를 따서 <span className="font-semibold text-indigo-600">OCEAN</span>이라고도 불립니다.
                   </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4. MBTI vs Big5 */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 mb-4">
                🤔 Big5는 MBTI와 어떤게 다른가요?
              </CardTitle>
              <CardDescription className="text-lg text-gray-700 leading-relaxed">
                MBTI는 16가지로 유형으로 딱 잘라서 구분하지만,<br/>
                BIG5는 각각의 성향을 연속적인 스펙트럼으로 측정해요.<br/><br/>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl text-center">
                  <p className="text-gray-700 font-medium mb-6 text-base">
                  이제는 단순히 'E냐 I냐','T냐 F냐'가 아니라, <br/>
                  당신의 세밀한 성격을 <strong>직장상황 기반 질문</strong>으로 확인해보세요.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/test">
                      <ArrowRight className="w-6 h-6 mr-3" />
                      지금 바로 테스트 시작하기
                    </Link>
                  </Button>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
      
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
