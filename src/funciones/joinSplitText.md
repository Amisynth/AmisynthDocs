
# $joinSplitText[]

Esta función devuelve los elementos actuales del texto dividido, unidos con el separador especificado.  

**Sintaxis**
```plaintext
$joinSplitText[Separador]
```  

**Parámetro**  

- `Separador`: `(Tipo: String || Opcional)` El separador que se usará entre los valores del texto dividido.  


**Ejemplo #1** 
```plaintext
$textSplit[h.o-l-a;$message[1]]
$joinSplitText[+]
```
![alt text](image-33.png)