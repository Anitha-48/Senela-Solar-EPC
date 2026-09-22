import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

import "../styles/serviceLanding.css";
import "../styles/utilityscale.css";

const projectImages = [
	"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
	"https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85",
	"https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
];

export default function UtilityScaleSolarPage() {
	const { t } = useTranslation();
	const page = t("solarServicePages.utilityScale", { returnObjects: true });

	return (
		<main className="service-landing-page utility-page">
			<section className="utility-hero">
				<div className="utility-hero__container">
					<div className="utility-hero__content">
						<span className="utility-eyebrow">{page.eyebrow}</span>
						<h1>
							{page.title}
							<span>{page.titleHighlight}</span>
						</h1>
						<p>{page.description[0]}</p>
						<p>{page.description[1]}</p>
						<div className="utility-actions">
							<Link to="/contact" className="utility-btn utility-btn--primary">
								{page.cta.primary}
							</Link>
							<a href="#capabilities" className="utility-btn utility-btn--secondary">
								{page.cta.secondary}
							</a>
						</div>
					</div>

					<div className="utility-hero__image">
						<img src={projectImages[0]} alt={page.imageAlt} />
						<div className="utility-hero__badge">
							<strong>{page.badgeTitle}</strong>
							<span>{page.badgeText}</span>
						</div>
					</div>
				</div>
			</section>

			<section className="utility-section utility-capabilities" id="capabilities">
				<div className="utility-container">
					<ScrollReveal>
						<SectionTitle
							eyebrow={page.sectionTitles.capabilities}
							title={page.sectionTitles.capabilitiesTitle}
							description={page.sectionTitles.capabilitiesDescription}
						/>
					</ScrollReveal>
					<div className="utility-card-grid">
						{page.capabilities.map((item, index) => (
							<ScrollReveal key={item.title} delay={index * 70}>
								<article className="utility-card">
									<span>{String(index + 1).padStart(2, "0")}</span>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</article>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			<section className="utility-section utility-system">
				<div className="utility-container">
					<ScrollReveal>
						<SectionTitle
							eyebrow={page.sectionTitles.benefits}
							title={page.sectionTitles.benefitsTitle}
							description={page.sectionTitles.benefitsDescription}
						/>
					</ScrollReveal>
					<div className="utility-system__layout">
						<ScrollReveal>
							<div className="utility-system__image">
								<img src={projectImages[1]} alt="Utility solar infrastructure" />
							</div>
						</ScrollReveal>
						<div className="utility-system__list">
							{page.benefits.map((benefit, index) => (
								<ScrollReveal key={benefit} delay={index * 50}>
									<article className="utility-component">
										<span>{String(index + 1).padStart(2, "0")}</span>
										<p>{benefit}</p>
									</article>
								</ScrollReveal>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="utility-section utility-projects">
				<div className="utility-container">
					<ScrollReveal>
						<SectionTitle
							eyebrow={page.sectionTitles.scope}
							title={page.sectionTitles.scopeTitle}
							description={page.sectionTitles.scopeDescription}
						/>
					</ScrollReveal>
					<div className="utility-project-grid">
						{page.projectScope.map((item, index) => (
							<ScrollReveal key={item.title} delay={index * 70}>
								<article className="utility-project-card">
									<img src={projectImages[index]} alt={item.title} />
									<div>
										<span>{String(index + 1).padStart(2, "0")}</span>
										<h3>{item.title}</h3>
										<p>{item.description}</p>
									</div>
								</article>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			<section className="utility-epc">
				<div className="utility-container utility-epc__inner">
					<div>
							<span className="utility-eyebrow">{page.cta.eyebrow}</span>
						<h2>{page.cta.title}</h2>
						<p>{page.cta.description}</p>
					</div>
					<Link to="/contact" className="utility-btn utility-btn--light">
						{page.cta.primary}
					</Link>
				</div>
			</section>

			<section className="utility-section utility-faq">
				<div className="utility-container">
					<ScrollReveal>
						<SectionTitle
							eyebrow={page.sectionTitles.faq}
							title={page.sectionTitles.faqTitle}
							description={page.sectionTitles.faqDescription}
						/>
					</ScrollReveal>
					<div className="utility-faq__list">
						{page.faqs.map((faq) => (
							<details className="utility-faq__item" key={faq.question}>
								<summary>
									<span>{faq.question}</span>
									<b>+</b>
								</summary>
								<p>{faq.answer}</p>
							</details>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
