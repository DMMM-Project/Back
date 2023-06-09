# Food

## Info

Pour toutes les requêtes qui seront ici, il faut envoyer le token dans le header de la requête.

- `food` : Retourne la liste de tous les aliments de la base de données.
- `food/id` : Retourne l'aliment correspondant à l'id passé en paramètre. </br>
  (ex : `http://localhost:3000/api/food/id?alim_code=4041`)
- `food/categories` : Retourne la liste des aliments pour les catégories passées en paramètre. </br>
  (ex : `http://localhost:3000/api/food/categories?alim_ssssgrp_code=10301&alim_ssgrp_code=103`)

## Méthodes `Get` :

#### Exemples de réponse JSON :

- `food` :
```json
{
    "message": null,
    "data": {
        "foods": [
            {
                "alim_code": 4041,
                "alim_nom_fr": "Aligot (purée de pomme de terre à la tomme fraîche), préemballé"
            },
            {
                "alim_code": 25229,
                "alim_nom_fr": "Bâtonnet pané soja et blé (convient aux véganes ou végétaliens), préemballée"
            },
            {
                "alim_code": 25556,
                "alim_nom_fr": "Beignet de légumes"
            },
            {
                "alim_code": 25551,
                "alim_nom_fr": "Beignet de viande, volaille ou poisson, fait maison, cru"
            }
        ]
    },
  "error": null
}
```

- `food/id` :
```json
{
    "message": null,
    "data": {
        "food": {
            "_id": "6417678e1cb58ba09eba0ea9",
            "alim_code": 4041,
            "alim_nom_fr": "Aligot (purée de pomme de terre à la tomme fraîche), préemballé",
            "alim_nom_sci": -1,
            "alim_grp_code": 1,
            "alim_grp_nom_fr": "entrées et plats composés",
            "alim_ssgrp_code": 103,
            "alim_ssgrp_nom_fr": "plats composés",
            "alim_ssssgrp_code": 10308,
            "alim_ssssgrp_nom_fr": "plats de fromage",
            "Energie, Règlement UE N° 1169/2011 (kJ/100 g)": 810,
            "Energie, Règlement UE N° 1169/2011 (kcal/100 g)": 195,
            "Energie, N x facteur Jones, avec fibres  (kJ/100 g)": 810,
            "Energie, N x facteur Jones, avec fibres  (kcal/100 g)": 195,
            "Eau (g/100 g)": "65,1",
            "Protéines, N x facteur de Jones (g/100 g)": "8,06",
            "Protéines, N x 625 (g/100 g)": "8,06",
            "Glucides (g/100 g)": "9,5",
            "Lipides (g/100 g)": "13,3",
            "Sucres (g/100 g)": "0,57",
            "Fructose (g/100 g)": "0,1",
            "Galactose (g/100 g)": "0,18",
            "Glucose (g/100 g)": "0,1",
            "Lactose (g/100 g)": "0,21",
            "Maltose (g/100 g)": "0,1",
            "Saccharose (g/100 g)": "0,18",
            "Amidon (g/100 g)": -1,
            "Fibres alimentaires (g/100 g)": "1,3",
            "Polyols totaux (g/100 g)": 0,
            "Cendres (g/100 g)": "2,07",
            "Alcool (g/100 g)": 0,
            "Acides organiques (g/100 g)": "0,68",
            "AG saturés (g/100 g)": "8,25",
            "AG monoinsaturés (g/100 g)": "3,5",
            "AG polyinsaturés (g/100 g)": "0,37",
            "AG 4:0, butyrique (g/100 g)": "0,23",
            "AG 6:0, caproïque (g/100 g)": "0,16",
            "AG 8:0, caprylique (g/100 g)": "0,11",
            "AG 10:0, caprique (g/100 g)": "0,36",
            "AG 12:0, laurique (g/100 g)": "0,46",
            "AG 14:0, myristique (g/100 g)": "1,58",
            "AG 16:0, palmitique (g/100 g)": "3,85",
            "AG 18:0, stéarique (g/100 g)": "1,17",
            "AG 18:1 9c (n-9), oléique (g/100 g)": "2,67",
            "AG 18:2 9c,12c (n-6), linoléique (g/100 g)": "0,21",
            "AG 18:3 c9,c12,c15 (n-3), alpha-linolénique (g/100 g)": "0,11",
            "AG 20:4 5c,8c,11c,14c (n-6), arachidonique (g/100 g)": "0,01",
            "AG 20:5 5c,8c,11c,14c,17c (n-3) EPA (g/100 g)": "0,01",
            "AG 22:6 4c,7c,10c,13c,16c,19c (n-3) DHA (g/100 g)": "0,01",
            "Cholestérol (mg/100 g)": -1,
            "Sel chlorure de sodium (g/100 g)": 1,
            "Calcium (mg/100 g)": -1,
            "Chlorure (mg/100 g)": -1,
            "Cuivre (mg/100 g)": -1,
            "Fer (mg/100 g)": -1,
            "Iode (µg/100 g)": -1,
            "Magésium (mg/100 g)": -1,
            "Manganèse (mg/100 g)": -1,
            "Phosphore (mg/100 g)": -1,
            "Potassium (mg/100 g)": -1,
            "Sélénium (µg/100 g)": -1,
            "Sodium (mg/100 g)": 398,
            "Zinc (mg/100 g)": -1,
            "Rétinol (µg/100 g)": -1,
            "Beta-Carotène (µg/100 g)": -1,
            "Vitamine D (µg/100 g)": -1,
            "Vitamine E (mg/100 g)": -1,
            "Vitamine K1 (µg/100 g)": -1,
            "Vitamine K2 (µg/100 g)": -1,
            "Vitamine C (mg/100 g)": -1,
            "Vitamine B1 ou Thiamine (mg/100 g)": -1,
            "Vitamine B2 ou Riboflavine (mg/100 g)": -1,
            "Vitamine B3 ou PP ou Niacine (mg/100 g)": -1,
            "Vitamine B5 ou Acide pantothénique (mg/100 g)": -1,
            "Densité énergétique(kJ/100g)": 2,
            "Graisses saturées (g/100g)": 7,
            "Sucres simples (g/100g)": 0,
            "Sodium (mg/100g)": 4,
            "Fibres (g/100g)": -1,
            "Protéines (g/100g)": -4,
            "Eau (g/100 g)__1": 0,
            "NutriScore": "8,00",
            "NutriScore Calculé": "C"
        }
    },
    "error": null
}
```

- `food/categories` :
```json
{
  "message": null,
  "data": {
    "foods": [
      {
        "alim_code": 25001,
        "alim_nom_fr": "Blanquette de veau"
      },
      {
        "alim_code": 25033,
        "alim_nom_fr": "Boeuf bourguignon"
      },
      {
        "alim_code": 25211,
        "alim_nom_fr": "Boulettes au boeuf, à la sauce tomate, préemballées"
      },
      {
        "alim_code": 25585,
        "alim_nom_fr": "Brochette de boeuf, cuite"
      },
      {
        "alim_code": 25586,
        "alim_nom_fr": "Brochette de volaille, cuite"
      },
      {
        "alim_code": 25058,
        "alim_nom_fr": "Canard en sauce (poivre vert, chasseur, etc.), préemballé"
      },
      {
        "alim_code": 25538,
        "alim_nom_fr": "Carpaccio de boeuf, avec marinade"
      },
      {
        "alim_code": 25121,
        "alim_nom_fr": "Coq au vin"
      },
      {
        "alim_code": 25201,
        "alim_nom_fr": "Langue de boeuf sauce madère, préemballée"
      },
      {
        "alim_code": 25063,
        "alim_nom_fr": "Lapin à la moutarde, préemballé"
      },
      {
        "alim_code": 25175,
        "alim_nom_fr": "Meloukhia, plat à base de boeuf et corete, fait maison"
      },
      {
        "alim_code": 25200,
        "alim_nom_fr": "Palette à la diable, préemballée"
      },
      {
        "alim_code": 25125,
        "alim_nom_fr": "Paupiette de veau"
      },
      {
        "alim_code": 25213,
        "alim_nom_fr": "Paupiette de veau, préemballée,  cuite au four"
      },
      {
        "alim_code": 25126,
        "alim_nom_fr": "Paupiette de volaille"
      },
      {
        "alim_code": 25207,
        "alim_nom_fr": "Porc au caramel, préemballé"
      },
      {
        "alim_code": 25174,
        "alim_nom_fr": "Poulet au curry et au lait de coco"
      },
      {
        "alim_code": 25035,
        "alim_nom_fr": "sauté d'agneau au curry, préemballé"
      },
      {
        "alim_code": 8601,
        "alim_nom_fr": "Tripes à la mode de Caen"
      },
      {
        "alim_code": 8602,
        "alim_nom_fr": "Tripes à la mode de Caen, préemballées"
      },
      {
        "alim_code": 8612,
        "alim_nom_fr": "Tripes à la tomate ou à la provenéale"
      },
      {
        "alim_code": 25172,
        "alim_nom_fr": "Viande en sauce (aliment moyen)"
      },
      {
        "alim_code": 25565,
        "alim_nom_fr": "Yakitori (brochettes japonaises grillées en sauce)"
      }
    ]
  },
  "error": null
}
```