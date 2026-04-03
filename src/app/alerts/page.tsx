'use client';

import Link from "next/link";

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#e8ecf3] to-[#f3f4f6]">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M30 0v60M0 30h60\' stroke=\'%23002576\' fill=\'none\'/></svg>')] bg-repeat"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-bold text-[#002576] font-['Plus_Jakarta_Sans'] drop-shadow-lg tracking-tight leading-normal">
              🔔 การแจ้งเตือน
            </h1>
            <p className="text-base text-[#191c1e] mt-3 font-['Prompt'] font-normal tracking-normal leading-relaxed">
              จัดการแจ้งเตือนราคาเชื้อเพลิง
            </p>
          </div>

          <div className="space-y-4">
            {/* Alert Card */}
            <button className="w-full bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:border-[#002576] hover:scale-105 transition-all active:scale-95 text-left cursor-pointer border border-[#e1e2e4] group overflow-hidden relative"
              onClick={() => alert('แก้ไขการแจ้งเตือน แอลกอฮอล์ 95')}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#004f1c] to-transparent opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative flex justify-between items-start group-hover:text-[#002576] transition-colors">
                <div>
                  <p className="text-sm font-bold text-[#444653] font-['Prompt'] tracking-tight uppercase">
                    แอลกอฮอล์ 95
                  </p>
                  <p className="text-5xl font-black text-[#002576] mt-3 font-['Plus_Jakarta_Sans'] tracking-tighter">
                    ฿32.50
                  </p>
                </div>
                <div className="bg-[#004f1c] bg-opacity-20 text-[#004f1c] px-4 py-2 rounded-xl text-sm font-bold font-['Prompt'] tracking-tight">
                  ↓ 0.25%
                </div>
              </div>
              <p className="text-xs text-[#191c1e] mt-4 font-['Prompt'] font-medium tracking-wide">
                อัปเดตเมื่อ 2 นาทีที่แล้ว
              </p>
            </button>

            <button className="w-full bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:border-[#002576] hover:scale-105 transition-all active:scale-95 text-left cursor-pointer border border-[#e1e2e4] group overflow-hidden relative"
              onClick={() => alert('แก้ไขการแจ้งเตือน ดีเซล 10 PPM')}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ba1a1a] to-transparent opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative flex justify-between items-start group-hover:text-[#002576] transition-colors">
                <div>
                  <p className="text-sm font-bold text-[#444653] font-['Prompt'] tracking-tight uppercase">
                    ดีเซล 10 PPM
                  </p>
                  <p className="text-5xl font-black text-[#002576] mt-3 font-['Plus_Jakarta_Sans'] tracking-tight">
                    ฿30.85
                  </p>
                </div>
                <div className="bg-[#ba1a1a] bg-opacity-20 text-[#ba1a1a] px-4 py-2 rounded-xl text-sm font-bold font-['Prompt'] tracking-tight">
                  ↑ 0.50%
                </div>
              </div>
              <p className="text-xs text-[#444653] mt-4 font-['Prompt'] font-medium">
                อัปเดตเมื่อ 2 นาทีที่แล้ว
              </p>
            </button>

            <Link href="/" className="w-full bg-gradient-to-r from-[#002576] to-[#0038a8] text-white px-8 py-4 rounded-xl font-bold font-['Prompt'] hover:shadow-xl hover:scale-105 transition-all active:scale-95 block text-center mt-6 cursor-pointer shadow-lg text-base">
              ← กลับหน้าแรก
            </Link>
          </div>
        </div>
      </div>
      <footer className="relative border-t border-[#e1e2e4] bg-white bg-opacity-50 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-[#444653] font-['Prompt'] tracking-wide">
            FuelHub - ศูนย์ข้อมูลราคาเชื้อเพลิงราคาเย็ี คือ
          </p>
        </div>
      </footer>
    </div>
  );
}
