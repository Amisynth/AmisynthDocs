# $getMenuValueOption[]


Recupera el ID de opcion de un menú de selección.

### Sintaxis
```
$getMenuValueOption[]
```


Ejemplo de uso
```python
bot = ..

bot.new_event("$onInteraction", "Elegiste la opcion: $getMenuValueOption[]")

bot.run(..)
```