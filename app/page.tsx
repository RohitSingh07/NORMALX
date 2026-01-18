import SiteHeader from "@/components/site-header"
import HeroSlider from "@/components/hero-slider"
import ServicesGrid from "@/components/services-grid"
import Expertise from "@/components/expertise"
import StatsBrands from "@/components/stats-brands"
import CtaSection from "@/components/cta-section"
import SiteFooter from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSlider />
        <ServicesGrid />
        <Expertise />
        <StatsBrands />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
