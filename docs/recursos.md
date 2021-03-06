---
id: recursos
title: Uso de Recursos
sidebar_label: Uso de Recursos
---

LACChain no tiene y no tendrá tarifas de transacción. Sin embargo, para limitar el uso de la red a sus límites técnicos y evitar ataques de denegación de servicio, es necesario establecer un mecanismo para solicitar y asignar recursos de red.

## Tipos de Recursos
Las cuentas podrán utilizar los siguientes recursos en la red:

### RAM
En una red EOSIO, la RAM es el espacio de almacenamiento de memoria donde la cadena de bloques almacena datos, se mide en kilobytes (KiB). Si su contrato necesita almacenar datos en una tabla de blockchain, como en una base de datos, puede almacenarlos en la RAM de blockchain.

RAM es un recurso muy importante y es limitado. Se utiliza al ejecutar muchas acciones que están disponibles en la cadena de bloques, al crear una nueva cuenta, por ejemplo, la información de esa cuenta se almacena en la memoria de la cadena de bloques. Un ejemplo del uso de RAM es cuando una cuenta acepta un nuevo tipo de token, se debe crear un nuevo registro en algún lugar de la memoria de blockchain que contenga el saldo del nuevo token aceptado, y esa memoria, el espacio de almacenamiento en blockchain, debe ser comprada por el cuenta que transfiere el token o por la cuenta que acepta el nuevo tipo de token.

RAM es referido como `memory` en el siguiente resultado del comando `cleos get account` : 
```c++
memory: 
     quota:     86.68 KiB    used:     11.62 KiB  
```

Puede encontrar más detalles sobre RAM como recurso del sistema [aquí](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram).

### CPU
CPU es el poder de procesamiento, la cantidad de CPU que tiene una cuenta se mide en microsegundos (μs), se conoce como `CPU bandwith`, el comando `cleos get account` emite la cantidad de tiempo de procesamiento que una cuenta tiene a su disposición al enviar acciones a un contrato.

Puede encontrar más detalles sobre la CPU como recurso del sistema [aquí](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu).

### Network (NET)

Como CPU y RAM, NET también es un recurso muy importante en las cadenas de bloques basadas en EOSIO. NET es el ancho de banda de la red medido en bytes de transacciones y se conoce como `net bandwidth`.

Puede encontrar más detalles sobre NET como recurso del sistema [aquí](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net).


## Limite de Recursos de la RED

Los siguientes valores se obtienen al llamar [system get_info](https://lacchain.eosio.cr/v1/chain/get_info) al RPC API en la red de latamlink.


```json title="CPU limit"
"block_cpu_limit":199900
```

```json title="NET limit"
"block_net_limit":1048576
````

```json title="RAM limit"

La red de eos inicio con 64GB de ram y incrementa en  1KiB (1024 bytes) por día
```

### Distribución de Recursos

Las entidades que operan nodos escritores reciben una porción equivalente de los recursos de la red que las demás entidades. De tal manera que a cada nodo se le asigna `1/N` de la totalidad de los recursos donde : 

**`N = Numero de entidades permisionadas`**.

 Si una entidad decide operar mas de un nodo escritor esto no afecta la cantidad de recursos que recibe.

#### Entidad con dos nodos escritores 


`CPU = 1/N • 200 ms` `NET = 1/N • 1048 KiB` `RAM = 10000 KiB`

![Ejemplo de Entidad 1](/img/diagramas/entity1-authorities.png)

#### Entidad con un nodo escritor 

`CPU = 1/N • 200 ms` `NET = 1/N • 1048 KiB` `RAM = 10000 KiB`

![Ejemplo de Entidad 2](/img/diagramas/entity2-authorities.png)

#### Entidad sin nodos  

`CPU = X txs per day`

`NET = X txs per day`

`RAM = 10000 KiB`

![Ejemplo de Entidad 3](/img/diagramas/entity3-authorities.png)

### Usuarios
Los Usuarios no poseen recursos, estos son descontados de la cuenta del nodo escritor a la hora de co-firmar una transacción.

`CPU = 0 us`
`NET = 0 KiB`
`RAM = 0 KiB`

![Ejemplo de Autoridades Usuario](/img/diagramas/user-authorities.png)

## Límites de recursos de la cuenta
Cada cuenta en una cadena de bloques basada en EOSIO tiene límites de recursos para CPU / NET y RAM asociados. Estos límites especifican cuánto de cada recurso puede usar la cuenta y se pueden cambiar dinámicamente llamando a la API privilegiada `set_resource_limits`.

La diferencia entre los límites de recursos de CPU / NET y RAM es que la RAM, dado que es un recurso limitado, una vez utilizada, la única forma de recuperarla es liberar el espacio de almacenamiento utilizado. Por otro lado, CPU y NET se repondrán por completo cuando la cuenta no esté utilizando la red durante un período de tiempo. Por defecto, este período se establece en 24 horas.

## Contabilidad de recursos
Cuando un usuario (cuenta) desea interactuar con un contrato inteligente (otra cuenta), se crea una transacción con una acción que especifica la función inteligente para llamar junto con la cuenta (nivel de permiso) que autoriza la acción.

Luego, después de firmar con las claves que autorizan el nivel de permiso especificado en la acción, la transacción se transmite a la red hasta que alcanza el productor de bloques actual en la programación.

El productor de bloques ejecutará todas las acciones dentro de la transacción y facturará el tiempo utilizado para ejecutarlas (CPU) a la primera cuenta que autoriza la primera acción. Además, facturará a la primera cuenta de autorización por el tamaño de la transacción (NET).

Si las acciones realizadas por el contrato inteligente implican algún tipo de almacenamiento de datos, el contrato inteligente puede elegir usar los recursos de RAM de cualquiera de las cuentas de autorización de transacciones o usar los recursos de RAM de la cuenta del contrato inteligente.

## CPU y NET como recursos elásticos
El `resource limit manager` de una cadena de bloques basada en EOSIO es la parte del protocolo que realiza un seguimiento de la cantidad de recursos de red disponibles en cualquier momento y cuántos recursos está usando cada cuenta.

En particular, trata la CPU y NET como recursos elásticos que permiten a los usuarios consumir más recursos de los que tienen derecho mientras este recurso está por debajo del uso deseado (no congestionado).

Un recurso elástico tiene las siguientes propiedades.

* El uso deseado.
* El uso máximo.
* El número de períodos de agregación que contribuyen al uso promedio.
* El multiplicador por el cual el espacio virtual puede sobrevender el uso cuando no está congestionado.
* La tasa a la cual un recurso congestionado contrae su límite.
* La velocidad a la que un recurso no congestionado expande sus límites.

Veamos la configuración predeterminada para el recurso de CPU como ejemplo:

```c++
const static uint32_t default_max_block_cpu_usage        = 200'000; /// max block cpu usage in microseconds
const static uint32_t default_target_block_cpu_usage_pct = 10 * percent_1;
const static uint32_t block_cpu_usage_average_window_ms  = 60*1000l;
```

```c++
elastic_limit_parameters cpu_limit_parameters = {
    EOS_PERCENT(config::default_max_block_cpu_usage, config::default_target_block_cpu_usage_pct), //10% of 200ms
    config::default_max_block_cpu_usage,                                                          //200ms
    config::block_cpu_usage_average_window_ms / config::block_interval_ms,                        //60s (120 blocks)
    1000,                                                                                         //x1000 multiplier
    {99, 100},                                                                                    //contract ratio 0.99 
    {1000, 999}                                                                                   //expand ratio 1.001
};
```

Al hacer de la CPU un recurso elástico, se creará una CPU virtual que oscilará entre el valor más bajo posible, que es el uso máximo especificado, y el valor más alto posible, que es el valor más bajo posible multiplicador.

```c++
virtual cpu = [[maximum usage, maximum usage * multiplier]]
```

El límite de la CPU virtual se contraerá (o expandirá) mediante la relación de expansión,  cuando la utilización promedio esté por encima (debajo) del uso deseado, lo que significa que lo máximo que una cuenta puede consumir durante los períodos de inactividad es 1000x (multiplicador) ancho de banda se garantiza bajo congestión.

La utilización promedio de la CPU se calcula utilizando un EMA (Promedio móvil exponencial) que otorga un mayor peso e importancia al uso más reciente.

```c++
def update_elastic_limit(current_limit, average_usage, elastic_resource_limit) {
   result = current_limit
   if average_usage > elastic_resource_limit.target:
      result = result * elastic_resource_limit.contract_rate
   else:
      result = result * elastic_resource_limit.expand_rate

   return min(max(result, elastic_resource_limit.max), elastic_resource_limit.max * elastic_resource_limit.max_multiplier)
```

