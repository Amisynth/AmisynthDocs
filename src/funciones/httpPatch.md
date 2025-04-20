# $httpPatch[]
Envía una solicitud HTTP de tipo PATCH a la URL indicada, con datos JSON, para modificar parcialmente un recurso existente.

A diferencia de PUT, que suele reemplazar por completo un recurso, PATCH solo actualiza los campos especificados.

## Sintaxis
```bash
$httpPatch[url;json]
```

### Parámetros
`Url` `(Tipo: Cadena || Requerido)`: Dirección del recurso que deseas modificar.

`Json` `(Tipo: Cadena || Requerido)`: Datos en formato JSON con los campos que deseas actualizar.

### Ejemplo de uso

```bash
$httpAddHeader[Authorization;Bearer abc123]
$httpPatch[https://api.ejemplo.com/usuarios/123;{'nombre':'Saul'}]
$httpResult[-1]
```
![alt text](image-142.png)