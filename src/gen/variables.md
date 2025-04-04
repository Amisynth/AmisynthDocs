# Variables

Las variables son la forma en que almacenamos los datos en Amisynth. Los datos se pueden asignar a usuarios, servidores, canales y globalmente. Cada variable tiene dos elementos, que desglosaremos en esta sección.

Elementos de la variable

`Nombre`: El nombre de la variable. El bot no puede modificarlo; se utiliza para llamar a la variable actual.

`Valor`: El valor de la variable. El bot puede modificarlo y se devuelve cuando se llama al nombre de la variable en `$getVar`/`$getUserVar`/`$getServerVar`/`$getChannelVar`.



**Como iniciar**

```python
# Establesca el parametro variables_json como True

bot = AmiClient(prefix="..", variables_json=True)
```

Ahora podra usar variables y almacenar datos mediante un JSON.

> Antes de leer la guia de abajo, recuerde que cuando establesca un valor de variable de cualquier tipo estara creando la variable al mismo tiempo.


> Recuerde que por el momento las variables se manejan en su propio entorno mediante en un archivo JSON creado automaticamente.


## Variables globales de usuario - Funciones

[`$setVar`](../../funciones/setVar.md)/[`$getVar`](../../funciones/getVar.md) son funciones de variables globales, lo que significa que se aplican universalmente (es decir, no cambian por servidor, canal ni usuario).
Sin embargo, si se proporciona un ID de usuario en el parámetro opcional `User ID`, se convierte en una variable de usuario global.

El valor de las variables de usuario globales se mantiene igual para el usuario en todos los servidores. El uso de las variables globales de usuario se ve así:
- `$setVar[Nombre de la variable;Nuevo valor;ID del usuario]`

- `$getVar[Nombre de la variable;ID del usuario]`


## Variables globales - Funciones

- `$setVar[Nombre de la variable;Nuevo valor]`: Cambia el valor de la variable global proporcionada a 'Nuevo valor'.

- `$getVar[Nombre de la variable]`: Obtiene el valor actual de la variable global proporcionada.

> 📌 Las variables globales son universales, lo que significa que si la variable se modifica, la modificación se aplica a todos.



## Variables de usuario por servidor - Funciones
Las variables de usuario son únicas para cada usuario y varían según el servidor.

- `$setUserVar[Variable Name;New Value;(User ID;Guild ID)]`: Establece el valor de la variable proporcionada para el "New Value" del "User ID" y el "Guild ID" especificados, o el autor del comando si no se proporciona el "User ID" y el guild actual si no se proporciona el "Guild ID".

- `$getUserVar[Variable Name;(User ID;Guild ID)]`: Obtiene el valor actual de la variable de usuario proporcionada. Devuelve el valor de la variable del autor si no se proporciona el "User ID" y utiliza el guild actual si no se proporciona el "Guild ID".


## Variables por servidor - Funciones
Las variables del servidor son únicas para cada servidor.

- `$setServerVar[Variable Name;New Value;(Server ID)]`: Establece la variable proporcionada como 'New Value' para el 'Server ID' especificado o para el servidor en el que se ejecutó el comando si no se proporcionó ningún 'Server ID'.

- `$getServerVar[Variable Name;(Server ID)]`: Obtiene el valor actual de la variable del servidor proporcionada. Si no se proporcionó ningún 'Server ID', devuelve el valor actual de la variable del servidor.



## Variables de canal por servidor - Funciones

- `$setChannelVar[Variable Name;New Value;(Channel ID)]`: Establece la variable proporcionada en 'New Value' para el 'Channel ID' proporcionado, o el canal en el que se ejecutó el comando; si no se proporcionó ningún 'Channel ID'.

- `$getChannelVar[Variable Name;(Channel ID)]`: Obtiene el valor actual de la variable de canal proporcionada. Devuelve el valor actual de la variable de canal si no se proporcionó ningún 'Channel ID'.




## Economía

### Local vs. Global
- **Economía Local**: Cambia por servidor. Si un usuario tiene 10,000 monedas en un servidor, en otro tendrá una cantidad diferente. Por ejemplo, Unbelievaboat tiene una economía local. *(La economía local usa variables de usuario)*

- **Economía Global**: No cambia por servidor. Si un usuario tiene 10,000 monedas en un servidor, en otro tendrá la misma cantidad. Por ejemplo, Dank Memer tiene una economía global. *(La economía global usa variables de usuario globales)*

### Economía Local
- Reemplaza "Dinero" con tu variable de efectivo/dinero. Si "Dinero" es el nombre de tu variable de dinero, ¡déjala como está!
- Reemplaza "Cantidad" con la cantidad de dinero que quieres añadir/quitar al usuario. Así: `100`, `$random[1;11]`, `$random[100;1001]`, `10000`.

Obtiene el saldo actual del usuario. Si se menciona a un usuario, el bot devolverá el saldo de ese usuario:
```
$getUserVar[Money;$mentioned[1]]
```

Añade dinero al usuario mencionado:
```
$setUserVar[Money;$sum[Amount;$getUserVar[Money;$mentioned[1]]];$mentioned[1]]
```

Añade dinero al usuario que ejecuta el comando:
```
$setUserVar[Money;$sum[Amount;$getUserVar[Money]]]
```

Retira dinero al usuario mencionado:
```
$setUserVar[Money;$sub[Amount;$getUserVar[Money;$mentioned[1]]];$mentioned[1]]
```

Retira dinero al usuario que ejecuta el comando Comando:
```
$setUserVar[Money;$sub[Amount;$getUserVar[Money]]]
```

### Economía global

- Reemplaza "Money" por tu variable de efectivo/dinero. Si "Money" es el nombre de tu variable de dinero, ¡déjala como está!

- Reemplaza "Amount" por la cantidad de dinero que quieres añadir/quitar al usuario. Por ejemplo: `100`, `$random[1;11]`, `$random[100;1001]`, `10000`.

Obtiene el saldo/cantidad de dinero actual del usuario. Si se menciona a un usuario, el bot devolverá el saldo de ese usuario:
```
$getVar[Money;$mentioned[1]]
```

Añade dinero al usuario mencionado:
```
$setVar[Money;$sum[Amount;$getVar[Money;$mentioned[1]]];$mentioned[1]]
```

Añade dinero al usuario que ejecuta el comando:
```
$setVar[Money;$sum[Amount;$getVar[Money;$authorID[]]];$authorID[]]
```

Retira dinero al usuario mencionado:
```
$setVar[Money;$sub[Amount;$getVar[Money;$mentioned[1]]];$mentioned[1]]
```

Retira dinero al usuario que ejecuta el comando Comando:
```
$setVar[Money;$sub[Amount;$getVar[Money;$authorID[]]];$authorID[][]]
```



## Clasificaciones
Puede generar clasificaciones de variables utilizando las siguientes funciones:

- [$getLeaderboardValue](../funciones/getLeaderboardValue.md) - Obtiene el valor de la tabla de clasificación.
- [$getLeaderboardPosition](../funciones/getLeaderboardPosition.md) - Obtiene la posicion de un usuario en la tabla (solo valida en numeros).