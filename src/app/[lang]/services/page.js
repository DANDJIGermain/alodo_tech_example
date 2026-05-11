import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../../dictionaries";

export default async function Services(props) {
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
                <h1>{dict.services_page.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION TOP */}

      {/* SOLUTIONS CONTENT */}
      <section className="service_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_service">
                <i className="fa fa-user" style={{ fontSize: '40px', color: '#0057FF', marginBottom: '20px' }}></i>
                <h4>{dict.services_page.service1_title}</h4>
                <p>{dict.services_page.service1_desc}</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_service">
                <i className="fa fa-bank" style={{ fontSize: '40px', color: '#0057FF', marginBottom: '20px' }}></i>
                <h4>{dict.services_page.service2_title}</h4>
                <p>{dict.services_page.service2_desc}</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_service">
                <i className="fa fa-globe" style={{ fontSize: '40px', color: '#0057FF', marginBottom: '20px' }}></i>
                <h4>{dict.services_page.service3_title}</h4>
                <p>{dict.services_page.service3_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SOLUTIONS CONTENT */}

      {/* MARKET OPPORTUNITY (Replacing Pricing Table) */}
      <div className="pricing-table-area section-padding" style={{ backgroundImage: "url(/assets/img/bg/pricing-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title-white">{dict.services_page.pricing_title}</h2>
            <p className="section-title-white">{dict.services_page.pricing_desc}</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-12">
              <div className="pricingTable blue">
                <div className="pricingTable-header">
                  <div className="price-value">
                    <span className="amount">44M+</span>
                  </div>
                </div>
                <div className="pricing-content">
                  <h3 className="title">MPME en Afrique Subsaharienne</h3>
                  <p style={{ color: '#fff' }}>Un marché massif en attente de digitalisation.</p>
                  <ul>
                    <li>Potentiel de croissance élevé</li>
                    <li>Besoin critique de scoring financier</li>
                    <li>Transition vers l'économie formelle</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href={`/${lang}/contact`}>En savoir plus</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END PRICING TABLE */}

      {/* START PARTNER LOGO */}
      <div className="partner-logo section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-2 col-sm-4 col-xs-12 no-padding" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="single_logo single_logo_bm">
                <a href="#"><img src="/assets/img/partner/1.png" alt="" className="img-fluid"/></a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-12 no-padding" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single_logo">
                <a href="#"><img src="/assets/img/partner/2.png" alt="" className="img-fluid"/></a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-12 no-padding" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
              <div className="single_logo single_logo_bm">
                <a href="#"><img src="/assets/img/partner/3.png" alt="" className="img-fluid"/></a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-12 no-padding" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0">
              <div className="single_logo">
                <a href="#"><img src="/assets/img/partner/4.png" alt="" className="img-fluid"/></a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-12 no-padding" data-wow-duration="1s" data-wow-delay="0.5s" data-wow-offset="0">
              <div className="single_logo">
                <a href="#"><img src="/assets/img/partner/5.png" alt="" className="img-fluid"/></a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-xs-12 no-padding" data-wow-duration="1s" data-wow-delay="0.6s" data-wow-offset="0">
              <div className="single_logo">
                <a href="#"><img src="/assets/img/partner/6.png" alt="" className="img-fluid"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END PARTNER LOGO */}

      <Footer dict={dict} lang={lang} />
      {/* END FOOTER */}
    </>
  );
}
