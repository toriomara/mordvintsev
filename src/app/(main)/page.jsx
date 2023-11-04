import { AboutSection } from '@/components/AboutSection';
import AchievmentSection from '@/components/AchievmentSection';
import { CTAStats } from '@/components/CTAStats';
import { EmailSection } from '@/components/EmailSection';
import { Features } from '@/components/Features';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <div className='wrapper-main'>
      <HeroSection />
      <AchievmentSection />
      <AboutSection />
      <ProjectsSection />
      <CTAStats />
      <EmailSection />
      <Features />
      <SkillsSection />
    </div>
  );
}
