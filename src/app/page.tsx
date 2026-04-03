'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#e8ecf3] to-[#f3f4f6]">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M30 0v60M0 30h60\' stroke=\'%23002576\' fill=\'none\'/></svg>')] bg-repeat"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h1 className="text-7xl md:text-8xl font-black text-[#002576] font-['Plus_Jakarta_Sans'] leading-tight tracking-tighter drop-shadow-lg">
              ศูนย์ข้อดมูลราคาเชื้อเพลิงแห่งประเทศไทย
            </h1>
            <p className="text-lg md:text-xl text-[#191c1e] mt-8 font-['Prompt'] max-w-3xl leading-relaxed font-medium tracking-wide">
              แพลตฟอร์มการจัดการราคาเชื้อเพลิงส่วนตวหชค & เชืื่อหมบราคาแต่งริงฐาน
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 pt-6 flex-wrap">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-[#002576] to-[#0038a8] text-white px-8 py-4 rounded-xl font-bold font-['Prompt'] text-base hover:shadow-xl hover:scale-105 transition-all active:scale-95 cursor-pointer shadow-lg"
            >
              📊 ดูแดชบอร์ด
            </Link>
            <Link
              href="/siam-fuel-flow"
              className="border-2 border-[#002576] text-[#002576] px-8 py-4 rounded-xl font-bold font-['Prompt'] text-base hover:bg-white hover:shadow-lg hover:scale-105 transition-all active:scale-95 cursor-pointer bg-white"
            >
              🔄 ระบบจำหน่าย
            </Link>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
            {[
              { title: '💰 ราคาเชื้อเพลิง', desc: 'ข้อมูลราคาสมัยเรียล จาก ปตชถา', link: '/alerts', emoji: '💰' },
              { title: '🔔 การแจ้งเตือน', desc: 'รับแจ้งเตือนสัฃชุตคำ', link: '/alerts', emoji: '🔔' },
              { title: '📍 หาสถานีบริการ', desc: 'ค้นหาสถานีเชื้อเพลิงใกล้', link: '/stations', emoji: '📍' },
              { title: '📈 แนวโน้มฉิภาค', desc: 'วิเคระห์หรือราค 30 วัน', link: '/trends', emoji: '📈' },
            ].map((feature, idx) => (
              <Link
                key={idx}
                href={feature.link}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-all active:scale-95 cursor-pointer border border-[#e1e2e4] hover:border-[#002576] overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#002576] to-[#0038a8] opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.emoji}</div>
                  <h3 className="text-lg font-bold text-[#002576] font-['Prompt'] group-hover:text-[#0038a8] transition-colors tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#191c1e] mt-3 font-['Prompt'] leading-relaxed font-medium tracking-wide">
                    {feature.desc}
                  </p>
                  <div className="mt-4 text-[#002576] group-hover:translate-x-2 transition-transform inline-block">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className="relative border-t border-[#e1e2e4] bg-white bg-opacity-50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-sm text-[#191c1e] font-['Prompt'] tracking-wide">
            ศูนย์ข้อมูลราคาเชื้อเพลิงแห่งประเทศไทย © 2026 All Rights Reserved.
          </p>
          <p className="text-xs text-[#444653] font-['Prompt'] mt-2 tracking-wide">
            Powered by FuelHub - Real-time Fuel Price Intelligence
          </p>
        </div>
      </footer>
    </div>
  );
}
