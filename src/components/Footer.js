export default function Footer({ dict, lang }) {
  return (
    <div className="footer" style={{"backgroundImage":"url(/assets/img/bg/footer.png)","backgroundSize":"cover","padding":"80px 0 20px 0"}}>
      <div className="container">
        <div className="row footer_bg">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="footer_logo">
              <img src="/assets/img/bg/logosimple.png" alt="ALODO TECH" />
              <p>Infrastructure financière & digitale pour les marchés émergents.</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Plateforme</h4>
              <ul>
                <li><a href={`/${lang}/products/alodo`}>Produit ALODO</a></li>
                <li><a href={`/${lang}/products/coinai`}>Produit COINAI</a></li>
                <li><a href={`/${lang}/technology`}>Technologie</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Entreprise</h4>
              <ul>
                <li><a href={`/${lang}/about`}>À Propos</a></li>
                <li><a href={`/${lang}/impact`}>Impact</a></li>
                <li><a href={`/${lang}/partners`}>Investisseurs</a></li>
                <li><a href={`/${lang}/careers`}>Carrières</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="newsletter-form">
              <h4>Restez informé</h4>
              <form id="mc-embedded-subscribe-form" className="validate">
                <div className="input-group input-group-lg newsletter">
                  <input type="email" name="EMAIL" className="subscribe__input" placeholder="Votre email" />
                  <button type="submit" className="subs_btn">S'abonner</button>
                </div>
              </form>
              <div className="footer_social mt-3">
                <a href="#" style={{ marginRight: '15px' }}><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="footer_copyright">
              <p>&copy; 2025 ALODO TECH. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
