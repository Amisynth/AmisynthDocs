# $getSelectMenuID[]


Recupera el ID de un menú de selección.

### Sintaxis
```
$getSelectMenuID[]
```


Ejemplo de uso
```
bot = ..

bot.new_event("$onInteraction", "$getSelectMenuID[]")

bot.run(..)
```