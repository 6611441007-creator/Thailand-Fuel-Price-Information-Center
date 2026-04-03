'use client';

import Link from "next/link";

export default function SiamFuelFlowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#e8ecf3] to-[#f3f4f6]">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M30 0v60M0 30h60\' stroke=\'%23002576\' fill=\'none\'/></svg>')] bg-repeat"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-bold text-[#002576] font-['Plus_Jakarta_Sans'] drop-shadow-lg tracking-tight leading-normal">
              🔄 ระบบจำหน่ายเชื้อเพลิง
            </h1>
            <p className="text-base text-[#191c1e] mt-3 font-['Prompt'] font-normal tracking-normal leading-relaxed">
              ภาพรวมที่มาซีมวา และการจะหน่าย
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Supply Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#e1e2e4] hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#002576] mb-6 font-['Prompt'] tracking-wide">
                📦 ภาพรวมการจัดหาสมดซำ
              </h3>
              <div className="space-y-4">
                <button onClick={() => alert('โรงกลั่นน้ำมัน 3 แห่งกำลังทำงาน')}
                  className="w-full text-left hover:opacity-80 active:scale-95 transition-all cursor-pointer">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-[#191c1e] font-['Prompt'] tracking-tight">
                      โรงกลั่นน้ำมัน
                    </span>
                    <span className="text-sm font-bold text-[#002576] font-['Prompt'] tracking-tight">
                      3 แห่ง
                    </span>
                  </div>
                  <div className="w-full bg-[#f3f4f6] rounded-full h-3">
                    <div className="bg-[#002576] h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </button>
                <button onClick={() => alert('ศูนย์จำหน่าย 14 แห่งกำลังทำงาน')}
                  className="w-full text-left hover:opacity-80 active:scale-95 transition-all cursor-pointer">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-[#191c1e] font-['Prompt'] tracking-tight">
                      ศูนย์จำหน่าย
                    </span>
                    <span className="text-sm font-bold text-[#002576] font-['Prompt'] tracking-tight">
                      14 แห่ง
                    </span>
                  </div>
                  <div className="w-full bg-[#f3f4f6] rounded-full h-3">
                    <div className="bg-[#002576] h-3 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Regional Data */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#e1e2e4] hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#002576] mb-6 font-['Prompt'] tracking-wide">
                🗺️ การจำหน่ายตามขุม-uภูมิภาภส์
              </h3>
              <div className="space-y-4">
                {['ภาคเหนือ', 'ภาคกลาง', 'ภาคตะวันออกเฉียงเหนือ', 'ภาคใต้'].map((region) => (
                  <button key={region} onClick={() => alert(`ข้อมูล ${region}`)}
                    className="flex items-center justify-between w-full hover:opacity-80 active:scale-95 transition-all cursor-pointer p-3 rounded-lg hover:bg-[#f3f4f6]">
                    <span className="text-sm font-bold text-[#191c1e] font-['Prompt'] tracking-tight">
                      {region}
                    </span>
                    <span className="text-sm font-bold text-[#9f4200] font-['Prompt'] tracking-tight">
                      {Math.floor(Math.random() * 15 + 15)}%
                    </span>
                  </button>
                ))}
              </div>
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
            FuelHub - ภาคควาจมน้ายผลงสูทร
          </p>
        </div>
      </footer>
    </div>
  );
}
