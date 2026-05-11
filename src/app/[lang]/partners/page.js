import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../../dictionaries";

export default async function Partners(props) {
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
                <h1>Investir dans ALODO TECH</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_page_area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="single_about_content">
                <h2>Rejoindre la révolution financière africaine</h2>
                <p>L'Afrique subsaharienne compte plus de 44 millions de MPME, dont la grande majorité est sous-équipée numériquement. ALODO TECH offre une opportunité unique d'investir dans une infrastructure scalable qui capture la donnée là où elle se trouve : sur le terrain.</p>
                <h4 className="mt-4">Pourquoi maintenant ?</h4>
                <ul>
                  <li>Early stage : Potentiel de croissance exponentiel</li>
                  <li>Timing marché : Accélération de la digitalisation post-COVID</li>
                  <li>Équipe : Co-fondateurs expérimentés et visionnaires</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div style={{ background: '#0057FF', color: '#fff', padding: '40px', borderRadius: '20px' }}>
                <h3>Accès au Pitch Deck</h3>
                <p>Notre deck investisseur est disponible sur demande sécurisée.</p>
                <a href={`/${lang}/contact`} className="btn_one mt-3" style={{ background: '#fff', color: '#0057FF' }}>Demander le Deck</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
