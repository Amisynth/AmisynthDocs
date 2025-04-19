
# $onChannelDelete

`$onChannelDelete` se activa cuando un canal del servidor es eliminado.

```
$onChannelDelete
```

Es una llamada de retorno que se usa como disparador de un comando. Este evento se ejecuta **cuando cualquier tipo de canal (texto, voz, etc.) es eliminado** del servidor.

> 📌 Se pueden usar múltiples `$onChannelDelete` por bot, pero no es recomendable para evitar conflictos o sobrecarga.

**Sintaxis**

> No requiere parámetros específicos. Puedes utilizar funciones como `$sendMessage[]`, `$print[]`, `$channelID[]` o `$channelName[]` para registrar o responder a la eliminación del canal.

**Ejemplo**

```python
bot = ...

bot.new_event("$onChannelDelete", "⚠️ El canal `$channelName[$channelID[]]` ha sido eliminado del servidor.")

bot.run(...)
```

