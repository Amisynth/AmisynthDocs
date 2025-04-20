

# $httpGet[]

Envía una solicitud HTTP de tipo **GET** a la URL indicada, recuperando datos de un servidor o una API.

> El método GET se utiliza para **obtener información** sin modificar el recurso. Es el método más común en APIs para leer datos.

## Sintaxis
```
$httpGet[url]
```

### Parámetros

- `Url` `(Tipo: Cadena || Requerido)`: Dirección desde la que deseas obtener la información (por ejemplo, `https://api.ejemplo.com/usuarios`).

### Uso común

- Consultar listas de datos o registros.
- Obtener detalles de un recurso específico.
- Llamar a APIs públicas para recuperar información.

### Ejemplo

```txt
$httpAddHeader[Authorization;Bearer abc123]
$httpGet[https://api.ejemplo.com/usuarios/487430318500872203]
$httpResult[-1]
```

![alt text](image-142.png)

