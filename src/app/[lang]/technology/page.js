import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../../dictionaries";

export default async function Technology(props) {
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
                <h1>Notre Stack Technologique</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single_service">
                <i className="fa fa-code" style={{ fontSize: '40px', color: '#0057FF' }}></i>
                <h4>Intelligence Artificielle</h4>
                <p>LLM intégré (Gemini/OpenAI) pour le scoring financier et le NLP du Bot WhatsApp.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_service">
                <i className="fa fa-database" style={{ fontSize: '40px', color: '#0057FF' }}></i>
                <h4>Data & Analytics</h4>
                <p>Pipeline de données temps réel et data lake pour l'entraînement de nos modèles.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_service">
                <i className="fa fa-cloud" style={{ fontSize: '40px', color: '#0057FF' }}></i>
                <h4>Infrastructure Cloud</h4>
                <p>Architecture Cloud-Native sur AWS/GCP avec haute disponibilité (SLA 99.9%).</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="single_service">
                <i className="fa fa-mobile" style={{ fontSize: '40px', color: '#0057FF' }}></i>
                <h4>WhatsApp API</h4>
                <p>Meta Cloud API pour un accès universel sur tous les types de téléphones.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="single_service">
                <i className="fa fa-microchip" style={{ fontSize: '40px', color: '#0057FF' }}></i>
                <h4>IoT - Boîtier ALODO</h4>
                <p>Edge computing, connectivité GSM/WiFi et mises à jour firmware OTA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
