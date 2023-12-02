import { HeroSection } from '@/components/HeroSection';
import AchievmentSection from '@/components/AchievmentSection';
import { AboutSection } from '@/components/AboutSection';
import { AboutSection2 } from '@/components/AboutSection2';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CTAStats } from '@/components/CTAStats';
import { EmailSection } from '@/components/EmailSection';
import { Features } from '@/components/Features';
import SkillsSection from '@/components/SkillsSection';

export default function HomePage() {
  return (
    <div className='wrapper-main'>
      <HeroSection />
      <AchievmentSection />
      <AboutSection />
      <AboutSection2 />
      <ProjectsSection />
      <CTAStats />
      <EmailSection />
      <Features />
      <SkillsSection />
    </div>
  );
}
