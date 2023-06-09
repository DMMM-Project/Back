# Signup-Login

## Méthodes `Post` :

#### Exemples de JSON à envoyer :

- `signup` :
```json
{
  "nom": "toto",
  "prenom": "toto",
  "naissance": "30/05/2022",
  "adresse": "2 avenue de la tour neiffel",
  "code_postal": 96210,
  "ville": "Draveil",
  "telephone": "0123456789",
  "password": "0123456789"
}
```

- `login` :
```json
{
  "password": "0123456789",
  "telephone": "0123456789"
}
```

- `verify` :
Pas de json requis. Il faut juste envoyer le token dans le header de la requête.

#### Exemples de réponse JSON :

- `signup` :
```json
{
  "message": "User created !",
  "data": {
    "username": "toto",
    "survey": false,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDgzOTM2YjNjMDE4NTE3MDFjYzA0ZjMiLCJpYXQiOjE2ODYzNDQ1NTUsImV4cCI6MTcxNzg4MDU1NX0.53OJLgQbQbwGZdt6BQ5V3bpUbcT_8FbYWHUSoUVItLk"
  },
  "error": null
}
```

- `login` :
```json
{
  "message": "User found!",
  "data": {
    "username": "tata",
    "survey": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZhMmY1MWMzMmQzZjk0MGM2NDAzYzEiLCJpYXQiOjE2ODYzNDQ0OTksImV4cCI6MTcxNzg4MDQ5OX0.2KUKNQilIZxUXcJJRHI36DNe9jiWNMljj2Ls_NypOEY"
  },
  "error": null
}
```

- `verify`
```json
{
    "message": "User found!",
    "data": {
        "username": "tata",
        "survey": true
    },
    "error": null
}
```