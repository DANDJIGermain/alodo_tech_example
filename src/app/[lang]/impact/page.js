import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../../dictionaries";

export default async function Impact(props) {
  const params = await props.params;
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict} lang={lang} />

      <section className="section-top" style={{ backgroundImage: "url(/assets/img/bg/section-top.png)", backgroundSize: "cover" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-top-title">
                <h1>Notre Impact Social</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORYTELLING */}
      <section className="about_page_area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="/assets/img/home-office.png" className="img-fluid" alt="Story" style={{ borderRadius: '20px' }} />
            </div>
            <div className="col-lg-6">
              <div className="single_about_content">
                <h2>L'histoire d'Amara</h2>
                <p>"Amara, vendeuse de tissu au marché de Cotonou, n'avait jamais eu de compte bancaire. Avec ALODO, ses ventes sont enregistrées automatiquement depuis 6 mois. Elle vient d'obtenir son premier microcrédit de 150 000 FCFA pour agrandir son stock."</p>
                <h4 className="mt-4">Axes d'Impact</h4>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                  <li>🌍 Inclusion financière pour les non-bancarisés</li>
                  <li>📉 Réduction du risque crédit via le scoring alternatif</li>
                  <li>📈 Croissance des MPME et création d'emplois</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ODD SECTION */}
      <section className="section-padding" style={{ background: '#f5f5f7' }}>
        <div className="container text-center">
          <h2>Objectifs de Développement Durable (ODD)</h2>
          <p>ALODO TECH est fier de contribuer directement aux objectifs mondiaux.</p>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div style={{ background: '#fff', padding: '30px', borderRadius: '15px' }}>
                <h3 style={{ color: '#0057FF' }}>ODD 8</h3>
                <p>Travail décent et croissance économique.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ background: '#fff', padding: '30px', borderRadius: '15px' }}>
                <h3 style={{ color: '#0057FF' }}>ODD 10</h3>
                <p>Réduction des inégalités financières.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
