import HeroSection from "@/components/home/HeroSection";
import FlexDisplay from "@/components/utils/FlexDisplay";
import Button from "@/components/utils/Button";
import { ConfigProvider } from "antd";
import OurCustomer from "@/components/home/OurCustomer";
import Banner from "@/components/utils/Banner";
export default function Home() {
  return (
    <ConfigProvider>
      <div className="app font-primary">
        {/* Hero Section */}
        <HeroSection />
        {/* Our mission section */}
        <FlexDisplay>
          <div className="action-header">OUR MISSION</div>
          <h1 className="header-2">An hospital that lives in your pocket</h1>
          <p className="p-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            dignissim aliquam interdum id tincidunt sed vitae elementum sapien.
            In amet sapien feugiat massa velit.
          </p>
          <div>
            <Button size="lg" value="About Medic App" />
          </div>
        </FlexDisplay>
        <Banner />
        <OurCustomer />
      </div>
    </ConfigProvider>
  );
}
