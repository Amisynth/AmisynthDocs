# Menú de selección
En esta sección, aprenderá a usar el componente Menú de selección.


## Contenido
[**$newSelectMenu[]**](#newSelectMenu) > [**$addSelectMenuOption[]**](#addSelectMenuOption) > [**$editSelectMenuOption[]**](#editSelectMenuOption) > [**$getSelectMenuID[]**](#getSelectMenuID) > [**$getMenuValueOption[]**](#getMenuValueOption)


## Funciones Utilizadas


- [`$newSelectMenu[]`](../funciones/newSelectMenu.md)

- [`$addSelectMenuOption[]`](../funciones/addSelectMenuOption.md)

- [`$editSelectMenu[]`](../funciones/editSelectMenu.md)

- [`$editSelectMenuOption[]`](../funciones/editSelectMenuOption.md)

- [`$getSelectMenuID[]`](../funciones/getSelectMenuID.md)

- [`$getMenuValueOption[]`](../Eventos//callbacks/getMenuValueOption.md)

- [`$removeSelectMenus[]`](../Eventos//callbacks/removeSelectMenus.md)

- [`$onInteraction`](../Eventos/onInteraction.md)


## Muestras

![Vista previa 1](https://user-images.githubusercontent.com/70456337/194143249-eb32bed6-5fc9-4d7b-b88c-65b37dfcbfc9.png)
![Vista previa 2](https://user-images.githubusercontent.com/70456337/194143111-bf128046-3428-4226-840d-9ea4b0569677.png)

## Creación de un menú de selección
```
$newSelectMenu[Menu ID;Min;Max;(Placeholder;Message ID)]
```
- `Menu ID` - Se utiliza para la retrollamada `$onInteraction[ID]`. Funciona de la misma manera que [buttons](../buttons/aboutButtons.md).
- `Mín`: cantidad mínima de valores que se pueden seleccionar.
- `Máx`: cantidad máxima de valores que se pueden seleccionar.
- `Marcador de posición`: texto que aparece si no se selecciona ninguna opción.
- `ID del mensaje`: ID de un mensaje al que se debe añadir el menú de selección. Por defecto, es la respuesta del bot.

## Añadir una opción
```
$addSelectMenuOption[ID de la opción del menú;Etiqueta;Valor;Descripción;(Predeterminado;Emoji;ID del mensaje)]
```
- `ID de la opción del menú`: debe ser el mismo que el ID usado en `$newSelectMenu[]`.
- `Etiqueta`: nombre de la opción. - `Valor`: son los datos que se pasan a la función `$onInteraction[]`. **¡El valor debe ser único en el menú de selección!**
- `Descripción`: aparece debajo de `etiqueta`.
- `Predeterminado`: si la opción está seleccionada por defecto. **¡Solo puede haber una opción por defecto!**
- `Emoji`: aparece junto a `etiqueta`.
- `ID del mensaje`: igual que en `$newSelectMenu[]`.

## Ejemplo
### Código de selección de menú
```python
$newSelectMenu[Ejemplo;1;1;Elegir una opción]
$addSelectMenuOption[Ejemplo;Primera;primera-opción;La primera opción]
$addSelectMenuOption[Ejemplo;Segunda;segunda-opción;La segunda opción]
$addSelectMenuOption[Ejemplo;Tercera;tercera-opción;La tercera opción]
```
### Código de interacción
> `$onInteraction`
```python
bot = ..

bot.new_event("$onInteraction",
               """
$if[$checCondition[$getSelectMenuID[]==Ejemplo];

$if[$checkCondition[$getMenuValueOption[]==primera-opcion];
Ha elegido la primera opción;]

$if[$checkCondition[$getMenuValueOption[]==segunda-opcion];
Ha elegido la primera opción;]

$if[$checkCondition[$getMenuValueOption[]==tercera-opcion];
Ha elegido la primera opción;]

;] """)

bot.run(..)
```
### Uso
![Uso 1](https://user-images.githubusercontent.com/70456337/194143799-a48e72cb-5947-4657-99d3-d4bafaef5eb5.png)
# Menú de selección múltiple
En el menú de selección, puede elegir no solo una opción, sino varias a la vez.
Esto se puede entender por la presencia de los argumentos «Mín» y «Máx».

## Ejemplo
### Código del menú Select
> Aquí cambiaremos el argumento `Máx.` a 3.
```
$newSelectMenu[Ejemplo;1;3;Elegir una opción]
$addSelectMenuOption[Ejemplo;Primero;primera opción;La primera opción]
$addSelectMenuOption[Ejemplo;Segundo;segunda opción;La segunda opción]
$addSelectMenuOption[Ejemplo;Tercero;tercera opción;La tercera opción]
```
### Interacción Código
```python
$if[$checkContains[$getMenuValueOption[];first-option];
$addCmdReactions[1️⃣]
;]

$if[$checkContains[$getMenuValueOption[];second-option];
$addCmdReactions[2️⃣]
;]

$if[$checkContains[$getMenuValueOption[];third-option];
$addCmdReactions[3️⃣]
;]
```
> Si elegimos varias opciones, se añadirán varias reacciones. 
### Uso
![Uso 2.1](https://user-images.githubusercontent.com/70456337/194145414-33fa645f-c3ac-4105-95d9-4edc89fcfae5.png)
![Uso 2.2](https://user-images.githubusercontent.com/70456337/194145159-6c2996f1-7dbc-4fa3-90e0-9a0b8f5c2d9e.png)

# Edición de un menú de selección
Puede editar el menú de selección, así como sus opciones. ## $editSelectMenu
### Uso
```
$editSelectMenu[ID del menú;Mín;Máx;(Marcador de posición;ID del mensaje)]
```
## $editSelectMenuOption
### Uso
```
$editSelectMenuOption[ID de la opción del menú;Etiqueta;Valor;Descripción;(Predeterminado;Emoji;ID del mensaje)]
```

> Como puede observar, los argumentos son exactamente los mismos.

## Ejemplo
### Código de menú de selección
```
$newSelectMenu[Ejemplo;1;1;Elegir una opción]
$addSelectMenuOption[Ejemplo;Primero;primera opción;La primera opción]
$addSelectMenuOption[Ejemplo;Segundo;segunda opción;La segunda opción]
$addSelectMenuOption[Ejemplo;Tercero;tercera opción;La tercera opción]
```
### Código de interacción

#### Ejemplo 1
```
$editSelectMenuOption[Ejemplo;Primero;primera opción;La primera opción;false;1️⃣]
$editSelectMenuOption[Ejemplo;Segundo;segunda opción;La segunda opción;false;2️⃣]
$editSelectMenuOption[Ejemplo;Tercero;tercera opción;La tercera opción;false;3️⃣]
```
![Ejemplo 1](https://user-images.githubusercontent.com/70456337/194148923-a25962f8-544d-4744-8a5c-876d9455eaa3.png)
![Ejemplo 1](https://user-images.githubusercontent.com/70456337/194149283-42724349-84d1-4d70-b8e6-d4b58e8c365f.png)
![Ejemplo 1](https://user-images.githubusercontent.com/70456337/194149485-750c15e8-2a3c-46d0-857b-493178b9468c.png)
> Acabamos de añadir emojis a nuestras opciones después de seleccionar cualquier opción. 

