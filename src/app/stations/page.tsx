'use client';

import Link from "next/link";

export default function StationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#f3f4f6] to-[#e1e2e4]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-black text-[#002576] font-['Plus_Jakarta_Sans'] drop-shadow-lg tracking-tighter">
              📍 สถานีบริการเชื้อเพลิง
            </h1>
            <p className="text-base text-[#191c1e] mt-3 font-['Prompt'] font-medium tracking-wide">
              ค้นหาและเปรียบเทียบราคาเชื้อเพลิงใกล้คุณ
            </p>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Shell โครงการจัดสรรที่ดินกรุงเทพ', distance: '2.3 กม. จากตำแหน่งของคุณ' },
              { name: 'PTT สุขุมวิท 39', distance: '3.1 กม. จากตำแหน่งของคุณ' },
              { name: 'Caltex เพลินจิต', distance: '4.5 กม. จากตำแหน่งของคุณ' },
            ].map((station, idx) => (
              <button
                key={idx}
                onClick={() => alert(`ข้อมูลสถานี: ${station.name}`)}
                className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 hover:border-[#002576] transition-all active:scale-95 text-left cursor-pointer border border-[#e1e2e4]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#191c1e] font-['Prompt'] tracking-tight">
                      {station.name}
                    </h3>
                    <p className="text-sm text-[#191c1e] mt-2 font-['Prompt'] font-medium tracking-wide">
                      {station.distance}
                    </p>
                  </div>
                  <div className="text-2xl">→</div>
                </div>
              </button>
            ))}
          </div>

          <Link href="/" className="w-full bg-gradient-to-r from-[#002576] to-[#0038a8] text-white px-8 py-4 rounded-xl font-bold font-['Prompt'] hover:shadow-xl hover:scale-105 transition-all active:scale-95 block text-center cursor-pointer shadow-lg text-base">
            ← กลับหน้าแรก
          </Link>
        </div>
      </div>
    </div>
  );
}
