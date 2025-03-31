

# $onInteraction  

`$onInteraction` se activa cuando un usuario interactúa con un botón, menú desplegable o cualquier otro componente de interacción en Discord.  

```
$onInteraction
```

Es una llamada de retorno que se ejecuta automáticamente cuando se detecta una interacción en un mensaje del bot.  

> 📌 Se puede tener varios `$onInteraction` por bot, pero no es recomendable.  

**Sintaxis**  

> No requiere sintaxis específica, pero para manejar interacciones se pueden usar funciones como `$customID[]` 

**Ejemplo**  

```python
bot = ...

bot.new_event("$onInteraction", "Canal ID: $authorID[]")

bot.run(..)
```  

![alt text](image-3.png)