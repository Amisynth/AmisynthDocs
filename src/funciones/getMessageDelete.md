# $getMessageDelete[]

Devuelve el contenido del mensaje que fue eliminado, si está disponible.



**Sintaxis**
```
$getMessageDelete[]
```



**Parámetros**
- *(Ninguno)*: Esta función no recibe parámetros. Su funcionamiento depende del contexto del evento de eliminación de mensaje (`$onMessageDelete`).



**Requisitos**
- Esta función solo funciona dentro de un evento donde se haya detectado la eliminación de mensaje (`$onMessageDelete`).
- El mensaje eliminado debe estar en caché para poder acceder a su contenido.



**Ejemplo**
```
📤 El mensaje eliminado decía: `$getMessageDelete[]`
```
