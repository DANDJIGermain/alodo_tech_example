import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../../../dictionaries";

export default async function CoinaiProduct(props) {
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
                <h1>{dict.products.coinai_title}</h1>
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
            <div className="col-lg-6 col-sm-12 text-center">
              <img src="/assets/img/icon/brand.png" alt="COINAI" style={{ width: '200px', marginBottom: '30px' }} />
              <div style={{ background: '#f9f9f9', padding: '30px', borderRadius: '15px' }}>
                <h4>Intelligence Marché</h4>
                <p>Analyse prédictive des marchés émergents grâce au Machine Learning.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="single_about_content">
                <h2>Positionnement Stratégique</h2>
                <p>COINAI est notre plateforme d'IA dédiée à l'investissement sur les marchés africains et émergents. Nous automatisons le trading et l'analyse de données pour maximiser les rendements tout en gérant le risque.</p>
                <h2 className="mt-5">Features Clés</h2>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                  <li>🚀 Signaux d'achat/vente automatisés</li>
                  <li>📊 Portfolio tracking multi-actifs</li>
                  <li>🤖 Rapports d'analyse IA hebdomadaires</li>
                  <li>🔌 API pour intégration brokers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
