# Permisos  

Los **permisos** permiten a los usuarios tener privilegios y accesos específicos en un servidor. Algunos permisos pueden ser tan básicos como permitir que los usuarios agreguen reacciones a los mensajes, mientras que otros otorgan acciones más administrativas. Estos permisos se basan en los roles asignados a los usuarios en un servidor y pueden configurarse tanto a nivel de servidor como a nivel de canal.

## Lista de Permisos  

A continuación se muestra la lista de permisos compatibles con BDFD:

| Permiso | Descripción |
|---------|------------|
| addreactions | Permite reaccionar con emojis en mensajes *(No afecta los emojis existentes en los mensajes)*. |
| admin | Concede todos los permisos y omite todas las sobrescrituras de permisos de canal. |
| attachfiles | Permite subir archivos adjuntos en los canales. |
| ban | Permite expulsar y desbanear miembros. |
| changenicknames | Permite editar el propio apodo en el servidor. |
| connect | Permite unirse a canales de voz/escenario. |
| createinstantinvite | Permite crear invitaciones. |
| createprivatethreads | Permite crear hilos privados. |
| createpublicthreads | Permite crear hilos públicos. |
| embedlinks | Permite enviar contenido incrustado y enlaces en los canales. |
| externalemojis | Permite usar emojis personalizados de otro servidor. |
| externalstickers | Permite usar stickers personalizados de otro servidor. |
| kick | Permite expulsar miembros. |
| managechannels | Permite crear/eliminar/modificar canales en el servidor. |
| manageemojis | Permite crear/eliminar/modificar emojis y stickers personalizados del servidor. |
| manageevents | Permite crear/eliminar/modificar eventos en el servidor. |
| managemessages | Permite eliminar mensajes de otros miembros y fijar/desfijar mensajes en los canales. |
| managenicknames | Permite modificar los apodos de los miembros del servidor. |
| manageroles | Permite crear/eliminar/modificar roles del servidor. También permite modificar los permisos individuales de los canales. |
| manageserver | Permite crear/modificar reglas de AutoMod, agregar bots, ver invitaciones y cambiar la configuración del servidor. |
| managethreads | Permite crear/eliminar/modificar hilos en los canales. |
| managewebhooks | Permite crear/eliminar/modificar webhooks en los canales. |
| mentioneveryone | Permite mencionar con `@everyone`, `@here` y a todos los roles del servidor. |
| moderatemembers | Permite silenciar temporalmente a los miembros *(timeout/untimeout)*. También conocido como *"Timeout members"*. |
| movemembers | Permite mover miembros entre canales de voz/escenario. |
| priorityspeaker | Permite ser escuchado con prioridad en canales de voz/escenario. |
| readmessagehistory | Permite ver el historial de mensajes del canal. |
| readmessages | Permite ver un canal. También conocido como *"Ver canal"*. |
| requesttospeak | Permite solicitar hablar en un canal de escenario. |
| sendmessages | Permite enviar mensajes en los canales. |
| sendmessagesinthreads | Permite enviar mensajes en hilos. |
| sendvoicemessages | Permite enviar mensajes de voz en los canales. |
| slashcommands | Permite usar comandos de aplicación *(comandos de barra `/` y menús de contexto)* en los canales. También conocido como *"Usar Comandos de Aplicación"*. |
| speak | Permite hablar en un canal de voz/escenario. |
| stream | Permite transmitir en vivo en canales de voz/escenario. |
| tts | Permite enviar mensajes de texto a voz *(TTS)*. |
| usesoundboard | Permite usar sonidos del soundboard del servidor en canales de voz. |
| usevad | Permite usar la detección de actividad de voz. Los miembros sin este permiso deberán usar la función de pulsar-para-hablar *(push-to-talk)*. También conocido como *"Usar actividad de voz"*. |
| viewauditlog | Permite ver los registros de auditoría del servidor. |
| viewguildinsights | Permite ver [estadísticas](https://discord.com/developers/servers) del servidor. |
| voicedeafen | Permite ensordecer a un miembro en un canal de voz/escenario. |
| voicemute | Permite silenciar a un miembro en un canal de voz/escenario. |

> 📝 Todos los permisos son insensibles a mayúsculas y minúsculas *(es decir, tanto `BAN` como `Ban` funcionarán)*.