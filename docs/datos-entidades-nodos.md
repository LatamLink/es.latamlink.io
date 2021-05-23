---
id: datos-entidades-nodos
title: Información sobre Entidades y Nodos
sidebar_label: Info Entidades y Nodos
---

Este es un estándar JSON propuesto para la información de entidades y nodos que los socios de LACChain deben publicar y almacenar en las tablas de contratos del sistema. Este estándar se basa en el [estándar BP JSON](https://github.com/eosrio/bp-info-standard) utilizado en la red mainnet de EOS.

Los contratos de sistema de permiten a las entidades que sean operadores de nodos anunciar públicamente las cuentas de sus nodos y compartir información sobre ellos mismos.

Es como un WHOIS para cuentas de LACChain que se verifiquen mediante una firma de blockchain. Todos estos campos requieren un inicio de sesión único que se autentica a través de blockchain. Solo la entidad con las claves correctas pueden editar estos campos , ya sea mediante linea de comando p utilizando la interfaz de usuario.

#### Versión

la versión actual es **v0.1.0** y cumple con el esquema JSON [Draft 2019-09](https://json-schema.org/specification-links.html#2019-09-formerly-known-as-draft-8)


## Registro de Información de Entidades
Ejecutar esta acción requiere de la autorización de la cuenta de la entidad o del comité permisionador.

`eosio::action`
`setentinfo(entity, info)`

Insertará o actualizará un registro en la tabla `entity` en los contratos del sistema `eosio`.

| Parámetro | Tipo | Notas |
|---|---|---|
| `entity` | *name* | Cuenta de la entidad permisionada |
| `info` | *string* | JSON según estructura de entidades |


### Estructura JSON para Entidades 

- **org:** *{Object}*
  - **candidate_name**: Organization name
  - **organization_id**: Government Issued Organization ID
  - **technical_contact**: Person Name
  - **business_contact**: Person Name
  - **website**: Organization website
  - **code_of_conduct:** Full URL to page
  - **ownership_disclosure:** Full URL to page
  - **email:** Contact email
  - **github_user:** Operational github username (or array or usernames)
  - **chain_resources:** *[Array]* - List related resources on LACChain
  - **other_resources:** *[Array]* - List of other relevant URLs 
  - **branding:** *{Object} *- Logo images
      - **logo_256:** Entire url to image 256x256px 
      - **logo_1024:** Entire url to image 1024x1024px
      - **logo_svg:** Entire url to image svg
   - **location:** *{Object}* - Organization location
      - **name:** Location in human readable format [City, State]
      - **country:** Country code [XX] in accordance to [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
      - **latitude:** Latitude in decimal degrees
      - **longitude:** Longitude in decimal degrees
    },
  - **social:** *{Object}* - NOT THE ENTIRE URL, only usernames on social networks, 
    - **keybase:** Username
    - **telegram:** Username or group
    - **twitter:** Username
    - **github:** Username
    - **youtube:** Channel address
    - **facebook:** Page/group address
    - **hive:** Username without @
    - **reddit:** Username
    - **wechat:** Username

### Entity JSON Example 

```json title="información on-chain de entidades"
{
	"organization_name": "EOS Costa Rica",
	"organization_id": "3-101-123456",
	"technical_contact": "Asia Trejo",
	"business_contact": "Kris Peralta",
	"email": "latamlink@eosio.cr",
	"website": "https://eoscostarica.io",
	"code_of_conduct": "https://eoscostarica.io/en/transparency/#code_of_conduct",
	"ownership_disclosure": "https://eoscostarica.io/en/transparency/#ownership_disclosure",
	"github_user": "eoscostarica",
	"chain_resources": ["https://lacchain.eosio.online"],
	"other_resources": ["https://guias.eoscostarica.io", "https://guides.eoscostarica.io"],
	"branding": {
		"logo_256": "https://eoscostarica.io/assets/eos-CostaRica-256x256.png",
		"logo_1024": "https://eoscostarica.io/assets/eos-CostaRica-1024x1024.png",
		"logo_svg": "https://eoscostarica.io/assets/eos-CostaRica-vectors.svg"
	},
	"location": {
		"name": "San Jose",
		"country": "CR",
		"latitude": 9.936377,
		"longitude": -84.078155
	},
	"social": {
		"hive": "eos-costarica",
		"twitter": "EOSCostaRica",
		"youtube": "channel/UCvYinCH3O1iKpi-_dNfQAGQ",
		"facebook": "costaricaeos",
		"github": "eoscostarica",
		"reddit": "eoscostarica",
		"keybase": "eoscostarica",
		"telegram": "eoscr",
		"wechat": ""
	}
}
```

## Información de Nodos

`eosio::action`
`setnodeinfo(node, info)`

Ejecutar esta acción requiere de la autorización de la cuenta permisionada o del comité permisionador.

| Parámetro | Tipo | Notas |
|---|---|---|
| `node` | *name* | Nombre del nodo asociada a la entidad |
| `info` | *string* | JSON según tipo de Nodo |

Insertará o actualizará un registro en la tabla `nodes` en los contratos del sistema `eosio`.

### Estructura JSON para Nodos

La información esperada varia dependiendo del tipo de nodo **node_type:**  `validator / boot / writer / observer `

- **node:** *{Object}*
    - **nodetype_keys:**  *{Object}* - Public Keys required for each node type.
        - **peer_keys** : **[Array]** ["EOS..."] 
        - **account_key** : "EOS..." *(required for writer node)*
    - **nodetype_endpoints:**  *{Object}* - HTTP and P2P endpoints required for each node type.
        - **p2p_endpoint:** EOSIO P2P endpoint `host:port`
        - **api_endpoint:** EOSIO HTTP endpoint `http://host:port`
        - **ssl_endpoint:** EOSIO HTTPS endpoint `https://host:port`
    - **nodetype_location:** Node location
        - **name:** Node location in human readable format [City, State]
        - **country:** Node country code [XX]
        - **latitude:** Node latitude in decimal degrees
        - **longitude:** Node longitude in decimal degrees
    - **nodetype_features:** *[Array]*
        - features supported by the `api_endpoint` or `ssl_endpoint` on writer or observer nodes, refer to the [list of features](#caracteristicas-de-nodos-escritores--observadores)


### Ejemplo de Nodo Validador
```json title="información on-chain de un nodo velidador"
{
    "validator_keys":{
        "peer_keys": ["EOS..."]
    },
    "validator_endpoints":{
        "validator_p2p": "lacchain.eosio.cr:9876"
    },
    "validator_location": {
        "name": "San Jose",
        "country": "CR",
        "latitude": 9.936377,
        "longitude": -84.078155
    }
}
```

### Ejemplo de Nodo Boot
```json title="información on-chain de un nodo boot"
{
    "boot_keys":{
        "peer_keys": ["EOS..."]
    },
    "boot_endpoints":{
        "boot_p2p": "lacchain.eosio.cr:9876"
    },
    "boot_location": {
        "name": "San Jose",
        "country": "CR",
        "latitude": 9.936377,
        "longitude": -84.078155
    }
}
```

### Ejemplo de Nodo Escritor
```json title="información on-chain de un nodo escritor"
{
    "writer_keys":{
        "peer_keys": ["EOS..."],
        "account_key": "EOS..."
    },
    "writer_endpoints":{
        "writer_api": "http://lacchain.eosio.cr",
        "writer_ssl": "https://lacchain.eosio.cr",
        "writer_p2p": "lacchain.eosio.cr:9876"
    },
    "writer_location": {
        "name": "San Jose",
        "country": "CR",
        "latitude": 9.936377,
        "longitude": -84.078155
    },
    "writer_features": ["chain-api", "account-query", "dfuse"]
}
```

### Ejemplo de Nodo Observador
```json title="on-chain observer node info"
{
    "observer_keys":{
        "peer_keys": ["EOS..."]
    },
    "observer_endpoints":{
        "observer_api": "http://lacchain.eosio.cr",
        "observer_ssl": "https://lacchain.eosio.cr",
        "observer_p2p": "lacchain.eosio.cr:9876"
    },
    "observer_location": {
        "name": "San Jose",
        "country": "CR",
        "latitude": 9.936377,
        "longitude": -84.078155
    },
    "observer_features": ["chain-api", "snapshot-api"]
}
```

#### Caracteristicas de Nodos Escritores / Observadores  
Para nodos de tipo validador y observador existen estos servicios opcionales.
  - `chain-api`: basic eosio::chain_api_plugin (/v1/chain/*)
  - `account-query`: (/v1/chain/get_accounts_by_authorizers)
  - `history-v1`: (/v1/history/*)
  - `hyperion-v2`: (/v2/*)
  - `dfuse`
  - `snapshot-api`

## Enlaces Utiles
Con el propósito de facilitar la actualización de datos de las entidades hemos desarrollado una herramienta para entidades permisionadas.  Para acceder a la interfaz de usuario para actualizar datos seleccione la opción "Update Node Info" en el [Monitor de red](https://lacchain.eosio.online).

Valide sus JSON aquí: https://www.jsonschemavalidator.net/

## Fases de Implementación 

### Fase I
#### Lista  de todos los nodos validadores registrados 
 - Nombre de la cuenta del nodo
 - Tipo de entidad de nodo
 - Clave pública de nodo
 - Código de ubicación (ISO 3166-1 numérico)

#### Información voluntaria proporcionada por cada entidad
 - Nombre legal
 - Número de identificación
 - Nombre de contacto técnico
 - Nombre de contacto negocios
 - Dirección
 - Sitio web
 - Correo Electrónico
 - Redes sociales
 - Marca / Logotipo
 - Código de Conducta
 
#### Nodos EOSIO
- Ubicaciones de nodos
- Puntos finales API y P2P
- Validadores
- Nodos de escritor
- Nodos History API
- Nodos API
- Nodos Boot
- Nodos Observadores
 
### Fase II
#### Rendimiento
 - Bloques perdidos en X período de tiempo *- Involuntario*
 - Rondas perdidas en X período de tiempo *- Involuntario*
 - Número total de bloques producidos *- Involuntario*
 - Posición media en la lista de BP *- Involuntario*
 - Calificación de rendimiento promedio *- Involuntario*
 - Tiempo de inactividad total
 - Interrupciones
 - Pruebas de estrés
 - Gestión de parches
 - Capacidad Recuperación de Desastres
 - Pruebas de intrusión

#### Infraestructura
- Física / Nube pública / Compartida
	- Sitio primario
	- Sitio secundario
- Diagrama Infraestructura
- Protección DDoS
- Firewalls
- Balanceadores de carga
- VPN 
- Planes futuros

### Fase III

#### Estructura de soporte
 - Número de empleados técnicos.
 - Soporte 24/7
 - Herramientas de monitoreo
 - Plan de comunicación con otros nodos Validadores

#### Estructura de propiedad
 - Descripción de la estructura comercial
 - Número de empleados
 - Titulares de intereses individuales
 - Accionistas de entidades comerciales
 - Entidades afiliadas