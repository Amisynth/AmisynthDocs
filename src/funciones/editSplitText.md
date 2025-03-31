
# $editSplitText[]

Esta función reemplaza el elemento en el índice especificado con un nuevo valor.  

## Sintaxis  
```plaintext
$editSplitText[Índice;Valor]
```  

## Parámetros  

- `Índice`: *(Tipo: Entero || Obligatorio)* El índice del elemento que se desea editar.  

- `Valor`: *(Tipo: String || Obligatorio)* El nuevo valor que reemplazará al elemento en el índice proporcionado.  

## Ejemplo  

### Ejemplo #1  
```plaintext
$nomention
$textSplit[hello-world-!;-]
$editSplitText[2;bdfd]
> $joinSplitText[-]   // Devuelve "hello-bdfd-!"
```