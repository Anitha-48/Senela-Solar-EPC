import PageHero from "../components/PageHero";

const content = {
  privacy: {
    title: "Privacy Policy",
    body: `This is placeholder legal content. Replace with your company's actual privacy
    policy covering what data is collected through this website (e.g. contact form
    submissions), how it is used, stored, and any third parties it may be shared with.`,
  },
  terms: {
    title: "Terms & Conditions",
    body: `This is placeholder legal content. Replace with your company's actual terms of
    use covering website usage, intellectual property, liability and applicable
    jurisdiction.`,
  },
};

export default function LegalPage({ type }) {
  const c = content[type];
  return (
    <>
      <PageHero crumb={c.title} title={c.title} description="" />
      <section className="section">
        <div className="container content-lg">
          <p>{c.body}</p>
        </div>
      </section>
    </>
  );
}
/* Direct image placeholder section */
<section className="page-direct-image">
  <img src="/placeholder.jpg" alt="Placeholder illustration" style={{ width: "100%", height: "auto" }} />
</section>
