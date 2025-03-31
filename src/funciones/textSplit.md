# $textSplit[]


Divide el texto proporcionado utilizando un separador y guarda el valor temporalmente.  

## Sintaxis  
```
$textSplit[Texto;Separador]
```  

## Parámetros  

- `Texto` (Tipo: String || Opcional): El texto a dividir.  

- `Separador` (Tipo: String || Opcional): El carácter o cadena utilizada para dividir el texto.  
  - Si este parámetro está vacío, el texto se dividirá por cada carácter individualmente.  

## Ejemplo  

### Ejemplo #1  
```plaintext
$nomention
$textSplit[hello-world-!;-]
> $splitText[2]
