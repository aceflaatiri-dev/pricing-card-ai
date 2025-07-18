# Pricing Card AI Project

## Description

Ce projet consiste à corriger, refactoriser et améliorer un composant React de carte de prix initialement défectueux.  
Le composant initial présentait des erreurs React (utilisation de `class` au lieu de `className`), un style non responsive et n’était pas réutilisable.

À l’aide d’un prompt IA, le composant a été transformé en un composant fonctionnel réutilisable, avec des props dynamiques et un style propre.

---

## Fonctionnalités

- Composant React fonctionnel `PricingCard` avec props :
  - `title` (string) : titre de la carte
  - `price` (string) : prix affiché
  - `features` (array) : liste des fonctionnalités
  - `onClick` (function) : callback du bouton

- Style simple et moderne sans dépendance à Tailwind CSS (CSS classique)

- Bouton fonctionnel avec gestion d’événements

---

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/aceflaatiri-dev/pricing-card-ai.git
cd pricing-card-ai
Installer les dépendances :

bash
Copy
Edit
npm install
Lancer le projet :

bash
Copy
Edit
npm start
Le projet s’ouvrira automatiquement sur http://localhost:3000.

Structure des fichiers
src/broken-component.jsx : composant initial défectueux (code avant)

src/PricingCard.jsx et src/PricingCard.css : composant refactorisé et stylé (code après)

src/App.jsx : exemple d’utilisation du composant PricingCard

src/prompt.txt : prompt IA utilisé pour corriger et refactoriser le composant

Prompt IA utilisé
Ce composant a des erreurs React (class au lieu de className), il n’est pas responsive, pas réutilisable.
Corrige ces erreurs, applique Tailwind CSS pour améliorer le style,
et transforme-le en un composant fonctionnel PricingCard
avec des props dynamiques title, price, features, onClick.

Auteur
Acef Laatiri

Licence
MIT
