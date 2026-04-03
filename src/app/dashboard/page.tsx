'use client';

import Link from "next/link";

export default function DashboardPage() {
  const fuelData = [
    { name: 'แอลกอฮอล์ 91', price: 32.10, change: -0.25, status: 'down', color: '#004f1c' },
    { name: 'แอลกอฮอล์ 95', price: 32.50, change: -0.25, status: 'down', color: '#004f1c' },
    { name: 'แอลกอฮอล์ 97', price: 33.20, change: -0.50, status: 'down', color: '#004f1c' },
    { name: 'ดีเซล B7', price: 30.45, change: 0.10, status: 'up', color: '#ba1a1a' },
    { name: 'ดีเซล 10 PPM', price: 30.85, change: 0.50, status: 'up', color: '#ba1a1a' },
    { name: 'E20', price: 31.95, change: -0.15, status: 'down', color: '#004f1c' },
  ];

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
                📊 แดชบอร์ดราคาเชื้อเพลิง
              </h1>
              <p className="text-base text-[#555555] mt-2 font-['Prompt'] font-medium">
                ข้อมูลราคาเชื้อเพลิงสมัยเรียลไทม์ | อัปเดต: ล่าสุด 2 นาที
              </p>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-[#002576]">
              <p className="text-sm text-[#555555] font-['Prompt'] font-medium">ราคาสูงสุด</p>
              <p className="text-3xl font-bold text-[#002576] mt-2">฿33.20</p>
              <p className="text-xs text-[#999] mt-1">แอลกอฮอล์ 97</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-[#ba1a1a]">
              <p className="text-sm text-[#555555] font-['Prompt'] font-medium">ราคาต่ำสุด</p>
              <p className="text-3xl font-bold text-[#ba1a1a] mt-2">฿30.10</p>
              <p className="text-xs text-[#999] mt-1">E20</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-[#9f4200]">
              <p className="text-sm text-[#555555] font-['Prompt'] font-medium">ราคาเฉลี่ย</p>
              <p className="text-3xl font-bold text-[#9f4200] mt-2">฿31.78</p>
              <p className="text-xs text-[#999] mt-1">ทั้ง 6 ประเภท</p>
            </div>
          </div>

          {/* Featured Fuel Cards */}
          <div>
            <h2 className="text-xl font-bold text-[#1a1a1a] font-['Prompt'] mb-4 tracking-tight">ราคาเชื้อเพลิงปัจจุบัน</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {fuelData.map((fuel) => (
                <button
                  key={fuel.name}
                  onClick={() => alert(`${fuel.name}: ฿${fuel.price.toFixed(2)}`)}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all text-left cursor-pointer border-l-4"
                  style={{ borderLeftColor: fuel.color }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-base font-bold text-[#1a1a1a] font-['Prompt']">{fuel.name}</p>
                    <div className="text-right">
                      <span className="text-sm font-bold" style={{ color: fuel.color }}>
                        {fuel.status === 'down' ? '↓' : '↑'} {Math.abs(fuel.change).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-[#002576] font-['Plus_Jakarta_Sans']">
                    ฿{fuel.price.toFixed(2)}
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r rounded-full" style={{
                    background: `linear-gradient(90deg, ${fuel.color}80 0%, ${fuel.color}20 100%)`
                  }}></div>
                  <p className="text-xs text-[#999] mt-3 font-['Prompt']">เปลี่ยนแปลง 24 ชั่วโมง</p>
                </button>
              ))}
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-[#e1e2e4]">
            <h2 className="text-xl font-bold text-[#1a1a1a] font-['Prompt'] mb-6">แนวโน้มราคา (สัปดาห์นี้)</h2>
            <div className="h-48 bg-gradient-to-b from-[#002576]10 to-[#0038a8]05 rounded-lg p-4 flex items-end justify-around">
              {[65, 72, 58, 78, 81, 68, 75].map((height, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className="w-8 rounded-t-md bg-gradient-to-t from-[#002576] to-[#0038a8] shadow-sm"
                    style={{ height: `${height}%` }}
                  ></div>
                  <p className="text-xs text-[#555555]">วัน {i + 1}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-[#999]">
              <span>จันทร์</span>
              <span>อังคาร</span>
              <span>พุธ</span>
              <span>พฤหัส</span>
              <span>ศุกร์</span>
              <span>เสาร์</span>
              <span>อาทิตย์</span>
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
            ข้อมูลล่าสุด | อัปเดตทุก 30 นาที © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
