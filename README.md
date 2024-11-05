Task Manager

Cette application est un gestionnaire de tâches simple construit avec un backend Laravel et un frontend React. Elle permet aux utilisateurs de lister, créer, modifier et supprimer des tâches.
Prérequis

    PHP 8.2+
    Composer
    Node.js et npm
    Laravel 11.9+
    Serveur MySQL 

Installation

    Clonez le projet :

    bash

git clone https://github.com/Tchach-Nelson/test_technique.git
cd test_technique

Installez les dépendances Laravel :

bash

composer install

Installez les dépendances React :

bash

npm install

Configurez l'environnement :

    Copiez le fichier .env.example vers .env et configurez les informations de la base de données.
    Générez la clé d'application Laravel :

    bash

    php artisan key:generate

Lancer les migrations pour créer les tables de la base de données :

bash

php artisan migrate

Démarrez le serveur de développement Laravel et le serveur React :

bash

    php artisan serve
    npm start

Utilisation

    Ouvrez votre navigateur et accédez à http://localhost:3000 pour utiliser l'application frontend.
    Le backend Laravel est accessible via http://localhost:8000.

Remarques

    CORS : Assurez-vous que les règles CORS sont bien configurées pour permettre les requêtes entre React et Laravel.
    Protection CSRF : Laravel exige un token CSRF pour les requêtes POST, PUT, et DELETE. Configurez ce token dans votre application React en le récupérant via un endpoint Laravel si nécessaire.

Licence

Ce projet est sous licence MIT.
