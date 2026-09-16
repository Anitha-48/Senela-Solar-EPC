import PageHero from "../components/PageHero";
import SolarCalculator from "../components/SolarCalculator";

export default function SolarCalculatorPage() {
  return (
    <>
      <PageHero
        crumb="Solar Calculator"
        title="Solar Calculator"
        description=""
      />
      <section className="section">
        <div className="container">
          <SolarCalculator />
        </div>
      </section>
    </>
  );
}
