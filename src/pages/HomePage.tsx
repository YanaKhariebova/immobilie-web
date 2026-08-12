import { HeroSection } from '../components/organisms/HeroSection'
import { FeaturedPropertiesParallax } from '../components/organisms/FeaturedPropertiesParallax'
import { ServicesSection } from '../components/organisms/ServicesSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPropertiesParallax />
      <ServicesSection />
    </>
  )
}
