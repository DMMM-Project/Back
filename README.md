# BackEnd

### Présentation 

Ce projet a été fait pour faire fonctionner le repository `Frontend`, il permet de charger les actualités et de les rechercher par rapport à leurs tag.

C'est un projet purement éducatif fait par des élèves de l'IUT de paris rives-de-seine.

### Lancement du projet
Pour lancer le projet vous devez avoir Node et effectuer ces commandes.

#### Backend directory
1. Installer les dépendances
   `npm install`
   
2. Pour ajouter Express
   `npm install express`
   
3. Pour ajouter Nodemon
   `npm install -g nodemon`
   
4. Pour lancer le server
   `nodemon server`

#### Frontend directory
1. Installer les dépendances
   `npm install`
   
2. Lancer le projet en mode développeur
   `npm run start`

3. Aller sur le site, hébergé en local
   `http://localhost:4200`

### Informations complémentaires

Ce projet est complètement inutile si le `Frontend` n'est pas lancé et fonctionnel.
Le stockage est local, fonctionnant sous **MongoDB**.
La communication avec l'API se fera sur le port `http://localhost:3000/api/` suivi de l'un des endpoints suivant :
- `survey` (avec la méthode `Post`)
- `results` (avec la méthode `Get`)
