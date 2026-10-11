import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MegaMine Wiki',
  description: 'Le guide et wiki communautaire non-officiel du mode MegaMine sur Rinaorc.',
  lang: 'fr-FR',
  base: process.env.BASE_URL || '/',
  head: [
    ['link', { rel: 'icon', href: '/screenshots/screen_1.png' }]
  ],
  themeConfig: {
    siteTitle: '⛏️ MegaMine Wiki',
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Guide Débutant', link: '/guide/debutant' },
      { text: 'Arsenal & Compétences', link: '/arsenal/competences' },
      { text: 'Tesseract & Talents', link: '/progression/tesseract' },
      { text: 'Mode Duel', link: '/pvp-duel/duel' },
      { text: 'Mises à jour', link: '/changelogs/historique' }
    ],
    sidebar: [
      {
        text: '📖 Bien Démarrer',
        collapsed: false,
        items: [
          { text: 'Guide du Débutant & HUD', link: '/guide/debutant' },
          { text: 'Étages & Mondes (★ à ★★★)', link: '/guide/etages-mondes' },
          { text: 'Économie, Vente & Coffre', link: '/guide/economie' },
          { text: 'Commandes & Raccourcis', link: '/guide/commandes' }
        ]
      },
      {
        text: '⚔️ Arsenal & Magie',
        collapsed: false,
        items: [
          { text: 'Les 46 Compétences', link: '/arsenal/competences' },
          { text: 'Les Livres Enchantés', link: '/arsenal/livres' },
          { text: 'Deckbuilding & Désactivation', link: '/arsenal/deckbuilding' }
        ]
      },
      {
        text: '🔮 Équipement & Objets',
        collapsed: false,
        items: [
          { text: 'Reliques & Frénésie des Vases', link: '/equipement/reliques' },
          { text: 'Pioches, Multi-outils & Jetpacks', link: '/equipement/outils-jetpacks' }
        ]
      },
      {
        text: '🌟 Méta-progression',
        collapsed: false,
        items: [
          { text: 'Arbre du Tesseract (373 Talents)', link: '/progression/tesseract' },
          { text: 'La Forge (+1 à +20) & Supernova', link: '/progression/forge' },
          { text: 'Familiers (117 Compagnons)', link: '/progression/familiers' }
        ]
      },
      {
        text: '💀 PVE & Combats',
        collapsed: false,
        items: [
          { text: 'Seigneur des Abysses & Boss', link: '/pve-boss/abysses' },
          { text: 'Ennemis, Champions & Difficulté ∞', link: '/pve-boss/ennemis-champions' }
        ]
      },
      {
        text: '🏆 Compétitif & Duels',
        collapsed: false,
        items: [
          { text: 'Mode Duel 1v1 (Rangs Fer à Dragon)', link: '/pvp-duel/duel' }
        ]
      },
      {
        text: '📜 Changelogs & Équilibrages',
        collapsed: true,
        items: [
          { text: 'Historique des Mises à Jour', link: '/changelogs/historique' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/rinaorc' },
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: 'Wiki communautaire non-officiel pour Rinaorc MegaMine.',
      copyright: 'Fait avec passion par et pour les joueurs.'
    }
  }
})
