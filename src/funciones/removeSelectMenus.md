# $removeSelectMenus[]



Elimina todos los menú de selección.

## Sintaxis
```
$removeSelectMenus[]
```

### Ejemplo de uso
```python
bot = ...

bot.new_event("$onInteraction", 
"""
Menus Eliminados
$removeSelectMenus[]
""")}


bot.run(..)
```

Este comando eliminará el menú de selección con el ID especificado, junto con todas sus opciones asociadas.