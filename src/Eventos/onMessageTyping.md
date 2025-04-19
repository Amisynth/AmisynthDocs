
# $onMessageTyping

`$onMessageTyping` se activa cuando un usuario comienza a escribir un mensaje en un canal del servidor.

```
$onMessageTyping
```

Es una llamada de retorno, lo que significa que se utiliza como disparador de un comando (no en el código directamente). Se activa **cuando un usuario empieza a escribir** en el canal, **no cuando envía el mensaje**.

> 📌 Se pueden tener múltiples `$onMessageTyping` por bot, aunque no es recomendable.

**Sintaxis**

> No requiere parámetros específicos. Para responder al evento, puedes usar funciones como `$sendMessage[]` o `$sendEmbedMessage[]`.

**Ejemplo**

```python
bot = ...

bot.new_event("$onMessageTyping", "Hola $username[], veo que estás escribiendo algo...")

bot.run(...)
```

