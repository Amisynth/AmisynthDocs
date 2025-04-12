# $editSelectMenuOption[]

Edita una opción del menú de selección.

> Puede editar el menú de selección principal con [`$editSelectMenu[]`](./editSelectMenu.md).

## Sintaxis
```
$editSelectMenuOption[ID de la opción del menú;Etiqueta;Valor;Descripción;(Predeterminado;Emoji;ID del mensaje)]
```

### Parámetros
- `ID de la opción del menú` `(Tipo: Cadena || Marca: Obligatorio)`: El ID del menú de selección. Debe ser el mismo que el ID utilizado en su `$newSelectMenu[]`.

- `Etiqueta` `(Tipo: Cadena || Marca: Obligatorio)`: El nombre de la opción.

- `Valor` `(Tipo: Cadena || Marca: Obligatorio)`: El valor de la opción. Son los datos que se pasan a la función `$onInteraction[]`. **¡El valor debe ser único en el menú de selección!**

- `Description` `(Type: String || Flag: Vacantable)`: La descripción de la opción. Se muestra debajo de `Label`.

- `Default` `(Type: Bool || Flag: Vacantable)`: Decide si la opción debe seleccionarse por defecto. **¡Solo puede haber una opción por defecto!**

- `Emoji` `(Type: Emoji || Flag: Vacantable)`: El emoji de la opción. Se muestra junto a `Label`
.
- `Message ID` `(Type: Snowflake || Flag: Optional)`: El ID del mensaje, menú asociado.


### Código de interacción

```
$editSelectMenuOption[Ejemplo;Primero;primera opción;La primera opción;false;1️⃣]
$editSelectMenuOption[Ejemplo;Segundo;segunda opción;La segunda opción;false;2️⃣]
$editSelectMenuOption[Ejemplo;Tercero;tercera opción;La tercera opción;false;3️⃣]
```
![ejemplo1](https://user-images.githubusercontent.com/70456337/194148923-a25962f8-544d-4744-8a5c-876d9455eaa3.png)

### Salida
**Antes**

![ejemplo2](https://user-images.githubusercontent.com/70456337/194149283-42724349-84d1-4d70-b8e6-d4b58e8c365f.png)

**Después**

![ejemplo3](https://user-images.githubusercontent.com/70456337/194149485-750c15e8-2a3c-46d0-857b-493178b9468c.png)

> Para más información, consulta la [Guía del Menú Seleccionar](../guides/general/interactions/selectMenus/aboutSelectMenu.md).