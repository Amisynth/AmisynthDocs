# $splitText  

Cada fragmento de texto separado tiene un número de índice. `$splitText` es una función que devuelve uno de los elementos del texto dividido según el índice especificado o los signos `<` y `>` para obtener el primer o último elemento, respectivamente.  

**Sintaxis**
```
$splitText[Índice]
```

**Parámetros**  

- `Índice` (Tipo: Número o Símbolo || Obligatorio): El índice del fragmento de texto a obtener.  

  - Usa un número (`2`, `3`, etc.) para obtener el fragmento en esa posición.  
  - Usa `<` para obtener el primer fragmento.  
  - Usa `>` para obtener el último fragmento.  

**Ejemplo**  

```plaintext
$textSplit[hello world !; ]
> $splitText[<]   // Obtiene "hello"
> $splitText[2]   // Obtiene "world"
> $splitText[>]   // Obtiene "!"
```

![alt text](image-31.png)


> Para obtener más información, consulte la Guía de [División de texto](/General/divicion-texto.md).