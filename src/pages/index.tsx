import HeroSection from "@/components/home/HeroSection";
import FlexDisplay from "@/components/utils/FlexDisplay";
import Button from "@/components/utils/Button";
import { ConfigProvider } from "antd";
import OurCustomer from "@/components/home/OurCustomer";
import Banner from "@/components/utils/Banner";
import OurFeatures from "@/components/home/OurFeatures";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <ConfigProvider>
      <div className="font-primary">
        {/* Hero Section */}
        <HeroSection />
        {/* OurFeatures section */}
        <OurFeatures />
        {/* Our mission section */}
        <FlexDisplay>
          <div className="action-header">OUR MISSION</div>
          <h1 className="header-2">
            Our mission is to make healthcare more accessible
          </h1>
          <p className="p-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            dignissim aliquam interdum id tincidunt sed vitae elementum sapien.
            In amet sapien feugiat massa velit.
          </p>
          <div>
            <Button size="lg" value="About Medic App" />
          </div>
        </FlexDisplay>
        <Banner direction="verical" />
        <OurCustomer />
        <Footer />
      </div>
    </ConfigProvider>
  );
}
