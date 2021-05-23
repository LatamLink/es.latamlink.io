---
id: monitoreo
title: Monitoreo de Red
sidebar_label: Monitoreo de Red
---

El monitoreo de lo que sucede en la red es esencial para mejorarlo y medir el impacto social de sus soluciones. El principal objetivo de las herramientas de monitoreo es producir información objetiva y confiable sobre cada nodo y la actividad de la red.

El comité permisionador se reserva el derecho discrecional de eliminar un nodo validador del programa de producción basado en datos de rendimiento de los nodos.

## Monitor de Red

Se ha desarrollado un monitor de red nativo de LACChain EOSIO como herramienta para desarrolladores y usuarios para el lanzamiento del Pro Testnet. El monitor incorporará métricas "on-chain" y "off-chain" 

El monitor de red esta disponible en el siguiente enlace: **https://lacchain.eosio.online**

El monitor de red es totalmente código abierto y se puede ver el proyecto en el siguiente [**Repositorio de GitHub**](https://github.com/eoscostarica/eosio-dashboard)

## Monitoreo on-chain

Existe una colección de [contratos inteligentes y utilidades para EOSIO](https://eosmechanics.com/) desplegados en LACChain EOSIO para el monitoreo del rendimiento de los nodos en la red. Los datos estarán públicamente disponibles para su análisis y lo alentamos a hacerlo para ayudar a identificar problemas y mejorar el rendimiento de los nodos validadores.

Las métricas son generadas por contratos inteligentes ubicados bajo la cuenta [`eosmechanics`](https://explorer.latamlink.io/account/eosmechanics).

### CPU Benchmark

Esta métrica de velocidad de CPU utiliza como punto de referencia el tiempo de CPU consumido calculando los números primos de Mersenne. El cálculo de primos es un estándar de la industria para medir el rendimiento de CPU y utiliza operaciones de código que son comunes en el desarrollo de software.

La acción `cpu` es ejecutados durante el turno de producción de cada productor de bloques y registra los tiempos de ejecución del contrato utilizando el campo `cpu_usage_us` incluido en todas las transacciones de la red.


[**Ver métricas de CPU de Nodos validadores**](https://lacchain.eosio.online/node-performance) 

### RAM Benchmark

Esta métrica consiste en escribir y leer rápidamente a una tabla RAM y de forma muy similar a la métrica de CPU pretende medir el rendimiento de los recursos ofrecidos por lo distintos nodos validadores. 

## Monitoreo off-chain

El monitoreo off-chain consiste en el análisis de datos históricos de la actividad de la red para obtener datos de rendimiento de los nodos de la red. 

Las principales métricas off-chain de producción de bloques y confiabilidad de nodos validadores consisten en **bloques perdidos** y **rondas perdidas**.

### Bloques Perdidos 

Estos datos ayudan a los nodos validadores a identificar problemas y ayudan a evaluar el desempeño del nodo validador.

Se determina la confiabilidad de la producción de bloques por parte de los nodos validadores comparando la cantidad de bloques que debe producir cada nodo validador con los bloques realmente producidos.

Los bloques perdidos son el número de bloques programados pero no producidos, o producidos y perdidos por diversas razones. 

### Rondas Perdidas

Número de rondas (12 bloques seguidos) de las que estaba previsto que formara parte el nodo validador.

Número de rondas completamente perdidas (12 bloques seguidos) por un nodo validador. Esto probablemente (pero no siempre) indica un problema en el que el nodo validador especificado tiene la culpa al no estar listo para producir en las rondas que le corresponde.

### Monitoreo en la Nube

Además de aprovechar los servicios en la nube existentes para el monitoreo.

 - Prometheus
 - Grafana 

Adicionalmente se explorarán herramientas de Blockchain Analytics y Data Science.

:::note Trabajo en progreso
Aun estamos trabajando en este aspecto de la documentación, si desea mejorar el contenido puede aprender [como contribuir](guias/contribuir). Consulte el [Roadmap del proyecto](./roadmap).
:::