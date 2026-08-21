# 🏦 Argent Bank — Application bancaire React & Redux

> Application web bancaire développée en React avec gestion d'état globale via Redux (Redux Toolkit). Authentification sécurisée par token, page profil protégée, édition des informations utilisateur et persistance de session. Le projet inclut également la **conception** de l'API des transactions, documentée en Swagger.

## 🚀 Démo en ligne

> ⚠️ Le projet n'est pas déployé en ligne : l'application repose sur un back-end (Node / Express / MongoDB) qui tourne en local (port 3001). Pour tester le site, suivez la section [Installation](#-installation) pour lancer le back-end, la base de données et le front.

## 🎯 Contexte du projet

Argent Bank est une nouvelle banque en ligne qui souhaite percer sur le marché. Le projet se déroule en deux phases : la mise en place de l'**authentification des utilisateurs** (implémentée) et la **conception de l'API des transactions** (documentation seule, sans implémentation).

**Mission :** développer le front-end en **React** avec une gestion de l'état global via **Redux**, en implémentant l'authentification (connexion, déconnexion, page profil protégée, édition du profil) à partir des maquettes fournies ; puis **concevoir** le contrat de l'API des transactions au format **Swagger**.

## 🛠️ Technologies utilisées

- **React 19** — composants fonctionnels et hooks
- **Redux Toolkit** & **React-Redux** — état global (store, slices, thunks asynchrones)
- **React Router** — navigation déclarative et route protégée
- **Vite** — outil de build et serveur de développement
- **Fetch API** — appels à l'API REST
- **Swagger 2.0 (OpenAPI)** — conception et documentation de l'API des transactions
- **ESLint** — analyse statique et qualité de code
- **Git / GitHub** — versioning

## ✨ Fonctionnalités principales

- ✅ **Page d'accueil** présentant les services de la banque
- ✅ **Connexion** sécurisée avec gestion des erreurs d'identifiants
- ✅ **Route protégée** : la page profil redirige vers la connexion si l'utilisateur n'est pas authentifié
- ✅ **Page profil** affichant les informations réelles de l'utilisateur connecté
- ✅ **Édition du profil** (prénom et nom) avec répercussion immédiate de l'affichage (nom, en-tête)
- ✅ **Déconnexion** vidant le store et le stockage local
- ✅ **Persistance de session** : le token est conservé dans `localStorage` (l'utilisateur reste connecté après un rechargement)
- ✅ **Conception de l'API des transactions** documentée en **Swagger** (`swagger-transactions.yaml`)
- ✅ Site **responsive**, **accessible** (score Lighthouse 100) et validé **W3C**

## 📐 Structure du projet

```text
argent-bank/
├── frontend/                     # Application React (mon travail)
│   ├── src/
│   │   ├── app/                  # store Redux (store.js)
│   │   ├── features/auth/        # slice d'authentification (authSlice.js)
│   │   ├── components/           # Header, Footer, FeatureCard, Account, ProtectedRoute
│   │   ├── pages/                # Home, SignIn, User
│   │   ├── assets/img/           # images optimisées
│   │   ├── App.jsx               # routeur et structure commune
│   │   ├── main.jsx              # point d'entrée (Provider, BrowserRouter)
│   │   └── index.css             # styles
│   └── public/
├── server/                       # back-end fourni (Node / Express / MongoDB)
├── designs/                      # maquettes HTML/CSS de départ
├── swagger-transactions.yaml     # conception de l'API des transactions (Phase 2)
└── README.md
```

## 🎓 Compétences travaillées

- Gestion de l'**état global** d'une application avec **Redux Toolkit** (store, `createSlice`, `createAsyncThunk`)
- **Authentification** par token : connexion, route protégée, persistance en `localStorage`, déconnexion
- Consommation d'une **API REST** avec `fetch` (opérations asynchrones et gestion des erreurs)
- **Navigation** et protection de routes avec React Router
- **Conception d'API** : traduire une maquette en contrat **Swagger** (routes, paramètres, réponses, modèles de données)
- **Green Code** : optimisation des images (poids et dimensions) et composants réutilisables
- Qualité : **accessibilité** (Lighthouse 100), validation **W3C**, performances

## 📦 Prérequis

- **Node.js** (version 20 ou supérieure ; projet développé avec Node 24)
- **npm**
- **MongoDB Community Server** installé et lancé en local

## 🚀 Installation

Le projet nécessite de lancer **deux serveurs** en parallèle : le **back-end** (fourni, port 3001) et le **front** (port 5173).

### 1. Cloner le dépôt

```bash
git clone https://github.com/leaspadea/argent-bank.git
cd argent-bank
```

### 2. Lancer le back-end (port 3001)

À la racine du projet :

```bash
npm install
npm run dev:server
```

Puis, dans un autre terminal, peupler la base de données avec deux utilisateurs de test :

```bash
npm run populate-db
```

Le back-end tourne alors sur `http://localhost:3001` (documentation Swagger disponible sur `/api-docs`).

**Utilisateurs de test :**

| Email | Mot de passe |
|-------|--------------|
| `tony@stark.com` | `password123` |
| `steve@rogers.com` | `password456` |

### 3. Lancer le front (port 5173)

Dans un autre terminal :

```bash
cd frontend
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

## 🧰 Scripts disponibles (front)

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement (Vite) |
| `npm run build` | Génère la version de production dans `/dist` |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run lint` | Analyse le code avec ESLint |

## 👤 Auteur

**Léa Spadea** — Étudiante Intégratrice Web @ OpenClassrooms
🔗 [LinkedIn](https://www.linkedin.com/in/lea-spadea/) · 💻 [GitHub](https://github.com/leaspadea)

## 📄 Licence

Ce projet est sous licence **MIT**.

---

*Projet réalisé dans le cadre de la formation Intégrateur Web (RNCP niveau 5) chez OpenClassrooms.*
