
# $jsonArrayShift[]
La función `$jsonArrayShift[]` elimina el primer elemento de un array y devuelve el elemento eliminado.  

**Sintaxis**  
```plaintext
$jsonArrayShift[Key;...]
```

**Parámetros**  
- `key` `(Tipo: String || Obligatorio)` La clave del array del cual se eliminará un elemento.  

**Ejemplo**  
```plaintext
$jsonParse[{
    'music': ['Paranoid - MADKID', 'Ping! 2 - Exyl', 'Tokyo - Leateq']
}]

Eliminado: $jsonArrayShift[music]

Música actual:
> $jsonJoinArray[music;, ]
```  

![alt text](image-49.png)

> Para obtener más información, consulte la Guía de [JSON Funciones](../gen/json.md).