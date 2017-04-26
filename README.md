

# Práctica 8: Creación de Paquetes NPM y Strategy Pattern

## Descripción

Uno de los objetivos de esta práctica es aprender a crear packages NodeJS y publicarlos en [npm](https://www.npmjs.com/). El paquete se construye a partir de el código que se desarrolló en la [práctica evaluar strategy pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaevaluastrategypattern.html).

* Se trata de construir un primer módulo npm *ull-shape* con el código de la clase *Shape*.
* Se construirá un módulo npm *ull-shape-triangle* que contenga la clases *Triangle*.
* En general, para cada tipo particular de forma geométrica *x* se construirá un módulo npm *ull-shape-x* que contenga la clase *X*.
* La implantación del módulo principal *ull-shape* se hace primero y de forma colaborativa.
    * Cada miembro del equipo implantará el solo al menos uno de los plugin *ull-shape-x*: si hay tres miembros cada uno implantará al menos una forma distinta, etc.
    * La implantación de los plugin *ull-shape-x* no debería conllevar ,a modificación del código del módulo principal *ull-shape* (principio Open/Close).
* Como deberán publicar en el site de [npm](https://www.npmjs.com/) los módulos creen una organización *ull-team-name* pública y pongan sus módulos en ese ámbito.
    * Añadan a todos los miembros del equipo a la organización.
* Escriba documentación para cada uno de los módulos (Véase [documentation.js](http://documentation.js.org/), [jsdoc](https://www.npmjs.com/package/jsdoc), [docco](http://jashkenas.github.io/docco/)).
* Añada pruebas para cada uno de los módulos.
* Integre usando Travis.
* En esta tarea deberá trabajar con varios repos, uno para el módulo principal *ull-shape* y uno para cada shape específica: cree los diferentes repos dentro de la organización *ULL-ESIT-DSI-1617* siguiendo el patrón *creacion-de-paquetes-npm-team* para el módulo principal y *creacion-de-paquetes-npm-team-triangle* para el del triángulo, etc.



## Recursos

* Véase la sección [Creación de Paquetes y Módulos en NodeJS](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/nodejspackages.md)
* Documentación: [documentation.js](http://documentation.js.org/), [jsdoc](https://www.npmjs.com/package/jsdoc), [docco](http://jashkenas.github.io/docco/))
* Véase la sección [Gulp](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/gulp/)
* [Apuntes: Code Smells](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/codesmell.html)
* [Principios de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/designprinciples.html)
* [Patrones de Diseño](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/)
* [ECMAScript 6 Power Tutorial: Class and Inheritance](https://code.tutsplus.com/tutorials/ecmascript-6-power-tutorial-class-and-inheritance--cms-24117)
* [Object-Oriented JavaScript — A Deep Dive into ES6 Classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)
* [Strategy Pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/patterns/strategypattern.html)
* [Apuntes: Pruebas. Mocha](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html)
* [Apuntes: Pruebas. Should](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/mocha.html#shouldl)
* [Apuntes: Integración Contínua. Travis](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/pruebas/travis.html)

## Documentación

* [Documentación](https://ull-esit-dsi-1617.github.io/creacion-de-paquetes-npm-edna-joseluis-kevin-35l2v3/)

## Módulos complementarios

* [Triangle]()
* [Square](https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-edna-joseluis-kevin-35l2v3-square)
* [Rectangle]()

## Badge Travis

[![BuildStatus](https://travis-ci.org/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-edna-joseluis-kevin-35l2v3.svg?branch=master)](https://travis-ci.org/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-edna-joseluis-kevin-35l2v3)

## Asignatura DSI ULL

[Desarrollo de Sistemas Informáticos](https://campusvirtual.ull.es/1617/course/view.php?id=1136)

## Enlace descripción Práctica

[Práctica 8](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicamodulestrategypattern.html)

## Autores

José Luis Doblado González  
* [Github](https://github.com/alu0100767001)
* [Pagina personal](https://alu0100767001.github.io/dsi-joseluis/)


Edna Liliana Galiano Camacho  
* [Github](https://github.com/ednagc)
* [Pagina personal](https://ednagc.github.io/edna-galiano/)

Kevin Estévez Expósito  
* [Github](https://github.com/alu0100821390)
* [Pagina personal](http://alu0100821390.github.io)
