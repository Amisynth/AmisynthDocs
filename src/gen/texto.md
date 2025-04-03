# Divicion de Texto


En esta sección, aprenderá cómo utilizar la división de texto.

## Funciones utilizadas 

- [`$textSplit[]`](../funciones/textSplit.md)

- [`$splitText[]`](../funciones/splitText.md)

- [`$getTextSplitLength[]`](../funciones/getTextSplitLength.md)

- [`$getTextSplitIndex[]`](../funciones/getTextSplitIndex.md)

- [`$joinSplitText[]`](../funciones/joinSplitText.md)

- [`$removeSplitTextElement[]`](../funciones/removeSplitTextElement.md)

- [`$editSplitText[]`](../funciones/editSplitText.md)



## $textSplit[]


Divide el texto proporcionado utilizando un separador y guarda el valor temporalmente.  

**Sintaxis**
```
$textSplit[Texto;Separador]
```  

**Parámetros**  

- `Texto` (Tipo: String || Opcional): El texto a dividir.  

- `Separador` (Tipo: String || Opcional): El carácter o cadena utilizada para dividir el texto.  
  - Si este parámetro está vacío, el texto se dividirá por cada carácter individualmente.  

**Ejemplo** 

```plaintext
$textSplit[hello-world-!;-]
> $splitText[2]
```

![alt text](../funciones/image-29.png)


## $splitText[]

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

![alt text](../funciones/image-31.png)


## $getTextSplitLength[]

Devuelve la cantidad de fragmentos obtenidos después de dividir un texto con `$textSplit[]`.  

**Sintaxis**  
```
$getTextSplitLength
``` 


**Ejemplo #1**
```plaintext
$textSplit[hello%world%!;%]
> $getTextSplitLength   // Devuelve 3
```

![alt text](../funciones/image-30.png)



## $getTextSplitIndex[] 

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

![alt text](../funciones/image-32.png)



## $joinSplitText[]

Esta función devuelve los elementos actuales del texto dividido, unidos con el separador especificado.  

**Sintaxis**
```plaintext
$joinSplitText[Separador]
```  

**Parámetro**  

- `Separador`: `(Tipo: String || Opcional)` El separador que se usará entre los valores del texto dividido.  


**Ejemplo #1** 
```plaintext
$textSplit[h-o-l-a;$message[1]]
$joinSplitText[+]
```
![alt text](../funciones/image-33.png)



## $removeSplitTextElement[]

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

![alt text](../funciones/image-34.png)





## $editSplitText[]

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

![alt text](../funciones/image-35.png)