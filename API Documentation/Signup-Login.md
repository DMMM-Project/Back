# Signup-Login

## Méthodes `Post` :

#### Exemples de JSON à envoyer :

- `signup` :
```json
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

- `login` :
```json
{
    "naissance": "10/05/2012",
    "telephone": "0607080910"
}
```

#### Exemples de réponse JSON :

- `signup` :
```json
{
  "message": "User created !",
  "survey": false,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBlMmRlYjRmZWVlMTYyMTVhZGFmYzQiLCJpYXQiOjE2Nzg2NTA4NTksImV4cCI6MTcxMDE4Njg1OX0.qzo7rVtEgBMdaPc3emYH6qRjxtFuiUPEsulUydrfpdQ"
}
```

- `login` :
```json
{
  "message": "User found!",
  "survey": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2Y5ZmMwYWVjMzU4MDFlMjA2ZTk5ZjciLCJpYXQiOjE2Nzg2NTA4MDQsImV4cCI6MTcxMDE4NjgwNH0.sIeRjdUz_cnHfzjR-PXPyUEeosJxsUdqs6tjbqzt0zU"
}
```