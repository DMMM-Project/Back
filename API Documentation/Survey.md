# Survey

## Info

Pour toutes les requêtes qui seront ici, il faut envoyer le token dans le header de la requête.

- `survey` : Retourne la liste de tous les surveys de la base de données.
- `survey/my` : Retourne le survey de l'utilisateur connecté. (GET)
- `survey/my` : Enregistre le survey de l'utilisateur connecté. (POST)


## Méthodes `Post` :

#### Exemples de JSON à envoyer :

- `survey/my` :
```json
{
  "aliments":
  [
    4041,
    25229,
    25556,
    25551,
    25001,
    9082,
    9083,
    25065,
    25033,
    25412
  ]
}
```

#### Exemples de réponse JSON :

- `survey/my` :
```json
{
  "message": "Survey saved !",
  "data": null,
  "error": null
}
```



## Méthodes `Get` :

#### Exemples de réponse JSON :

- `survey/my` :
```json
{
  "message": null,
  "data": {
    "aliments": [
      "25551",
      "25001",
      "25001",
      "25438",
      "25152",
      "25615",
      "26263",
      "25615",
      "13400",
      "20278"
    ]
  },
  "error": null
}
```

- `survey` :
```json
{
  "message": null,
  "data": {
    "surveys": [
      {
        "aliments": [
          4041,
          25229,
          25556,
          25551,
          25001,
          9082,
          9083,
          25065,
          25033,
          25412
        ]
      },
      {
        "aliments": [
          25229,
          25416,
          25043,
          25552,
          25230,
          25546,
          25588,
          25626,
          25085,
          25157
        ]
      }
    ]
  },
  "error": null
}
```