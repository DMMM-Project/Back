# Category

## Méthodes `Get` :

#### Exemples de JSON à envoyer :

- `categories` :
```json
{
  "alim_grp_code": 1
}
```

- `categories` :
```json
{
  "alim_grp_code": 103
}
```

#### Exemples de réponse JSON :

- `categories` :
```json
{
  "categories": [
    {
      "alim_grp_code": 1,
      "alim_grp_nom_fr": "entr�es et plats compos�s"
    },
    {
      "alim_grp_code": 2,
      "alim_grp_nom_fr": "fruits, l�gumes, l�gumineuses et ol�agineux"
    },
    {
      "alim_grp_code": 3,
      "alim_grp_nom_fr": "p�tes diverses, produits c�r�aliers"
    },
    {
      "alim_grp_code": 4,
      "alim_grp_nom_fr": "viandes, �ufs, poissons et assimil�s"
    },
    {
      "alim_grp_code": 5,
      "alim_grp_nom_fr": "produits laitiers et assimil�s"
    },
    {
      "alim_grp_code": 6,
      "alim_grp_nom_fr": "eaux et autres boissons"
    },
    {
      "alim_grp_code": 7,
      "alim_grp_nom_fr": "produits sucr�s"
    },
    {
      "alim_grp_code": 8,
      "alim_grp_nom_fr": "glaces et sorbets"
    },
    {
      "alim_grp_code": 9,
      "alim_grp_nom_fr": "mati�res grasses"
    },
    {
      "alim_grp_code": 10,
      "alim_grp_nom_fr": "aides culinaires et ingr�dients divers"
    },
    {
      "alim_grp_code": 11,
      "alim_grp_nom_fr": "aliments infantiles"
    }
  ]
}
```

- `categories/subcategories` :
```json
{
  "categories": [
    {
      "alim_grp_code": 101,
      "alim_grp_nom_fr": "salades compos�es et crudit�s"
    },
    {
      "alim_grp_code": 102,
      "alim_grp_nom_fr": "soupes"
    },
    {
      "alim_grp_code": 103,
      "alim_grp_nom_fr": "plats compos�s"
    },
    {
      "alim_grp_code": 104,
      "alim_grp_nom_fr": "pizzas, tartes et cr�pes sal�es"
    },
    {
      "alim_grp_code": 105,
      "alim_grp_nom_fr": "sandwichs"
    },
    {
      "alim_grp_code": 106,
      "alim_grp_nom_fr": "feuillet�es et autres entr�es"
    }
  ]
}
```

- `categories/subsubcategories` :
```json
{
    "categories": [
        {
            "alim_grp_code": 10301,
            "alim_grp_nom_fr": "plats de viande sans garniture"
        },
        {
            "alim_grp_code": 10302,
            "alim_grp_nom_fr": "plats de viande et f�culents"
        },
        {
            "alim_grp_code": 10303,
            "alim_grp_nom_fr": "plats de viande et l�gumes/l�gumineuses"
        },
        {
            "alim_grp_code": 10304,
            "alim_grp_nom_fr": "plats de poisson sans garniture"
        },
        {
            "alim_grp_code": 10305,
            "alim_grp_nom_fr": "plats de poisson et f�culents"
        },
        {
            "alim_grp_code": 10306,
            "alim_grp_nom_fr": "plats de l�gumes/l�gumineuses"
        },
        {
            "alim_grp_code": 10307,
            "alim_grp_nom_fr": "plats de c�r�ales/p�tes"
        },
        {
            "alim_grp_code": 10308,
            "alim_grp_nom_fr": "plats de fromage"
        },
        {
            "alim_grp_code": 10309,
            "alim_grp_nom_fr": "plats v�g�tariens"
        }
    ]
}
```