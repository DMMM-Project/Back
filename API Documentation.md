# API Documentation

## Présentation 

La communication avec l'API se fera sur le port `http://localhost:3000/api/` suivi de l'un des endpoints suivant :
- `signup` (avec la méthode `Post`)
- `login` (avec la méthode `Post`)
- `products` (avec la méthode `Get`)
- `survey` (avec la méthode `Get`)
- `survey/my` (avec les méthodes `Post` et `Get`)

### Autres informations :

- Pour répondre au sondage, il faut être connecté, sinon vous serez redirigé vers la page de connexion.
- L'action de connection renvoie un token permet de répondre au sondage ou de voir les résultats du sondage auquel vous avez répondu.
- Le token est stocké dans le local storage du navigateur.
- Pour voir les résultats du sondage, il faut être connecté et avoir répondu au sondage.

### Exemples de JSON à envoyer (Méthodes `Post`) :

- Pour `signup` :
```
{
    "nom" : "toto",
    "prenom": "toto",
    "naissance": "10/05/2012",
    "adresse": "2 avenue de la tour neiffel",
    "code_postal": 91210,
    "ville": "Draveil",
    "telephone": "0607080910"
}
```

- Pour `login` :
```
{
    "naissance": "10/05/2012",
    "telephone": "0607080910"
}
```

- Pour `survey/my` :
```
{
    "aliments":
    [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]
}
```

### Exemples de réponse JSON (Méthodes `GET`) :

- Pour `survey/my` :
```
{
    "aliments": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]
}
```

- Pour `survey` :
```
[
    [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ],
    [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]
]
```

### Exemples de réponse JSON (Méthodes `signup` et `login`) :

- Pour `signup` :
```
{
    "message": "Utilisateur créé !",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2YyOTE5ZGJkNjRmMTk2MTU0ODA1MGYiLCJpYXQiOjE2NzY4NDEzNzMsImV4cCI6MTcwODM3NzM3M30.3M3Z3_L4nPN9vjq6KbprAjwS9_uKMC4VyimQoP43r0I"
}
```

- Pour `login` :
```
{
    "message": "Utilisateur trouvé !",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2YyOTE5ZGJkNjRmMTk2MTU0ODA1MGYiLCJpYXQiOjE2NzY4NDE0MDksImV4cCI6MTcwODM3NzQwOX0.qsI_2zWUY4PpK8LcOrmhqO08KrriUwWtZl4IaQIAlC8"
}
```