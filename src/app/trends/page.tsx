'use client';

import Link from "next/link";

export default function TrendsPage() {
  const weeklyData = [
    { day: 'จ', temp: 32.5, gasohol91: 32.80, gasohol95: 32.50, diesel: 30.85 },
    { day: 'อ', temp: 32.3, gasohol91: 32.75, gasohol95: 32.45, diesel: 30.80 },
    { day: 'พ', temp: 32.1, gasohol91: 32.50, gasohol95: 32.10, diesel: 30.45 },
    { day: 'พฤ', temp: 32.4, gasohol91: 32.60, gasohol95: 32.30, diesel: 30.65 },
    { day: 'ศ', temp: 32.6, gasohol91: 32.70, gasohol95: 32.40, diesel: 30.80 },
    { day: 'ส', temp: 32.2, gasohol91: 32.55, gasohol95: 32.20, diesel: 30.75 },
    { day: 'อา', temp: 32.5, gasohol91: 32.50, gasohol95: 32.10, diesel: 30.85 },
  ];

  const maxPrice = 33.20;
  const minPrice = 30.10;
  const avgPrice = 31.78;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fb] via-[#e8ecf3] to-[#f3f4f6]">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M30 0v60M0 30h60\' stroke=\'%23002576\' fill=\'none\'/></svg>')] bg-repeat"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#002576] to-[#0038a8] rounded-full flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C12 2 6 8 6 14c0 3.314 2.686 6 6 6s6-2.686 6-6c0-6-6-12-6-12z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-[#1a1a1a] font-['Plus_Jakarta_Sans'] leading-tight">
                📈 วิเคราะห์แนวโน้มราคา
              </h1>
              <p className="text-base text-[#555555] mt-2 font-['Prompt'] font-medium">
                ประวัติราคาเชื้อเพลิง 7 วัน + สถิติ
              </p>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-[#ba1a1a]">
              <p className="text-sm text-[#555555] font-['Prompt'] font-medium">ราคาสูงสุด</p>
              <p className="text-2xl font-bold text-[#ba1a1a] mt-2">฿{maxPrice}</p>
              <p className="text-xs text-[#999] mt-1 font-['Prompt']">แอลกอฮอล์ 97 (3 เม.ย.)</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-[#004f1c]">
              <p className="text-sm text-[#555555] font-['Prompt'] font-medium">ราคาต่ำสุด</p>
              <p className="text-2xl font-bold text-[#004f1c] mt-2">฿{minPrice}</p>
              <p className="text-xs text-[#999] mt-1 font-['Prompt']">ดีเซล B7 (1 เม.ย.)</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-[#9f4200]">
              <p className="text-sm text-[#555555] font-['Prompt'] font-medium">ราคาเฉลี่ย</p>
              <p className="text-2xl font-bold text-[#9f4200] mt-2">฿{avgPrice}</p>
              <p className="text-xs text-[#999] mt-1 font-['Prompt']">ทุกประเภท</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-[#002576]">
              <p className="text-sm text-[#555555] font-['Prompt'] font-medium">เปลี่ยนแปลง</p>
              <p className="text-2xl font-bold text-[#004f1c] mt-2">-0.32%</p>
              <p className="text-xs text-[#999] mt-1 font-['Prompt']">ลดลง 7 วัน</p>
            </div>
          </div>

          {/* Main Chart */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-[#e1e2e4]">
            <h2 className="text-xl font-bold text-[#1a1a1a] font-['Prompt'] mb-6">ราคาเชื้อเพลิงในช่วง 7 วัน</h2>
            
            {/* Chart */}
            <div className="mb-8">
              <div className="h-64 bg-gradient-to-b from-[#002576]10 to-[#0038a8]05 rounded-lg p-6 flex items-end justify-around gap-2">
                {weeklyData.map((data, i) => {
                  const dataPoints = [data.gasohol91, data.gasohol95, data.diesel];
                  const avg = dataPoints.reduce((a, b) => a + b) / 3;
                  const normalizedHeight = ((avg - 30) / (33 - 30)) * 100;
                  
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full rounded-t-md bg-gradient-to-t from-[#002576] to-[#0038a8] shadow-sm relative group cursor-pointer hover:from-[#0038a8] hover:to-[#004fb0]"
                        style={{ height: `${Math.max(normalizedHeight, 10)}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#1a1a1a] text-white px-2 py-1 rounded text-xs whitespace-nowrap font-['Prompt']">
                          ฿{avg.toFixed(2)}
                        </div>
                      </div>
                      <p className="text-xs text-[#555555] font-['Prompt'] font-medium">{data.day}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 text-center text-sm text-[#999] font-['Prompt']">
                กราฟแสดงราคาเฉลี่ยของเชื้อเพลิงทั้ง 3 ประเภท
              </div>
            </div>

            {/* Fuel Type Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#e1e2e4]">
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] font-['Prompt'] mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#002576]"></span>
                  แอลกอฮอล์ 91
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-[#555555]">สูงสุด: <span className="font-bold">฿32.80</span></p>
                  <p className="text-[#555555]">ต่ำสุด: <span className="font-bold">฿32.50</span></p>
                  <p className="text-[#555555]">เฉลี่ย: <span className="font-bold">฿32.62</span></p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] font-['Prompt'] mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#0038a8]"></span>
                  แอลกอฮอล์ 95
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-[#555555]">สูงสุด: <span className="font-bold">฿32.50</span></p>
                  <p className="text-[#555555]">ต่ำสุด: <span className="font-bold">฿32.10</span></p>
                  <p className="text-[#555555]">เฉลี่ย: <span className="font-bold">฿32.27</span></p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1a1a1a] font-['Prompt'] mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-[#9f4200]"></span>
                  ดีเซล 10 PPM
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-[#555555]">สูงสุด: <span className="font-bold">฿30.85</span></p>
                  <p className="text-[#555555]">ต่ำสุด: <span className="font-bold">฿30.45</span></p>
                  <p className="text-[#555555]">เฉลี่ย: <span className="font-bold">฿30.72</span></p>
                </div>
              </div>
            </div>
          </div>

          <Link href="/" className="w-full bg-gradient-to-r from-[#002576] to-[#0038a8] text-white px-8 py-4 rounded-lg font-semibold font-['Prompt'] hover:shadow-lg transition-all active:scale-95 block text-center cursor-pointer shadow-md uppercase tracking-wide text-sm">
            ← กลับหน้าแรก
          </Link>
        </div>
      </div>
      <footer className="relative border-t-2 border-[#ddd] bg-[#f5f5f5] mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-[#1a1a1a] font-['Prompt'] font-medium">
            ศูนย์ข้อมูลราคาเชื้อเพลิงแห่งประเทศไทย (FuelHub)
          </p>
          <p className="text-xs text-[#666666] font-['Prompt'] mt-2">
            ข้อมูลประวัติ 7 วัน | อัปเดต: ล่าสุด © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
