# 📘 Cahier des Charges : ALODO TECH Corporate Website
**Version :** 1.0 (Juin 2025)  
**Statut :** Confidentiel / Usage Interne  
**Propriété :** © 2025 ALODO TECH — Tous droits réservés

---

## 01. Objectif & Philosophie du Site
Le site n'est pas une simple vitrine, mais une **machine de crédibilité**. Il doit prouver que l'équipe est sérieuse, structurée et ambitieuse.

### La Règle des 5 Secondes
Le visiteur doit répondre à 3 questions immédiatement :
1.  **Qui ?** ALODO TECH — Startup tech africaine.
2.  **Quoi ?** Infrastructure financière & digitale pour marchés émergents.
3.  **Pourquoi ?** Digitaliser l'économie informelle, inclure les MPME.

### Audiences Cibles
*   **Investisseurs & VCs :** Cherchent traction, vision, équipe et opportunité de marché.
*   **Partenaires B2B :** Banques, IMF, gouvernements cherchant fiabilité et solutions.
*   **Talents :** Développeurs, designers cherchant une aventure ambitieuse.

---

## 02. Architecture Globale (Sitemap)
*   `/` : **Home** (Convaincre en 10s, funnel vers produits).
*   `/about` : **About** (Vision, mission, histoire, équipe, gouvernance).
*   `/products/alodo` : **ALODO** (Inclusion financière, IoT, bot WhatsApp).
*   `/products/coinai` : **COINAI** (IA investissement, automation trading).
*   `/solutions` : **Solutions B2B** (MPME / Institutions / Gouvernements).
*   `/technology` : **Technology** (IA, Data, Infra, Mobile, IoT).
*   `/impact` : **Impact** (Inclusion, digitalisation, storytelling terrain).
*   `/blog` : **Blog / Insights** (Articles, analyses marché).
*   `/careers` : **Careers** (Vision, offres, culture).
*   `/partners` : **Partners / Investors** (Opportunités, Deck sur demande).
*   `/contact` : **Contact** (Formulaire, localisation, réseaux).

---

## 03. Contenu Détaillé des Pages

### 🏠 HOME PAGE (Critique)
*   **Hero Section :** Headline *"Building financial and digital infrastructure for emerging markets"*. CTA Bleu plein [Discover ALODO] et CTA Outline [Partner with us].
*   **Nos Produits :** Cartes ALODO (Inclusion MPME) et COINAI (IA).
*   **Notre Vision :** Titre "Digitaliser l'économie informelle" (Bloc texte 2-3 lignes max).
*   **Chiffres Clés (Simulés) :** 500k+ MPME, 1M+ Transactions, 5 Pays. Animation CountUp.js.
*   **Section Partenaires :** Logos institutionnels en Grayscale (fond blanc).

### 🏢 ABOUT (L'Entreprise)
*   **Mission :** Connecter l'économie informelle aux outils du 21e siècle.
*   **Histoire :** Timeline du hackathon initial à la création d'ALODO TECH.
*   **Équipe :** Photos pro fond neutre, noms, rôles, bio 1 ligne, LinkedIn.

### 📦 PRODUCTS
*   **ALODO :** 
    *   *Problème :* Invisibilité financière des MPME (80% sans accès au crédit).
    *   *Solution :* Boîtier IoT point de vente + WhatsApp Bot.
    *   *Visuel :* Rendu 3D du boîtier, captures WhatsApp, schéma du flux de scoring.
*   **COINAI :**
    *   *Positionnement :* IA dédiée aux marchés émergents.
    *   *Features :* Signaux automatisés, Portfolio tracking, API brokers.

### 🔬 TECHNOLOGY (Crédibilité Technique)
*   **IA :** LLM (Gemini/OpenAI), modèles de classification, NLP multilingue (FR/EN/Langues locales).
*   **Data :** Pipeline temps réel, Data Lake structuré.
*   **Infra :** Cloud-native (AWS/GCP), API RESTful, SLA 99.9%.
*   **IoT :** Edge computing, connectivité GSM/WiFi, Firmware OTA, Batterie 24h+.

### 🌍 IMPACT & STORYTELLING
*   **Exemple Amara :** Vendeuse de tissu à Cotonou, premier microcrédit de 150k FCFA via ALODO.
*   **Axes :** Inclusion, Financement, Emploi, ODD 8 & 10.

---

## 04. Administration & CMS (Partie Admin)
Le site doit être modifiable via une interface **Admin (Sanity ou Strapi)** pour éviter toute modification directe du code pour les éléments suivants :
*   **Contenus Textuels :** Headlines, sous-titres, descriptions.
*   **Blog :** Publication autonome d'articles et analyses.
*   **Team & Careers :** Ajout de membres et de nouvelles offres d'emploi.
*   **Chiffres :** Mise à jour des compteurs de transactions et d'utilisateurs.
*   **Investisseurs :** Gestion des demandes de Pitch Deck.

---

## 05. Design System (Référence Apple/OpenAI)
### Couleurs
*   **Primary Black (#0A0A0A) :** Textes et headers.
*   **Primary White (#FFFFFF) :** Fonds et respiration.
*   **Brand Blue (#0057FF) :** CTAs et liens actifs.
*   **Vibrant Orange (#FBB03B) :** Accents et énergie.
*   **Teal Accent (#00C2A8) :** Success states et Data Viz.

### Typographie
*   **Hero/Display :** Inter 700 ou Geist Sans (48px à 72px).
*   **H2/H3 :** Inter 600 (28px / 22px).
*   **Body :** Inter 400 (16px, line-height 1.6).

### Règles de Design
*   ✅ **À FAIRE :** Padding 80px+ entre sections, animations Framer Motion légères, icônes Lucide React, Grid 12 colonnes.
*   ❌ **À ÉVITER :** Gradients criards, textes longs, images de stock génériques, fonds noirs partout.

---