import { ProjectType, SettingsType } from "../types";

export const SETTINGS_DATA: SettingsType = {
  stack: {
    front: [
      { icon: "javascript", label: "Javascript" },
      { icon: "typescript", label: "Typescript" },
      { icon: "styled-components", label: "Styled Components" },
      { icon: "tailwind", label: "Tailwind" },
      { icon: "react", label: "React" },
      { icon: "react", label: "React Native" },
      { icon: "next", label: "Next" },
      { icon: "vue", label: "Vue" },
    ],
    back: [
      { icon: "nodejs", label: "Node" },
      { icon: "express", label: "Express" },
      { icon: "strapi", label: "Strapi" },
      { icon: "nest", label: "Nest" },
      { icon: "php", label: "PHP" },
      { icon: "symfony", label: "Symfony" },
      { icon: "python", label: "Python" },
      { icon: "flask", label: "Flask" },
      { icon: "fastapi", label: "FastAPI" },
    ],
    other: [
      { icon: "mysql", label: "MySQL" },
      { icon: "postgre", label: "PostgreSQL" },
      { icon: "mongo", label: "MongoDB" },
      { icon: "docker", label: "Docker" },
      { icon: "figma", label: "Figma" },
    ],
  },
  spotify: {
    url: "https://open.spotify.com/intl-fr/track/53tv6ZbyeAwfAUwFaxYbfO?si=13bd3f1382914e9a",
    title: "Hellcats & Trackhawks",
    artist: "Only The Family, Lil Durk",
  },
  availability: "NOW",
};

export const PROJECTS_DATA: ProjectType[] = [
  {
    date: "2025-03-03",
    type: "PROJET",
    slug: "portfolio",
    title: "Portfolio",
    description: `Ce projet est mon portfolio personnel, conçu pour présenter mes compétences, mes réalisations et mon parcours en tant que développeur TypeScript. L'objectif était de créer une interface moderne, réactif et facile à naviguer, tout en mettant en avant mes projets et mon expertise technique.

      <br/><br/>J'ai utilisé <b style="color: #4682B4">TypeScript</b> pour garantir un code robuste et maintenable, en tirant parti de son système de typage statique. <b style="color: #4682B4">React</b> a été choisi pour sa flexibilité et sa performance, permettant de construire une application web dynamique et modulaire. Enfin, <b style="color: #4682B4">Styled Components</b> a été utilisé pour la gestion des styles, offrant une intégration fluide entre le CSS et le JavaScript, tout en permettant une personnalisation approfondie de l'interface.

      Ce portfolio est conçu pour être évolutif, facilement modifiable et adapté à tous les appareils. Il reflète mon approche du développement : propre, structuré et axé sur l'expérience utilisateur.

      <br/><br/><b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Fonctionnalités clés :</b>

      <br/><br/><div class="blueQuote">
        <b>»</b> Présentation de mes projets avec des détails techniques et des liens vers les dépôts ou démonstrations

        <br/><br/><b>»</b> Formulaire de contact intégré pour faciliter les échanges

        <br/><br/><b>»</b> Design responsive et accessible
      </div>

      <br/><br/>Ce projet est une vitrine de mon travail et de ma passion pour le développement web.
    `,
    cover: "assets/projects/portfolio/portfolio-cover.png",
    cardCover: "assets/projects/portfolio/portfolio-card.png",
    stack: ["Typescript", "React", "Styled Components"],
  },
  {
    date: "2025-03-04",
    type: "PROJET",
    slug: "iliad",
    title: "Iliad",
    description: `<b>Iliad</b> est une plateforme web regroupant <b>toutes les informations officielles</b>, <b>actualités</b> et <b>données légales</b> du groupe <b>Iliad</b> (<b>maison mère de Free</b>). Ce site joue un rôle clé dans la <b>communication institutionnelle</b> du groupe, en centralisant des contenus à destination des investisseurs, partenaires et du grand public.<br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Mon rôle et contributions</b><br/><br/>
J’ai travaillé sur ce projet en contribuant à deux aspects majeurs :<br/><br/>

<div class="blueQuote"><b>» La refonte graphique</b> du front-end, visant à moderniser l’interface utilisateur avec <b style="color: #4682B4">React</b> et <b style="color: #4682B4">Material-UI</b><br/><br/>
<b>» La migration du back-end</b> de <b style="color: #4682B4">Strapi v4</b> à <b style="color: #4682B4">Strapi v5</b>, garantissant une meilleure <b>scalabilité</b> et <b>maintenabilité</b> de l’architecture existante</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Développement et stack technique</b><br/><br/>
Pour mener à bien cette refonte, nous avons utilisé :<br/><br/>

<div class="blueQuote"><b>»</b> <b style="color: #4682B4">React</b> et <b style="color: #4682B4">Material-UI</b> pour concevoir une interface moderne et accessible<br/><br/>
<b>»</b> <b style="color: #4682B4">Strapi</b> (migration v4 → v5) en tant que CMS headless pour une gestion optimisée des contenus<br/><br/>
<b>»</b> <b style="color: #4682B4">PostgreSQL</b> pour assurer une base de données performante et structurée<br/><br/>
<b>»</b> <b style="color: #4682B4">Docker</b> pour garantir un environnement de développement et de déploiement stable</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Défis et solutions techniques</b><br/><br/>
Ce projet nécessitait une <b>amélioration significative de l’UX/UI</b> ainsi qu’une <b>mise à jour du backend</b> tout en conservant la <b>cohérence</b> et la <b>continuité des données</b>. Pour cela, j’ai travaillé sur :<br/><br/>

🎨 Une <b>refonte du design</b> avec Material-UI, offrant une interface plus fluide et ergonomique.<br/>
🔄 Une <b>migration de Strapi v4 à v5</b>, impliquant une mise à jour des modèles de données et des API.<br/>
📊 Une <b>optimisation des performances du back-end</b> pour améliorer la vitesse de chargement et la gestion des requêtes.<br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Expérience acquise</b><br/><br/>
Grâce à ce projet, j’ai pu approfondir mes compétences en :<br/><br/>

<div class="redQuote"><b>»</b> <b>Modernisation</b> d’interfaces avec <b style="color: #880808">React</b> et <b style="color: #880808">Material-UI</b><br/><br/>
<b>»</b> <b>Gestion</b> et <b>migration</b> de CMS headless avec <b style="color: #880808">Strapi</b><br/><br/>
<b>»</b> <b>Optimisation</b> des bases de données <b style="color: #880808">PostgreSQL</b><br/><br/>
<b>»</b> <b>Déploiement</b> d’applications avec <b style="color: #880808">Docker</b> pour assurer une architecture robuste et évolutive</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Un projet structurant et stratégique</b><br/><br/>
Iliad est un projet clé pour la communication du groupe Free. Travailler sur cette plateforme m’a permis de <b>participer à une refonte d’envergure</b>, en améliorant à la fois l’<b>expérience utilisateur</b> et la <b>scalabilité technique</b> du site.<br/><br/>

🚀 Une mission enrichissante, mêlant refonte UI et migration back-end, au sein d’un grand groupe technologique !`,
    cover: "assets/projects/iliad/iliad-cover.png",
    cardCover: "assets/projects/iliad/iliad-card.png",
    stack: [
      "JavaScript",
      "React",
      "Material-UI",
      "Strapi",
      "PostgreSQL",
      "Docker",
    ],
    websiteUrl: "https://www.iliad.fr/fr",
  },
  {
    date: "2025-03-04",
    type: "PROJET",
    slug: "carom",
    title: "Carom",
    description: `<b>Carom</b> est une application mobile conçue pour <b>faciliter le networking</b> entre particuliers via leur compte LinkedIn. Elle permet à ses utilisateurs d’<b>organiser</b> et de <b>rejoindre des activités</b>, favorisant ainsi les <b>rencontres</b> et les <b>échanges professionnels</b> dans un cadre convivial.<br/>

Mon rôle dans ce projet a été de <b>développer</b> et <b>optimiser</b> l’application mobile, en garantissant une expérience utilisateur fluide et intuitive.<br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Développement et stack technique</b><br/><br/>
Pour construire cette application, nous avons utilisé :<br/><br/>

<div class="blueQuote"><b>»</b> <b style="color: #4682B4">React Native</b> et <b style="color: #4682B4">Tailwind CSS</b> pour créer une interface mobile performante et agréable à utiliser<br/><br/>
<b>»</b> <b style="color: #4682B4">Strapi</b> en tant que CMS headless, facilitant la gestion des utilisateurs et des activités<br/><br/>
<b>»</b> <b style="color: #4682B4">PostgreSQL</b> pour stocker et gérer les données de manière efficace<br/><br/>
<b>»</b> <b style="color: #4682B4">Docker</b> pour assurer un déploiement stable et scalable</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Défis et solutions techniques</b><br/><br/>
L’un des principaux défis du projet était de garantir un processus d’inscription sécurisé et exclusif grâce à un <b>système de validation par recommandation</b>. Pour cela, j’ai contribué à la mise en place de :<br/><br/>

<div class="blueQuote">✅ Une <b>authentification via LinkedIn</b>, simplifiant l’inscription des utilisateurs<br/><br/>
🔄 Un <b>système de validation des comptes</b> basé sur la recommandation d’un utilisateur et l’approbation d’un administrateur<br/><br/>
📅 Un <b>module d’organisation d’activités</b>, permettant à chacun de créer ou rejoindre des événements<br/><br/>
🤝 Une <b>expérience de networking fluide</b>, favorisant les échanges et les rencontres professionnelles</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Expérience acquise</b><br/><br/>
Cette mission m’a permis de renforcer mes compétences en :<br/><br/>

<div class="redQuote"><b>» Développement mobile</b> avec <b style="color: #880808">React Native</b>, en optimisant les performances et l’UX<br/><br/>
<b>» Gestion des contenus et des utilisateurs</b> avec <b style="color: #880808">Strapi</b><br/><br/>
<b>» Optimisation de la base de données</b> avec <b style="color: #880808">PostgreSQL</b> pour garantir un accès rapide aux informations<br/><br/>
<b>» Déploiement et gestion d’infrastructure</b> avec <b style="color: #880808">Docker</b>, assurant une application stable et scalable</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Un projet innovant et social</b><br/><br/>

Carom se distingue par son approche originale du networking, <b>mêlant digital et rencontres physiques</b> via des activités. Ce projet m’a offert l’opportunité de travailler sur une <b>application mobile impactante</b>, favorisant les interactions professionnelles de manière plus humaine et dynamique.<br/><br/>

🚀 Une expérience enrichissante alliant développement mobile, gestion de communauté et innovation sociale !`,
    cover: "assets/projects/carom/carom-cover.png",
    cardCover: "assets/projects/carom/carom-card.png",
    stack: ["React Native", "Tailwind", "Strapi", "PostgreSQL", "Docker"],
    websiteUrl: "https://www.carom.app/",
  },
  {
    date: "2025-03-04",
    type: "PROJET",
    slug: "sesamers",
    title: "Sesamers",
    description: `<b>Sesamers</b> est une plateforme web conçue pour les <b>passionnés de la Tech</b>, leur offrant un espace où ils peuvent <b>élargir leur réseau</b>, <b>assister à des conférences</b>, <b>organiser des événements</b>, <b>écouter des podcasts</b> et <b>découvrir des opportunités d’emploi</b>.<br/>

Mon rôle dans ce projet a été de <b>développer des fonctionnalités essentielles</b> tout en garantissant une <b>expérience utilisateur fluide et engageante</b>.<br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Développement et stack technique</b><br/><br/>
Pour construire cette plateforme, nous avons utilisé :<br/><br/>

<div class="blueQuote"><b>» </b><b style="color: #4682B4">Vue.js</b> et <b style="color: #4682B4">Tailwind CSS</b> pour concevoir une interface moderne, réactive et accessible<br/><br/>
<b>» </b><b style="color: #4682B4">TypeScript</b> pour assurer une base de code robuste et maintenable
<b>» </b><b style="color: #4682B4">Strapi</b> en tant que CMS headless, facilitant la gestion des contenus<br/><br/>
<b>» </b><b style="color: #4682B4">PostgreSQL</b> pour stocker et organiser efficacement les donnée.<br/><br/>
<b>» </b><b style="color: #4682B4">Docker</b> pour simplifier le déploiement et assurer la scalabilité du projet</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Défis et solutions techniques</b><br/><br/>
Ce projet nécessitait une interface fluide et performante, capable de gérer une grande quantité de contenus et d’interactions en temps réel. Pour répondre à ces exigences, j’ai travaillé sur :<br/><br/>

<div class="blueQuote">✅ Un <b>système de networking</b> permettant aux utilisateurs de se connecter et d’échanger facilement<br/><br/>
🎤 Une <b>plateforme d’événements</b> pour assister et organiser des conférences.<br/><br/>
🎙 Une <b>section podcasts</b> afin d’écouter et de publier du contenu audio.<br/><br/>
💼 Un <b>espace dédié aux offres d’emploi</b> pour les opportunités dans le domaine de la Tech.</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Expérience acquise</b><br/><br/>
Grâce à cette mission, j’ai pu approfondir mes compétences en :<br/><br/>

<div class="redQuote"><b>» Développement frontend</b> avec <b style="color: #880808">Vue.js</b> et <b style="color: #880808">Tailwind CSS</b> pour créer une UI dynamique et ergonomique<br/><br/>
<b>» Gestion de contenus</b> avec <b style="color: #880808">Strapi</b>, facilitant l’administration des articles, événements et podcasts<br/><br/>
<b>» Optimisation et gestion</b> des bases de données avec <b style="color: #880808">PostgreSQL</b><br/><br/>
<b>» Déploiement et conteneurisation</b> via <b style="color: #880808">Docker</b>, garantissant une infrastructure scalable et facilement maintenable</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Un projet impactant</b><br/><br/>
Sesamers est un outil complet qui connecte les acteurs de la Tech à travers le monde. Ce projet m’a permis de travailler sur une <b>plateforme à forte valeur ajoutée</b>, combinant <b>réseautage</b>, <b>contenu interactif</b> et <b>opportunités professionnelles</b>.<br/><br/>

🚀 Une expérience enrichissante alliant développement web et gestion de communautés !`,
    cover: "assets/projects/sesamers/sesamers-cover.png",
    cardCover: "assets/projects/sesamers/sesamers-card.png",
    stack: ["Typescript", "Vue", "Tailwind", "Strapi", "PostgreSQL", "Docker"],
    websiteUrl: "https://sesamers.com/",
  },
  {
    date: "2025-03-04",
    type: "PROJET",
    slug: "cockpit",
    title: "Cockpit",
    description: `Ce projet a été développé dans le cadre de mon travail chez <b>Fleet</b>, où j’ai contribué à la conception et au développement de <b>Cockpit</b>, une plateforme permettant aux entreprises de <b>gérer leur flotte informatique</b> de manière centralisée. L’objectif était d’optimiser les coûts et d’améliorer le suivi des équipements mis à disposition des employés.

J’ai travaillé sur ce projet en tant que <b>développeur full-stack</b>, en utilisant une stack moderne et performante :<br/><br/>

<div class="blueQuote"><b>» </b><b style="color: #4682B4">TypeScript</b> pour assurer un code robuste et maintenable grâce à son typage statique <br/><br/>
<b>» </b><b style="color: #4682B4">React</b> et <b style="color: #4682B4">Styled Components</b> pour une interface utilisateur fluide, modulaire et réactive <br/><br/>
<b>» </b><b style="color: #4682B4">Node.js</b> et <b style="color: #4682B4">Express</b> pour construire une API scalable et performante.<br/><br/>
<b>» </b><b style="color: #4682B4">MongoDB</b> pour la gestion et le stockage des données.</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Défis et solutions techniques</b><br/><br/>
L’un des principaux défis de ce projet était de créer une expérience utilisateur fluide malgré la complexité des données à gérer. Pour cela, j’ai mis en place :<br/><br/>

<div class="blueQuote">✅ Un <b>système de gestion des commandes</b> permettant aux entreprises de suivre facilement leurs acquisitions<br/><br/>
🔧 Une <b>interface de suivi des retours</b> pour gérer efficacement les réparations et la maintenance des appareils<br/><br/>
👥 Une <b>liste des employés avec leur matériel dédié</b> pour garantir une bonne traçabilité des équipements<br/><br/>
📦 Un <b>catalogue interactif</b> regroupant les ordinateurs, tablettes, téléphones et accessoires disponibles</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Expérience acquise</b><br/><br/>
Ce projet m’a permis de renforcer mes compétences en développement full-stack, notamment dans :<br/><br/>

<div class="redQuote"><b>» </b>La conception d’<b>interfaces dynamiques</b> et accessibles avec <b style="color: #880808">React</b><br/><br/>
<b>» </b>L’optimisation des performances et de la <b>scalabilité</b> côté backend avec <b style="color: #880808">Node.js</b> et <b style="color: #880808">Express</b><br/><br/>
<b>» </b>La structuration et la gestion des données dans <b style="color: #880808">MongoDB</b></div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Un projet structurant</b><br/><br/>
Cockpit est un <b>outil métier puissant</b>, conçu pour <b>faciliter la gestion interne des entreprises</b>. En travaillant sur ce projet, j’ai pu mettre en pratique <b>des bonnes pratiques de développement</b>, améliorer mes compétences en <b>architecture logicielle</b> et travailler sur une plateforme à fort impact.<br/><br/>

🚀 Un projet enrichissant qui allie développement web, UX/UI et gestion de données !`,
    cover: "assets/projects/cockpit/cockpit-cover.png",
    cardCover: "assets/projects/cockpit/cockpit-card.png",
    stack: [
      "Typescript",
      "React",
      "Styled Components",
      "Node",
      "Express",
      "MongoDB",
    ],
    websiteUrl: "https://fleet.co/",
  },
  //   {
  //     date: "2025-03-05",
  //     type: "PROJET",
  //     slug: "mail-builder",
  //     title: "Mail Builder",
  //     description: `<b>Iliad</b> est une plateforme web regroupant <b>toutes les informations officielles</b>, <b>actualités</b> et <b>données légales</b> du groupe <b>Iliad</b> (<b>maison mère de Free</b>). Ce site joue un rôle clé dans la <b>communication institutionnelle</b> du groupe, en centralisant des contenus à destination des investisseurs, partenaires et du grand public.<br/><br/>

  // <b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Mon rôle et contributions</b><br/><br/>
  // J’ai travaillé sur ce projet en contribuant à deux aspects majeurs :<br/><br/>

  // <div class="blueQuote"><b>» La refonte graphique</b> du front-end, visant à moderniser l’interface utilisateur avec <b style="color: #4682B4">React</b> et <b style="color: #4682B4">Material-UI</b><br/><br/>
  // <b>» La migration du back-end</b> de <b style="color: #4682B4">Strapi v4</b> à <b style="color: #4682B4">Strapi v5</b>, garantissant une meilleure <b>scalabilité</b> et <b>maintenabilité</b> de l’architecture existante</div><br/><br/>

  // <b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Développement et stack technique</b><br/><br/>
  // Pour mener à bien cette refonte, nous avons utilisé :<br/><br/>

  // <div class="blueQuote"><b>»</b> <b style="color: #4682B4">React</b> et <b style="color: #4682B4">Material-UI</b> pour concevoir une interface moderne et accessible<br/><br/>
  // <b>»</b> <b style="color: #4682B4">Strapi</b> (migration v4 → v5) en tant que CMS headless pour une gestion optimisée des contenus<br/><br/>
  // <b>»</b> <b style="color: #4682B4">PostgreSQL</b> pour assurer une base de données performante et structurée<br/><br/>
  // <b>»</b> <b style="color: #4682B4">Docker</b> pour garantir un environnement de développement et de déploiement stable</div><br/><br/>

  // <b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Défis et solutions techniques</b><br/><br/>
  // Ce projet nécessitait une <b>amélioration significative de l’UX/UI</b> ainsi qu’une <b>mise à jour du backend</b> tout en conservant la <b>cohérence</b> et la <b>continuité des données</b>. Pour cela, j’ai travaillé sur :<br/><br/>

  // 🎨 Une <b>refonte du design</b> avec Material-UI, offrant une interface plus fluide et ergonomique.<br/>
  // 🔄 Une <b>migration de Strapi v4 à v5</b>, impliquant une mise à jour des modèles de données et des API.<br/>
  // 📊 Une <b>optimisation des performances du back-end</b> pour améliorer la vitesse de chargement et la gestion des requêtes.<br/><br/>

  // <b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Expérience acquise</b><br/><br/>
  // Grâce à ce projet, j’ai pu approfondir mes compétences en :<br/><br/>

  // <div class="redQuote"><b>»</b> <b>Modernisation</b> d’interfaces avec <b style="color: #880808">React</b> et <b style="color: #880808">Material-UI</b><br/><br/>
  // <b>»</b> <b>Gestion</b> et <b>migration</b> de CMS headless avec <b style="color: #880808">Strapi</b><br/><br/>
  // <b>»</b> <b>Optimisation</b> des bases de données <b style="color: #880808">PostgreSQL</b><br/><br/>
  // <b>»</b> <b>Déploiement</b> d’applications avec <b style="color: #880808">Docker</b> pour assurer une architecture robuste et évolutive</div><br/><br/>

  // <b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Un projet structurant et stratégique</b><br/><br/>
  // Iliad est un projet clé pour la communication du groupe Free. Travailler sur cette plateforme m’a permis de <b>participer à une refonte d’envergure</b>, en améliorant à la fois l’<b>expérience utilisateur</b> et la <b>scalabilité technique</b> du site.<br/><br/>

  // 🚀 Une mission enrichissante, mêlant refonte UI et migration back-end, au sein d’un grand groupe technologique !`,
  //     cover: "assets/projects/mail-builder/mail-builder-cover.png",
  //     cardCover: "assets/projects/mail-builder/mail-builder-card.png",
  //     stack: ["Typescript", "Next", "Tailwind", "Nest", "PostgreSQL", "Docker"],
  //   },
  {
    date: "2025-03-05",
    type: "PROJET",
    slug: "etre-free",
    title: "Être Free",
    description: `<b>Être Free</b> est le site marque employeur de Free, conçu pour <b>mettre en avant l’entreprise</b>, <b>ses différentes entités</b>, <b>ses métiers</b> et <b>ses offres d’emploi</b>. L’objectif principal était de r<b>enforcer l’image de marque de Free en tant qu’employeur attractif</b>, notamment auprès des jeunes talents.<br/><br/>

Ce projet se distingue par son approche moderne et immersive, avec :<br/><br/>

<div class="blueQuote"><b>» Une mise en avant des valeurs et de la culture d’entreprise</b> à travers des témoignages et des citations<br/><br/>
<b>» Une présentation dynamique</b> des différents métiers disponibles chez Free<br/><br/>
<b>» Une carte interactive des offres d’emploi</b>, permettant aux candidats de voir les opportunités en fonction des régions<br/><br/>
<b>» Un design innovant basé sur un système de cartes</b>, intégrant <b>des photos des dirigeants</b>, <b>des témoignages de responsables de pôles et des statistiques clés</b></div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Mon rôle et contributions</b><br/><br/>
J’ai participé activement au développement du site en travaillant sur plusieurs aspects techniques et fonctionnels :<br/><br/>
✅ <b>Développement front-end</b>, avec <b>Next.js</b> et <b>Tailwind CSS</b>, pour une interface fluide et moderne.<br/><br/>
✅ <b>Intégration des contenus dynamiques</b>, via <b>Strapi</b> et <b>PostgreSQL</b>, pour une gestion flexible des offres d’emploi et des témoignages.<br/><br/>
✅ <b>Mise en place du système de cartes interactive</b>, affichant des citations, images et statistiques de manière dynamique.<br/><br/>
✅ <b>Développement et intégration de la carte interactive des offres d’emploi</b>, connectée à une API externe.<br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Développement et stack technique</b><br/><br/>
Pour assurer la réussite de ce projet, nous avons utilisé :<br/><br/>

<div class="blueQuote"><b>»</b> <b style="color: #4682B4">Next.js</b> pour offrir une navigation rapide et fluide<br/><br/>
<b>»</b> <b style="color: #4682B4">TypeScript</b> pour un code robuste et scalable<br/><br/>
<b>»</b> <b style="color: #4682B4">Tailwind CSS</b> pour un design responsive et cohérent<br/><br/>
<b>»</b> <b style="color: #4682B4">Strapi</b> pour gérer facilement le contenu éditorial<br/><br/>
<b>»</b> <b style="color: #4682B4">PostgreSQL</b> pour structurer et stocker les données<br/><br/>
<b>»</b> <b style="color: #4682B4">Docker</b> pour assurer une infrastructure stable et maintenable</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Défis et solutions techniques</b><br/><br/>
Le projet a rencontré plusieurs challenges majeurs :<br/><br/>

<div class="blueQuote">🎨 <b>Contraintes et indécisions sur le design :</b><br/><br/>

<b>»</b> Les différentes parties prenantes avaient du mal à statuer sur le design et les couleurs à adopter<br/><br/>
<b>»</b> Solution : mise en place d’un <b>système modulaire</b> basé sur <b style="color: #4682B4">Tailwind CSS</b>, facilitant les ajustements rapides et la personnalisation<br/><br/>
📸 <b>Délai de livraison des assets graphiques :</b><br/><br/>

<b>»</b> Le studio interne (pôle graphique de Free) avait du retard dans la livraison des visuels<br/><br/>
<b>»</b> Solution : développement d’une <b>structure adaptable</b> permettant d’intégrer les assets progressivement, sans bloquer l’avancement du projet<br/><br/>
🗺 <b>Problèmes avec l’API des offres d’emploi pour la carte interactive :</b>

<b>»</b> L’API rencontrait <b>des incohérences</b> et <b>des erreurs de récupération des offres</b> en fonction des régions<br/><br/>
<b>»</b> Solution : mise en place d’<b>un système de cache et de fallback</b> pour assurer une expérience utilisateur fluide, même en cas de défaillance temporaire de l’API</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Expérience acquise</b><br/><br/>
Ce projet m’a permis d’approfondir plusieurs compétences techniques et organisationnelles :<br/><br/>

<div class="redQuote"><b>» Optimisation de la gestion des contenus dynamiques</b> avec <b style="color: #880808">Strapi</b> et <b style="color: #880808">PostgreSQL</b><br/><br/>
<b>» Développement d’interfaces interactives avancées</b> avec <b style="color: #880808">Next.js</b> et <b style="color: #880808">Tailwind CSS</b><br/><br/>
<b>» Gestion des contraintes de design</b> et collaboration avec une équipe graphique<br/><br/>
<b>» Intégration et gestion des</b> <b style="color: #880808">API</b> <b>tierces</b> pour des fonctionnalités complexes comme la carte interactive</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Un projet stratégique pour l’image de Free</b><br/><br/>
Être Free est un <b>outil clé pour attirer de nouveaux talents</b> et renforcer l’image de marque de Free en tant qu’employeur. Ce projet m’a permis de travailler à l’<b>intersection du développement web</b>, du <b>design</b> et du <b>marketing RH</b>, en mettant en place <b>une plateforme immersive et engageante</b> pour les candidats.<br/><br/>

🚀 Un projet enrichissant, mêlant technique, créativité et défis stratégiques !`,
    cover: "assets/projects/etre-free/etre-free-cover.png",
    cardCover: "assets/projects/etre-free/etre-free-card.png",
    stack: ["Typescript", "Next", "Tailwind", "Strapi", "PostgreSQL", "Docker"],
    websiteUrl: "https://etre-free.fr/",
  },
  {
    date: "2025-03-05",
    type: "PROJET",
    slug: "lab-42",
    title: "Lab 42",
    description: `<b>Lab 42</b> est un site web conçu pour <b>faciliter le recrutement et la gestion des étudiants de l’école 42 souhaitant rejoindre Free en alternance</b>. Ce projet centralise toutes les informations essentielles sur le <b>Lab 42</b>, un pôle dédié à l’accompagnement des étudiants au sein de l’entreprise.<br/><br/>

Le site permet aux étudiants de <b>postuler directement</b>, mais aussi d’accéder à diverses ressources, comme :<br/><br/>

<div class="blueQuote"><b>» Les détails des projets réalisés</b> par les membres actuels du Lab<br/><br/>
<b>» Une présentation des mentors</b> (salariés en CDI chez Free encadrant les étudiants)<br/><br/>
<b>» Une section dédiée aux étudiants sélectionnés</b>, leur permettant de <b>soumettre des idées de projets</b> à réaliser pendant leur alternance</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Mon rôle et contributions</b><br/><br/>
J’ai activement contribué au développement du site Lab 42 en travaillant sur plusieurs aspects clés :<br/><br/>
<div class="blueQuote">✅ <b>Développement front-end</b>, en concevant une interface moderne avec <b style="color: #4682B4">Next.js</b> et <b style="color: #4682B4">Tailwind CSS</b><br/><br/>
✅ <b>Gestion des candidatures</b>, avec une intégration entre <b style="color: #4682B4">Strapi</b> et <b style="color: #4682B4">AWS</b> pour le <b>dépôt des CV</b><br/><br/>
✅ <b>Mise en place d’un back-office</b> permettant aux parties prenantes de :<br/><br/>

<b>»</b> Consulter les <b>CV des candidats directement depuis Strapi</b><br/><br/>
<b>»</b> Exporter l’ensemble des candidatures en <b>CSV</b><br/><br/>
<b>»</b> Valider les profils des candidats</b> et gérer l’ouverture/fermeture des inscriptions</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Développement et stack technique</b><br/><br/>
Pour mener à bien ces évolutions, nous avons utilisé :<br/><br/>

<div class="blueQuote"><b>»</b> <b style="color: #4682B4">Next.js</b> pour bénéficier d’un rendu performant et d’un SEO optimisé<br/><br/>
<b>»</b> <b style="color: #4682B4">TypeScript</b> pour assurer un code robuste et maintenable<br/><br/>
<b>»</b> <b style="color: #4682B4">Tailwind CSS</b> pour une conception UI moderne et efficace<br/><br/>
<b>»</b> <b style="color: #4682B4">Strapi</b> pour gérer les contenus et les candidatures<br/><br/>
<b>»</b> <b style="color: #4682B4">PostgreSQL</b> pour structurer et optimiser la base de données<br/><br/>
<b>»</b> <b style="color: #4682B4">AWS</b> pour le stockage et la gestion des CV des candidats<br/><br/>
<b>»</b> <b style="color: #4682B4">Docker</b> pour assurer un déploiement stable et reproductible</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Défis et solutions techniques</b><br/><br/>
Lab 42 est une plateforme ayant <b>plusieurs parties distinctes</b> et <b>plusieurs types d’utilisateurs</b>, ce qui nécessitait :<br/><br/>

📂 <b>Une gestion avancée des candidatures</b>, avec un <b>stockage AWS</b> des CV et une <b>interface d’administration sous Strapi</b>.<br/><br/>
📊 <b>Un export CSV des candidatures</b>, permettant aux recruteurs de traiter facilement les données.<br/><br/>
👥 <b>Une gestion différenciée des accès</b>, afin que les étudiants, mentors et recruteurs puissent consulter uniquement les informations pertinentes.<br/><br/>
📌 <b>Une interface dynamique et intuitive</b>, optimisée pour la navigation et l’expérience utilisateur avec <b>Next.js</b> et <b>Tailwind CSS</b>.<br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Expérience acquise</b><br/><br/>
Grâce à ce projet, j’ai renforcé mes compétences en :<br/><br/>

<div class="redQuote"><b>» Développement front-end</b> avec <b style="color: #880808">Next.js</b> et <b style="color: #880808">Tailwind CSS</b>, pour une UI performante et responsive<br/><br/>
<b>» Gestion et sécurisation des données</b> avec <b style="color: #880808">Strapi</b> et <b style="color: #880808">PostgreSQL</b><br/><br/>
<b>» Mise en place d’un stockage cloud</b> avec <b style="color: #880808">AWS</b>, pour faciliter la gestion des candidatures<br/><br/>
<b>» Automatisation des processus de recrutement</b>, via des fonctionnalités comme l’<b>export</b> <b style="color: #880808">CSV</b> et <b>la validation des profils</b></div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Un projet structurant pour le recrutement chez Free</b><br/><br/>
Lab 42 est une <b>plateforme clé pour attirer et gérer les étudiants de l’école 42 chez Free</b>, en leur offrant <b>un espace dédié et des outils facilitant leur intégration</b>. Travailler sur ce projet m’a permis de participer à la <b>création d’un outil RH digitalisé et performant</b>, combinant <b>une gestion fluide des candidatures et un espace interactif pour les étudiants et mentors</b>.<br/><br/>

🚀 Un projet enrichissant, mêlant développement front-end, gestion de données et automatisation du recrutement !`,
    cover: "assets/projects/lab-42/lab-42-cover.png",
    cardCover: "assets/projects/lab-42/lab-42-card.png",
    stack: ["Typescript", "Next", "Tailwind", "Strapi", "PostgreSQL", "Docker"],
    websiteUrl: "https://labs.iliad.fr/",
  },
  {
    date: "2025-03-05",
    type: "PROJET",
    slug: "daili",
    title: "Daili",
    description: `<b>Daili</b> est une plateforme interne centralisant <b>les outils et informations essentielles pour les employés de Free et des autres entreprises du groupe Iliad</b>. Elle offre un accès personnalisé selon l’entité à laquelle appartient l’utilisateur, garantissant une expérience adaptée aux besoins de chacun. <b>La plateforme est accessible à l’ensemble du groupe Iliad, y compris en Italie et en Pologne</b>.<br/><br/>

Son objectif est de <b>faciliter la communication interne et la gestion des ressources</b>, en regroupant des fonctionnalités variées comme :<br/><br/>

<div class="blueQuote"><b></b>Les <b>outils RH</b> (annuaire des employés, documents administratifs, etc.)<br/><br/>
<b></b>Le <b>menu de la cantine</b>, mis à jour automatiquement via une API<br/><br/>
<b></b>Les <b>actualités internes et événements</b> (interventions, séminaires, annonces officielles)<br/><br/>
Une <b>expérience personnalisée</b>, affichant un contenu spécifique en fonction de l’entité de l’utilisateur</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Mon rôle et contributions</b><br/><br/>
J’ai travaillé sur <b>plusieurs aspects clés</b> du projet :<br/><br/>
<div class="blueQuote">✅ <b>Refonte graphique</b> du front-end, en modernisant l’interface avec Next et Tailwind CSS<br/><br/>
✅ <b>Ajout de nouvelles fonctionnalités</b>, notamment :<br/><br/>

<b>» Intégration d’une API</b> pour l’affichage dynamique des repas de la cantine<br/><br/>
<b>» Implémentation d’un module météo</b>, affichant en temps réel les conditions locales<br/><br/>
<b>» Personnalisation des contenus</b> en fonction de l’entité de l’utilisateur<br/><br/>
✅ <b>Migration du back-end</b> de Strapi v4 à Strapi v5, garantissant une meilleure <b>scalabilité</b> et <b>maintenabilité</b></div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Développement et stack technique</b><br/><br/>
Pour mener à bien ces évolutions, nous avons utilisé :<br/><br/>

<div class="blueQuote"><b>»</b> <b style="color: #4682B4">Next</b> et <b style="color: #4682B4">Tailwind CSS</b> pour concevoir une interface moderne et ergonomique<br/><br/>
<b>»</b> <b style="color: #4682B4">TypeScript</b> pour assurer une base de code robuste et évolutive<br/><br/>
<b>»</b> <b style="color: #4682B4">Strapi</b> (migration v4 → v5) pour une gestion flexible et contributive des contenus<br/><br/>
<b>»</b> <b style="color: #4682B4">PostgreSQL</b> pour optimiser le stockage et l’organisation des données<br/><br/>
<b>»</b> <b style="color: #4682B4">Docker</b> pour garantir une infrastructure stable et scalable</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Défis et solutions techniques</b><br/><br/>
Daili étant une plateforme ouverte à <b>plusieurs entités du groupe Iliad</b>, le défi majeur était d’assurer <b>une expérience utilisateur cohérente tout en affichant un contenu spécifique selon l’entreprise et le pays</b>. Pour répondre à cette exigence, j’ai travaillé sur :<br/><br/>

🌍 <b>Un système de personnalisation du contenu</b>, garantissant que chaque utilisateur voit les informations propres à son entité (Free France, Iliad Italie, Iliad Pologne, etc.).<br/><br/>
🎨 <b>Une refonte UI</b> avec Tailwind CSS, offrant une interface plus fluide et responsive.<br/><br/>
🍽 <b>Une API connectée aux menus des cantines</b>, avec un affichage dynamique en fonction de la localisation de l’utilisateur.<br/><br/>
🌤 <b>Un module météo</b> pour informer les employés en temps réel.<br/><br/>
🔄 <b>Une migration technique de Strapi</b>, permettant une meilleure flexibilité et un meilleur contrôle des accès.<br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Expérience acquise</b><br/><br/>
Grâce à ce projet, j’ai renforcé mes compétences en :<br/><br/>

<div class="redQuote"><b>Développement front-end</b> avec <b style="color: #880808">Next</b> et <b style="color: #880808">Tailwind CSS</b>, pour concevoir une interface fluide et performante<br/><br/>
<b>Gestion et personnalisation des contenus</b> avec <b style="color: #880808">Strapi</b>, permettant une flexibilité accrue<br/><br/>
<b>Optimisation des bases de données</b> <b style="color: #880808">PostgreSQL</b>, pour garantir une navigation rapide et efficace<br/><br/>
<b>Déploiement et conteneurisation</b> avec <b style="color: #880808">Docker</b>, assurant une plateforme stable et évolutive</div><br/><br/>

<b style="font-family: Space Grotesk, sans-serif; font-size: 20px">Un projet stratégique pour le groupe Iliad</b><br/><br/>
Daili est une <b>plateforme clé pour la communication interne</b> de Free et du groupe Iliad à l’international. En contribuant à sa <b>refonte graphique</b>, à l’<b>ajout de nouvelles fonctionnalités</b> et à sa <b>migration back-end</b>, j’ai participé à un projet d’envergure, ayant un impact direct sur des <b>milliers d’utilisateurs à travers plusieurs pays</b>.<br/><br/>

🚀 Une mission enrichissante, mêlant innovation, personnalisation et collaboration à grande échelle !`,
    cover: "assets/projects/daili/daili-cover.png",
    cardCover: "assets/projects/daili/daili-card.png",
    stack: ["Typescript", "Next", "Tailwind", "Strapi", "PostgreSQL", "Docker"],
  },
];
