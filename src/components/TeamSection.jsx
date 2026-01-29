import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: '김민수',
      position: 'CEO & 창립자',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: '15년간의 기술 리더십 경험을 바탕으로 회사를 이끌어가고 있습니다.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: '박지영',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: '최신 기술 트렌드를 선도하며 혁신적인 솔루션을 개발합니다.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: '이준호',
      position: '수석 개발자',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: '풀스택 개발 전문가로 다양한 프로젝트를 성공적으로 이끌고 있습니다.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: '최수민',
      position: 'UX/UI 디자이너',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: '사용자 중심의 디자인으로 최고의 사용자 경험을 제공합니다.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            우리 팀
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            각 분야의 전문가들이 모여 최고의 결과를 만들어내는 팀입니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-700 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="text-slate-400 hover:text-blue-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.social.github}
                  className="text-slate-400 hover:text-blue-700 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-slate-400 hover:text-blue-700 transition-colors duration-200"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;