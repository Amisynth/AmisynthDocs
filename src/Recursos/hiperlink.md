# Hipervínculos
Un hipervínculo es texto clicable. Al hacer clic en él, el usuario accede a una URL específica.

## Hipervínculos generales
Puede usar hipervínculos dentro de [`$description[]`](../funciones/description.md), [`$addField[]`](../funciones/addField.md), [webhook](../../guides/general/webhooks.md) content/description, [slash command](../../guides/general/interactions/slashCommands/aboutSlashCommands.md) contenido de respuesta y contenido de respuesta efímero [`$onInteraction`](../../callbacks/onInteraction.md).

### Sintaxis
```
[texto\\](enlace)
```
> **Nota:** Esta es la sintaxis para BDScript 2 y BDScript Unstable. Para BDScript, la sintaxis es `[texto](enlace)`.

> **Nota:** Si se usan hipervínculos dentro del contenido de respuesta de comando con barra diagonal o del contenido de respuesta efímera `$onInteraction`, se debe usar la sintaxis de BDScript. No aplica a hipervínculos dentro de funciones que los admiten.


### Ejemplo
```
$description[Este bot está creado con [Amisynth Paquete\\](https://pypi.org/project/Amisynth/)]
```

![alt text](image.png)


### Hipervínculos de título
Usa la función [$titleURL](../funciones/titleURL.md) para agregar un hipervínculo en [$title](../funciones//title.md).

### Hipervínculos de autor
Usa la función [$authorURL](../funciones/authorURL.md) para agregar un hipervínculo en [$author](../funciones/author.md).