'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#f3f4f6] to-[#e1e2e4]">
      <div className="max-w-7xl mx-auto px-6 py-24">
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
              { title: '💰 ราคาเชื้อเพลิง', desc: 'ข้อมูลราคาสมัยเรียล จาก ปตชถา', link: '/alerts' },
              { title: '🔔 การแจ้งเตือน', desc: 'รับแจ้งเตือนสัฃชุตคำ', link: '/alerts' },
              { title: '📍 หาสถานีบริการ', desc: 'ค้นหาสถานีเชื้อเพลิงใกล้', link: '/stations' },
              { title: '📈 แนวโน้มฉิภาค', desc: 'วิเคระห์หรือราค 30 วัน', link: '/trends' },
            ].map((feature, idx) => (
              <Link
                key={idx}
                href={feature.link}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-all active:scale-95 cursor-pointer border border-[#e1e2e4] hover:border-[#002576] group"
              >
                <h3 className="text-lg font-bold text-[#002576] font-['Prompt'] group-hover:text-[#0038a8] transition-colors tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#191c1e] mt-3 font-['Prompt'] leading-relaxed font-medium tracking-wide">
                  {feature.desc}
                </p>
                <div className="mt-4 text-[#002576] group-hover:translate-x-2 transition-transform">→</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
