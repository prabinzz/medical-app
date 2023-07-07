import NavBar from "@/components/NavBar";
import HeroSection from "@/components/home/HeroSection";
import { ConfigProvider } from "antd";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fb6e67",
        },
        components: {
          Button: {
            margin: 10,
            borderRadius: 999,
          },
        },
      }}
    >
      <div className="app font-primary">
        <HeroSection />
      </div>
    </ConfigProvider>
  );
}
