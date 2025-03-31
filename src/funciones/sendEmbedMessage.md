
# $sendEmbedMessage[]

Envía un mensaje embed al canal proporcionado. Los campos no necesarios pueden dejarse vacíos.  

## Sintaxis  
```  
$sendEmbedMessage[ID del canal;Contenido;(Título;URL del título;Descripción;Color;Autor;Ícono del autor;Pie de página;Ícono del pie de página;Miniatura;Imagen;Añadir timestamp?;Retornar ID?;Nombre del campo;Valor del campo;¿En línea?;...)]
```  

## Parámetros  

- `ID del canal` (Tipo: Snowflake || Obligatorio): ID del canal donde se enviará el mensaje.  

- `Contenido` (Tipo: String || Opcional): Texto mostrado sobre el embed.  

- `Título` (Tipo: String || Opcional): Texto que se usará como título.  

- `URL del título` (Tipo: URL || Opcional): Enlace aplicado al título.  

- `Descripción` (Tipo: String || Opcional): Texto de descripción del embed.  

- `Color` (Tipo: Color || Opcional): Código hexadecimal o entero del color del borde del embed.  

- `Autor` (Tipo: String || Opcional): Texto mostrado como autor del embed.  

- `Ícono del autor` (Tipo: URL || Opcional): Imagen junto al autor (URL válida de imagen).  

- `Pie de página` (Tipo: String || Opcional): Texto mostrado en el pie del embed.  

- `Ícono del pie de página` (Tipo: URL || Opcional): Imagen junto al pie de página (URL válida de imagen).  

- `Miniatura` (Tipo: URL || Opcional): Imagen mostrada como miniatura.  

- `Imagen` (Tipo: URL || Opcional): Imagen mostrada arriba del pie de página (URL válida de imagen).  

- `Añadir timestamp?` (Tipo: Bool || Opcional): Agrega una marca de tiempo en el pie (`true` o `false`).  

- `Retornar ID?` (Tipo: Bool || Opcional): Devuelve el ID del mensaje fuera del embed (`true` o `false`).  

- `Nombre del campo` (Tipo: String || Opcional): Nombre del campo adicional en el embed.  

- `Valor del campo` (Tipo: String || Opcional): Contenido del campo adicional.  

- `¿En línea?` (Tipo: Bool || Opcional): Define si el campo adicional es en línea (`true` o `false`).  

## Ejemplo  

### Ejemplo #1  
```plaintext
$sendEmbedMessage[$channelID[];;Título;https://discord.com/;Descripción;000000;Autor;$authorAvatar;Pie de página;$authorAvatar;$authorAvatar;yes;no;Nombre del campo;Valor del campo;true]
```
