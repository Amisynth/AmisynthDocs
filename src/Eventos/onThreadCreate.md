

# $onThreadCreate

`$onThreadCreate` se activa cuando se crea un nuevo hilo (thread) dentro de un canal del servidor.

```
$onThreadCreate
```

Este evento se dispara **cuando un usuario crea un nuevo hilo**, ya sea a partir de un mensaje existente o como un hilo sin mensaje inicial.

> 📌 Puedes tener varios `$onThreadCreate` por bot, aunque se recomienda mantenerlo organizado para evitar conflictos.

### Sintaxis

> No requiere parámetros. Para responder al evento, puedes usar funciones como `$sendMessage[]`, `$channelID[]`, entre otras relacionadas con hilos y canales.

**Ejemplo**

```python
bot = ...

bot.new_event("$onThreadCreate", "🧵 Se ha creado un nuevo hilo, en el canal <#$channelID[]>")

bot.run(...)
```
