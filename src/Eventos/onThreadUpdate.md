
# $onThreadUpdate

`$onThreadUpdate` se activa cuando un hilo (thread) es editado.

```
$onThreadUpdate
```

Este evento se dispara **cuando se modifica algún aspecto de un hilo**, como el nombre, el estado de archivo, la duración de auto-archivo, la invocación lenta (slowmode), entre otros atributos del hilo.

> 📌 Es útil para monitorear cambios en la configuración de hilos o detectar acciones administrativas.

## Sintaxis

> No requiere parámetros. Puedes usar funciones como `$threadID[]`, `$threadName[]`, `$oldThreadName[]`, `$newThreadName[]`, `$channelID[]`, entre otras, según el sistema que estés utilizando.

### Ejemplo

```python
bot = ...

bot.new_event("$onThreadUpdate", "✏️ El hilo `$threadName[]` ha sido actualizado en el canal <#$channelID[]>.")

bot.run(...)
```

---

¿Te gustaría que prepare una tabla o lista de variables útiles disponibles dentro del evento, como `$oldThreadName[]`, `$threadArchiveStatus[]`, etc.? Eso podría ayudarte a personalizar más tus respuestas.