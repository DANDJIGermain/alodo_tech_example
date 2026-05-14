"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./about.css";

export default function About() {
  useEffect(() => {
    // Reveal logic
    const revealEls = document.querySelectorAll(".reveal");
    const revealIo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealIo.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(e => revealIo.observe(e));

    return () => revealIo.disconnect();
  }, []);

  return (
    <>
      <Navbar activeKey="about" />

      <main data-screen-label="02 About">
        {/* Hero */}
        <section className="page-hero about-hero">
          <div className="container">
            <span className="eyebrow reveal">À propos</span>
            <h1 className="display reveal" data-delay="1" style={{ marginTop: "18px" }}>
              Un continent.<br />Une infrastructure digitale.
            </h1>
            <p className="lead reveal" data-delay="2">
              ALODO TECH est une startup tech panafricaine, née d'un hackathon, animée
              par une obsession : digitaliser l'économie informelle et inclure
              financièrement les MPME du continent.
            </p>
          </div>
        </section>

        {/* Vision / Mission */}
        <section className="tight">
          <div className="container">
            <div className="mv-grid">
              <div className="mv-card reveal">
                <span className="eyebrow">Vision</span>
                <h3>Un continent, une infrastructure digitale.</h3>
                <p className="muted" style={{ margin: 0, maxWidth: "44ch" }}>
                  Faire de l'Afrique le premier marché émergent doté d'une
                  infrastructure financière native, accessible à toute MPME,
                  où qu'elle se trouve.
                </p>
              </div>
              <div className="mv-card dark reveal" data-delay="1">
                <span className="eyebrow" style={{ color: "rgba(255,255,255,.6)" }}>Mission</span>
                <h3>Connecter l'informel aux outils du 21<sup>e</sup> siècle.</h3>
                <p className="muted" style={{ margin: 0, maxWidth: "44ch" }}>
                  Digitaliser et inclure financièrement les MPME d'Afrique
                  subsaharienne grâce à un boîtier intelligent, un bot WhatsApp
                  et un scoring de crédit propriétaire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-grey">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow reveal">Notre histoire</span>
                <h2 className="h1 reveal" data-delay="1" style={{ marginTop: "16px" }}>D'un hackathon à une startup d'infrastructure.</h2>
              </div>
              <p className="muted reveal" data-delay="2" style={{ maxWidth: "340px", margin: 0 }}>
                Pas de mythologie sur-marketée — juste les étapes qui comptent.
              </p>
            </div>

            <div className="timeline">
              <div className="tl-item reveal">
                <div className="tl-date">MARS 2024</div>
                <h4>Hackathon Cotonou</h4>
                <p>Trois co-fondateurs prototypent une caisse intelligente WhatsApp en 48h pour les vendeuses du marché Dantokpa. Le prototype gagne le prix Inclusion Financière.</p>
              </div>
              <div className="tl-item reveal" data-delay="1">
                <div className="tl-date">SEPTEMBRE 2024</div>
                <h4>Constitution d'ALODO TECH</h4>
                <p>Création de l'entité juridique au Bénin. Première équipe technique. Premiers retours terrain sur 12 MPME pilotes.</p>
              </div>
              <div className="tl-item active reveal" data-delay="2">
                <div className="tl-date">JANVIER 2025</div>
                <h4>ALODO V1 — boîtier + bot</h4>
                <p>Lancement du boîtier IoT et du bot WhatsApp en bêta privée auprès de 80 MPME à Cotonou et Lomé. Premier score de crédit calculé.</p>
              </div>
              <div className="tl-item reveal" data-delay="3">
                <div className="tl-date">JUIN 2025</div>
                <h4>COINAI — prototype IA</h4>
                <p>Lancement du prototype COINAI : signaux automatiques sur la BRVM, JSE et NGX. Premiers partenariats brokers.</p>
              </div>
              <div className="tl-item reveal" data-delay="4">
                <div className="tl-date">2026 →</div>
                <h4>Levée pré-amorçage &amp; scale 5 pays</h4>
                <p>Ouverture d'un tour de financement pré-amorçage. Cible de déploiement : 5 pays UEMOA en phase 1, 500 000 MPME en horizon 36 mois.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow reveal">Équipe</span>
                <h2 className="h1 reveal" data-delay="1" style={{ marginTop: "16px" }}>Une core team panafricaine.</h2>
              </div>
              <Link href="/careers" className="link-arrow reveal" data-delay="2">
                Rejoindre l'équipe
                <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 7h8M7 3l4 4-4 4" /></svg>
              </Link>
            </div>

            <div className="team-grid">
              <div className="member reveal">
                <div className="avatar v2">AA</div>
                <div className="member-info">
                  <div className="name">Alodo Adékunlé</div>
                  <div className="role">Co-fondateur · CEO</div>
                  <div className="bio">Ex-stratégie BOAD. Obsédé par l'inclusion financière depuis ses années d'études à Dakar.</div>
                  <a href="#" className="li">LinkedIn →</a>
                </div>
              </div>
              <div className="member reveal" data-delay="1">
                <div className="avatar v1">IK</div>
                <div className="member-info">
                  <div className="name">Inès Koffi</div>
                  <div className="role">Co-fondatrice · CTO</div>
                  <div className="bio">Ex-Spotify NYC. Architecture cloud, IA appliquée, IoT. Construit ce que d'autres pensent impossible.</div>
                  <a href="#" className="li">LinkedIn →</a>
                </div>
              </div>
              <div className="member reveal" data-delay="2">
                <div className="avatar v4">MO</div>
                <div className="member-info">
                  <div className="name">Moussa Ouédraogo</div>
                  <div className="role">Co-fondateur · COO</div>
                  <div className="bio">Opérations terrain UEMOA. A monté 3 réseaux d'agents bancaires entre Ouaga et Bamako.</div>
                  <a href="#" className="li">LinkedIn →</a>
                </div>
              </div>
              <div className="member reveal" data-delay="3">
                <div className="avatar v5">FN</div>
                <div className="member-info">
                  <div className="name">Fatou N'Diaye</div>
                  <div className="role">Head of Product</div>
                  <div className="bio">Design produit, recherche utilisateur. Forme l'équipe à parler 'marché', pas 'tech'.</div>
                  <a href="#" className="li">LinkedIn →</a>
                </div>
              </div>
              <div className="member reveal">
                <div className="avatar v7">KB</div>
                <div className="member-info">
                  <div className="name">Kwame Bonsu</div>
                  <div className="role">Lead AI / COINAI</div>
                  <div className="bio">PhD ML, ex-fonds quantitatif. Spécialiste signaux marchés émergents et NLP multilingue.</div>
                  <a href="#" className="li">LinkedIn →</a>
                </div>
              </div>
              <div className="member reveal" data-delay="1">
                <div className="avatar v6">SD</div>
                <div className="member-info">
                  <div className="name">Sira Diallo</div>
                  <div className="role">Head of Partnerships</div>
                  <div className="bio">Banques, IMF, régulateurs. Parle leur langue, débloque les portes des décideurs.</div>
                  <a href="#" className="li">LinkedIn →</a>
                </div>
              </div>
              <div className="member reveal" data-delay="2">
                <div className="avatar v3">TY</div>
                <div className="member-info">
                  <div className="name">Tomi Yusuf</div>
                  <div className="role">Lead Engineer · IoT</div>
                  <div className="bio">Edge computing, firmware embarqué. Conçoit un boîtier qui tient 24h sur batterie en zone basse connectivité.</div>
                  <a href="#" className="li">LinkedIn →</a>
                </div>
              </div>
              <div className="member reveal" data-delay="3">
                <div className="avatar v8">+</div>
                <div className="member-info">
                  <div className="name">Votre nom ici ?</div>
                  <div className="role">12 postes ouverts</div>
                  <div className="bio">Nous cherchons des ingénieurs, des designers et des opérations. Si vous lisez ceci, parlons-nous.</div>
                  <Link href="/careers" className="li">Voir les postes →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="bg-grey">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow reveal">Gouvernance</span>
                <h2 className="h1 reveal" data-delay="1" style={{ marginTop: "16px" }}>Une structure claire, dès le jour un.</h2>
              </div>
            </div>
            <div className="gov-grid">
              <div className="gov reveal">
                <div className="k">Entité juridique</div>
                <div className="v">ALODO TECH SAS</div>
                <p className="muted" style={{ margin: "8px 0 0", fontSize: "14px" }}>Société par actions simplifiée, droit OHADA.</p>
              </div>
              <div className="gov reveal" data-delay="1">
                <div className="k">Pays d'enregistrement</div>
                <div className="v">République du Bénin</div>
                <p className="muted" style={{ margin: "8px 0 0", fontSize: "14px" }}>Siège : Cotonou, quartier Cadjèhoun. Opérations panafricaines.</p>
              </div>
              <div className="gov reveal" data-delay="2">
                <div className="k">Advisory board</div>
                <div className="v">4 conseillers indépendants</div>
                <p className="muted" style={{ margin: "8px 0 0", fontSize: "14px" }}>Finance, régulation fintech, IA, ventes B2B institutionnelles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="tight">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <span className="eyebrow" style={{ color: "rgba(255,255,255,.6)" }}>Investir</span>
                <h2 className="h2" style={{ marginTop: "12px", maxWidth: "18ch" }}>Vous voulez en savoir plus sur l'équipe ?</h2>
                <p className="muted" style={{ margin: "16px 0 0", maxWidth: "44ch" }}>
                  Demandez un appel avec un co-fondateur. Réponse sous 48h.
                </p>
              </div>
              <div className="actions">
                <Link href="/partners" className="btn primary">Voir le deck</Link>
                <Link href="/contact" className="btn outline">Demander un appel</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
