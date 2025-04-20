# $url[]

Codifica o decodifica el texto proporcionado en el formato de codificación URL.

> La codificación URL es un método para convertir caracteres reservados, inseguros o no ASCII a un formato URL universalmente aceptado y comprendido por todos los navegadores y servidores web, mientras que la decodificación URL es la inversa.

## Sintaxis
```
$url[Modo;Texto]
```

### Parámetros

- `Modo` `(Tipo: Enumeración || Indicador: Obligatorio)`: Si se codifica o decodifica el texto proporcionado. Acepta `codificar` o `decodificar` como entrada.

- `Texto` `(Tipo: Cadena || Indicador: Vaciable)`: El texto que se va a modificar.

### Ejemplo
- Codificación
```
https://example.url/encode?convert=$url[encode;¡Hola mundo!]
```

![alt text](image-137.png)
- Decodificación
```
$url[decode;https://example.url/decode?convert=¡Hola+mundo%21%21]
```

![alt text](image-138.png)