import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Théotime Fitzgérald Augustin CHOGNIKA',
    photoBackEmoji: '💻',
    title: {
      fr: 'Ingénieur logiciel',
      en: 'Software Engineer',
    },
    subtitle: {
      fr: 'Développement web, mobile et data',
      en: 'Web, Mobile and Data Development',
    },
    location: 'Dakar, Sénégal',
  },
  seo: {
    title: 'Théotime CHOGNIKA — Software Engineer',
    description: 'CV interactif de Théotime CHOGNIKA, ingénieur logiciel spécialisé en développement web, mobile et data.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'email', label: 'theotimechognika@gmail.com' },
    { type: 'phone', label: '+221 78 433 55 37' },
    { type: 'location', label: 'Dakar, Sénégal' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' } },
        { name: { fr: 'Anglais', en: 'English' } },
      ],
    },
    {
      title: { fr: 'Frontend', en: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'Vue.js' },
        { name: 'React Native' },
        { name: 'JavaScript' },
      ],
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
      ],
    },
    {
      title: { fr: 'Base de données', en: 'Databases' },
      type: 'badges',
      items: [
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'SQL Server' },
      ],
    },
    {
      title: { fr: 'Outils', en: 'Tools' },
      type: 'badges',
      items: [
        { name: 'Git' },
      ],
    },
    {
      title: { fr: 'Business Intelligence & Data', en: 'Business Intelligence & Data' },
      type: 'text',
      items: [
        { name: { fr: 'Analyse de données et reporting SQL Server', en: 'Data analysis and SQL Server reporting' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Apprentissage continu', en: 'Continuous learning' } },
        { name: { fr: 'Adaptation aux nouvelles technologies', en: 'Adaptability to new technologies' } },
        { name: { fr: 'Dynamique et motivé', en: 'Dynamic and motivated' } },
        { name: { fr: 'Curieux', en: 'Curious' } },
        { name: { fr: 'Gestion du stress', en: 'Stress management' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'bictorys',
      company: { fr: 'Bictorys', en: 'Bictorys' },
      role: { fr: 'Développeur front-end web et mobile', en: 'Frontend Web and Mobile Developer' },
      type: { fr: 'CDI', en: 'Permanent Contract' },
      period: { fr: 'Depuis octobre 2024', en: 'Since October 2024' },
      description: {
        fr: 'Développement et amélioration continue de l\'application mobile et des solutions web partenaires.',
        en: 'Development and continuous improvement of the mobile application and partner web solutions.',
      },
      techs: ['React', 'React Native', 'JavaScript'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Entreprise technologique spécialisée dans le paiement marchands.',
          en: 'Technology company specializing in merchant payments.',
        },
        tasks: {
          fr: [
            'Intégration de nouvelles fonctionnalités sur l\'application mobile',
            'Conception et développement d\'interfaces utilisateur interactives',
            'Intégration frontend d\'un dashboard pour les partenaires',
          ],
          en: [
            'Integration of new features into the mobile application',
            'Design and development of interactive user interfaces',
            'Frontend integration of a partner dashboard',
          ],
        },
        env: {
          fr: 'React / React Native / JavaScript',
          en: 'React / React Native / JavaScript',
        },
      },
    },
    {
      id: 'grafico',
      company: { fr: 'Grafico Group', en: 'Grafico Group' },
      role: { fr: 'Développeur web', en: 'Web Developer' },
      type: { fr: 'CDD', en: 'Fixed-term Contract' },
      period: { fr: 'Juin 2023 - Décembre 2023', en: 'June 2023 - December 2023' },
      description: {
        fr: 'Prestation full-stack pour la conception d\'un logiciel desktop de gestion d\'assurance santé.',
        en: 'Full-stack service for the development of a desktop health insurance management software.',
      },
      details: {
        context: {
          fr: 'Entreprise technologique spécialisée dans le développement de solutions digitales.',
          en: 'Technology company specializing in the development of digital solutions.',
        },
        tasks: {
          fr: [
            'Intégration de nouvelles fonctionnalités sur l\'application mobile',
            'Conception et développement d\'interfaces utilisateur interactives',
            'Intégration frontend d\'un dashboard pour les partenaires',
          ],
          en: [
            'Integration of new features into the mobile application',
            'Design and development of interactive user interfaces',
            'Frontend integration of a partner dashboard',
          ],
        },
      },
      techs: ['Vue js', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 'digitalops',
      company: { fr: 'DigitalOps', en: 'DigitalOps' },
      role: { fr: 'Développeur web (Stage)', en: 'Web Developer (Internship)' },
      type: { fr: 'Stage professionnel', en: 'Professional Internship' },
      period: { fr: 'Octobre 2022 - Novembre 2022', en: 'October 2022 - November 2022' },
      description: {
        fr: 'Stage en développement web orienté React et Node.js.',
        en: 'Web development internship focused on React and Node.js.',
      },
      techs: ['React', 'Next.js', 'Node.js'],
      details: {
        context: {
          fr: 'Entreprise spécialisée en solutions digitales et développement web.',
          en: 'Company specialized in digital solutions and web development.',
        },
        tasks: {
          fr: [
            'Implémentation de composants pour un site d\'actualités sportives en Afrique',
            'Création d\'une API avec Node.js',
          ],
          en: [
            'Implementation of components for an African sports news website',
            'Creation of an API with Node.js',
          ],
        },
        env: {
          fr: 'React / Next.js / Node.js',
          en: 'React / Next.js / Node.js',
        },
      },
    },
    {
      id: 'globalit',
      company: { fr: 'Global IT Services', en: 'Global IT Services' },
      role: { fr: 'Développeur Web (Stage académique)', en: 'Web Developer (Academic Internship)' },
      type: { fr: 'Stage académique', en: 'Academic Internship' },
      period: { fr: 'Mars 2022 - Août 2022', en: 'March 2022 - August 2022' },
      description: {
        fr: 'Stage académique avec prise en main du framework React.',
        en: 'Academic internship with hands-on experience using the React framework.',
      },
      techs: ['React', 'JavaScript'],
    },
    {
      id: 'gab',
      company: { fr: 'Général des Assurances du Bénin', en: 'Général des Assurances du Bénin' },
      role: { fr: 'Stagiaire Informatique de gestion', en: 'IT Management Intern' },
      type: { fr: 'Stage académique', en: 'Academic Internship' },
      period: { fr: 'Juillet 2021 - Septembre 2021', en: 'July 2021 - September 2021' },
      description: {
        fr: 'Assistance informatique au personnel et gestion de bases de données.',
        en: 'IT support to staff and database management.',
      },
      techs: ['SQL Server'],
    },
  ],
  education: [
    {
      school: { fr: 'Institut Supérieur d\'Informatique', en: 'Higher Institute of Computer Science' },
      degree: { fr: 'Master professionnel en Génie logiciel', en: 'Professional Master\'s in Software Engineering' },
      period: '2023 - 2025',
    },
    {
      school: { fr: 'Institut de Formation et de Recherche en Informatique du Bénin', en: 'Institute of Training and Research in Computer Science of Benin' },
      degree: { fr: 'Licence professionnelle en Génie Logiciel', en: 'Professional Bachelor\'s in Software Engineering' },
      period: '2019 - 2023',
    },
    {
      school: { fr: 'Collège Catholique Père Aupiais', en: 'Collège Catholique Père Aupiais' },
      degree: { fr: 'Baccalauréat Série C', en: 'Scientific High School Diploma (Series C)' },
      period: '2019',
    },
    {
      school: { fr: 'Coursera', en: 'Coursera' },
      degree: { fr: 'Business Intelligence with SQL Server: Create SQL Reports', en: 'Business Intelligence with SQL Server: Create SQL Reports' },
      period: 'Janvier 2026',
    },
  ],
  projects: [],
  hobbies: [
    { title: { fr: 'Musique', en: 'Music' } },
    { title: { fr: 'Taekwondo', en: 'Taekwondo' } },
    { title: { fr: 'Lecture', en: 'Reading' } },
    { title: { fr: 'Réseaux sociaux', en: 'Social Media' } },
  ],
  theme: { preset: 'slate' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
