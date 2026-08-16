import { HeroSection } from '../components/organisms/HeroSection'
import { FeaturedPropertiesParallax } from '../components/organisms/FeaturedPropertiesParallax'
import { ServicesSection } from '../components/organisms/ServicesSection'
import { TestimonialsSection } from '../components/organisms/TestimonialsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPropertiesParallax />
      <ServicesSection />
      <TestimonialsSection />
    </>
  )
}
