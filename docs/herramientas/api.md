---
id: api
title: API Endpoints
---

## Que es un API
El término API es una abreviatura de "Application Programming Interfaces", que en español significa interfaz de programación de aplicaciones. Permite la interacción de aplicaciones con la red mediante el protocolo HTTP.

## EOSIO RPC API 

La siguiente API es el mecanismo nativo de EOSIO disponible para interactuar con el testnet.

[Especificación API para EOSIO](https://developers.eos.io/manuals/eos/latest/nodeos/plugins/chain_api_plugin/api-reference/index)

### Endpoints HTTP
A continuación algunos ejemplos de endpoints HTTP RPC 
> 
  - Nodo Escritor + Middleware : [https://lacchain.eosio.cr](https://latamlink.eosio.cr/v1/chain/get_info) 
  - Nodo Observador solo lectura : [https://observer.eosio.cr](https://latamlink.eosio.cr/v1/chain/get_info)
  - Nodo Escritor sin Middleware : [https://writer.eosio.cr](https://latamlink.eosio.cr/v1/chain/get_info) 

La lista completa de endpoints esta disponible en el siguiente enlace : [Endpoints LACChain EOSIO](https://lacchain.eosio.online/endpoints)

### Endpoints State History Plugin

Los observadores pueden habilitar el `State_history_plugin` de nodeos el cual es útil para capturar datos históricos sobre el estado de la cadena de bloques. El plugin recibe datos de blockchain de otros nodos conectados y almacena los datos en archivos. El plugin expone un endpoint donde escucha usando web sockets para que las aplicaciones se conecten y consulten los datos de la cadena de bloques en función de las opciones del plugin especificadas al iniciar nodeos.

Mas sobre State History Plugin en este enlace: https://developers.eos.io/manuals/eos/v2.0/nodeos/plugins/state_history_plugin/index

### EOS JS

EOSJS es la librería oficial de JavaScript para la integración con redes blockchain basadas en EOSIO utilizando [RPC API](https://developers.eos.io/eosio-nodeos/reference).

La documentación se puede encontrar [aquí](https://eosio.github.io/eosjs)

:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la documentación, si desea mejorar el contenido puede aprender [como contribuir](../guias/contribuir). Consulte el [Roadmap del proyecto](../roadmap).
:::