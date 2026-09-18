import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  PlugZap,
  Gauge,
  Building,
  Home as HomeIcon,
  Factory,
  Sun,
  Cpu,
  ShieldCheck,
  FileText,
  DraftingCompass,
  BadgeCheck,
  Wrench,
  ClipboardCheck,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import ProcessTimeline from "../components/ProcessTimeline";

const steps = [
  {
    title: "Site Assessment",
    icon: FileText,
    description:
      "Roof or site survey, shadow analysis, electrical inspection and energy consumption study.",
  },
  {
    title: "System Design",
    icon: DraftingCompass,
    description:
      "Custom solar layout, capacity calculation and inverter sizing based on your energy profile.",
  },
  {
    title: "Utility & Net Metering",
    icon: BadgeCheck,
    description:
      "Support with applicable utility documentation, approvals and net-metering requirements.",
  },
  {
    title: "Professional Installation",
    icon: Wrench,
    description:
      "Mounting structure, solar modules, inverter, cabling, protection and grounding installation.",
  },
  {
    title: "Testing & Commissioning",
    icon: ClipboardCheck,
    description:
      "System testing, electrical checks, grid synchronisation and final commissioning.",
  },
];

export default function OnGridSolar() {
  return (
    <div className="on-grid-page">
      {/* Hero */}
            {/* Overview */}
      <section className="section">
        <div className="container split-section">

          <ScrollReveal className="split-section__media">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop"
              alt="On-grid rooftop solar installation"
            />
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="eyebrow-line">
              OVERVIEW
            </div>

            <h2>
              Solar That Works With Your Existing on-Grid Connection
            </h2>

            <p>
              On-grid solar systems allow your property to generate electricity
              directly from sunlight while remaining connected to the utility
              grid. Solar power generated during the day can be used to operate
              your appliances, equipment, lighting and other electrical loads.
            </p>

            <p>
              When solar generation is higher than your immediate consumption,
              surplus electricity may be exported to the utility grid through
              the applicable metering arrangement. When solar generation is
              insufficient, electricity can be drawn from the grid as required.
            </p>

            <p>
              Senela Solar designs on-grid systems for residential rooftops,
              commercial properties, institutions and industrial facilities,
              with system capacity based on actual energy consumption,
              available installation area and site conditions.
            </p>


          </ScrollReveal>

        </div>
      </section>

      {/* How It Works */}
      <section className="section section--light">
        <div className="container">

          <SectionTitle
            eyebrow="HOW IT WORKS"
            title="From Sunlight to Savings"
            description="A grid-connected solar system converts sunlight into usable electricity and intelligently works alongside your existing electrical connection."
          />

          <div className="card-grid card-grid--3">

            <ScrollReveal>
              <div className="bracket-frame how-it-works-card">
                <div className="how-it-works-card__media">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=900&auto=format&fit=crop"
                    alt="Solar panels producing electricity"
                  />
                </div>

                <span className="solution-card__icon">
                  <Sun size={22} />
                </span>

                <h3>Generate</h3>

                <p>
                  Solar photovoltaic modules capture sunlight and convert it
                  into DC electricity. The solar inverter then converts this
                  energy into usable AC power.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="bracket-frame how-it-works-card">
                <div className="how-it-works-card__media">
                  <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop"
                    alt="Electrical power distribution lines"
                  />
                </div>

                <span className="solution-card__icon">
                  <PlugZap size={22} />
                </span>

                <h3>Use Solar Power</h3>

                <p>
                  The generated solar electricity is supplied to your
                  property's electrical loads, helping reduce the amount of
                  electricity purchased from the utility grid.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="bracket-frame how-it-works-card">
                <div className="how-it-works-card__media">
                  <img
                    src="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=900&auto=format&fit=crop"
                    alt="Solar energy sent to the electricity grid"
                  />
                </div>

                <span className="solution-card__icon">
                  <Gauge size={22} />
                </span>

                <h3>Export Surplus</h3>

                <p>
                  When generation exceeds immediate consumption, surplus
                  electricity can be exported to the grid according to the
                  applicable utility and metering arrangement.
                </p>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">

          <SectionTitle
            eyebrow="BENEFITS"
            title="Why On-grid Solar Makes Sense"
            description="A practical renewable-energy solution for customers looking to reduce electricity expenditure and make better use of available solar energy."
          />

          <ul className="two-col-list">

            <li>
              
              Reduce electricity expenses through on-site solar generation
            </li>

            <li>
              
              No battery bank required for standard grid-connected operation
            </li>

            <li>
            
              Utilise surplus generation through applicable grid-export or
              net-metering arrangements
            </li>

            <li>
              
              Lower long-term dependence on conventional grid electricity
            </li>

            <li>
             
              Low routine maintenance with no large battery bank to maintain
            </li>

            <li>
              Scalable solutions for residential, commercial and industrial
              applications
            </li>

            <li>
              
              Make productive use of available rooftop and open installation
              space
            </li>

            <li>
             
              Generate clean renewable electricity and reduce your carbon
              footprint
            </li>

          </ul>
        </div>
      </section>

      {/* Applications */}
      <section className="section section--light">
        <div className="container">

          <SectionTitle
            eyebrow="APPLICATIONS"
            title="Where On-grid Solar Fits"
            description="Senela Solar develops grid-connected systems for a wide range of energy consumers."
          />

          <div className="card-grid card-grid--3">

            <ScrollReveal>
              <div className="bracket-frame application-card">
                <div className="application-card__media">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YUFGmOHQKZ6XJa4FyStGyDK7B5-NlzrEkuA9m7sqi6JhM1xKAumiy35z&s=10"
                    alt="Home with rooftop solar panels"
                  />
                </div>

                <span className="solution-card__icon">
                  {/* <HomeIcon size={22} /> */}
                </span>

                <h3>Residential Rooftops</h3>

                <p>
                  Solar solutions for independent homes and residential
                  properties looking to reduce monthly electricity costs and
                  generate clean power during daylight hours.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="bracket-frame application-card">
                <div className="application-card__media">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XN0gQjFrsjeyQ6OnJ2UVbVGkYSeXnmEN2UzOKNnM6A&s=10"
                    alt="Commercial building for a solar installation"
                  />
                </div>

                <span className="solution-card__icon">
                  {/* <Building size={22} /> */}
                </span>

                <h3>Commercial Buildings</h3>

                <p>
                  Efficient solar systems for offices, retail spaces,
                  schools, hospitals, hotels and other facilities with
                  predictable daytime electricity consumption.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="bracket-frame application-card">
                <div className="application-card__media">
                  <img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=900&auto=format&fit=crop"
                    alt="Industrial facility with energy equipment"
                  />
                </div>

                <span className="solution-card__icon">
                  {/* <Factory size={22} /> */}
                </span>

                <h3>Industrial Facilities</h3>

                <p>
                  High-capacity solar solutions for factories, warehouses and
                  manufacturing facilities with significant daytime energy
                  requirements.
                </p>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Engineering Approach */}
      <section className="section">
        <div className="container">

          <SectionTitle
            eyebrow="SENELA ENGINEERING"
            title="Built Around Your Site. Designed for Your Load."
            description="Our solar systems are planned around the real operating conditions of your property."
          />

          <div className="card-grid card-grid--3">

            <ScrollReveal>
              <div className="bracket-frame">

                <span className="solution-card__icon">
                  {/* <Sun size={22} /> */}
                </span>

                <h3>Solar Potential</h3>

                <p>
                  We evaluate orientation, available area and shading
                  conditions to make effective use of your site's solar
                  potential.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="bracket-frame">

                <span className="solution-card__icon">
                  <Cpu size={22} />
                </span>

                <h3>System Optimisation</h3>

                <p>
                  Module arrangement, inverter selection and system capacity
                  are planned according to your consumption and operating
                  requirements.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="bracket-frame">

                <span className="solution-card__icon">
                  {/* <ShieldCheck size={22} /> */}
                </span>

                <h3>Electrical Safety</h3>

                <p>
                  Proper protection, grounding, cabling and commissioning
                  practices are incorporated into the system design and
                  installation.
                </p>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--light">
        <div className="container">

          <SectionTitle
            eyebrow="OUR PROCESS"
            title="From Site Visit to Grid Connection"
            description="A structured project process designed to make your transition to solar simple, transparent and reliable."
          />

          <ProcessTimeline steps={steps} />

        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">

          <h2>
            Ready to Make the Switch to Solar?
          </h2>

          <p>
            Discover the right on-grid solar solution for your home,
            commercial property or industrial facility.
          </p>

          <NavLink
            to="/solar-calculator"
            className="btn btn--primary"
          >
            Calculate Your Solar Potential
            <ArrowRight />
          </NavLink>

        </div>
      </section>
    </div>
  );
}
