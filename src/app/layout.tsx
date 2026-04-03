import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ศูนย์ข้อมูลราคาเชื้อเพลิงแห่งประเทศไทย | FuelHub",
  description: "แปลลุตความจัดการราคาเชื้อเพลิงสมัยเรียลไทม์และสรุปดิเคราะห์ศูนย์ข้อมูลราคาหยดชอบแต่งตั้ง",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#f8f9fb] via-[#e8ecf3] to-[#f3f4f6] antialiased">
        {/* Navigation */}
        <nav className="bg-white border-b-2 border-[#002576] sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-98">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/" className="flex flex-col gap-0 hover:opacity-80 transition-opacity">
              <div className="text-2xl font-bold text-[#002576] font-['Plus_Jakarta_Sans'] tracking-tight">
                ศูนย์ข้อมูลราคาเชื้อเพลิง
              </div>
              <div className="text-xs text-[#555555] font-['Prompt'] font-semibold tracking-widest uppercase">
                FuelHub
              </div>
            </Link>
            <div className="flex items-center space-x-8 font-['Prompt']">
              <Link
                href="/dashboard"
                className="text-[#191c1e] hover:text-[#002576] transition-colors text-xs font-semibold tracking-widest hover:border-b-2 hover:border-[#002576] pb-1 uppercase"
              >
                หน้าแรก
              </Link>
              <Link
                href="/alerts"
                className="text-[#191c1e] hover:text-[#002576] transition-colors text-xs font-semibold tracking-widest hover:border-b-2 hover:border-[#002576] pb-1 uppercase"
              >
                เตือนวิทยุ
              </Link>
              <Link
                href="/stations"
                className="text-[#191c1e] hover:text-[#002576] transition-colors text-xs font-semibold tracking-widest hover:border-b-2 hover:border-[#002576] pb-1 uppercase"
              >
                สถานี
              </Link>
              <Link
                href="/trends"
                className="text-[#191c1e] hover:text-[#002576] transition-colors text-xs font-semibold tracking-widest hover:border-b-2 hover:border-[#002576] pb-1 uppercase"
              >
                แนวโน้ม
              </Link>
              <Link
                href="/siam-fuel-flow"
                className="text-[#191c1e] hover:text-[#002576] transition-colors text-xs font-semibold tracking-widest hover:border-b-2 hover:border-[#002576] pb-1 uppercase"
              >
                ภาคคว่า
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
