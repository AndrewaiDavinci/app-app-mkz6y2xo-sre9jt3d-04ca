import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 to-blue-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            혁신적인 기술로
            <span className="text-blue-700 block">미래를 만들어갑니다</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            최첨단 기술과 창의적인 솔루션으로 고객의 성공을 돕는 
            신뢰할 수 있는 파트너가 되겠습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 transition-all duration-200 flex items-center gap-2 group">
              서비스 알아보기
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 hover:text-white transition-all duration-200">
              포트폴리오 보기
            </button>
          </div>
        </div>

        {/* 통계 섹션 */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">500+</div>
            <div className="text-slate-600">완료된 프로젝트</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">98%</div>
            <div className="text-slate-600">고객 만족도</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">10+</div>
            <div className="text-slate-600">년간의 경험</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;