---
id: configurar-wallet
title: Configurar Wallet
sidebar_label: Configurar Wallet
---

Para utilizar autenticadores externos (wallets) en LACChain EOSIO como por ejemplo Anchor Wallet, se debe realizar una configuración para incluir la red dentro de las redes disponibles en el autenticador, a continuación, se muestra un tutorial donde se explica este proceso.

### Paso 1: Descarga e instalación
 
En este caso se utilizará el autenticador [Anchor Wallet](https://greymass.com/en/anchor/)

### Paso 2: Añadir la red

Una vez que se realizó la instalación de Anchor Wallet debe dirigirse a la ventana de **Manage Available Blockchains**, ahí presione el botón **Add/Remove**.

![Manage Available Blockchains](/img/tutorials/add_network.png)

Ahora se le presentara una ventana con un listado de las redes que puede seleccionar, sin embargo, LACChain EOSIO aún no se encuentra dentro de esta lista, entonces debe presionar el botón **Custom Blockchain** para añadir la red a esta lista.

![networks list](/img/tutorials/networks_list.png)

En este momento se deben completar un formulario para ingresar en el autenticador, para esto se deben completar los siguientes datos y guardar la información presionando el botón **Save**:
 
 - **Chain ID**: 5821525c6588037e2b066b992fcac34909a5b7f1ea8d5a393f6720fca3750d61
 - **Name of Blockchain**: LACChain EOSIO
 - **Default node for this blockchain**: https://lacchain.eosio.cr
 
![add network form](/img/tutorials/add_red_form.png)

:::note Nota
Verifique antes de guardar la información que la casilla **This blockchain is a test network(TESTNET)** este selecciona.
:::

### Paso 3: Importar cuentas

Luego de añadir la red, deberá importar las llaves asociadas a su cuenta en LACChain EOSIO, para esto en el menú lateral seleccione la opción **Setup Account** ahí seleccione el botón **Import Account**.

![Import Account](/img/tutorials/import_account.png)

Esto le mostrara otra pestaña en la cual debe seleccionar el botón **Import Private Key**.

![Import Private Key](/img/tutorials/import_key.png)

En la siguiente ventana ingrese la clave privada de su cuenta de LACChain EOSIO, una vez que el sistema la reconozca seleccione `accountname@active` y `accountname@owner`, para finalizar presione el botón **Import Account**.

![Insert keys](/img/tutorials/insert_keys.png)

Para finalizar el proceso debe ingresar la contraseña de su billetera local para confirmar la importación de la cuenta en ella.

![Insert keys](/img/tutorials/enter_password.png)