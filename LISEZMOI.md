# Skattask - gestionnaire de tâches

## Sommaire

1. [Informations générales](#Informations-générales)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Autrice](#autrice)

## Informations générales

Cette WebApp est un tableau pense-bête. Il permet de créer des listes de tâches et de leur atribuer une personne, une description, un délai.
Cette WebApp a été développé dans le cadre d'un stage à l'agence User-Agency, adapté par l'autrice dans l'objectif de préparer le passage de titre du displome de Web developper.
Elle est développée sur NextJS avec TypeScript, Redux, Prisma, NextAuth et n'a jamais été lancée en production.

### Statut du projet et état d'avancement

Ce projet a été développé de septembre 2022 à mars 2023. Les fonctionnalités disponibles côté utilisateur sont les suivantes :

- Se connecter grâce à Github ou Google. Si le compte n'existe pas il est créé en base de données.
- Créer une tâches
- Sélectionner et modifier une tâches (lui attribuer une date, une personne, modifier la description, la mettre en statut "terminé")
- Accéder aux tâches existantes (stockées en base de données), en cours et terminées

## Technologies

Ce projet est développé en **NextJS**

**Principales librairies utilisées:**

- `Redux` : Pour enregistrer l'état de l'application.
- `Redux saga` : Pour gérer les états désynchronisés , notamment les requêtes à la base de données ou la gestion du statut logué de l'utilisateur
- `TypeScript` : Permet de typer les variables et ainsi améliorer la qualité du code
- `PostGre` : La base de données est gérée sur PostGre. Elle a été créée pour gérer les données de l'application. Les deux principales tables sont les utilisateurs, utilisés pour la connexion à l'application et attribuer une tâche; et les tasks. D'autres tables ont été ajoutées afin d'utiliser NextAuth et de gérer les sessions. Le schéma de la base de données peut petre consulté dans le dossier prisma.
- `Prisma` : C'est un ORM qui a été utilisé dans sa grlobalité : pour gérer les migrations (prisma migrate), le schéma de la base de données (Prisma Schéma), faire des requêtes SQL (Prisma Client)
- `Next` : Pour gérer les partie back office et la création d'API, c'est Next qui a été utilisé notamment grâce au dossier /api/
- `NextAuth` : Permet de gérer toute l'oauthentification. Les options de configuration sont dans le dossier "/api/auth"

### Autres librairies diverses

- `React calendar` : Pour montrer le calendrier qui permet d'assigner les tâches
- `Styled Component` a été utilisé pour gérer le style de l'application.
- `Styled Reset` a été utilisé pour faire un reset des styles par défaut des différents navigateurs.
- `Axios` a été utilisé pour gérer les appels API de l'application (dossiers "request" pour l'appel et Pages/api pour voir les apis appelées par http://localhost3000/api)

## Installation

### Pour commencer un projet

- Cloner ce dépôt, se rendre à l'intérieur
  Lancer la commande npm run build

- Configurer le fichier .env (à ajouter dans gitignore)

- Ouvrir (http://localhost:3000) avec un navigateur pour voir le résultat.

- Les routes APIs sont accessibles à l'adresse http://localhost:3000/api/tasks (ou users) en mode connecté uniquement

### Liste des commandes et signification

    npm run build : Initialisation du frontend et du backend ainsi que des outils
    npm run dev : Démarrage du serveur de éveloppement
    npm run seed : Efface toutes les données de la base de données et injecte dans la base de données les données présentes dans le fichier prisma/data.js
