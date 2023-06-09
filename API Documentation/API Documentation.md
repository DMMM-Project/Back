# API Documentation

## Présentation 

La communication avec l'API se fera sur le port `http://localhost:3000/api/` suivi de l'un des endpoints suivant :
- [`signup`](./Signup-Login.md) (avec la méthode `Post`)
- [`login`](./Signup-Login.md) (avec la méthode `Post`)
- [`verify`](./Signup-Login.md) (avec la méthode `Post`)
- [`survey`](./Survey.md) (avec la méthode `Get`)
- [`survey/my`](./Survey.md) (avec les méthodes `Post` et `Get`)
- [`food`](./Food.md) (avec la méthode `Get`)
- [`food/id`](./Food.md) (avec les méthodes `Get`)
- [`food/categories`](./Food.md) (avec la méthode `Get`)
- [`categories`](./Category.md) : (avec la méthode `Get`)
- [`categories/subcategories`](./Category.md) : (avec la méthode `Get`)
- [`categories/subsubcategories`](./Category.md) : (avec la méthode `Get`)

### Autres informations :

- Pour répondre au sondage, il faut être connecté, sinon vous serez redirigé vers la page de connexion.
- L'action de connection renvoie un token permet de répondre au sondage ou de voir les résultats du sondage auquel vous avez répondu.
- Le token est stocké dans le local storage du navigateur.
- Pour voir les résultats du sondage, il faut être connecté et avoir répondu au sondage.