
# $getMessageData[]
Devuelve datos específicos de un mensaje o de un embed a partir del ID de mensaje proporcionado.

**Sintaxis**
```
$getMessageData[Mensaje ID;Tipo;Propiedad;(índice Embed)]
```

**Parámetros**
- `Mensaje ID` `(Tipo: Cadena || Indicador: Obligatorio)`  
  ID del mensaje del cual se obtendrán los datos.

- `Tipo` `(Tipo: Cadena || Valores: message | embed || Predeterminado: message)`  
  Define si se desea obtener datos del mensaje (`message`) o de un embed (`embed`).

- `Propiedad` `(Tipo: Cadena || Predeterminado: content)`  
  Define qué propiedad del mensaje o embed se desea obtener.

- `índice Embed` `(Tipo: Entero || Predeterminado: 1)`  
  Solo usado si `tipo = embed`. Determina el índice del embed (empezando desde 1).



**Propiedades disponibles**

🟢 Si `tipo = message`:
- `content` → Devuelve el contenido del mensaje.
- `authorID` → Devuelve el ID del autor del mensaje.
- `username` → Devuelve el nombre de usuario del autor.
- `avatar` → Devuelve el enlace al avatar del autor.

🔵 Si `tipo = embed`:
- `title` → Devuelve el título del embed.
- `description` → Devuelve la descripción.
- `footer` → Devuelve el texto del pie del embed.
- `color` → Devuelve el color del embed.
- `timestamp` → Devuelve la marca de tiempo.
- `image` → Devuelve la URL de la imagen del embed.



**Ejemplo**
```
$getMessageData[122223334445556666;message;username]
```
📤 Devuelve el nombre de usuario del autor del mensaje con ID `122223334445556666`.

```
$getMessageData[122223334445556666;embed;title;1]
```
📤 Devuelve el título del primer embed del mensaje.


¿Quieres que te genere una imagen similar a esa para esta función también?