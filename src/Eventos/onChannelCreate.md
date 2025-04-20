
# $onChannelCreate

`$onChannelCreate` se activa cuando se crea un nuevo canal en el servidor.

```
$onChannelCreate
```

Es una llamada de retorno (callback), lo que significa que se usa como disparador de un comando (no se escribe dentro del código directamente). Este evento se ejecuta **cuando se crea un canal de texto, voz u otro tipo** en el servidor.

> 📌 Se pueden tener múltiples `$onChannelCreate` por bot, aunque no es recomendable por organización y eficiencia.

**Sintaxis**

> No requiere parámetros. Para responder al evento, puedes utilizar funciones como `$sendMessage[]`, `$print[]`, entre otras relacionadas con canales.

**Ejemplo**

```python
bot = ...

bot.new_event("$onChannelCreate", "📢 Se ha creado un nuevo canal: $channelName[$channelID[]]")

bot.run(...)
```
