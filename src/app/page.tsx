import { AgentiaOs } from "@/components/neo";
import { Hero } from "@/components/hero";
import PricingPage from "@/components/prices";
import Contact from "./contact/page"



export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
      <Hero />
      <AgentiaOs />
      <PricingPage />
      <Contact /> 
      </main>
    </div>
  );
}
