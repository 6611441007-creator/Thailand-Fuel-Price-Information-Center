'use client';

import Link from "next/link";

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#f3f4f6] to-[#e1e2e4]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-black text-[#002576] font-['Plus_Jakarta_Sans'] drop-shadow-lg tracking-tighter">
              🔔 การแจ้งเตือน
            </h1>
            <p className="text-base text-[#191c1e] mt-3 font-['Prompt'] font-medium tracking-wide">
              จัดการแจ้งเตือนราคาเชื้อเพลิง
            </p>
          </div>

          <div className="space-y-4">
            {/* Alert Card */}
            <button className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:border-[#002576] hover:scale-105 transition-all active:scale-95 text-left cursor-pointer border border-[#e1e2e4] group"
              onClick={() => alert('แก้ไขการแจ้งเตือน แอลกอฮอล์ 95')}>
              <div className="flex justify-between items-start group-hover:text-[#002576] transition-colors">
                <div>
                  <p className="text-sm font-bold text-[#444653] font-['Prompt'] tracking-tight">
                    แอลกอฮอล์ 95
                  </p>
                  <p className="text-5xl font-black text-[#002576] mt-3 font-['Plus_Jakarta_Sans'] tracking-tighter">
                    ฿32.50
                  </p>
                </div>
                <div className="bg-[#004f1c] bg-opacity-15 text-[#004f1c] px-3 py-1 rounded-lg text-sm font-bold font-['Prompt'] tracking-tight">
                  ↓ 0.25%
                </div>
              </div>
              <p className="text-xs text-[#191c1e] mt-4 font-['Prompt'] font-medium tracking-wide">
                อัปเดตเมื่อ 2 นาทีที่แล้ว
              </p>
            </button>

            <button className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:border-[#002576] hover:scale-105 transition-all active:scale-95 text-left cursor-pointer border border-[#e1e2e4] group"
              onClick={() => alert('แก้ไขการแจ้งเตือน ดีเซล 10 PPM')}>
              <div className="flex justify-between items-start group-hover:text-[#002576] transition-colors">
                <div>
                  <p className="text-sm font-bold text-[#444653] font-['Prompt'] tracking-tight">
                    ดีเซล 10 PPM
                  </p>
                  <p className="text-5xl font-black text-[#002576] mt-3 font-['Plus_Jakarta_Sans'] tracking-tight">
                    ฿30.85
                  </p>
                </div>
                <div className="bg-[#ba1a1a] bg-opacity-15 text-[#ba1a1a] px-3 py-1 rounded-lg text-sm font-bold font-['Prompt'] tracking-tight">
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
    </div>
  );
}
