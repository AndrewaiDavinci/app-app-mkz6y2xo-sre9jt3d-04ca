import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </main>
      
      {/* 푸터 */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">
                TechCorp
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                혁신적인 기술 솔루션으로 고객의 성공을 돕는 
                신뢰할 수 있는 파트너입니다.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  개인정보처리방침
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  이용약관
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">서비스</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">웹 개발</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">모바일 앱</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">클라우드 솔루션</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">보안 서비스</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">회사</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">회사 소개</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">팀</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">채용</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">블로그</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 TechCorp. 모든 권리 보유.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;