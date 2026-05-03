import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import html2pdf from 'html2pdf.js';
import { REPORT_CONTENT } from './data/reportText';
import { Sparkles, Download, FileText, X, ChevronRight, Layers, Bot, BarChart, ArrowRight, Menu } from 'lucide-react';

function Navbar() {
  return (
    <nav className="h-[70px] md:h-[88px] border-b-2 border-black px-4 md:px-8 bg-background sticky top-0 z-50 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative">
        <div className="flex items-center gap-2 md:gap-3 relative z-10 bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-1.5 pr-2 rounded-r-md -ml-2 pl-2">
          <img src="https://ik.imagekit.io/39wvgoqre/WIN-HUB%20LOGO.jpg?updatedAt=1777282406241" alt="WIN HUB" className="h-8 md:h-11 object-contain shrink-0 rounded-sm" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <span className="font-bold text-sm md:text-xl tracking-tight hidden sm:block">WIN HUB</span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-12 sm:px-32">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif italic font-black leading-none flex items-center justify-center gap-1.5 md:gap-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#FF4F00] shrink-0" />
            <span className="truncate">Chat Bot Research</span>
          </h1>
        </div>

        <div className="hidden md:flex flex-col items-end relative z-10 bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-1.5 pl-2 rounded-l-md -mr-2 pr-2">
          {/* Replaced right section texts if needed, or keeping it empty space if the user wants it all "chat bot research" */}
        </div>
      </div>
    </nav>
  );
}

const TYPEWRITER_WORDS = [
  "3 Nền Tảng Chatbot",
  "Preny AI",
  "Sale AI",
  "Botcake"
];

function TypewriterText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
      } else {
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 40);
      }
    } else {
      if (text === currentWord) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 80 + Math.random() * 40);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-foreground relative inline-block pr-3 md:pr-5 transition-all min-h-[1em] min-w-[2px]">
      {text}
      <span className="absolute right-0 top-[10%] bottom-[10%] w-[3px] md:w-[5px] bg-[#FF4F00] animate-pulse" />
    </span>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleDownload = () => {
    const lines = REPORT_CONTENT.split('\n');
    let html = `
      <div style="font-family: 'Inter', sans-serif; padding: 40px; color: #111; line-height: 1.6;">
        <h1 style="font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 900; font-style: italic; border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 30px; text-transform: uppercase;">
          The Automation Report
        </h1>
    `;
    
    for (const t of lines) {
        const line = t.trim();
        if (!line) {
            html += `<div style="height: 10px"></div>`;
            continue;
        }
        
        if (line.match(/^Phần \d+:/)) {
            html += `<h2 style="font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 900; margin-top: 30px; margin-bottom: 15px; color: #FF4F00;">${line}</h2>`;
        } else if (line.match(/^\d+\.\s/)) {
            html += `<h3 style="font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; margin-top: 25px; margin-bottom: 10px;">${line}</h3>`;
        } else if (line.match(/^\d+\.\d+/)) {
            html += `<h4 style="font-size: 15px; font-weight: 700; margin-top: 15px; margin-bottom: 8px;">${line}</h4>`;
        } else if (line.startsWith('•')) {
            html += `<ul style="margin: 5px 0;"><li style="font-size: 13px; margin-bottom: 5px; margin-left: 20px;">${line.substring(1).trim()}</li></ul>`;
        } else if (line.startsWith('-') || line.startsWith('–')) {
            html += `<ul style="margin: 0px 0;"><li style="font-size: 13px; margin-bottom: 5px; margin-left: 40px; list-style-type: circle; color: #444;">${line.substring(1).trim()}</li></ul>`;
        } else if (line === 'Mục Lục' || line.includes('Tổng hợp đầy đủ') || line.includes('Preny AI ·')) {
            html += `<div style="font-weight: bold; text-transform: uppercase; letter-spacing: 2px; font-size: 11px; color: #666; margin-top: 20px;">${line}</div>`;
        } else {
            html += `<p style="font-size: 13px; margin-bottom: 8px;">${line}</p>`;
        }
    }

    html += `</div>`;

    const element = document.createElement('div');
    element.innerHTML = html;
    
    const opt = {
      margin: 10,
      filename: 'Bao_Cao_Tinh_Nang_Chatbot.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm' as const, format: 'a4', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).save();
  };

  const scrollToReport = () => {
    const el = document.getElementById('full-report');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20 px-4 md:px-8 border-b border-black/10">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl mx-auto text-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[10px] bg-black text-white px-2 py-0.5 uppercase mb-6 tracking-widest"
        >
          00. Executive Summary
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic font-black mb-6 leading-tight md:leading-none"
        >
          Báo Cáo So Sánh <br />
          <span className="text-foreground inline-block mt-2 md:mt-4 lg:mt-6 h-[1.2em]">
            <TypewriterText />
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto font-serif italic"
        >
          "Phân tích chuyên sâu và đối chiếu tính năng thực tế từ Preny AI, Sale AI & Botcake. 
          Khám phá hệ thống báo cáo tương tác không giới hạn."
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
        >
          <button 
            onClick={scrollToReport} 
            className="w-full sm:w-auto px-8 h-14 bg-black text-white hover:bg-[#FF4F00] shadow-[4px_4px_0px_#FF4F00] hover:shadow-[2px_2px_0px_#FF4F00] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs cursor-pointer border-2 border-black"
          >
            <Layers className="w-4 h-4" />
            Khám Phá Mục Lục
          </button>
          <button 
            onClick={handleDownload}
            className="w-full sm:w-auto px-8 h-14 bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Tải File (.pdf)
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function QuickSummary() {
  const data = [
    { name: 'Preny AI', focus: 'Social Commerce & Remarketing', icon: Bot, items: ['Tích hợp Facebook, Zalo OA, Tiktok', 'Remarketing đa kênh ZBS, SMS, Email', 'Bot Typing Simulation'] },
    { name: 'Sale AI', focus: 'Website & AI Analytics', icon: BarChart, items: ['Báo cáo Chatbot Insight chuyên sâu', 'Phân tích Intent mua hàng bằng AI', 'Tích hợp Shopify, Shopee'] },
    { name: 'Botcake', focus: 'Toàn diện & E-commerce', icon: Layers, items: ['Quản lý đơn hàng, kho, POS', 'AI Agent Instruction chuyên sâu', 'Automation theo kịch bản Flow'] },
  ];
  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
         <div className="text-center mb-12 md:mb-16">
            <span className="text-[10px] bg-black text-white px-2 py-0.5 uppercase tracking-[0.2em] inline-block mb-4">Quick Look</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black italic">Điểm Nhấn Nổi Bật</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((item, i) => {
              const Icon = item.icon;
              return (
                 <div key={i} className="group p-8 border border-black hover:bg-[#fdfaf6] transition-colors relative flex flex-col">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 shadow-[2px_2px_0px_#FF4F00]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-black font-serif italic mb-2">{item.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-[#FF4F00] font-bold mb-6 pb-6 border-b border-black/10">{item.focus}</p>
                    <ul className="space-y-4 flex-1 flex flex-col justify-center">
                       {item.items.map((str, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-800 font-medium">
                             <div className="w-1 h-3 mt-1 bg-[#FF4F00] shrink-0" />
                             <span>{str}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
              )
            })}
         </div>
      </div>
    </section>
  )
}

function parsePart(text: string) {
  const lines = text.split('\n');
  const sections = [];
  let currentSection = { title: '', lines: [] as string[] };
  let preamble = [] as string[];
  
  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    
    const isMajorSection = (t.match(/^\d+\.\s/) && !t.match(/^\d+\.\d+/)) || 
                           t.startsWith('Học từ') || 
                           t.startsWith('Dựa trên') ||
                           t === 'Công Cụ Khác';
    
    if (isMajorSection && t.split(' ').length < 15) {
      if (currentSection.title) {
         sections.push({...currentSection});
      }
      currentSection = { title: t, lines: [] };
    } else {
      if (currentSection.title) {
        currentSection.lines.push(t);
      } else {
        preamble.push(t);
      }
    }
  }
  if (currentSection.title) {
    sections.push({...currentSection});
  }
  
  return { preamble, sections };
}

function renderLineContent(t: string, idx: number) {
  if (t === 'MÔ TẢ TÍNH NĂNG CHI TIẾT') return null;

  if (t.match(/^Phần \d+:/)) {
    return (
      <div key={idx} className="mb-8 md:mb-12">
        <span className="text-[10px] font-bold text-gray-400 border border-gray-300 px-2 py-0.5 rounded-sm uppercase tracking-[0.2em] mb-4 inline-block">Section Document</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-black font-serif italic uppercase tracking-tighter leading-none">{t}</h2>
      </div>
    );
  }

  if (['Preny AI', 'Sale AI', 'Botcake'].includes(t) && !t.includes('·') && !t.includes('Phần')) {
    return <h3 key={idx} className="text-5xl md:text-7xl lg:text-8xl font-serif font-black italic mt-12 md:mt-16 mb-8 md:mb-12 text-black/5 select-none uppercase tracking-normal md:tracking-tighter mix-blend-multiply break-words">{t}</h3>;
  }

  if (t.match(/^\d+\.\d+/)) {
    return <h4 key={idx} className="text-lg md:text-xl font-bold mt-10 mb-6 tracking-wide text-black flex items-center gap-3"><ArrowRight className="w-5 h-5 text-[#FF4F00] shrink-0" /> {t}</h4>;
  }

  if (t.startsWith('•')) {
    const content = t.substring(1).trim();
    const parts = content.split(':');
    return (
      <div key={idx} className="flex items-start gap-4 mb-4 ml-0 md:ml-6 group">
        <div className="w-2 h-2 rounded-full border-2 border-[#FF4F00] mt-2 shrink-0 group-hover:bg-[#FF4F00] transition-colors" />
        <div className="leading-relaxed text-[16px] md:text-[17px] text-gray-800">
          {parts.length > 1 && !content.includes('http') && parts[0].split(' ').length < 8 ? (
            <>
              <strong className="font-bold text-black mr-2 uppercase tracking-wide text-[13px] bg-gray-100 px-2 py-1">{parts[0]}</strong>
              <span className="inline-block mt-1">{parts.slice(1).join(':')}</span>
            </>
          ) : (
            content
          )}
        </div>
      </div>
    );
  }

  if (t.startsWith('–') || t.startsWith('-')) {
    return (
      <div key={idx} className="flex gap-4 mb-3 ml-8 md:ml-12 items-baseline">
        <span className="text-gray-300 font-black text-xs uppercase tracking-widest">—</span>
        <span className="text-gray-600 text-[16px] italic font-serif leading-relaxed">{t.substring(1).trim()}</span>
      </div>
    );
  }
  
  if (t.includes('Tổng hợp đầy đủ tính năng') || t.includes('Không đánh giá chủ quan') || t.includes('Preny AI · Sale AI · Botcake') || t.includes('Mục Lục')) {
     return <p key={idx} className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{t}</p>;
  }

  return <p key={idx} className="text-[17px] md:text-[18px] text-gray-700 leading-[1.8] mb-6 font-serif">{t}</p>;
}

const CollapsibleSection: React.FC<{ title: React.ReactNode, children: React.ReactNode, defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
   const [isOpen, setIsOpen] = useState(defaultOpen);
   return (
      <motion.div 
         initial={{ opacity: 0, y: 10 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-50px" }}
         className="mb-6 border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow group/card"
      >
         <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 md:p-6 bg-white hover:bg-[#fdfaf6] transition-colors group/btn text-left">
            <div className="flex-1 pr-4">{title}</div>
            <div className={`w-8 h-8 rounded-full border border-black/20 flex items-center justify-center shrink-0 group-hover/btn:border-[#FF4F00] group-hover/btn:text-[#FF4F00] transition-all bg-gray-50 ${isOpen ? "rotate-90 bg-[#FF4F00] text-white border-[#FF4F00]" : "rotate-0 text-black"}`}>
               <ChevronRight className="w-5 h-5" />
            </div>
         </button>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
               >
                  <div className="p-5 md:p-8 bg-[#fdfaf6] border-t border-black/10">
                     {children}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   )
}

function FullReportInteractive() {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const parts = REPORT_CONTENT.split(/(?=^Phần \d+:)/m);
  
  const sections = [
    { id: 'intro', title: '00. Executive Summary' },
    ...parts.map((p, idx) => {
      const match = p.match(/^Phần \d+:.*/);
      if (match) {
        return { id: `part-${idx}`, title: match[0] };
      }
      return null;
    }).filter(Boolean) as {id: string, title: string}[]
  ];

  const scrollToPart = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 140 : 100;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec.id);
        if (el && scrollY >= el.offsetTop - 200) {
          if (activeSection !== sec.id) setActiveSection(sec.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, activeSection]);

  return (
    <section id="full-report" className="relative bg-[#fcfcfc] border-t-2 border-black">
      <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto min-h-screen">
        
        {/* Sticky Left Sidebar */}
        <div className="hidden lg:block w-[350px] shrink-0 border-r border-black/10 relative">
          <div className="sticky top-0 h-screen overflow-y-auto w-full bg-[#fdfaf6]">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-10 h-10 bg-black flex items-center justify-center -rotate-3 hover:rotate-3 transition-transform shadow-[4px_4px_0px_#FF4F00]">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-black text-xl tracking-tighter text-black leading-none">The Report</h3>
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#FF4F00] mt-1">Interactive Index</p>
                </div>
              </div>
              
              <div className="space-y-4 relative before:content-[''] before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-px before:bg-black/10">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToPart(sec.id)}
                    className={`w-full text-left pl-8 pr-4 text-sm font-bold relative transition-all duration-300 leading-relaxed block ${activeSection === sec.id ? 'text-[#FF4F00] translate-x-1' : 'text-gray-400 hover:text-black hover:translate-x-1'}`}
                  >
                    <div className={`absolute left-[9px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSection === sec.id ? 'bg-[#FF4F00] scale-150 ring-4 ring-[#FF4F00]/20' : 'bg-gray-300'}`} />
                    <span className="block truncate">{sec.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 w-full bg-white relative">
          <div className="p-6 md:p-16 lg:p-24 space-y-2 pb-32 max-w-4xl mx-auto">
              <div id="intro" className="mb-12 md:mb-16">
                 <div className="inline-block px-3 py-1 bg-[#FF4F00] text-black text-[10px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 shadow-[2px_2px_0px_#000]">
                   Tài Liệu Toàn Văn
                 </div>
                 <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-serif italic mb-6 leading-tight tracking-tight">Mô Tả Tính Năng Chi Tiết</h1>
              </div>

              {/* Mobile TOC Dropdown */}
              <div className="lg:hidden sticky top-[80px] z-40 bg-[#fdfaf6] border-b border-black/10 px-6 h-[56px] flex items-center justify-between shadow-sm -mx-6 md:-mx-16 mb-12">
                 <div className="flex items-center gap-3">
                   <div className="w-7 h-7 bg-black flex items-center justify-center rotate-3">
                      <Layers className="w-3.5 h-3.5 text-[#FF4F00]" />
                   </div>
                   <span className="text-xs font-bold text-black uppercase tracking-widest mt-0.5">Mục Lục</span>
                 </div>
                 
                 <button 
                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                   className={`p-2 border border-black/10 transition-colors ${isMobileMenuOpen ? 'text-white bg-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]' : 'text-black bg-white shadow-sm hover:bg-gray-50'}`}
                 >
                   {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                 </button>
                 
                 {/* Dropdown Content */}
                 <AnimatePresence>
                   {isMobileMenuOpen && (
                     <motion.div 
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       transition={{ duration: 0.2 }}
                       className="absolute top-full left-0 right-0 bg-white border-b-2 border-black/20 shadow-2xl overflow-hidden origin-top"
                     >
                       <div className="flex flex-col max-h-[65vh] overflow-y-auto">
                         {sections.map((sec) => (
                            <button
                              key={sec.id}
                              onClick={() => {
                                scrollToPart(sec.id);
                                setIsMobileMenuOpen(false);
                              }}
                              className={`text-left text-sm font-bold px-6 py-4 border-b last:border-b-0 border-black/5 transition-colors flex items-center gap-3 ${activeSection === sec.id ? 'bg-[#FF4F00]/5 text-[#FF4F00]' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeSection === sec.id ? 'bg-[#FF4F00] scale-150 shadow-[0_0_8px_rgba(255,79,0,0.5)]' : 'bg-transparent'}`} />
                              <span className="truncate py-0.5">{sec.title}</span>
                            </button>
                         ))}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>

              {parts.map((partText, partIdx) => {
                  const { preamble, sections: parsedSections } = parsePart(partText);
                  const hasPartTitle = partText.trim().match(/^Phần \d+:/);
                  const id = hasPartTitle ? `part-${partIdx}` : undefined;

                  return (
                      <div key={partIdx} id={id} className={`pt-12 ${hasPartTitle ? 'mt-8 md:mt-24 border-t-4 border-black' : ''}`}>
                          {preamble.map((line, idx) => renderLineContent(line, idx))}

                          {parsedSections.length > 0 && (
                             <div className="mt-12 space-y-6">
                                {parsedSections.map((sec, sIdx) => {
                                    let titleNode: React.ReactNode = <span className="text-xl md:text-2xl font-bold">{sec.title}</span>;
                                    
                                    if (sec.title.match(/^\d+\.\s/)) {
                                        const splitIdx = sec.title.indexOf(' ');
                                        const num = sec.title.substring(0, splitIdx);
                                        const rest = sec.title.substring(splitIdx + 1);
                                        titleNode = (
                                            <div className="flex items-start md:items-center gap-3 md:gap-4 py-2">
                                              <span className="text-3xl md:text-5xl font-black text-gray-200 group-hover/btn:text-[#FF4F00] transition-colors shrink-0 leading-none">{num}</span>
                                              <h3 className="text-lg md:text-2xl font-bold text-black group-hover/btn:text-[#FF4F00] transition-colors">{rest}</h3>
                                            </div>
                                        );
                                    } else if (sec.title.startsWith('Học từ') || sec.title.startsWith('Dựa trên')) {
                                        titleNode = <span className="text-lg md:text-2xl font-serif font-bold italic text-[#FF4F00] py-2 block border-l-4 border-[#FF4F00] pl-4">{sec.title}</span>;
                                    }

                                    return (
                                        <CollapsibleSection key={sIdx} title={titleNode} defaultOpen={sIdx === 0}>
                                            <div className="space-y-2">
                                              {sec.lines.map((line, idx) => renderLineContent(line, idx))}
                                            </div>
                                        </CollapsibleSection>
                                    );
                                })}
                             </div>
                          )}
                      </div>
                  )
              })}
              
              <div className="pt-24 border-t-2 border-black/10 text-center flex flex-col items-center mt-32">
                <p className="text-gray-400 font-serif italic text-lg lg:text-xl">Báo cáo được hoàn thành tự động bởi AI Auditors.</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="pt-12 pb-16 flex flex-col md:flex-row items-center md:items-start gap-8 max-w-7xl mx-auto px-8">
      <div className="w-48 flex-shrink-0">
        <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
          <div className="w-3 h-3 rounded-full bg-[#FF4F00]"></div>
          <span className="font-black text-sm tracking-tighter uppercase">Platform Auditor</span>
        </div>
        <div className="text-[9px] text-center md:text-left uppercase tracking-tighter leading-none opacity-50 font-bold">Botcake Ecosystem<br/>Review Process</div>
      </div>
      <div className="flex-1 bg-black text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xs uppercase tracking-widest text-[#FF4F00] font-bold mb-2">Total System Audit</h3>
          <p className="text-xl md:text-2xl font-serif italic text-gray-300">"Chi tiết là khởi nguồn của sự hoàn hảo."</p>
        </div>
        <div className="p-4 border border-white/30 text-[10px] uppercase tracking-[0.2em] font-bold shrink-0">
          Issue. 2026
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#FF4F00]/30 selection:text-black">
      <Navbar />
      <Hero />
      <FullReportInteractive />
      <QuickSummary />
      <Footer />
    </div>
  );
}
