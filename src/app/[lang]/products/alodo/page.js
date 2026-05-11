import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../../../dictionaries";

export default async function AlodoProduct(props) {
  const params = await props.params;
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict} lang={lang} />

      {/* START SECTION TOP */}
      <section className="section-top" style={{ backgroundImage: "url(/assets/img/bg/section-top.png)", backgroundSize: "cover", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="section-top-title">
                <h1>{dict.products.alodo_title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION TOP */}

      {/* PRODUCT CONTENT */}
      <section className="about_page_area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12">
              <div className="single_about_content">
                <h2>Le Problème</h2>
                <p>80% des MPME africaines n'ont pas accès au crédit formel à cause de l'absence d'historique financier numérique. Les transactions en cash rendent ces entreprises invisibles aux yeux des institutions financières.</p>
                <h2 className="mt-5">La Solution ALODO</h2>
                <p>Nous installons un boîtier intelligent (IoT) au point de vente qui enregistre automatiquement les transactions. Couplé à un Bot WhatsApp accessible, ALODO crée un score de crédit fiable pour chaque marchand.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 text-center">
              <img src="/assets/img/icon/research.png" alt="ALODO Box" style={{ width: '200px', marginBottom: '30px' }} />
              <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '15px' }}>
                <h4>Impact MPME</h4>
                <ul style={{ textAlign: 'left', listStyle: 'none', padding: '0' }}>
                  <li>✅ Accès au crédit pour la première fois</li>
                  <li>✅ Visibilité financière numérique</li>
                  <li>✅ Croissance mesurable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO PLACEHOLDER */}
      <section className="section-padding" style={{ background: '#0057FF', color: '#fff' }}>
        <div className="container text-center">
          <h2>Démo du Flux ALODO</h2>
          <p>Vente ➡️ Enregistrement IoT ➡️ Score IA ➡️ Crédit Bancaire</p>
          <div className="mt-5" style={{ background: 'rgba(255,255,255,0.1)', padding: '50px', borderRadius: '20px', border: '1px dashed #fff' }}>
            [ Simulateur Interactif en cours de développement ]
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
