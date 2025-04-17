# Solicitudes HTTP
- Una solicitud HTTP es una acción que se realiza en un recurso identificado por una URL.


> Antes de leer esta guía, tenga en cuenta que esta función no está destinada a nuevos usuarios de BDFD, ya que es bastante avanzada.

## Tipos de Solicitudes HTTP
> Esta es una lista de todos los tipos de solicitudes HTTP disponibles.

**GET**
- Recupera datos de un recurso.
```
$httpGet[url]
```

**POST**
- Los datos enviados al servidor mediante POST se almacenan en el cuerpo de la solicitud HTTP.
```
$httpPost[url;(body)]
```

**PUT**
- El método PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la solicitud.
```
$httpPut[url;(body)]
```

**DELETE**
- El método DELETE elimina el recurso especificado. 
```
$httpDelete[url;(body)]
```

**PATCH**
- El método PATCH aplica modificaciones parciales a un recurso.
```
$httpPatch[url;(body)]
```

## Encabezados HTTP
- Los encabezados HTTP se utilizan para agregar más información. Generalmente, se usan para enviar una clave de API a la API.
```
$httpAddHeader[nombre del encabezado;valor del encabezado]
```

## Estados HTTP
- Si la API no devuelve nada después de realizar una solicitud, pero necesita conocer el resultado, los estados HTTP pueden ser útiles. Puede obtener más información sobre ellos [aquí](https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status).
```
$httpStatus
```

## Resultados HTTP
- Para devolver el resultado de una función de un método HTTP, puede usar `$httpResult[-1]`/`$httpResult[clave;..]`.

### Uso n.° 1
```
$httpResult[-1]
```
> Recupera el valor de texto de la solicitud HTTP.

### Uso n.° 2
```
$httpResult[Clave JSON;...]
```
> Recupera el JSON de la solicitud HTTP. Todos los argumentos después de *Clave JSON* son opcionales.

## Ejemplos

### Nivel básico
> Un ejemplo usando la función `$httpGet`
```
$httpGet[https://nekos.best/api/v2/neko]
$title[¡Aquí tienes un Neko!]
$description[**Source:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

<details><summary>Mostrar ejemplo de respuesta de la API</summary>

```json
{
"results":[
{
"artist_href":"https://www.pixiv.net/en/users/4284365",
"artist_name":"イカたると",
"source_url":"https://www.pixiv.net/en/artworks/55142454",
"url":"https://nekos.best/api/v2/neko/0023.png"
}
]
}
```

</details>

![Neko](https://i.imgur.com/grfUOlX.png)
> API: [nekos.best](https://docs.nekos.best)
### Nivel avanzado
> Un ejemplo que usa una función con un cuerpo de solicitud (p. ej., `$httpPost`) y usa `$httpAddHeader`
```
$httpAddHeader[tipo-contenido;application/x-www-form-urlencoded]
$httpPost[https://pastebin.com/api/api_post.php;api_dev_key=7CP52G-BTQP_1AhyBBlTa94qyjE6vHzU&api_paste_code=$url[encode;$message[-1]]&api_option=paste]
$httpResult[-1]
```
![Pastebin](https://i.imgur.com/UvjmdsK.png)
![Pastebin](https://i.imgur.com/EalIOA7.png)
> API: [pastebin.com](https://pastebin.com/doc_api)