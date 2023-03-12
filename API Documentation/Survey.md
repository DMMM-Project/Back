# Survey

## Méthodes `Post` :

#### Exemples de JSON à envoyer :

- `survey/my` :
```json
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



## Méthodes `Get` :

#### Exemples de réponse JSON :

- `survey/my` :
```json
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

- `survey` :
```json
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