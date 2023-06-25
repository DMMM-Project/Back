# Category

## Info

Pour toutes les requêtes qui seront ici, il faut envoyer le token dans le header de la requête.

- `categories` : Retourne la liste de toutes les catégories de la base de données.
- `categories/subcategories` : Retourne les sous-catégorie correspondant à l'id de la catégorie passé en paramètre. </br>
  (ex : `https://localhost:8443/api/categories/subcategories?alim_grp_code=3`)
- `categories/subcategories` : Retourne les sous-sous-catégorie correspondant à l'id de la sous-catégorie passé en paramètre. </br>
  (ex : `https://localhost:8443/api/categories/subsubcategories?alim_grp_code=301`)

## Méthodes `Get` :

#### Exemples de réponse JSON :

- `categories` :
```json
{
  "message": null,
  "data": {
    "categories": [
      {
        "alim_grp_code": 1,
        "alim_grp_nom_fr": "entrées et plats composés"
      },
      {
        "alim_grp_code": 2,
        "alim_grp_nom_fr": "fruits, légumes, légumineuses et oléagineux"
      },
      {
        "alim_grp_code": 3,
        "alim_grp_nom_fr": "pâtes diverses, produits céréaliers"
      },
      {
        "alim_grp_code": 4,
        "alim_grp_nom_fr": "viandes, oeufs, poissons et assimilés"
      },
      {
        "alim_grp_code": 5,
        "alim_grp_nom_fr": "produits laitiers et assimilés"
      },
      {
        "alim_grp_code": 6,
        "alim_grp_nom_fr": "eaux et autres boissons"
      },
      {
        "alim_grp_code": 7,
        "alim_grp_nom_fr": "produits sucrés"
      },
      {
        "alim_grp_code": 8,
        "alim_grp_nom_fr": "glaces et sorbets"
      },
      {
        "alim_grp_code": 9,
        "alim_grp_nom_fr": "matières grasses"
      },
      {
        "alim_grp_code": 10,
        "alim_grp_nom_fr": "aides culinaires et ingrédients divers"
      },
      {
        "alim_grp_code": 11,
        "alim_grp_nom_fr": "aliments infantiles"
      }
    ]
  },
  "error": null
}
```

- `categories/subcategories` :
```json
{
  "message": null,
  "data": {
    "categories": [
      {
        "alim_grp_code": 301,
        "alim_grp_nom_fr": "pâtes, riz et céréales"
      },
      {
        "alim_grp_code": 302,
        "alim_grp_nom_fr": "pains et assimilés"
      },
      {
        "alim_grp_code": 303,
        "alim_grp_nom_fr": "biscuits apéritifs"
      },
      {
        "alim_grp_code": 305,
        "alim_grp_nom_fr": "pates et farines"
      }
    ]
  },
  "error": null
}
```

- `categories/subsubcategories` :
```json
{
  "message": null,
  "data": {
    "categories": [
      {
        "alim_grp_code": 30101,
        "alim_grp_nom_fr": "pâtes, riz et céréales cuits"
      },
      {
        "alim_grp_code": 30102,
        "alim_grp_nom_fr": "pâtes, riz et céréales crus"
      }
    ]
  },
  "error": null
}
```