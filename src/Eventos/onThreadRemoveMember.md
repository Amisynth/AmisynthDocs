
# $onThreadRemoveMember

`$onThreadMemberRemove` se activa cuando un usuario es eliminado o abandona un hilo (thread).

```
$onThreadMemberRemove
```

Este evento se ejecuta **cuando un miembro abandona o es removido de un hilo**, ya sea manualmente o por otras razones como inactividad o permisos.

> 📌 Puedes tener varios `$onThreadRemoveMember` por bot, pero se recomienda mantener una sola instancia para mejor control.

## Sintaxis

> No requiere parámetros. Puedes usar funciones como: `$authorID[]` y `$username[]` para obtener información sobre el hilo y el usuario afectado.

### Ejemplo

```python
bot = ...

bot.new_event("$onThreadRemoveMember", "👋 El usuario $username[] ha salido o fue removido del hilo `$threadName[]`.")

bot.run(...)
```
