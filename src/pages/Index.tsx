
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import PropertyTypes from "@/components/home/PropertyTypes";
import Features from "@/components/home/Features";
import PropertiesShowcase from "@/components/home/PropertiesShowcase";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <PropertyTypes />
      <Features />
      <PropertiesShowcase />
      <CallToAction />
    </Layout>
  );
};

export default Index;
