
# $jsonArrayPop []
La función `$jsonArrayPop` elimina el último elemento de un array y devuelve el elemento eliminado.  

**Sintaxis**  
```plaintext
$jsonArrayPop[Key;...]
```

**Parámetros**  
- `key` `(Tipo: String || Obligatorio)` La clave del array del cual se eliminará un elemento.  

**Ejemplo**  
```plaintext
$jsonParse[{
    'music': ['Paranoid - MADKID', 'Ping! 2 - Exyl', 'Tokyo - Leat'eq']
}]

Eliminado: $jsonArrayPop[musica]

Música actual:
> $jsonJoinArray[musica;, ]
```  

![alt text](image-48.png)