import React from 'react';
import { Code, Smartphone, Cloud, Shield, BarChart3, Headphones } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: '웹 개발',
      description: '최신 기술 스택을 활용한 반응형 웹사이트와 웹 애플리케이션 개발'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: '모바일 앱',
      description: 'iOS와 Android를 위한 네이티브 및 크로스 플랫폼 모바일 애플리케이션'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: '클라우드 솔루션',
      description: 'AWS, Azure, GCP를 활용한 확장 가능한 클라우드 인프라 구축'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '보안 서비스',
      description: '데이터 보호와 시스템 보안을 위한 종합적인 보안 솔루션'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: '데이터 분석',
      description: '빅데이터와 AI를 활용한 비즈니스 인사이트 및 예측 분석'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '기술 지원',
      description: '24/7 기술 지원과 시스템 유지보수를 통한 안정적인 서비스 운영'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            전문 서비스
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            다양한 기술 분야에서 검증된 전문성으로 고객의 비즈니스 성장을 지원합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100 group"
            >
              <div className="text-blue-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
            모든 서비스 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;