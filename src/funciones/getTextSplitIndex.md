# $getTextSplitIndex[] 

Obtiene el índice de un valor dentro del texto dividido con `$textSplit`. Devuelve `-1` si el valor no se encuentra.  

## Sintaxis  
```
$getTextSplitIndex[Valor]
```

## Parámetros  

- `Valor` `(Tipo: String || Opcional)`: El valor a buscar dentro del texto dividido.  

## Ejemplo  

### Ejemplo #1  
```plaintext
$textSplit[hello_world_!;_]
> $getTextSplitIndex[$message[-1]]   // Devuelve el índice del valor en la lista dividida o -1 si no se encuentra
```

![alt text](image-32.png)


> Para obtener más información, consulte la Guía de [División de texto](/gen/texto.md).