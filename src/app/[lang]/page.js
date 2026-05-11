import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "../dictionaries";

export default async function Home(props) {
  const params = await props.params;
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <div className="site-wrap">
      <Navbar dict={dict} lang={lang} />

      {/* ═══════════════════════════════════════════
          HERO — Full-screen, gradient background
      ═══════════════════════════════════════════ */}
      <section className="hero-section">
        {/* Decorative blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="hero-inner">
          {/* ── Colonne texte ── */}
          <div className="hero-text-col">
            {/* Badge */}
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Fintech &amp; Infrastructure Digitale · Afrique
            </div>

            {/* Title */}
            <h1 className="hero-heading">
              {dict.home.hero_title}
            </h1>

            {/* Subtitle */}
            <p className="hero-desc">
              {dict.home.hero_subtitle}
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <a href={`/${lang}/products/alodo`} className="cta-primary">
                {dict.home.cta_primary}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href={`/${lang}/contact`} className="cta-secondary">
                {dict.home.cta_secondary}
              </a>
            </div>

            {/* Social proof */}
            <div className="hero-trust">
              <p className="trust-text">Rejoignez <strong>500+ entreprises</strong> qui nous font confiance</p>
            </div>
          </div>

          {/* ── Colonne image ── */}
          <div className="hero-visual-col">
            <img
              src="/assets/img/marketing.png"
              alt="ALODO TECH platform"
              className="hero-visual-img"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LOGOS / PARTENAIRES
      ═══════════════════════════════════════════ */}
      <section className="logos-section">
        <p className="logos-label">Ils nous font confiance</p>
        <div className="logos-row">
          {['Orange', 'MTN', 'Ecobank', 'UBA', 'Moov Africa'].map(name => (
            <div key={name} className="logo-chip">{name}</div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS
      ═══════════════════════════════════════════ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{dict.home.stats_mpme}</div>
              <div className="stat-label">{dict.home.stats_mpme_label}</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">{dict.home.stats_trans}</div>
              <div className="stat-label">{dict.home.stats_trans_label}</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">{dict.home.stats_pays}</div>
              <div className="stat-label">{dict.home.stats_pays_label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUITS
      ═══════════════════════════════════════════ */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nos Solutions</span>
            <h2 className="section-title">Deux produits,<br />une seule ambition</h2>
            <p className="section-desc">Des outils pensés pour l'économie informelle africaine, conçus avec la rigueur des meilleures fintechs mondiales.</p>
          </div>

          <div className="products-grid">
            {/* Card ALODO */}
            <div className="product-card product-card-blue">
              <div className="product-card-top">
                <div className="product-icon">
                  <img src="/assets/img/icon/research.png" alt="ALODO" />
                </div>
                <div className="product-badge">Flagship</div>
              </div>
              <h3 className="product-name">{dict.products.alodo_title}</h3>
              <p className="product-desc">{dict.products.alodo_desc}</p>
              <ul className="product-features">
                <li><span className="feat-check">✓</span> Gestion des stocks en temps réel</li>
                <li><span className="feat-check">✓</span> Paiements mobile intégrés</li>
                <li><span className="feat-check">✓</span> Tableau de bord analytique</li>
              </ul>
              <a href={`/${lang}/products/alodo`} className="product-cta">
                {dict.products.discover_btn}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>

            {/* Card CoinAI */}
            <div className="product-card product-card-dark">
              <div className="product-card-top">
                <div className="product-icon">
                  <img src="/assets/img/icon/brand.png" alt="COINAI" />
                </div>
                <div className="product-badge product-badge-new">Nouveau</div>
              </div>
              <h3 className="product-name">{dict.products.coinai_title}</h3>
              <p className="product-desc">{dict.products.coinai_desc}</p>
              <ul className="product-features">
                <li><span className="feat-check">✓</span> Intelligence artificielle embarquée</li>
                <li><span className="feat-check">✓</span> Prévisions financières</li>
                <li><span className="feat-check">✓</span> Conformité réglementaire</li>
              </ul>
              <a href={`/${lang}/products/coinai`} className="product-cta">
                {dict.products.discover_btn}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VISION
      ═══════════════════════════════════════════ */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-content">
              <span className="section-tag">Notre Mission</span>
              <h2 className="vision-title">{dict.home.vision_title}</h2>
              <p className="vision-desc">{dict.home.vision_desc}</p>
              <div className="vision-points">
                <div className="vision-point">
                  <div className="vp-icon">🌍</div>
                  <div>
                    <div className="vp-title">Marchés émergents</div>
                    <div className="vp-desc">Présents là où la technologie peut changer des vies</div>
                  </div>
                </div>
                <div className="vision-point">
                  <div className="vp-icon">🔒</div>
                  <div>
                    <div className="vp-title">Sécurité bancaire</div>
                    <div className="vp-desc">Vos données protégées selon les standards européens</div>
                  </div>
                </div>
                <div className="vision-point">
                  <div className="vp-icon">⚡</div>
                  <div>
                    <div className="vp-title">Temps réel</div>
                    <div className="vp-desc">Transactions et analyses instantanées, 24h/24</div>
                  </div>
                </div>
              </div>
              <a className="cta-primary" href={`/${lang}/about`}>
                Découvrir notre histoire
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
            <div className="vision-image-wrap">
              <img src="/assets/img/home-office.png" className="vision-img" alt="Notre équipe" />
              <div className="vision-img-badge">
                <div className="vib-icon">🏆</div>
                <div>
                  <div className="vib-title">Top Fintech 2024</div>
                  <div className="vib-sub">Prix d'excellence Afrique</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════ */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <div className="final-cta-content">
              <h2 className="final-cta-title">Prêt à digitaliser votre activité ?</h2>
              <p className="final-cta-desc">Rejoignez des milliers d'entrepreneurs africains qui transforment leur business avec ALODO TECH.</p>
              <div className="final-cta-actions">
                <a href={`/${lang}/products/alodo`} className="cta-primary cta-white">
                  Commencer gratuitement
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
                <a href={`/${lang}/contact`} className="cta-ghost">Parler à un expert →</a>
              </div>
            </div>
            <div className="final-cta-deco">
              <div className="deco-circle deco-1" />
              <div className="deco-circle deco-2" />
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={lang} />
    </div>
  );
}
