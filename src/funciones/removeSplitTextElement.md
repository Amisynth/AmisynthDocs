
# $removeSplitTextElement[]

Esta función elimina un elemento del texto dividido según el índice especificado.  

**Sintaxis** 
```plaintext
$removeSplitTextElement[Índice]
```  

**Parámetro**   

- `Índice`: `(Tipo: Entero || Obligatorio)` El índice del valor en `$textSplit[]` que se desea eliminar.  


**Ejemplo** 
```
$textSplit[hola-mundo-!;-]
$removeSplitTextElement[2]
> $joinSplitText[-] 
```

![alt text](image-34.png)


> Para obtener más información, consulte la Guía de [División de texto](/General/divicion-texto.md).