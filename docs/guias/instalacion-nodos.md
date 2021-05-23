---
id: instalacion-nodos
title: Instalación de Nodos en LACChain EOSIO
sidebar_label: Instalación de Nodos
---

`Nodeos` es el software central de una cadena de bloques EOSIO. Es un deamon que realiza todas las funciones de un nodo de blockchain, tales como sincronización con otros nodos a través del `protocolo p2p`, proporciona una `API HTTP` para el software del cliente y, opcionalmente, `firma bloques` si se configura con la cuenta de un validador.

`Nodeos` está disponible en código fuente y paquetes binarios en el [repositorio GitHub](https://github.com/EOSIO/eos/releases).  Las plataformas compatibles son Ubuntu 16.04 y 18.04, RHEL7 y MacOS. 

Cuando planifique la instalación de un servidor, tiene varias opciones para seleccionar. A menudo, la selección está determinada por los hábitos y preferencias existentes del administrador del sistema.

Consulte nuestra guÍa sobre como configurar el [ambiente de desarrollo](./ambiente-desarrollo) para poder trabajar sobre la red de LACChain EOSIO. En casos de necesitar mayor informacion sobre la configuracion de nodos en redes EOSIO en general, informese [aquí](https://guias.eoscostarica.io/docs/tutoriales/instalacion-de-nodos/)

## Testnet LACChain EOSIO 

<table>
<tr>
    <td>Versión EOSIO</td>
    <td>
        <a href="https://github.com/lacchain/eosio-network" target="_blank" rel="noopener noreferrer">
            <code>LACChain EOSIO</code>
        </a>
    </td>
</tr>
<tr>
    <td>Chain ID</td>
    <td><code>2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5</code></td>
</tr>
<tr>
    <td>Archivo Génesis</td>
    <td>
      <a href="https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json" target="_blank" rel="noopener noreferrer"><code>genesis.json</code></a>
    </td>
</tr>
</table>

Consulte nuestro [repositorio en GitHub](https://github.com/lacchain/eosio-network) para obtener mas información sobre los nodos en LACChain EOSIO. Si desea realizar la instalacion y configuración de nodos desde linea de comandos consulte el [README.md](https://github.com/lacchain/eosio-network/blob/master/README.md) de nuestro repositorio en GitHub, antes de esto asegurse de haber instalado el [ambiente de desarrollo](./ambiente-desarrollo) para EOSIO.

Antes de iniciar es importante que conozca algunas [consideraciones en infraestrutura](./nodos-eosio) sobre los nodos en EOSIO que pueden serle util para amplir el conocimiento sobre el funcionamiento de la red.

## 1. Crear una cuenta

Para poder desplegar nodos en la red de LACChain EOSIO, es importante tener una cuenta registrada como `Partner` o `Non-Partner`. 
 
Consulte la guía para crear una cuenta según su rol de usuario: 

- [Non-partner](./crear-cuenta-entidad)
- [Partner](./crear-cuenta-entidad)


## 2. Autenticarse en el Dashboard

La red de LACChain EOSIO cuenta con un [dashboard](https://lacchain.eosio.online/), el cual permite a los usuarios realizar gestiones dentro de la red, incluida la opción de desplegar varios tipos de nodos.  

Accede con su cuenta de tipo `Partner` o `Non-Partner`. Consulte nuestro tutorial de como administrar las [llaves privadas](./llaves-privadas#31-autenticadores-externos-wallets)


## 3. Desplegar un nodo 

Una vez autenticados con nuestra cuenta, seleccione la opción de `administración` dentro de las herramientas del dashboard. En esta sección se le mostrara los tipos de nodos que puede desplegar según sea su tipo de cuenta. 

Para poder crear el nodo, simplemente completamos los datos solicitados en el formulario y ejecutamos la transacción. 

![Sección de administración](/img/docs/dashboard_02.png)


### Ejemplos de configuración

El dashboard también cuenta con una sección en la cual podemos descargar un ejemplo de la configuración de los diferentes tipos de nodo, solamente tenemos que acceder a la opción de [`configuración de nodo`](https://lacchain.eosio.online/node-config) dentro de las herramientas. 

![Sección de configuración](/img/docs/dashboard_01.png)

## 4. Eliminar un nodo 

Dentro del dashboard, también existe una opción para poder eliminar los nodos, simplemente escribiendo el nombre del nodo que deseamos eliminar. 

![Eliminación de nodos](/img/docs/dashboard_03.png)