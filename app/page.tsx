
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import SkillsSection from "@/components/SkillsSection";
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center 
    items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <SkillsSection/>
        <Experience/>
        <RecentProjects/>
        <Approach/>
        <Grid/>
        <Footer/>
      </div>
    </main>
  );
}