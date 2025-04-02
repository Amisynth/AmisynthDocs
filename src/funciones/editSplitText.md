
# $editSplitText[]

Esta función reemplaza el elemento en el índice especificado con un nuevo valor.  

**Sintaxis** 
```plaintext
$editSplitText[Índice;Valor]
```  

**Parámetros**

- `Índice`: `(Tipo: Entero || Obligatorio)`: El índice del elemento que se desea editar.  

- `Valor`: `(Tipo: String || Obligatorio)`: El nuevo valor que reemplazará al elemento en el índice proporcionado.  

 

**Ejemplo**  

```plaintext
$textSplit[hello-world-!;-]
$editSplitText[2;amisynth]
> $joinSplitText[-]   // Devuelve "hello-bdfd-!"
```

![alt text](image-35.png)



> Para obtener más información, consulte la Guía de [División de texto](/General/divicion-texto.md).