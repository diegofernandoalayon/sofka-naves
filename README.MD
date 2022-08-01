## <a href='https://fast-tor-49458.herokuapp.com/' target='_blank'>Naves sofka</a>
***

1. [Descripcion](#descripcion)
2. [Tecnologias](#tecnologias)
3. [Instalacion](#instalacion)
4. [Esquema de datos](#esquema-de-datos)

***

## Descripcion
Naves Sofka, es un proyecto que tiene como objetivo almacenar naves espaciales estas se pueden caracterizar dentro de tres tipos como lo son: naves de tipo lanzadera, naves de tipo tripulada, naves de tipo no tripulada, todos estos tipos de nave tiene caracteristicas generales y particulares.
## Tecnologias
1. [React.js](https://es.reactjs.org): v18.0
2. [Node.js](https://nodejs.org/es/): v4.3
4. [Express.js](https://expressjs.com/es/): v4.18
3. [mongoose](https://mongoosejs.com/): v6.5
## Instalacion
Para instalar el proyecto de forma local se deben seguir los siguintes pasos:
```
$ git clone https://github.com/diegofernandoalayon/sofka-naves.git
$ cd sofka-naves
$ npm install
$ npm run dev:full
```
##### variables de entorno:

``
MONGO_DB_URI
``
Se debe crear un archivo `.env` dentro de la ruta `.../sofka-naves$ cd ./api`
alli se debe almacenar la variable de entorno indicada dandole como valor un cluster de mongoDB

luego de configurar la variable de entorno de la base de datos se puede iniciar el proyecto, para esto se regresa a la ruta raiz `.../sofka-naves/api$ cd ..`
posteriormene se puede ejecutar el comando:
``` 
$npm run dev:full
```
Interfaz usuario local: `http://localhost:3002/`

## Esquema de datos
Nuestro proyecto esta conformado por una API que recibe los siguientes esquemas de datos al momento de crear una nave:
## Crear naves
local: `http://localhost:3002//api/naves`

prod: `https://fast-tor-49458.herokuapp.com/api/naves`

#### Crear nave tipo lanzadera
| key         | value       | description | 
| ----------- | ----------- | ----------- |
| nombre      | string      | nombre de la nava |
| peso  | number | peso de la nave en toneladas|
| empuje | number | empuje de la nave en KN|
| tipo | string | tipo de la nave unicamente => (lanzadera, tripulada, noTripulada) |
| combustible | string | tipo de combustible que usa la nave |
| velocidadMax | number | velocidad maxima que puede alcanzar la nave km/h |
| procedencia | string | pais o paises de origen de la nave |
| capCarga | number | capacidad de carga util de la nave toneladas |
| cantPropulsores | number | cantidad de propulsores con los que cuenta la nave |
#### Crear nave tipo tripulada
| key         | value       | description | 
| ----------- | ----------- | ----------- |
| nombre      | string      | nombre de la nava |
| peso  | number | peso de la nave en toneladas|
| empuje | number | empuje de la nave en KN|
| tipo | string | tipo de la nave unicamente => (lanzadera, tripulada, noTripulada) |
| combustible | string | tipo de combustible que usa la nave |
| velocidadMax | number | velocidad maxima que puede alcanzar la nave km/h |
| procedencia | string | pais o paises de origen de la nave |
| capPasajeros | number | capacidad de tripulantes que puede transportar la nave |

#### crear nave tipo no tripulada
| key         | value       | description | 
| ----------- | ----------- | ----------- |
| nombre      | string      | nombre de la nava |
| peso  | number | peso de la nave en toneladas|
| empuje | number | empuje de la nave en KN|
| tipo | string | tipo de la nave unicamente => (lanzadera, tripulada, noTripulada) |
| combustible | string | tipo de combustible que usa la nave |
| velocidadMax | number | velocidad maxima que puede alcanzar la nave km/h |
| procedencia | string | pais o paises de origen de la nave |
| altitud | number | altitud a la que se encuentra la nave km|
| puedeAterrizar | boolean | la nave tiene la capacidad de aterrizar (true, false) |

## pedir naves
local: `http://localhost:3002//api/naves`

prod: `https://fast-tor-49458.herokuapp.com/api/naves`

Al momento de pedir naves se devuelve el esquema de cada nave adicionando lo siguiente

| key         | value       | description | 
| ----------- | ----------- | ----------- |
| _id      | string      | id de la DB |
| __v | string | dato generado por la DB |

