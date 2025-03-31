
# $removeSplitTextElement[]

Esta función elimina un elemento del texto dividido según el índice especificado.  

## Sintaxis  
```plaintext
$removeSplitTextElement[Índice]
```  

## Parámetro  

- `Índice`: *(Tipo: Entero || Obligatorio)* El índice del valor en `$textSplit[]` que se desea eliminar.  

## Ejemplo  

### Ejemplo #1  
```plaintext
$nomention
$textSplit[hello-world-!;-]
$removeSplitTextElement[3]
> $joinSplitText[-]   // Devuelve "hello-world"
```
