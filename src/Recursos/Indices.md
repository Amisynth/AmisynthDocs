# Indices de Embed

Si revisas las funciones de embed en BDFD (por ejemplo, [`$title`](../funciones/title.md), [`$footer`](../funciones/footer.md), etc.), notarás un argumento llamado `Indice`. Este argumento se utiliza para crear múltiples embeds.

> 📝 Discord permite crear un máximo de 10 embeds por mensaje de bot.

## Creación de Múltiples Embeds

Por defecto, el `Indice` está establecido en `1` *(el primer embed)*. Para crear un segundo embed, debes escribir `2` en el argumento `Indice`, y así sucesivamente. Puedes especificar cualquier número entre `1` y `10` en el argumento `Indice`.

> 📝 La longitud total de caracteres de la respuesta completa no debe superar los 6,000. Si lo hace, el bot no enviará el mensaje.

### Ejemplo

```
$nomention

$title[Título #1]
$description[Descripción #1]

$title[Título #2;2]
$description[Descripción #2;2]

$title[Título #3;3]
$description[Descripción #3;3]
```

![example](https://user-images.githubusercontent.com/69215413/125877770-c2bbc30e-95f4-4859-9343-bce65ad633c5.png)