# Food

## Méthodes `Get` :

#### Exemples de JSON à envoyer :

- `food/categories` (à envoyer) :
```json
{
    "alim_grp_nom_fr": "entrées et plats composés",
    "alim_ssgrp_nom_fr": "plats composés",
    "alim_ssssgrp_nom_fr": "plats de fromage"
}
```

#### Exemples de réponse JSON :

- `food/categories` :
```json
{
    "foods": [
        {
            "alim_code": 4041,
            "alim_nom_fr": "Aligot (purée de pomme de terre à la tomme fraîche), préemballé"
        },
        {
            "alim_code": 19437,
            "alim_nom_fr": "Fromage de chèvre pané à dorer, préemballé"
        },
        {
            "alim_code": 25546,
            "alim_nom_fr": "Fromage pané au jambon"
        },
        {
            "alim_code": 25437,
            "alim_nom_fr": "Gougère"
        },
        {
            "alim_code": 25509,
            "alim_nom_fr": "Préparation à base de fromage(s) pour fondue savoyarde, préemballée"
        },
        {
            "alim_code": 25020,
            "alim_nom_fr": "Soufflé au fromage"
        },
        {
            "alim_code": 25137,
            "alim_nom_fr": "Tartiflette, préemballée"
        }
    ]
}
```