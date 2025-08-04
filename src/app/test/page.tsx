'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowLeft, Share2, RotateCcw } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import testData from '@/data.json';

type Answer = 'A' | 'B' | 'C';
type Trait = '개방성' | '성실성' | '외향성' | '친화성' | '신경성';

interface TestState {
  currentQuestion: number;
  answers: (Answer | null)[];
  isCompleted: boolean;
}

const traitColors: Record<Trait, string> = {
  '개방성': 'bg-purple-100 text-purple-800 border-purple-200',
  '성실성': 'bg-blue-100 text-blue-800 border-blue-200',
  '외향성': 'bg-green-100 text-green-800 border-green-200',
  '친화성': 'bg-orange-100 text-orange-800 border-orange-200',
  '신경성': 'bg-red-100 text-red-800 border-red-200',
};

const traitNames: Record<Trait, string> = {
  '개방성': '개방성',
  '성실성': '성실성',
  '외향성': '외향성',
  '친화성': '친화성',
  '신경성': '신경성',
};

export default function TestPage() {
  const [testState, setTestState] = useState<TestState>({
    currentQuestion: 0,
    answers: new Array(testData.questions.length).fill(null),
    isCompleted: false,
  });

  const currentQuestion = testData.questions[testState.currentQuestion];
  const currentTrait = testData.score_mapping.find(
    (mapping) => mapping.question_number === testState.currentQuestion + 1
  )?.trait as Trait;

  const progress = ((testState.currentQuestion + 1) / testData.questions.length) * 100;

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...testState.answers];
    newAnswers[testState.currentQuestion] = answer;
    
    setTestState({
      ...testState,
      answers: newAnswers,
    });
  };

  const handleNext = () => {
    if (testState.currentQuestion < testData.questions.length - 1) {
      setTestState({
        ...testState,
        currentQuestion: testState.currentQuestion + 1,
      });
    } else {
      // 테스트 완료
      setTestState({
        ...testState,
        isCompleted: true,
      });
    }
  };

  const handlePrevious = () => {
    if (testState.currentQuestion > 0) {
      setTestState({
        ...testState,
        currentQuestion: testState.currentQuestion - 1,
      });
    }
  };

  const canProceed = testState.answers[testState.currentQuestion] !== null;

  if (testState.isCompleted) {
    return <TestResult answers={testState.answers} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            직장인 성격 유형 테스트
          </h1>
          <p className="text-gray-600">
            {testState.currentQuestion + 1} / {testData.questions.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Progress value={progress} className="h-3 bg-gray-200" />
            <div className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out" 
                 style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm transform hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge className={`${traitColors[currentTrait]} border`}>
                  {traitNames[currentTrait]}
                </Badge>
                <span className="text-sm text-gray-500">
                  질문 {testState.currentQuestion + 1}
                </span>
              </div>
              <CardTitle className="text-xl text-gray-900 leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentQuestion.options.map((option, index) => {
                const answer = String.fromCharCode(65 + index) as Answer;
                const isSelected = testState.answers[testState.currentQuestion] === answer;
                
                return (
                  <Button
                    key={index}
                    variant={isSelected ? "default" : "outline"}
                    className={`w-full justify-start p-6 h-auto text-left transition-all duration-300 transform hover:scale-105 ${
                      isSelected 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                    onClick={() => handleAnswer(answer)}
                  >
                    <div className="flex items-center w-full">
                      <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'border-white bg-white' 
                          : 'border-gray-300 bg-white'
                      }`}>
                        {isSelected && <CheckCircle className="w-4 h-4 text-blue-600" />}
                      </div>
                      <span className="flex-1 leading-relaxed">{option}</span>
                    </div>
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={testState.currentQuestion === 0}
              className="flex items-center gap-2 hover:shadow-md transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
              이전
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {testState.currentQuestion === testData.questions.length - 1 ? '결과 보기' : '다음'}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

function TestResult({ answers }: { answers: (Answer | null)[] }) {
  const [scores, setScores] = useState<Record<Trait, number>>({
    '개방성': 0,
    '성실성': 0,
    '외향성': 0,
    '친화성': 0,
    '신경성': 0,
  });

  const [matchedCharacter, setMatchedCharacter] = useState<any>(null);

  useEffect(() => {
    const newScores: Record<Trait, number> = {
      '개방성': 0,
      '성실성': 0,
      '외향성': 0,
      '친화성': 0,
      '신경성': 0,
    };

    testData.score_mapping.forEach((mapping) => {
      const answer = answers[mapping.question_number - 1];
      if (answer) {
        const trait = mapping.trait as Trait;
        newScores[trait] += mapping.score[answer];
      }
    });

    setScores(newScores);

    // 캐릭터 매핑
    const character = findMatchingCharacter(newScores);
    setMatchedCharacter(character);
  }, [answers]);

  const findMatchingCharacter = (scores: Record<Trait, number>) => {
    const traitLevels: Record<string, string> = {
      '개방성': scores['개방성'] >= 4 ? '높음' : '낮음',
      '성실성': scores['성실성'] >= 4 ? '높음' : '낮음',
      '외향성': scores['외향성'] >= 4 ? '높음' : '낮음',
      '친화성': scores['친화성'] >= 4 ? '높음' : '낮음',
      '신경성': scores['신경성'] >= 4 ? '높음' : '낮음',
    };

    console.log('사용자 특성 레벨:', traitLevels);
    console.log('사용자 점수:', scores);

    // 가장 적합한 캐릭터 찾기
    let bestMatch = null;
    let bestScore = 0;

    testData.character_mapping.forEach((character, index) => {
      let matchScore = 0;
      let totalTraits = 0;

      console.log(`캐릭터 ${index + 1} (${character.name}) 특성:`, character.traits);

      Object.entries(character.traits).forEach(([trait, level]) => {
        // 모든 특성 고려
        if (traitLevels[trait]) {
          totalTraits++;
          if (traitLevels[trait] === level) {
            matchScore++;
          }
        }
      });

      const matchPercentage = matchScore / totalTraits;
      console.log(`캐릭터 ${index + 1} 매칭 점수: ${matchScore}/${totalTraits} (${(matchPercentage * 100).toFixed(1)}%)`);

      if (matchPercentage > bestScore) {
        bestScore = matchPercentage;
        bestMatch = character;
      }
    });

    console.log('최종 매칭 결과:', bestMatch ? bestMatch.name : '매칭 실패');
    return bestMatch;
  };

  const maxScore = 8; // 각 특성별 최대 점수
  const traits = Object.keys(scores) as Trait[];

  const generateShareText = () => {
    const topTrait = traits.reduce((a, b) => scores[a] > scores[b] ? a : b);
    const topScore = scores[topTrait];
    const percentage = Math.round((topScore / maxScore) * 100);
    
    let shareText = `🧠 Big5 직장인 성격 유형 테스트 결과\n\n`;
    
    if (matchedCharacter) {
      shareText += `🎭 나의 오피스 캐릭터: ${matchedCharacter.name}\n`;
      shareText += `${matchedCharacter.description}\n\n`;
    }
    
    shareText += `내 주요 성향: ${traitNames[topTrait]} (${percentage}%)\n\n`;
    shareText += `📊 전체 결과\n`;
    shareText += `${traits.map(trait => `${traitNames[trait]}: ${Math.round((scores[trait] / maxScore) * 100)}%`).join('\n')}\n\n`;
    shareText += `나도 테스트해보세요! 👉 https://big5-work-test.vercel.app`;
    
    return shareText;
  };

  const handleShare = async () => {
    const shareText = generateShareText();
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Big5 직장인 성격 유형 테스트 결과',
          text: shareText,
          url: 'https://big5-work-test.vercel.app'
        });
      } catch (error) {
        console.log('공유 취소됨');
      }
    } else {
      // 공유 API가 지원되지 않는 경우 클립보드에 복사
      await navigator.clipboard.writeText(shareText);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            BIG5 기반 직장인 유형 성격 진단 분석 결과
          </h1>
          <p className="text-gray-600">
            당신의 Big5 성격 진단 분석 결과입니다
          </p>
        </div>

        {/* Character Card */}
        {matchedCharacter && (
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{matchedCharacter.name.split(' ')[0]}</div>
              <CardTitle className="text-2xl text-gray-900 mb-4">
                {matchedCharacter.name}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {matchedCharacter.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {matchedCharacter.description.split('<br/>').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < matchedCharacter.description.split('<br/>').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>

                {/* Meme Section */}
                <div className="text-center">
                  <div className="flex flex-wrap justify-center gap-3">
                    {matchedCharacter.meme.map((meme: string, index: number) => (
                      <div key={index} className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-gray-800">
                        {meme}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personality Analysis - 각 trait별 개별 카드로 분리 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(scores).map(([trait, score], idx, arr) => {
                    const percentage = (score / 8) * 100;
                    return (
                      <Card
                        key={trait}
                        className="shadow-xl border-0 bg-white/80 backdrop-blur-sm flex flex-col h-full"
                      >
                        <CardHeader className="text-center pb-2">
                          <CardTitle className="text-lg text-gray-900 mb-1">
                            {getTraitName(trait)} 
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1 justify-between space-y-4">
                          <div className="text-center text-sm text-gray-600 mb-2">
                            {getTraitDescription(trait as Trait, percentage)}
                          </div>
                          
                          {/* Trait Spectrum */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                              <span>{getTraitLowLabel(trait as Trait)}</span>
                              <span>{getTraitHighLabel(trait as Trait)}</span>
                            </div>
                            <div className="relative">
                              <div className="h-3 bg-gray-200 rounded-full">
                                <div 
                                  className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-1000 ease-out ${getTraitGradient(trait as Trait)}`}
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                  
                  {/* 특성 분석 카드 - matchedCharacter가 있을 때만 표시 */}
                  {matchedCharacter && (
                    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm flex flex-col h-full">
                      <CardHeader className="text-center pb-2">
                        <CardTitle className="text-lg text-gray-900 mb-1">
                          결과 요약
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-1 justify-center space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(matchedCharacter.traits).map(([traitName, level]) => (
                            <div key={traitName} className="flex justify-center items-center space-x-2">
                              <span className="text-gray-700 font-medium text-sm">{traitName}:</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                level === '높음' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {level as string}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
        )}



        {/* Share Section */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-center text-gray-900">
              결과 공유하기
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              친구들과 함께 big5기반 직장인 성격 유형 테스트 결과를 공유해보세요!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={handleShare}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Share2 className="w-4 h-4 mr-2" />
                결과 공유하기
              </Button>
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
                className="border-gray-300 hover:bg-gray-50"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                다시하기
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

function getTraitDescription(trait: Trait, percentage: number): string {
  const descriptions: Record<Trait, { low: string; high: string }> = {
    '개방성': {
      low: '익숙하고 실용적인걸 선호합니다.',
      high: '창의적이고 변화를 즐깁니다.',
    },
    '성실성': {
      low: '자유롭고 즉흥적입니다.',
      high: '체계적이고 책임감이 강합니다.',
    },
    '외향성': {
      low: '조용하고 내향적입니다.',
      high: '활발하고 사교적입니다.',
    },
    '친화성': {
      low: '직설적이고 경쟁적인 성향입니다.',
      high: '친절하고 신뢰할 수 있는 성향입니다.',
    },
    '신경성': {
      low: '무던하고 감정적으로 안정적입니다.',
      high: '예민하고 스트레스에 민감합니다.',
    },
  };

  if (percentage < 50) return descriptions[trait].low;
  return descriptions[trait].high;
}

function getTraitLowLabel(trait: Trait): string {
  const labels: Record<Trait, string> = {
    '개방성': '익숙함, 실용적',
    '성실성': '자유분방, 느긋함',
    '외향성': '조용함, 차분함',
    '친화성': '냉정함, 냉소적',
    '신경성': '무던함',
  };
  return labels[trait];
}

function getTraitHighLabel(trait: Trait): string {
  const labels: Record<Trait, string> = {
    '개방성': '도전적, 모험적',
    '성실성': '체계적, 신중함',
    '외향성': '사교적, 활발함',
    '친화성': '다정함, 친절함',
    '신경성': '예민함',
  };
  return labels[trait];
}

function getTraitGradient(trait: Trait): string {
  const gradients: Record<Trait, string> = {
    '개방성': 'bg-gradient-to-r from-purple-500 to-purple-600',
    '성실성': 'bg-gradient-to-r from-blue-500 to-blue-600',
    '외향성': 'bg-gradient-to-r from-green-500 to-green-600',
    '친화성': 'bg-gradient-to-r from-orange-500 to-orange-600',
    '신경성': 'bg-gradient-to-r from-red-500 to-red-600',
  };
  return gradients[trait];
}

function getTraitName(trait: string): string {
  const traitNames: Record<string, string> = {
    'Openness': '개방성',
    'Conscientiousness': '성실성',
    'Extraversion': '외향성',
    'Agreeableness': '친화성',
    'Neuroticism': '신경성',
  };
  return traitNames[trait] || trait;
}

function getTraitEnglishName(trait: string): string {
  const englishNames: Record<string, string> = {
    '개방성': 'Openness',
    '성실성': 'Conscientiousness',
    '외향성': 'Extraversion',
    '친화성': 'Agreeableness',
    '신경성': 'Neuroticism',
  };
  return englishNames[trait] || trait;
} 

 