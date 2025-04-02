
# $jsonParse[]

`$jsonParse` es la función principal utilizada cuando se trabaja con datos JSON.  
Esta función analiza una cadena JSON y la convierte en un objeto que luego puede ser utilizado por otras funciones JSON.  

**Sintaxis**
```plaintext
$jsonParse[JSON string]
```
> Solo puede usar para claves y valores en str este tipo de comilla: `'`

**Parámetros**
- `JSON string` *(Tipo: String || Obligatorio)*: La cadena JSON que se analizará y convertirá en un objeto.  

**Ejemplo:**

```
JSON guardado. $jsonParse[{'numero': 100}]
```

![alt text](image-36.png)



> Para obtener más información, consulte la Guía de [JSON Funciones](/General/json-funciones.md).