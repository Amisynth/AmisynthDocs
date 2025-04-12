# $editSelectMenu[]

Edita un menú de selección.

> Puede editar la opción del menú de selección con [`$editSelectMenuOption[]`](../funciones/editSelectMenuOption.md).

**Sintaxis**
```
$editSelectMenu[ID del menú; Mín; Máx; (Marcador de posición; ID del mensaje)]
```

**Parámetros**
- `ID del menú` `(Tipo: Cadena || Marcador: Obligatorio)`: El ID del menú de selección que desea editar.

- `Mín` `(Tipo: Entero || Marcador: Obligatorio)`: La cantidad mínima de valores que se pueden seleccionar.

- `Máx` `(Tipo: Entero || Marcador: Obligatorio)`: La cantidad máxima de valores que se pueden seleccionar.

- `Marcador de posición` `(Tipo: Cadena || Marcador: Vacante)`: El texto que aparece si no se selecciona ninguna opción. - `ID del mensaje` `(Tipo: Copo de nieve || Marca: Opcional)`: El mensaje para el cual se editará un menú de selección.

**Ejemplo**

```
$editSelectMenu[Ejemplo;1;1;Elige una opción 😀]
$addSelectMenuOption[Ejemplo;Primero;primera opción;La primera opción]
$addSelectMenuOption[Ejemplo;Segundo;segunda opción;La segunda opción]
$addSelectMenuOption[Ejemplo;Tercero;tercera opción;La tercera [opción]
```
![Uso](https://user-images.githubusercontent.com/70456337/194151805-879cca9b-e970-4e32-bd70-fb5f9010fd97.png)\
![Uso](https://user-images.githubusercontent.com/70456337/194151852-70c8d754-e6cd-4269-982c-af03c6c3ba3c.png)

> Para más información, consulta la [Guía del Menú Seleccionar](../gen/selectmenu.md.md).