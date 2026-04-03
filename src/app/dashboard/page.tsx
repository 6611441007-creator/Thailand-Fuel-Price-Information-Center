'use client';

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#e8ecf3] to-[#f3f4f6]">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M30 0v60M0 30h60\' stroke=\'%23002576\' fill=\'none\'/></svg>')] bg-repeat"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-black text-[#002576] font-['Plus_Jakarta_Sans'] drop-shadow-lg tracking-tighter">
              📊 แดชบอร์ด
            </h1>
            <p className="text-base text-[#191c1e] mt-3 font-['Prompt'] font-medium tracking-wide">
              ข้อมูลราคาเชื้อเพลิงสมัยเรียลไทม์
            </p>
          </div>

          {/* Grid of Price Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['แอลกอฮอล์ 91', 'แอลกอฮอล์ 95', 'แอลกอฮอล์ 97'].map((fuel) => (
              <button
                key={fuel}
                onClick={() => alert(`ราคา ${fuel}`)}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl hover:scale-105 hover:border-[#002576] transition-all active:scale-95 text-left cursor-pointer border border-[#e1e2e4] group"
              >
                <p className="text-sm font-bold text-[#444653] font-['Prompt'] tracking-tight">
                  {fuel}
                </p>
                <p className="text-4xl font-black text-[#002576] mt-3 font-['Plus_Jakarta_Sans'] tracking-tighter">
                  ฿32.50
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-xs font-bold text-[#004f1c] font-['Prompt'] tracking-tight">↓ 0.25%</span>
                  <span className="text-xs text-[#191c1e] font-['Prompt'] font-medium tracking-wide">24 ชั่วโมง</span>
                </div>
              </button>
            ))}
            {['ดีเซล B7', 'ดีเซล 10 PPM', 'E20'].map((fuel) => (
              <button
                key={fuel}
                onClick={() => alert(`ราคา ${fuel}`)}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl hover:scale-105 hover:border-[#002576] transition-all active:scale-95 text-left cursor-pointer border border-[#e1e2e4] group"
              >
                <p className="text-sm font-bold text-[#444653] font-['Prompt'] tracking-tight">
                  {fuel}
                </p>
                <p className="text-4xl font-black text-[#002576] mt-3 font-['Plus_Jakarta_Sans'] tracking-tight">
                  ฿30.85
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-xs font-bold text-[#ba1a1a] font-['Prompt'] tracking-tight">↑ 0.50%</span>
                  <span className="text-xs text-[#444653] font-['Prompt'] font-medium">24 ชั่วโมงที่ผ่านมา</span>
                </div>
              </button>
            ))}
          </div>

          <Link href="/" className="w-full bg-[#002576] text-white px-8 py-4 rounded-xl font-bold font-['Prompt'] hover:bg-opacity-90 transition-all active:scale-95 block text-center cursor-pointer shadow-md hover:shadow-lg text-base">
            ← กลับหน้าแรก
          </Link>
        </div>
      </div>
      <footer className="relative border-t border-[#e1e2e4] bg-white bg-opacity-50 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-[#444653] font-['Prompt'] tracking-wide">
            FuelHub - ชื่อแม่ ชื่อหลัก ชื่อตงค ชื่ออู่
          </p>
        </div>
      </footer>
    </div>
  );
}
