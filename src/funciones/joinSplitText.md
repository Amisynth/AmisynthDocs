
# $joinSplitText[]

Esta función devuelve los elementos actuales del texto dividido, unidos con el separador especificado.  

## Sintaxis  
```plaintext
$joinSplitText[Separador]
```  

## Parámetro  

- `Separador`: *(Tipo: String || Opcional)* El separador que se usará entre los valores del texto dividido.  

## Ejemplo  

### Ejemplo #1  
```plaintext
$nomention
$textSplit[hello#world#!;#]
> $joinSplitText[.]   // Devuelve "hello.world.!"
```
