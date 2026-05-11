import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../../dictionaries";

export default async function Careers(props) {
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
                <h1>Rejoindre l'Aventure</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_page_area section-padding">
        <div className="container text-center">
          <h2>Notre Culture</h2>
          <p className="mt-3">Chez ALODO TECH, nous construisons plus qu'une plateforme : nous bâtissons l'avenir numérique de l'Afrique. Nous recherchons des esprits brillants, ambitieux et passionnés par l'impact.</p>
          
          <div className="row mt-5">
            <div className="col-lg-12">
              <div style={{ background: '#f9f9f9', padding: '50px', borderRadius: '20px', border: '2px solid #0057FF' }}>
                <h3>Offres Ouvertes</h3>
                <p className="mt-4">Nous sommes actuellement en phase de croissance. De nouvelles opportunités seront bientôt disponibles.</p>
                <a href={`/${lang}/contact`} className="btn_one mt-3">Envoyer une candidature spontanée</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
