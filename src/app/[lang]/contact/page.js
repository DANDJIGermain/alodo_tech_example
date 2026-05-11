import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../../dictionaries";

export default async function Contact(props) {
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
                <h1>{dict.navbar.contact}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION TOP */}

      {/* CONTACT PAGE */}
      <section className="contact_page_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_contact">
                <i className="fa fa-envelope"></i>
                <h4>Email Professionnel</h4>
                <p>contact@alodo.tech</p>
                <p>investors@alodo.tech</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_contact">
                <i className="fa fa-map-marker"></i>
                <h4>Localisation</h4>
                <p>Cotonou, Bénin</p>
                <p>Siège Social ALODO TECH</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_contact">
                <i className="fa fa-clock-o"></i>
                <h4>Temps de réponse</h4>
                <p>Moins de 48h</p>
                <p>Lundi - Vendredi</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12">
              <div className="contact">
                <form id="contact-form" method="post">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label style={{ color: '#fff' }}>Nom Complet</label>
                      <input type="text" name="name" className="form-control" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label style={{ color: '#fff' }}>Email Professionnel</label>
                      <input type="email" name="email" className="form-control" required />
                    </div>
                    <div className="form-group col-md-12">
                      <label style={{ color: '#fff' }}>Objet de votre demande</label>
                      <select name="subject" className="form-control" style={{ background: 'transparent', color: '#fff' }}>
                        <option value="investor" style={{ color: '#000' }}>Opportunité d'investissement / VC</option>
                        <option value="partner" style={{ color: '#000' }}>Partenariat Institutionnel / B2B</option>
                        <option value="press" style={{ color: '#000' }}>Presse & Média</option>
                        <option value="career" style={{ color: '#000' }}>Candidature Spontanée</option>
                        <option value="other" style={{ color: '#000' }}>Autre demande</option>
                      </select>
                    </div>
                    <div className="form-group col-md-12">
                      <label style={{ color: '#fff' }}>Message</label>
                      <textarea rows="6" name="message" className="form-control" required></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="contact_btn">Envoyer la demande</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
