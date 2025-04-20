
# $httpAddHeader[]

Agrega un encabezado personalizado a las solicitudes HTTP realizadas por funciones que utilicen llamadas externas, como `$httpRequest[]` o similares.

> Los encabezados HTTP (HTTP headers) proporcionan información adicional al servidor sobre la solicitud o sobre el cliente que la está realizando. Esta función permite establecer manualmente estos encabezados para controlar aspectos como el tipo de contenido, autenticación, origen, entre otros.

## Sintaxis
```bash
$httpAddHeader[nombre;valor]
```

### Parámetros

- `nombre` `(Tipo: Cadena || Requerido)`: El nombre del encabezado HTTP que deseas agregar (por ejemplo: `Authorization`, `Content-Type`, `User-Agent`, etc.).

- `valor` `(Tipo: Cadena || Requerido)`: El valor correspondiente al encabezado.

### Comportamiento

- Esta función debe usarse **antes de** la función que ejecuta la solicitud HTTP (`$httpRequest[]`, por ejemplo).
- Puedes agregar múltiples encabezados llamando varias veces a `$httpAddHeader`.

### Uso común

- Enviar un token de autenticación (`Authorization: Bearer TOKEN`).
- Especificar el tipo de contenido (`Content-Type: application/json`).
- Definir el origen de la solicitud (`Origin`, `Referer`, etc.).

### Ejemplo
```
$httpAddHeader[Authorization;Bearer abc123]
$httpAddHeader[Content-Type;application/json]
$httpPost[https://api.ejemplo.com/datos;{"nombre":"Amisadai"}]
$httpResult[-1]
```



![alt text](image-140.png)