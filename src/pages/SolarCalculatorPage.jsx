import PageHero from "../components/PageHero";
import SolarCalculator from "../components/SolarCalculator";

export default function SolarCalculatorPage() {
  return (
    <>
      <PageHero
        title="Solar Calculator"
        description="Estimate your energy needs and explore the right solar solution for your property."
      />
      <section className="section">
        <div className="container">
          <SolarCalculator />
        </div>
      </section>
    </>
  );
}
