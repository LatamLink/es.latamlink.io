---
id: gobernanza-red
title: Herramientas de Gobernanza.
sidebar_label: Gobernanza de Red
---

## Cuenta Privilegiada EOSIO
La cuenta `eosio` representa el comité permisionador que representa la autoridad máxima de la red. Esta cuenta posee acceso ilimitado a los recursos CPU, NET, y RAM. 

Se pueden crear permisos específicos para cada acción privilegiada y ademas se podrá utilizar un contrato multi-firma (o “multisig”) con parámetros variables que requerirá el consentimiento de la mayoría de los actores en la tabla. 

## Contratos de Sistema

Los contratos de permisionado de LACChain EOSIO son implementados como [Contratos de Sistema](https://developers.eos.io/manuals/eosio.contracts/latest/index). Estos contratos tiene acceso a [funciones privilegiadas](http://localhost:3000/docs/recursos/funciones-importantes) que encapsulan la funcionalidad base para el marco de gobernanza de LACChain.

[Contratos de Sistemas LACChain EOSOIO](https://github.com/LatamLink/eosio.contracts/tree/master/contracts/lacchain.system)

## Interfaz Grafica para Comite Permisionador
Esta herramienta es para manejar el permisionamiento y gobernanza de LACChain EOSIO mediante contratos inteligentes.

Herramienta GUI para facilitar la gestión de la red por parte del comité permisionador. 

https://lacchain.eosio.online/management

Alguna de las funciones disponibles son:

### Registro de nodos validadores

![Registro de nodos validadores](/img/tutorials/gobernanzaRed/registro-nodos-validadores.png)

### Registro de entidades

![Registro de entidades](/img/tutorials/gobernanzaRed/registro-entidades.png)

### Eliminar grupo de red

![Eliminar grupo de red](/img/tutorials/gobernanzaRed/eliminar-grupo-red.png)

### Cambios de nodos activos

![Cambios de nodos activos](/img/tutorials/gobernanzaRed/cambio-nodos-activos.png)

### Asignación de recursos a cuentas

![Asignación de recursos a cuentas](/img/tutorials/gobernanzaRed/asignacion-recursos-cuentas.png)

### Eliminar entidad

![Remover entidad](/img/tutorials/gobernanzaRed/remove-entity.png)

## Blacklisting de cuentas

Las cuentas se pueden agregar a una lista negra que debe de ser implementada por todos los nodos validadores para efectivamente bloquear acceso a una cuenta.

## Actualización de contratos de sistema

La actualización de los contratos de sistema solo se puede realizar por la cuenta `eosio` la cual representa al comité permisionador.

:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la documentación, si desea mejorar el contenido puede aprender [como contribuir](../guias/contribuir). Consulte el [Roadmap del proyecto](../roadmap).
:::