export default function Navbar({ dict, lang }) {
  return (
    <>
      {/* START NAVBAR */}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <header className="site-navbar" role="banner" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000, background: '#34445c' }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-6 col-lg-2">
              <h1 className="mb-0 site-logo">
                <a href={`/${lang}`}>
                  <img src="/assets/img/bg/logosimple.png" alt="ALODO TECH" />
                </a>
              </h1>
            </div>
            <div className="col-8 col-lg-10 d-none d-lg-block">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto">
                  <li><a href={`/${lang}#home`} className="nav-link">{dict.navbar.home}</a></li>
                  <li><a href={`/${lang}/about`} className="nav-link">{dict.navbar.about}</a></li>
                  <li><a href={`/${lang}#portfolio`} className="nav-link">Produits</a></li>
                  <li><a href={`/${lang}/services`} className="nav-link">{dict.navbar.services}</a></li>
                  <li><a href={`/${lang}/technology`} className="nav-link">Technologie</a></li>
                  <li><a href={`/${lang}/impact`} className="nav-link">Impact</a></li>
                  <li><a href={`/${lang}/blog`} className="nav-link">{dict.navbar.blog}</a></li>
                  <li><a href={`/${lang}/contact`} className="nav-link">{dict.navbar.contact}</a></li>
                  <li className="has-children d-none d-lg-block">
                    <a href="#" className="nav-link" title="Changer de langue">
                      <i className="fa fa-globe" style={{ fontSize: '1.2rem' }}></i>
                    </a>
                    <ul className="dropdown">
                      <li><a href="/fr" className="nav-link">🇫🇷 Français</a></li>
                      <li><a href="/en" className="nav-link">🇺🇸 English</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-6 d-lg-none text-end d-flex align-items-center justify-content-end">
              <div className="me-3 mt-1">
                <div className="dropdown">
                  <a href="#" className="mobile-lang-toggle text-white" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-globe" style={{ fontSize: '1.4rem' }}></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" style={{ background: '#34445c', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <li><a href="/fr" className="dropdown-item text-white">🇫🇷 Français</a></li>
                    <li><a href="/en" className="dropdown-item text-white">🇺🇸 English</a></li>
                  </ul>
                </div>
              </div>
              <a href="#" className="site-menu-toggle js-menu-toggle d-inline-block">
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* END NAVBAR */}
    </>
  );
}
