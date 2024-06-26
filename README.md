# AppMedicFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Prérequis

Assurez-vous que Node.js et npm sont installés sur votre machine.

## Installation des dépendances

Installez les dépendances npm en exécutant :

```bash
npm install
```

## Serveur de développement

Pour lancer le serveur de développement, exécutez :

```bash
ng serve
```

Naviguez ensuite vers `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez les fichiers sources.

## Génération de code

Pour générer un nouveau composant, exécutez :

```bash
ng generate component component-name
```

Vous pouvez également utiliser `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construction

Pour construire le projet, exécutez :

```bash
ng build
```

Les artefacts de construction seront stockés dans le répertoire `serverGo/app-medic`.

## Exécution des tests unitaires

Pour exécuter les tests unitaires via [Karma](https://karma-runner.github.io), exécutez :

```bash
ng test
```

## Exécution des tests end-to-end

Pour exécuter les tests end-to-end via une plateforme de votre choix, exécutez :

```bash
ng e2e
```

Pour utiliser cette commande, vous devez d'abord ajouter un package qui implémente des capacités de test end-to-end.

## Aide supplémentaire

Pour obtenir plus d'aide sur l'Angular CLI, utilisez `ng help` ou consultez la page [Angular CLI Overview and Command Reference](https://angular.io/cli).

## Déploiement

### Docker

Un `Dockerfile` est inclus dans ce projet. Pour construire et exécuter le conteneur Docker, utilisez les commandes suivantes :

Pour construire l'image Docker :

```bash
docker build -t appmedicfront .
```

Pour exécuter le conteneur Docker :

```bash
docker run -p 443:443 appmedicfront
```

### Serveur Go

Dans le dossier `serverGo`, il y a un fichier `server.go` qui permet de lancer un serveur web en Go. Pour lancer ce serveur, assurez-vous que Go est installé, puis exécutez :

```bash
go run serverGo/server.go
```
