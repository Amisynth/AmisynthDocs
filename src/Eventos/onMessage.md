# $onMessageDelete


$onMessage Se activa cuando un usuario se une al servidor.

```
$onMessage
```

es una llamada de retorno, lo que significa que se utiliza en el disparador del comando (no en el código). El comando un usuario mand un mnesaje al servidor.

> 📌 Se puede tener varios $onMessage por bot, pero no es recomendable.

**Sintaxis**

> No requiere Sintaxis, pero para uso de mensajes en un dicho canal use funciones como `$sendMessage[]` o `$sendEmbedMessage[]`

**Ejemplo**

```python
bot = ...

bot.new_event("$onMessage", "Hola $username[]!")

bot.run(..)
```