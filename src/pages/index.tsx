import NavBar from "@/components/NavBar";
import HeroSection from "@/components/home/HeroSection";
import { ConfigProvider } from "antd";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <ConfigProvider>
      <div className="app font-primary">
        <HeroSection />
      </div>
    </ConfigProvider>
  );
}
