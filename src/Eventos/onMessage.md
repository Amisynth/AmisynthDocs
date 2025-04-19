# $onMessage


$onMessage Se activa cuando un usuario envia un mensaje al servidor.

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

bot.new_event("$onMessage", "Hola $username[] estoy respondiendo cualquier mensae!")

bot.run(..)
```

<img src="https://i.ibb.co/qFBWMFCH/tutorial123.gif" alt="tutorial123" border="0">
