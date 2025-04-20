
# $httpPut[]

Envía una solicitud HTTP de tipo **PUT** a la URL especificada, enviando datos en formato JSON para **actualizar** un recurso existente en el servidor.

> El método HTTP **PUT** se usa comúnmente para modificar o reemplazar un recurso en una API REST. A diferencia del POST (que suele crear), PUT sobrescribe o actualiza datos según la información enviada.

## Sintaxis
```
$httpPut[Url;Json]
```

### Parámetros

- `Url` `(Tipo: Cadena || Requerido)`: La dirección completa del recurso que se desea actualizar (por ejemplo, `https://api.ejemplo.com/usuarios/123`).

- `Json` `(Tipo: Cadena || Requerido)`: El cuerpo de la solicitud en formato JSON, con los datos actualizados.

### Comportamiento

- La estructura JSON debe ser válida.
- Generalmente requiere un identificador en la URL para saber qué recurso se va a modificar.
- Puedes agregar encabezados personalizados antes de llamar a esta función, como `Authorization` o `Content-Type`, usando `$httpAddHeader`.

### Uso común

- Actualizar información de un usuario.
- Modificar configuraciones guardadas en una base de datos remota.
- Reemplazar un registro completo con nuevos valores.

### Ejemplo
```bash
$httpAddHeader[Authorization;Bearer abc123]
$httpAddHeader[Content-Type;application/json]
$httpPut[https://api.ejemplo.com/usuarios/123;{"nombre":"Amisadai","edad":22}]
$httpResult[-1]
```

### Resultado

- Devuelve la respuesta del servidor, que puede ser una confirmación, un objeto actualizado, o un mensaje de estado.
- Si falla, puedes recibir un error de validación o permisos (como un código 400 o 403).

![alt text](image-143.png)