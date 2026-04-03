'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#e8ecf3] to-[#f3f4f6]">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M30 0v60M0 30h60\' stroke=\'%23002576\' fill=\'none\'/></svg>')] bg-repeat"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-[#1a1a1a] font-['Plus_Jakarta_Sans'] leading-tight drop-shadow-sm">
              ศูนย์ข้อมูลราคาเชื้อเพลิงแห่งประเทศไทย
            </h1>
            <p className="text-xl text-[#555555] mt-6 font-['Prompt'] max-w-3xl leading-relaxed font-medium tracking-normal">
              แพลตฟอร์มติดตามราคาเชื้อเพลิงสมัยเรียล โดยใช้ข้อมูลจากกรรมาการของสถานีเชื้อเพลิง
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 pt-6 flex-wrap">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-[#002576] to-[#0038a8] text-white px-8 py-4 rounded-xl font-semibold font-['Prompt'] text-sm hover:shadow-xl hover:scale-105 transition-all active:scale-95 cursor-pointer shadow-lg uppercase tracking-wide"
            >
              📊 ดูแดชบอร์ด
            </Link>
            <Link
              href="/siam-fuel-flow"
              className="border-2 border-[#002576] text-[#002576] px-8 py-4 rounded-xl font-semibold font-['Prompt'] text-sm hover:bg-white hover:shadow-lg hover:scale-105 transition-all active:scale-95 cursor-pointer bg-white uppercase tracking-wide"
            >
              🔄 ระบบจำหน่าย
            </Link>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-20">
            {[
              { title: '💰 ดูราคาเชื้อเพลิงสมัยเรียล', desc: 'ราคาปัจจุบันจากกจ.ไทย และ สำนักงานต่างๆ', link: '/dashboard', emoji: '💰' },
              { title: '🔔 การแจ้งเตือนราคา', desc: 'รับแจ้งเตือนเมื่อราคาเปลี่ยน เกินคูณ', link: '/alerts', emoji: '🔔' },
              { title: '📍 หาสถานีเชื้อเพลิงใกล้', desc: 'ค้นหาสถานีเชื้อเพลิงใกล้คุณ จ้องประจำคุณ', link: '/stations', emoji: '📍' },
              { title: '📈 วิเคระห์แนวโน้ม', desc: 'วิเคระห์ราคา 30 วันที่ผ่านมา', link: '/trends', emoji: '📈' },
            ].map((feature, idx) => (
              <Link
                key={idx}
                href={feature.link}
                className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-[#5c6b7a] hover:border-[#002576]"
              >
                <div className="relative">
                  <div className="text-4xl mb-4">{feature.emoji}</div>
                  <h3 className="text-base font-bold text-[#1a1a1a] font-['Prompt'] group-hover:text-[#002576] transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#555555] mt-3 font-['Prompt'] leading-normal font-normal">
                    {feature.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className="relative border-t-2 border-[#ddd] bg-[#f5f5f5] mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-[#1a1a1a] font-['Prompt'] tracking-normal font-medium leading-relaxed">
            ศูนย์ข้อมูลราคาเชื้อเพลิงแห่งประเทศไทย
          </p>
          <p className="text-xs text-[#666666] font-['Prompt'] mt-2 tracking-normal font-normal leading-relaxed">
            ข้อมูลที่แสดงบนเว็บไซต์นี้เป็นข้อมูลตัวอย่างเพื่อการศึกษา © 2026 All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
