
# Sistema de ID de Discord

El sistema de ID de Discord permite que los bots gestionen y utilicen IDs para obtener/editar datos de objetos *(por ejemplo, obtener el nombre de un usuario, eliminar un rol, etc.)*.

### ¿Qué es una ID?
Una ID es un identificador de objeto de Discord. Desglosémoslo:
- Un 'objeto' se refiere a un canal, rol, usuario, servidor/gremio, etc. de Discord.
- Un 'identificador' (comúnmente llamado 'ID') es el número de varios dígitos al que pertenece el objeto.

### Activar el Modo Desarrollador
Para poder acceder y copiar IDs en el cliente de Discord, debes activar el modo desarrollador. Así es como se hace:

- **Escritorio**

    ![ex1](https://user-images.githubusercontent.com/116581988/199096924-0aff5394-5b58-4c16-b9fd-fe744dd48669.png)

    ![ex2](https://user-images.githubusercontent.com/116581988/199097049-49fd06e2-29e9-40a6-900f-009c3b5897db.png)

    ![ex3](https://user-images.githubusercontent.com/116581988/199097113-91a52937-af03-430b-a58e-d1b561b1debb.png)

- **Móvil**

   Ve a Configuración de Usuario > Apariencia > Avanzado y activa el Modo Desarrollador.

   ![ex4](https://user-images.githubusercontent.com/116581988/199097168-e304e814-53ba-4015-a7a4-4b5ff72bf7f4.png)

### Encontrar IDs
*¿Dónde encuentro estas 'IDs'?*

Puedes utilizar '[Funciones que devuelven IDs](#functions-that-return-ids)' para obtener IDs.

Si deseas obtener IDs usando tu cliente, consulta la [guía completa de Discord sobre cómo obtener IDs!](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

### Usando IDs en Comandos

Existen muchas funciones que utilizan IDs, como `$deleteChannels`, `$modifyRole`, `$banID` y muchas más.

Tomemos `$deleteChannels` como ejemplo. Para eliminar un canal, necesitamos la ID del canal. Así es como podría verse `$deleteChannels`:
```
$deleteChannels[320949943877437847]
$c[Elimina la ID de canal personalizada proporcionada.]

$deleteChannels[$channelID]
$c[Elimina el canal donde se ejecutó el comando.]

$deleteChannels[$mentionedChannels[1]]
$c[Elimina el canal mencionado.]
```

> ⚠️ Ten cuidado de no mezclar tipos de ID. Por ejemplo, no puedes hacer `$deleteChannels[$authorID]`. Esto es porque `$authorID` devuelve una ID de usuario, no una ID de canal.

### Funciones que devuelven IDs
- `$authorID`/`$userID`/`$roleID`/`$channelID`
- `$findUser`/`$findChannel`/`$findRole`
- `$mentioned`/`$mentionedChannels`/`$mentionedRoles`
- ... *(algunas otras)*

### Usando IDs para Menciones
- Mencionando a un usuario - `<@userID>`
- Mencionando un rol - `<@&roleID>`
- Mencionando un canal - `<#channelID>`
- Usando un emoji
    - Estático - `<:emojiName:emojiID>`
    - Animado - `<a:emojiName:emojiID>`
- Mencionando un Slash
    - Normal - `</name:commandID>`
    - Subcomando - `</name subcommandName:commandID>`
    - Grupo de subcomando - `</name subcommandGroup subcommandName:commandID>`
- Mencionando un servidor - Los servidores no pueden ser mencionados.

> 📝 ¡Los usuarios que no son bots también pueden usar IDs para mencionar objetos!

---

Este es el texto traducido. Si necesitas algún ajuste, no dudes en comentarlo.