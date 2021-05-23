---
id: desplegar-contrato-inteligente
title: Desplegar un contrato inteligente
sidebar_label: Desplegar un Contrato 
---

A continuación explicamos con ejemplos cómo crear, compilar y desplegar un contrato “Hello World” para subirlo a la red LACChain EOSIO. Para este ejemplo, nos basamos en recursos publicados por [Block.one para compartir con la comunidad](http://developers.eos.io/).

## 1. Obtenga su cuenta LACChain EOSIO

En la red de LACChain EOSIO, existen varios tipos de cuentas. Consulte la guía para crear una cuenta según su rol de usuario: 

- [Usuario final](./crear-cuenta-usuario)
- [Aplicación o contrato](./crear-cuenta-contrato)
- [Non-partner](./crear-cuenta-entidad)
- [Partner](./crear-cuenta-entidad) 

## 2. Adquirir RAM
Una vez que se tiene la cuenta en el LACChain EOSIO Testnet, para el contrato, necesitaremos disponer de recursos para desplegar el contrato en este caso RAM. Para esto consulte sobre el [manejo de recursos en la red](../recursos).

Para extraer la información de la cuenta y verificar cuantos kilobytes de RAM tiene disponible la cuenta puede realizar ejecutando el siguiente comando el cual puede apuntar al "end-point" de cualquiera de los partner de la red, puede observar la lista de partners [aquí](./partners).

```bash
cleos -u http://lacchain.eosio.cr get account {nombrecuenta}
```

## 3. Crear un contrato

Para continuar, vamos a crear un contrato sencillo dentro de un nuevo directorio, el cual llamamos `holacontrato`. Como en EOS se requieren recursos, estos deberán estar asociados a los tokens de una cuenta, por lo que se debe poner el mismo nombre del contrato anteriormente creado.

```cpp title="holacontrato.cpp"
# include <eosio/eosio.hpp>
using namespace eosio;
class [[eosio::contract]] holacontrato : public contract {
	public:
		using contract::contract;
		[[eosio::action]]
		void hola( name user ){
			print( "Hola, ", user );
		}
};
```

Para editar el contrato, puede usarse un editor de texto. Para este ejemplo se utilizó Sublime Text.

La primera línea incluye una librería que a la cual se tiene acceso a través del Contract Development Toolkit (CDT), una herramienta que permite acceder a recursos para crear los contratos, [información sobre su instalación](./ambiente-desarrollo).

En la línea de clase, se deberá exponer nuestro contrato `holacontrato` que tiene una acción definida, que en este caso llamamos `hola` y su argumento es un usuario tipo nombre. Al guardar el contrato, en el directorio queda un archivo C++.

## 4. Compilar el contrato

El archivo C++ se tiene que compilar usando la herramienta CDT, que recibe de input el archivo C++ y como output origina un archivo web assembly (wasm) que es un archivo ejecutable por el contrato. Adicional al archivo wasm, también se genera un archivo abi que sirve para el mapeo de las funciones del contrato.

```bash
eosio-cpp -abigen -contract holacontrato -o holacontrato.wasm src/holacontrato.cpp
```
<br/>

:::note Nota
**-abigen**: Flag para generar el archivo ABI (Application Binary Interface).

**-contract**: Especifica el nombre del contrato.

**-o**: Especifica el nombre del archivo compilado.
:::

<br/>

Como no especificamos una cláusula ricardiana, el sistema nos da un mensaje de que no existe. Ver más información sobre [cláusulas ricardianas](https://guias.eoscostarica.io/docs/aprender-eosio/contratos-ricardianos).

## 5. Publicar el contrato

Cuando se tiene compilado el contrato y generado el archivo .wasm y el archivo .abi, se procede a subir el contrato a LACChain y para este caso, es requerido crear un archivo .sh que permite la ejecución de comandos para automatizar en cierta medida ese proceso.

En la terminal, ejecutamos:

```bash
touch holacontrato.sh
chmod 755 holacontrato.sh
```
<br/>

:::note Nota
**touch**: creación de un archivo

**chmod**: cambiar modo (asignar o retirar privilegios)
:::

<br/>

### 5.1 Archivo shell

Dentro del archivo que acabamos de crear, se debe a insertar la siguiente función:

```bash title="holacontrato.sh"
deploy_holacontrato_contracts_to_lacchain() {   
    echo 'Deploy holacontrato'
    mkdir -p ./stdout/holacontrato
    TEMP_DIR=./stdout/holacontrato

    echo '1. set holacontrato smart contract code'
    cleos -u $EOS_API_URL set contract holacontrato -j -d -s ../holacontrato/ >$TEMP_DIR/tx2.json

    echo '2. writer auth'
    cleos -u $EOS_API_URL push action -j -d -s writer run '{}' -p costarica@writer >$TEMP_DIR/tx1.json

    echo '3. merge actions'
    jq -s '[.[].actions[]]' $TEMP_DIR/tx1.json $TEMP_DIR/tx2.json >$TEMP_DIR/tx3.json

    echo '4. merge transaction'
    jq '.actions = input' $TEMP_DIR/tx1.json $TEMP_DIR/tx3.json >$TEMP_DIR/tx4.json

    echo '5. sign transaction'
    cleos -u $EOS_API_URL push transaction $TEMP_DIR/tx4.json -p costarica@writer -p holacontrato@active
}

deploy_holacontrato_contracts_to_lacchain

```

Para este punto de la ejecución, ya tenemos nuestro contrato inteligente desplegado en LACChain.


## 6. Verificación de contrato

Para esto nos dirigimos a la aplicación ([LACChain EOSIO Dashboard](https://lacchain.eosio.online/accounts)), podemos verificar que la cuenta es dueña de un contrato que expone la acción `hola` y que contiene la información abi en la que se especifican en estructura JSON las acciones dentro del contrato y componentes asociados.

Una vez que el contrato esté listo, podemos ejecutar una acción en el contrato, esta va recibir como input la frase **LACChain EOSIO** y se obtendrá como output **hola LACChain EOSIO**. Para esto debemos ejecutar el siguiente comando:

```
cleos -u http://lacchain.eosio.cr push action holacontrato hola '["LACChain EOSIO"]' -p holacontrato@active
```

:::note Nota
Es necesario esperar unos segundos para completar la irreversibilidad del bloque, ya que los block producers deben hacer la validación del bloque de datos para esto.
:::

## Video tutorial
<iframe width="100%" height="350px" src="https://www.youtube.com/embed/nMivNMvS09Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
