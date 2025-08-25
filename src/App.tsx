import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  CheckCircle,
  Heart,
  Users,
  Shield,
  Star,
  Phone,
  GraduationCap,
  User,
  FileCheck,
  Clock,
  ChefHat,
  Dumbbell,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import React from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import ABrightFacedVietnameseBrideAndKoreanGroomDrinkingSojuWhileLookingAtEachOtherAffectionatelyAtAFoodStallAndASceneFromAnotherTableLookingAtTheCouple from "./imports/ABrightFacedVietnameseBrideAndKoreanGroomDrinkingSojuWhileLookingAtEachOtherAffectionatelyAtAFoodStallAndASceneFromAnotherTableLookingAtTheCouple";
import educationImage from "figma:asset/564876bca063e0fcf64f1902aaf701243177c850.png";
import expertTeamImage from "figma:asset/564876bca063e0fcf64f1902aaf701243177c850.png";
import verificationImage from "figma:asset/3566771271282ec63e2bc615ee93e70bfc7e0ff9.png";
import hobbyImage from "figma:asset/fbec1db1daa0219cd1f9073581675b7c50dc0dfa.png";
import Triple from "./imports/Triple";
import KoreanClassroom from "./imports/ABrightFacedVietnameseBrideAndKoreanGroomDrinkingSojuWhileLookingAtEachOtherAffectionatelyAtAFoodStallAndASceneFromAnotherTableLookingAtTheCouple-5-302";
import NewEducationImage from "./imports/ABrightFacedVietnameseBrideAndKoreanGroomDrinkingSojuWhileLookingAtEachOtherAffectionatelyAtAFoodStallAndASceneFromAnotherTableLookingAtTheCouple-6-378";
import HeaderNavigationBarImmersiveWithImageCarousel from "./imports/HeaderNavigationBarImmersiveWithImageCarousel";
import consultationImage from "figma:asset/b9c22303d016de8e1f776e19f7113e352465c477.png";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-lg font-medium text-gray-900">
              베트남 국제결혼 사관학교
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              소개
            </a>
            <a
              href="#experts"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              전문가팀
            </a>
            <a
              href="#verification"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              검증시스템
            </a>
            <a
              href="#education"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              교육과정
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              연락처
            </a>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="px-6 py-4 space-y-4">
              <a
                href="#about"
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm py-2"
                onClick={closeMobileMenu}
              >
                소개
              </a>
              <a
                href="#experts"
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm py-2"
                onClick={closeMobileMenu}
              >
                전문가팀
              </a>
              <a
                href="#verification"
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm py-2"
                onClick={closeMobileMenu}
              >
                검증시스템
              </a>
              <a
                href="#education"
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm py-2"
                onClick={closeMobileMenu}
              >
                교육과정
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm py-2"
                onClick={closeMobileMenu}
              >
                연락처
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content with top padding to account for fixed header */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                  베트남 국제결혼
                  <br />
                  사관학교
                </h2>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                  베트남 국제결혼에 관심은 있지만 걱정으로
                  망설여지시나요?
                  <br />
                  국결 사관학교가 신뢰할 수 있는 새로운 대안을
                  제시합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://pf.kakao.com/_HLxhxmn/chat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-gray-900 hover:bg-gray-800 text-white px-8"
                    >
                      상담 신청하기
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8"
                  >
                    자세히 알아보기
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <ABrightFacedVietnameseBrideAndKoreanGroomDrinkingSojuWhileLookingAtEachOtherAffectionatelyAtAFoodStallAndASceneFromAnotherTableLookingAtTheCouple />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="about" className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                무엇을 하는가
              </h3>
              <p className="text-lg text-gray-600">
                먼저 교육하고 검증합니다
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-3">
                      철저한 교육과 검증
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      국결 사관학교는 국제결혼을 하고자 하는
                      신부를 미리 선발하고, 철저한 교육과
                      검증과정을 통과한 진실한 신부만
                      소개해드립니다.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                        <span className="text-gray-700">
                          사전 선발 및 교육
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                        <span className="text-gray-700">
                          엄격한 검증 과정
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                        <span className="text-gray-700">
                          진실한 신부만 소개
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <NewEducationImage />
                </div>
              </div>
            </div>

            {/* Korean System Emphasis */}
            <div className="bg-white rounded-lg p-12 text-center border border-gray-100">
              <h4 className="text-2xl font-light text-gray-900 mb-4">
                교육과 검증 과정은 철저히
                <br />
                한국인 관리자에 의해 한국시스템으로 진행됩니다
              </h4>
              <p className="text-gray-600">
                체계적이고 신뢰할 수 있는 한국식 관리 시스템으로
                모든 과정을 운영합니다
              </p>
            </div>
          </div>
        </section>

        {/* Expert Team Section */}
        <section id="experts" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">
                  베트남 전문가들이 만들어갑니다
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  검증된 전문가 팀이 모든 과정을 책임집니다
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-medium mb-2">
                      베트남 전문 관리실장
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      베트남 20년 거주
                    </p>
                    <p className="text-xs text-gray-500">
                      前 호치민 여성한인회장
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <MessageCircle className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-medium mb-2">
                      완벽한 통역사
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      베트남어-한국어
                    </p>
                    <p className="text-xs text-gray-500">
                      토픽 5급 • 한국 유학
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-medium mb-2">
                      한국어 선생님
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      한국어(한국문화) 직강
                    </p>
                    <p className="text-xs text-gray-500">
                      한국어 교원자격증
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <FileCheck className="w-6 h-6 text-gray-600" />
                    </div>
                    <h4 className="font-medium mb-2">
                      행정전문가(한국행정사)
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      행정법률 관련 책임관리(한국, 베트남)
                    </p>
                    <p className="text-xs text-gray-500">
                      신분서류 • 혼인신고 • 결혼비자
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <ImageWithFallback
                  src={expertTeamImage}
                  alt="전문가 상담 장면"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Verification System Section */}
        <section
          id="verification"
          className="py-24 px-6 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="relative">
                <ImageWithFallback
                  src={verificationImage}
                  alt="검증 상담 과정"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">
                  교차다면평가 검증시스템
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  자체 개발한 신부 평가검증시스템으로 진실한
                  신부를 선별합니다
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100">
                    <Heart className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">
                        혼인의 진정성
                      </h4>
                      <p className="text-sm text-gray-600">
                        결혼에 대한 진실한 마음과 의지를 평가
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100">
                    <Users className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">
                        한국 결혼생활 적합도
                      </h4>
                      <p className="text-sm text-gray-600">
                        한국 문화와 생활 방식 적응 능력 평가
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100">
                    <Star className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">
                        다차원 성격분석
                      </h4>
                      <p className="text-sm text-gray-600">
                        심리학적 접근을 통한 종합 분석
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-12 text-center border border-gray-100">
              <h4 className="text-xl font-light text-gray-900">
                "결혼은 끝이 아니라 시작입니다. 검증된 신부로
                시작하세요"
              </h4>
            </div>
          </div>
        </section>

        {/* Education Program Section */}
        <section id="education" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                체계적인 교육 프로그램
              </h3>
              <p className="text-lg text-gray-600">
                국제결혼은 서로 다른 국적, 언어, 문화를 가진
                사람이 결혼하는 것<br />
                언어와 문화의 이해가 필수입니다
              </p>
            </div>

            {/* Detailed Education Sections */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Korean Language Education */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-gray-600" />
                  <h4 className="font-medium">
                    한국어 기초 회화 교육
                  </h4>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>자체교육</span>
                    </div>
                    <span className="font-medium">160시간</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>세종어학당</span>
                    </div>
                    <span className="font-medium">120시간</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    * 결혼비자 신청요건 충족
                  </p>
                </div>

                <div className="w-full aspect-video rounded-lg overflow-hidden">
                  <KoreanClassroom />
                </div>
              </div>

              {/* Marriage Life Education */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="w-6 h-6 text-gray-600" />
                  <h4 className="font-medium">결혼생활특강</h4>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                    <span className="text-sm">
                      한국의 가족문화와 결혼문화의 이해
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                    <span className="text-sm">
                      한국가정의 부부 역할 이해
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                    <span className="text-sm">
                      문화차이의 갈등예방
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                    <span className="text-sm">
                      부부 소통 방법 및 롤플레이 연출
                    </span>
                  </div>
                </div>

                <div className="w-full aspect-video rounded-lg overflow-hidden">
                  <HeaderNavigationBarImmersiveWithImageCarousel />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Cooking Education */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <ChefHat className="w-6 h-6 text-gray-600" />
                  <h4 className="font-medium">
                    한국 음식 기본 및 실습
                  </h4>
                </div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 mb-4">
                    <span className="text-3xl font-light">
                      50+
                    </span>
                    <span className="text-gray-600">
                      가지 기본 음식
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    실전 강습을 통한 한국 요리 마스터
                  </p>
                </div>

                <div className="w-full aspect-video rounded-lg overflow-hidden">
                  <Triple />
                </div>
              </div>

              {/* Hobby & Beauty */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <Dumbbell className="w-6 h-6 text-gray-600" />
                  <h4 className="font-medium">
                    취미 미용 실습
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded">
                    <Dumbbell className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                    <p className="text-sm">요가 • 배드민턴</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded">
                    <Star className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                    <p className="text-sm">메이크업 • 헤어</p>
                  </div>
                </div>

                <ImageWithFallback
                  src={hobbyImage}
                  alt="요가 및 운동 수업"
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Selection Criteria Section */}
        <section
          id="criteria"
          className="py-24 px-6 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                엄격한 선발 기준
              </h3>
              <p className="text-lg text-gray-600">
                아무나 국결 사관학교의 신부가 될 수 없습니다
                <br />
                최상위의 조건을 모두 통과한 신부만 입교가
                가능합니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
                <Star className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h4 className="font-medium mb-2">외모</h4>
                <p className="text-sm text-gray-600">
                  최상위 외모 조건
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
                <Heart className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h4 className="font-medium mb-2">성격</h4>
                <p className="text-sm text-gray-600">
                  훌륭한 성격과 인성
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
                <Users className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h4 className="font-medium mb-2">인성</h4>
                <p className="text-sm text-gray-600">
                  검증된 인격과 품성
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
                <GraduationCap className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h4 className="font-medium mb-2">교육수준</h4>
                <p className="text-sm text-gray-600">
                  우수한 교육 배경
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg border border-gray-100">
                <Shield className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <h4 className="font-medium mb-2">가정환경</h4>
                <p className="text-sm text-gray-600">
                  건전한 가정 배경
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                선발 기준 자세히 보기
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">
                  연락처
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  궁금한 사항이 있으시면 언제든 연락주세요
                </p>

                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                    <Phone className="w-8 h-8 text-gray-600" />
                    <div>
                      <h4 className="font-medium mb-1">
                        전화 상담
                      </h4>
                      <p className="text-lg font-medium mb-1">
                        (84) 035 817 6113 (VN)
                      </p>
                      <p className="text-lg font-medium mb-1">
                        (82) 010-4129-7856 (KR)
                      </p>
                      <p className="text-sm text-gray-600">
                        언제든 상담 가능
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                    <MessageCircle className="w-8 h-8 text-gray-600" />
                    <div>
                      <h4 className="font-medium mb-1">
                        카카오톡
                      </h4>
                      <p className="text-lg font-medium mb-1">
                        PNP114
                      </p>
                      <p className="text-sm text-gray-600">
                        카카오톡 ID
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
                    <MessageCircle className="w-8 h-8 text-gray-600" />
                    <div>
                      <h4 className="font-medium mb-1">
                        카카오 채널
                      </h4>
                      <p className="text-lg font-medium mb-1">
                        PNP행정법률사무소
                      </p>
                      <p className="text-sm text-gray-600">
                        채널 추가
                      </p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://pf.kakao.com/_HLxhxmn/chat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    지금 상담 신청하기
                  </Button>
                </a>
              </div>

              <div className="relative">
                <ImageWithFallback
                  src={consultationImage}
                  alt="상담 미팅"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-gray-900" />
            </div>
            <h4 className="text-lg font-medium">
              베트남 국제결혼 사관학교
            </h4>
          </div>
          <p className="text-gray-400 mb-6">
            신뢰할 수 있는 국제결혼의 새로운 기준을 제시합니다
          </p>
          <div className="flex justify-center space-x-6 mb-6 text-sm text-gray-400">
            <span>
              전화: (84) 035 817 6113 (VN) / (82) 010-4129-7856
              (KR)
            </span>
            <span>카카오톡: PNP114</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 베트남 국제결혼 사관학교. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}