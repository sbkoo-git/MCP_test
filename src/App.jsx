import { useState } from 'react'
import './App.css'

const jobData = [
  {
    id: 1,
    title: "UI 디자인 경력직",
    department: "디지털채널부",
    type: "경력",
    experience: "8년 이상",
    category: "HTML/퍼블리싱/UI 개발",
    deadline: "채용시 마감",
    isHot: true
  },
  {
    id: 2,
    title: "AI Agent / RPA 개발 경력직",
    department: "디지털혁신부",
    type: "경력",
    experience: "2년 이상",
    category: "빅데이터/AI",
    deadline: "채용시 마감",
    isHot: true
  },
  {
    id: 3,
    title: "해외대 석·박사 신입행원",
    department: "인사부",
    type: "신입",
    experience: "석사 이상",
    category: "기획/전략/빅데이터/AI",
    deadline: "수시채용",
    isHot: true
  },
  {
    id: 4,
    title: "투자솔루션부 방카슈랑스",
    department: "투자솔루션부",
    type: "경력",
    experience: "2년 이상",
    category: "증권/투자/펀드/외환",
    deadline: "채용시 마감",
    isHot: false
  },
  {
    id: 5,
    title: "PG 서비스 정산 및 운영",
    department: "페이사업부",
    type: "경력",
    experience: "3년 이상",
    category: "웹기획/PM/재무/세무",
    deadline: "채용시 마감",
    isHot: false
  },
  {
    id: 6,
    title: "WM추진부 투자전략",
    department: "WM추진부",
    type: "경력",
    experience: "5년 이상",
    category: "증권/투자/펀드/외환",
    deadline: "채용시 마감",
    isHot: false
  },
  {
    id: 7,
    title: "창구업무 업무지원 계약인력",
    department: "영업지원부",
    type: "신입/경력",
    experience: "무관",
    category: "영업관리/일반영업",
    deadline: "채용시 마감",
    isHot: false
  },
  {
    id: 8,
    title: "음식주문중개 플랫폼 서비스 기획",
    department: "플랫폼사업부",
    type: "경력",
    experience: "3년 이상",
    category: "기획/전략/웹기획/PM",
    deadline: "채용시 마감",
    isHot: false
  }
]

const benefits = [
  { icon: "⏰", title: "자율출퇴근제", desc: "유연한 출퇴근 시간" },
  { icon: "💼", title: "주 40시간 스마트근무", desc: "워라밸 보장" },
  { icon: "🏖️", title: "휴가비 지원", desc: "연차 사용 시 휴가비 지급" },
  { icon: "🏠", title: "연수원 70개+", desc: "전국 휴양시설 이용" },
  { icon: "💰", title: "평균연봉 7,933만원", desc: "업계 최고 수준" },
  { icon: "🎓", title: "신입초봉 4,053만원", desc: "대졸 기준" }
]

function App() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredJobs = jobData.filter(job => {
    const matchesFilter = filter === 'all' || 
      (filter === 'new' && job.type.includes('신입')) ||
      (filter === 'exp' && job.type.includes('경력'))
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg"></div>
        <nav className="nav">
          <div className="logo">
            <span className="logo-icon">S</span>
            <span className="logo-text">SHINHAN BANK</span>
          </div>
          <div className="nav-links">
            <a href="#jobs">채용공고</a>
            <a href="#benefits">복리후생</a>
            <a href="#about">회사소개</a>
          </div>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">신한은행</span>과 함께
            <br />미래를 만들어갈 인재를 찾습니다
          </h1>
          <p className="hero-subtitle">
            대한민국 금융의 미래, 당신의 가능성과 함께합니다
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">채용 포지션</span>
            </div>
            <div className="stat">
              <span className="stat-number">7,933</span>
              <span className="stat-label">평균연봉(만원)</span>
            </div>
            <div className="stat">
              <span className="stat-number">70+</span>
              <span className="stat-label">전국 연수원</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>스크롤하여 더 알아보기</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </header>

      {/* Jobs Section */}
      <section id="jobs" className="jobs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">채용 공고</h2>
            <p className="section-desc">신한은행의 다양한 채용 기회를 확인하세요</p>
          </div>
          
          <div className="filter-bar">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="포지션 또는 분야 검색..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                전체
              </button>
              <button 
                className={`filter-btn ${filter === 'new' ? 'active' : ''}`}
                onClick={() => setFilter('new')}
              >
                신입
              </button>
              <button 
                className={`filter-btn ${filter === 'exp' ? 'active' : ''}`}
                onClick={() => setFilter('exp')}
              >
                경력
              </button>
            </div>
          </div>

          <div className="jobs-grid">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                {job.isHot && <span className="hot-badge">HOT</span>}
                <div className="job-type">{job.type}</div>
                <h3 className="job-title">{job.title}</h3>
                <div className="job-meta">
                  <span className="job-dept">{job.department}</span>
                  <span className="job-exp">{job.experience}</span>
                </div>
                <div className="job-category">{job.category}</div>
                <div className="job-footer">
                  <span className="job-deadline">📅 {job.deadline}</span>
                  <button className="apply-btn">지원하기</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits-section">
        <div className="container">
          <div className="section-header light">
            <h2 className="section-title">복리후생</h2>
            <p className="section-desc">신한은행이 제공하는 최고의 복지 혜택</p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <span className="benefit-icon">{benefit.icon}</span>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>신한은행 소개</h2>
              <p>
                <strong>신한은행</strong>은 대한민국을 대표하는 금융기관으로, 
                1897년 한성은행으로 시작하여 120년이 넘는 역사를 자랑합니다.
              </p>
              <p>
                디지털 금융 혁신을 선도하며, AI, 빅데이터, 블록체인 등 
                첨단 기술을 활용한 금융 서비스를 제공하고 있습니다.
              </p>
              <p>
                고객 중심의 가치를 바탕으로 개인금융, 기업금융, 투자금융 등 
                다양한 분야에서 최고의 서비스를 제공합니다.
              </p>
              <div className="about-cta">
                <a href="https://www.shinhan.com" target="_blank" rel="noopener noreferrer" className="cta-btn primary">
                  공식 웹사이트 방문
                </a>
                <a href="#jobs" className="cta-btn secondary">
                  채용공고 보기
                </a>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span className="building-icon">🏦</span>
                <span>신한은행 본점</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon">S</span>
              <span>SHINHAN BANK</span>
            </div>
            <div className="footer-info">
              <p>© 2025 신한은행. All rights reserved.</p>
              <p>서울특별시 중구 세종대로 9길 20</p>
              <p>고객센터: 1577-8000</p>
            </div>
            <div className="footer-links">
              <a href="#">개인정보처리방침</a>
              <a href="#">이용약관</a>
              <a href="#">채용문의</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
