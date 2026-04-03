'use client';

import Link from "next/link";

export default function TrendsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#e8ecf3] to-[#f3f4f6]">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M30 0v60M0 30h60\' stroke=\'%23002576\' fill=\'none\'/></svg>')] bg-repeat"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-bold text-[#002576] font-['Plus_Jakarta_Sans'] drop-shadow-lg tracking-tight leading-normal">
              📈 แนวโน้มราคาเชื้อเพลิง
            </h1>
            <p className="text-base text-[#191c1e] mt-3 font-['Prompt'] font-normal tracking-normal leading-relaxed">
              ประวัติสารดราคาสมัยเรียล 30 วันหลัง
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#e1e2e4]">
            <h3 className="text-xl font-bold text-[#002576] mb-6 font-['Prompt'] tracking-wide">
              📊 30 วันที่ผ่านมา
            </h3>
            
            {/* Chart Placeholder */}
            <button onClick={() => alert('กราฟแสดงแนวโน้มราคา 30 วัน')}
              className="w-full h-64 bg-gradient-to-b from-[#0038a8] via-[#b6c4ff] to-[#f8f9fb] rounded-lg opacity-30 flex items-center justify-center hover:opacity-40 transition-opacity cursor-pointer">
              <p className="text-[#444653] font-['Prompt'] font-medium">กราฟแนวโน้มราคา (คลิกเพื่อรายละเอียด)</p>
            </button>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <button onClick={() => alert('ราคาสูงสุด ฿33.20')}
                className="bg-white rounded-lg p-4 hover:bg-[#f3f4f6] shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer active:scale-95 border border-[#e1e2e4]">
                <p className="text-xs text-[#444653] font-['Prompt'] font-bold tracking-tight">ราคาสูงสุด</p>
                <p className="text-3xl font-black text-[#002576] mt-3 font-['Plus_Jakarta_Sans'] tracking-tight">
                  ฿33.20
                </p>
              </button>
              <button onClick={() => alert('ราคาต่ำสุด ฿31.85')}
                className="bg-white rounded-lg p-4 hover:bg-[#f3f4f6] shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer active:scale-95 border border-[#e1e2e4]">
                <p className="text-xs text-[#444653] font-['Prompt'] font-bold tracking-tight">ราคาต่ำสุด</p>
                <p className="text-3xl font-black text-[#002576] mt-3 font-['Plus_Jakarta_Sans'] tracking-tight">
                  ฿31.85
                </p>
              </button>
              <button onClick={() => alert('ราคาเฉลี่ย ฿32.50')}
                className="bg-white rounded-lg p-4 hover:bg-[#f3f4f6] shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer active:scale-95 border border-[#e1e2e4]">
                <p className="text-xs text-[#444653] font-['Prompt'] font-bold tracking-tight">ราคาเฉลี่ย</p>
                <p className="text-3xl font-black text-[#002576] mt-3 font-['Plus_Jakarta_Sans'] tracking-tight">
                  ฿32.50
                </p>
              </button>
            </div>
          </div>

          <Link href="/" className="w-full bg-gradient-to-r from-[#002576] to-[#0038a8] text-white px-8 py-4 rounded-xl font-bold font-['Prompt'] hover:shadow-xl hover:scale-105 transition-all active:scale-95 block text-center cursor-pointer shadow-lg text-base">
            ← กลับหน้าแรก
          </Link>
        </div>
      </div>
      <footer className="relative border-t border-[#e1e2e4] bg-white bg-opacity-50 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-[#444653] font-['Prompt'] tracking-wide">
            FuelHub - วิเคระห์จากกี่ต่อราคา
          </p>
        </div>
      </footer>
    </div>
  );
}
