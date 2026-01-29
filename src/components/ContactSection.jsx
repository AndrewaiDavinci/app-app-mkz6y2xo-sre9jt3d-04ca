import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log('Form submitted:', formData);
    alert('문의가 성공적으로 전송되었습니다!');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: '이메일',
      content: 'contact@techcorp.com',
      link: 'mailto:contact@techcorp.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '전화번호',
      content: '+82 2-1234-5678',
      link: 'tel:+8221234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '주소',
      content: '서울특별시 강남구 테헤란로 123',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            연락처
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            프로젝트 문의나 궁금한 점이 있으시면 언제든지 연락해주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              연락 정보
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-blue-700 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className="text-slate-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">
                운영 시간
              </h4>
              <p className="text-slate-600">
                월요일 - 금요일: 오전 9시 - 오후 6시<br />
                주말 및 공휴일: 휴무
              </p>
            </div>
          </div>

          {/* 문의 폼 */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              문의하기
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="이름을 입력해주세요"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  회사명
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="회사명을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  메시지 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="문의 내용을 입력해주세요"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                메시지 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;