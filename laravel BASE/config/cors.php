<?php

return [
    'paths' => ['api/*'], // Chemins d'API que vous souhaitez autoriser
    'allowed_methods' => ['*'], // Méthodes HTTP autorisées
    'allowed_origins' => ['http://localhost:3000'], // Origines autorisées
    'allowed_headers' => ['*'], // En-têtes autorisés
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
