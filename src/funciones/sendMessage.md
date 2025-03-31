# $sendMessage[]

Envía un nuevo mensaje al canal actual.

**Sintaxis**

```
$sendMessage[Texto;(¿ID del mensaje de retorno?;ID Canal)]
```

**Parámetros**

`Texto` (Tipo: Cadena || Indicador: Obligatorio): El texto que se enviará en el nuevo mensaje.

`¿ID del mensaje de retorno?` (Tipo: Bool || Indicador: Opcional): Si se debe devolver el ID del mensaje recién enviado en otro mensaje. El valor predeterminado es no.

`ID Canal` (Tipo: Cadena || Indicador: Opcional): El canal a donde se va ir el mensaje por default es el canal ID donde ejecuta