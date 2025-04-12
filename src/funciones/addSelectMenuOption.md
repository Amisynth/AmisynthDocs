# $addSelectMenuOption[]

Añade una nueva opción de menú de selección a un menú de selección existente.

**Sintaxis**
```
$addSelectMenuOption[ID de opción de menú;Etiqueta;Valor;Descripción;(¿Predeterminado?;Emoji;ID de mensaje)]
```

**Parámetros**
- `ID de opción de menú` `(Tipo: Cadena || Marca: Obligatorio)`: El ID utilizado en [`$newSelectMenu[]`](../funciones/newSelectMenu.md).

- `Etiqueta` `(Tipo: Cadena || Marca: Obligatorio)`: El nombre de la opción.

- `Valor` `(Tipo: Cadena || Marca: Obligatorio)`: Son los datos que se pasan a la retrollamada `$onInteraction[]`. **¡El valor debe ser único en el menú de selección!**

- `Description` `(Type: String || Flag: Vacantable)`: Un texto que aparece debajo de `Label`.

- `Default?` `(Type: Bool || Flag: Vacantable)`: Si la opción debe seleccionarse por defecto o no. El valor predeterminado es `no`. (`yes`/`no`) **¡Solo puede haber una opción predeterminada!**

- `Emoji` `(Type: Emoji || Flag: Vacantable)`: El emoji que aparece junto a `Label`.

- `Message ID` `(Type: String || Flag: Vacantable)`: El ID de un mensaje al que se debe añadir una nueva opción del menú de selección a un menú de selección existente. Por defecto, es la respuesta del bot.

**Ejemplo**
```
$nomention
$newSelectMenu[Ejemplo;1;1;Elegir una opción]
$addSelectMenuOption[Ejemplo;Primero;primera-opcion;La primera opción]
$addSelectMenuOption[Ejemplo;Segundo;segunda-opcion;La segunda opción]
$addSelectMenuOption[Ejemplo;Tercero;tercera-opcion;La tercera [opción]
```
![ejemplo](https://user-images.githubusercontent.com/113303649/209933666-9ec8ecfc-e666-4caa-b7cb-b0b3c4cdea02.png)\
![ejemplo](https://user-images.githubusercontent.com/113303649/209933373-978c8ade-157f-4991-bb93-929430b4a4eb.png)

> Para más información, consulta la [Guía del Menú Seleccionar](../guides/general/interactions/selectMenus/aboutSelectMenu.md).