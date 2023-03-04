<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión de eventos

    .row.justify-content-center
      .col-9.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")
      .col-lg-8
        p El mundo de los eventos se encuentra internacionalmente caracterizado en el segmento llamado MICE, refiriéndose al turismo de reuniones, incentivos, congresos y exposiciones.
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Vocación turística")
            p Su actividad se ha convertido en un importante elemento dinamizador de todo tipo de enclaves con vocación turística, actuando con carácter desestacionalizador, aumentando la demanda de servicios de gama alta y también el gasto medio del visitante.
          
          .row(titulo="Escenario turístico")
            p En el escenario turístico cuando se hace referencia al turismo de negocios, se remite a todas las actividades de dirección, ordenamiento, promoción y venta de congregaciones y eventos.
          
          .row(titulo="Tipos de eventos")
            p Integra también este tipo de turismo entre otros a congresos, seminarios, conferencias, ferias, convenciones y reuniones de carácter gubernamental, empresarial o social.
          
    
      


    .row.justify-content-center.my-3
      .col-lg-10
        ul.lista-ul
          li
            i.fas.fa-square
            b Características de los eventos
          p.mt-4 En nuestro país, la industria de eventos viene presentando un crecimiento continuo en la última década: 


        .bloque-texto-b.color-secundario
          .bloque-texto-b__texto
            p.mb-0 “Según el último #[em #[b ranking]] de la Asociación Internacional de Congresos y Convenciones (ICCA), en 2017 Colombia ocupó el lugar 32 entre 168 naciones del mundo y el sexto en Latinoamérica en cantidad de reuniones organizadas, consolidándose como uno de los jugadores más atractivos del sector” - (El 16 Espectador [EE], 2018).
    .row.my-3
    b En la siguiente infografía se detallan las principales características que un evento normalmente debe considerar.       

    .row.justify-content-center.my-5
      figure
        img(src="@/assets/curso/temas/tema1/img2.svg", alt="alt")


    separador


    .titulo-tercero.my-5
      h2 Gestión administrativa


    .row.my-5
      p La administración es un área del saber y hacer en la gestión de eventos. Las acciones organizadas, ejecutadas y evaluadas del quehacer profesional necesitan de aplicación de herramientas de planificación y control sustentadas por el pensamiento sistémico y la concepción de gestión en la conducción, orientación, instrucción y asistencia de todos los actores que están involucrados.

    .tarjeta.tarjeta--azul2.bg5.p-5
      PasosB.color-acento-contenido
        .row(titulo="")
          .col-md-7.mb-4.mb-md-0
            h3.mt-5 Gestión administrativa  
            p La administración incluye el manejo financiero y los trámites para el manejo del talento humano, y lo relacionado con las especificaciones técnicas como el manejo de equipos operativos y de seguridad.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-7.mb-4.mb-md-0
            h3.mt-5 Gestor de eventos
            p El gestor de eventos adopta los principios de la administración: planificar, controlar, dirigir y organizar recursos, también requiere de una estructura, es decir, de la definición de funciones, responsabilidades, relaciones de coordinación y comunicaciones con el fin de lograr los objetivos del servicio.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-7.mb-4.mb-md-0
            h3.mt-5 Plan de acción 
            p Para establecer una estructura se requieren herramientas de organización administrativa, para que el gestor de eventos pueda trazar procesos dinámicos, coordinar e integrar un conjunto de personas en relación con unos recursos, y así conseguir el resultado u objeto planteado en el plan de acción.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')

    .row.my-5
      p.my-3 Al generar una estructura, todos los actores que intervienen en la realización de un evento deben comprender los objetivos, funciones y sus responsabilidades. Para generar la estructura se requiere la aplicación de los siguientes principios:
    .row.my-5     
      ImagenInfograficaB.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')

        div(x="22%" y="10%" numero="1")
          .row.justify-content-center
            .col-lg-6
              p.my-5 Llevar un proceso complejo a fragmentación en pequeñas tareas, logrando incrementar la productividad, eficiencia y la reducción de costos en recursos.

        div(x="22%" y="50%" numero="2")
          .row.justify-content-center
            .col-lg-6
              p.my-5 Integrar objetivos múltiples en uno solo claramente definido, de fácil comprensión para el equipo que interactúa en la realización de un evento.

        div(x="22%" y="90%" numero="3")
          .row.justify-content-center
            .col-lg-6
              p.my-5 Escala de niveles de autoridad que se produce para articular las funciones a partir de la división del trabajo.

        div(x="78%" y="30%" numero="4")
          .row.justify-content-center
            .col-lg-6
              p.my-5 La responsabilidad tiene que ir acompañada de una correspondiente delegación de autoridad para que pueda cumplir con los compromisos que se le exige.

        div(x="78%" y="71%" numero="5")
          .row.justify-content-center
            .col-lg-6
              p.my-5 Se trata de la confianza y entregar a otra persona del equipo una o más funciones bien definidas con el fin de liberarse de algunas cargas y poderse decidir a otras labores de más importancia.

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Para aplicar los principios de la organización se recomienda el uso de herramientas como diagrama de afinidad, el mapa de proceso, el flujograma, manuales de procedimiento y hoja de verificación. A continuación, se exponen sus características y formas de uso.

    .row.justify-content-center.my-3
      ul.lista-ul
        li
          i.fas.fa-square
          b Mapa de procesos                                                      

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img7.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Considerado como una herramienta gráfica que facilita la representación de procesos, enseñando de manera global entradas y salidas, interrelacionamiento entre los actores participantes y conllevando una secuencia en su desarrollo; para el caso de procesos en la planeación de eventos, hace visible la estructura de los procesos diseñados para el servicio, su funcionamiento y relación con los miembros del equipo. El propósito de un mapa de procesos es mejorar la eficiencia de las organizaciones y los negocios.


    .row.justify-content-center.my-5
      p En la gestión de eventos el mapa de procesos contribuye a:

    .row.justify-content-center.my-5
      .tarjeta.tarjeta--azul2.bg5.p-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-4
              h4 Gestión de eventos 
              p Representar los procesos y sus interrelaciones. Aquí identificamos los procesos de la empresa y su relacionamiento según orden de ejecución.
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-4
              h4 Cuellos de botella 
              p Identificación de cuellos de botella, repeticiones en los procesos y demoras.
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-4
              h4 Límites de procesos 
              p Definición de límites en cada proceso, definición de métricas.
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-4
              h4 Detalles visuales
              p Mejoramiento de la comunicación y comprensión de detalles al ser visual.
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-4
              h4 Inicio y fin de evento
              p Determinar en el proceso del servicio de eventos dónde empieza y dónde acaba y qué incluye el proceso.
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-4
              h4 Seguimiento eventos
              p Descubrir actividades que creíamos están cubiertas por un tercero y en realidad no tiene un responsable.
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-4
              h4 Mapa de procesos planeación de eventos
              p El mapa de procesos es un marco para la actuación del gestor de eventos; ayuda a no perder la perspectiva, y dar sentido a la forma en la que se presta el servicio, a situar adecuadamente cada elemento, a sacar conclusiones para la mejora continua.
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen')

          .row.justify-content-center
            .col-lg-4
              h4 Verificación de mapa de procesos 
              p Algunos elementos que debe tener en cuenta el gestor de eventos a la hora de construir un mapa de procesos son:
              ul.lista-ul.ps-4
                li
                  i.fas.fa-check
                  | Identificar las acciones de los actores involucrados.
                li
                  i.fas.fa-check
                  | Localizar las actividades en forma horizontal, en orden cronológico.
                li
                  i.fas.fa-check
                  | Dibujar un cuadro alrededor del mapa para mostrar sus límites.

            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema1/img15.png', alt='Texto que describa la imagen')

    .row.justify.content-center.my-5
      ul.lista-ul
        li
          i.fas.fa-square
          b Diagramas de flujo

    .row.justify.content-center.my-5
      .col-lg-7
        p La acción de planear eventos conlleva entre otros a la sincronización de recursos, tiempos y movimientos; un evento dependiendo de su magnitud requerirá de la gestión de estos recursos en mayor o menor medida. 
        p El diagrama de flujos es una herramienta necesaria que permite visualizar las relaciones y su variación para una serie de acciones que tienen un objetivo común, en la planeación de eventos permite identificar los procesos y actividades requeridas para desarrollar un evento, igualmente facilita la toma de decisiones sobre aspectos logísticos, presupuestales y de otros recursos que se visualizan en la medida que el diagrama muestra la ruta a seguir. 
      
      .col-lg-5.mb-2
        figure
          img(src='@/assets/curso/temas/tema1/img16.svg', alt='Texto que describa la imagen')
      

    .row.justify.content-center.mt-5
      ul.lista-ul
        li
          i.fas.fa-square
          b Manuales de procedimiento

    .row.justify-content-center.mt-2
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Son documentos que contienen información detallada, ordenada, sistemática e integral sobre las actividades y responsabilidades que se realizan en un área específica de la organización, teniendo como objetivo el proveer los lineamientos, reglas o normas de cómo utilizar algo de una forma sistemática, explícita y ordenada. 
          p Para ampliar la información lo invitamos a ver el documento <b>Anexo 1. Ejemplo de procedimiento</b>.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-1_ejemplo_procedimiento.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  b Anexo 1.
                  p Ejemplo de procedimiento

    .row.justify.content-center.my-5
      ul.lista-ul
        li
          i.fas.fa-square
          b Mapa de empatía
      p A continuación, lo invitamos a ver el video donde se explica qué es un mapa de empatía y sus características.

    .row.my-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
     
    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          .row.justify-content-center
            .col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/img17.png', alt='Texto que describa la imagen').img17-tm1
            .col-lg-10            
              b.my-4 Hoja de verificación o listas de chequeo
              p.my-4 Esta es una herramienta útil para la evaluación del desempeño de cada actor con responsabilidades en la realización de procedimientos en eventos. Se caracteriza por ser una lista de oraciones, frases o párrafos que describen aspectos específicos de la conducta a controlar durante la observación del evento. Las listas de chequeo brindan información descriptiva de lo que el lector debe realizar en determinada situación, es decir el análisis paso a paso de la tarea y del procedimiento a evaluar. 

    .row.justify.content-center.my-5
      ul.lista-ul
        li
          i.fas.fa-square
          b Herramientas ofimáticas
      p A continuación, se presentan algunas herramientas ofimáticas necesarias para la gestión de eventos. 
      p En la gestión de eventos, las herramientas ofimáticas, hacen referencia a las técnicas, aplicaciones y programas informáticos que se utilizan en funciones administrativas para optimizar, automatizar y mejorar los procedimientos, tales como:

    .row.justify.content-center.my-5
      .tarjeta.tarjeta--gris.p-4
        LineaTiempoC.color-acento-botones(text-small)
          .row(titulo="Interacción con <br>usuarios")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img18.png', alt='Texto que describa la imagen')

            .col-lg-8.my-5
              ul.lista-ul.ps-4
                li
                  i.fas.fa-check
                  | Interacción con usuarios de un evento, para conocer al detalle sus necesidades, asimismo con otros prestadores de servicios.
                li
                  i.fas.fa-check
                  | Mostrar gráficamente los productos y servicios disponibles.
                li
                  i.fas.fa-check
                  | Presentar una propuesta de servicios para el evento en formato adecuado.
                li
                  i.fas.fa-check
                  | Organización eficazmente de la información de los usuarios.

          .row(titulo="TIC en <br>eventos")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img19.png', alt='Texto que describa la imagen')

            .col-lg-8.my-4
              p El gestor de eventos está llamado a realizar actualización constante de sus conocimientos sobre estas herramientas, en este componente se mencionan algunas, pero en temas tecnológicos siempre hay disponibles soluciones adaptables a las necesidades particulares.

          .row(titulo="Procesador <br> de texto")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img20.png', alt='Texto que describa la imagen')

            .col-lg-8.my-5
              p Asiste en el proceso de la escritura, como la presentación de una propuesta de servicio, permitiendo que el escritor no se preocupe por la estética del texto, porque la caja de herramientas que ofrece facilita la rápida edición de este. Algunos ejemplos son Word, Docs, entre otros.

          .row(titulo="Hoja de <br>cálculo")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img21.png', alt='Texto que describa la imagen')

            .col-lg-8.my-5
              p Facilitan las tareas relacionadas con cálculos numéricos repetitivos y mostrar resultado gráficamente. Ejemplo: Excel, hoja de cálculo de Google.

          .row(titulo="Correo electrónico <br>o <i>email</i>")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img22.png', alt='Texto que describa la imagen')

            .col-lg-8.my-5
              p Es la principal herramienta para interactuar con usuarios, prestadores de servicios y clientes potenciales. Varios proveedores ofrecen gratuitamente el envío y recepción de mensajes junto con espacio para el almacenamiento de estos. Ejemplo: Gmail, Hotmail.

          .row(titulo="Almacenamiento <br>en la nube")
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img23.png', alt='Texto que describa la imagen')

            .col-lg-8.my-5
              p Permite al gestor de eventos almacenar y consultar textos, hojas de cálculo, imágenes, videos y similares desde un dispositivo con conexión a internet. Asimismo, los usuarios del servicio pueden acceder al mismo tipo de información. Ejemplo de estos servicios son Drive, Dropbox. OneDrive y Amazon Drive.

    separador


    .titulo-tercero.my-5
      h2 Gestión comercial
    
    .row.justify.content-center.my-5
      p Todas las acciones diseñadas por parte de una empresa cuyo objetivo es dar a conocer la propuesta comercial, se engloban en la gestión comercial de eventos; la satisfacción del cliente y la participación en el mercado son los desafíos para cualquier empresa, conllevando entonces el tener una estrategia clara, implementar un sistema de calidad y el coordinar las actividades comerciales con las diferentes áreas de la organización.


    .row.justify.content-center.my-5
      TabsA.color-acento-contenido
        .tarjeta.tarjeta--rosa.p-5(titulo="Gestión comercial de eventos")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img24.png', alt='Texto que describa la imagen')
            
            .col-lg-10

              p La gestión comercial interviene en todas las áreas de una empresa, ya que determina volúmenes de producción para cubrir determinada demanda de servicios, comunica los requerimientos del cliente, determina los precios y formas de pago, etc. Una buena gestión comercial trae consigo beneficios para la empresa organizadora de eventos tales como:
              ul.lista-ul
                li
                  i.fas.fa-check
                  | Propicia el cumplimiento de los objetivos económicos de la empresa.
                li
                  i.fas.fa-check
                  | Facilita la estructuración acertada de los procesos de producción de un evento.
                li
                  i.fas.fa-check
                  | Incrementa la buena reputación de la empresa en el mercado.
                li
                  i.fas.fa-check
                  | Favorece el crecimiento de los indicadores de satisfacción del cliente.
                li
                  i.fas.fa-check
                  | Fideliza al cliente.
                li
                  i.fas.fa-check
                  | Empresa más competitiva y mejor posicionada.
                li
                  i.fas.fa-check
                  | Maximiza la rentabilidad.

        .tarjeta.tarjeta--rosa.p-5(titulo="Análisis situacional")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img25.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p La gestión comercial lleva consigo, para ser realizada de manera eficaz y eficiente, la construcción de un plan comercial que contemple los siguientes conceptos:
              ul.lista-ul
                li
                  i.fas.fa-check
                  | Análisis situacional.
                li
                  i.fas.fa-check
                  | Realizar un análisis de mercado.
              p CConocer el entorno, la situación actual del mercado en el que actúa la empresa y su posición con respecto a la competencia, implica el conocimiento del público objetivo y toda la información clave para delimitar el segmento a analizar.

        .tarjeta.tarjeta--rosa.p-5(titulo="Fijar objetivos")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img26.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p Todo plan debe partir de unos objetivos claros, alcanzables, medibles y enmarcados en un periodo determinado. Esta etapa responde a la pregunta ¿qué se pretende lograr en la gestión comercial?

        .tarjeta.tarjeta--rosa.p-5(titulo="Producto turístico")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img27.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p El gestor comercial debe conocer el producto, desde sus propiedades, características físicas y funcionalidades básicas, hasta saber la necesidad que cubre y aquello que motiva al cliente a adquirirlo.

        .tarjeta.tarjeta--rosa.p-5(titulo="Estructurar un plan de <b><i>marketing</i></b>")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img28.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p Plasmar de manera estructurada, las estrategias que se implementarán a través de los diferentes elementos del #[i marketing.]

        .tarjeta.tarjeta--rosa.p-5(titulo="Finanzas y proyecciones")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img29.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p Reúne la información de carácter financiero, que impacta la gestión comercial de eventos, como por ejemplo los indicadores económicos, la elasticidad de la demanda, las políticas de fijación de precios y de recaudo, el costo de adquisición de clientes y las proyecciones de venta.

        .tarjeta.tarjeta--rosa.p-5(titulo="Seguimiento y control")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img30.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p Hacer monitoreo de las acciones con respecto al logro de los objetivos, determinar la efectividad y tomar decisiones que permitan alcanzar la competitividad de la empresa.

        .tarjeta.tarjeta--rosa.p-5(titulo="El mercadeo o <b><i>marketing</i></b> digital")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img31.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p La evolución del mercado tiene como base la preponderancia digital; se debe implementar estrategias que lleven a una marca o negocio a visibilizarse en el mercado, y por supuesto los eventos. El mercadeo o #[strong #[i marketing]] digital comprende todas las estrategias de promoción de una marca o negocio focalizadas en el internet, por tanto, durante el desarrollo de este componente formativo haremos un recorrido por los elementos, términos y expresiones propios de la cultura digital, que se hace indispensable para estructurar el plan comercial de eventos.

        .tarjeta.tarjeta--rosa.p-5(titulo="Mercadeo digital")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img32.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p El mercadeo digital son todos los esfuerzos que realiza una empresa o un profesional en plataformas #[strong #[i on-line]], con el fin de capturar la atención de las personas y  convertirlos en clientes potenciales, así, nace la necesidad de estructurar un plan de mercadeo digital, debe estar acorde con las tendencias del mercado y la visión estratégica del negocio, así como alineado a los patrones de conducta de los consumidores, con estos tres aspectos, permitirá tener una ventaja competitiva y comparativa  frente al mercado. 

        .tarjeta.tarjeta--rosa.p-5(titulo="Empresa y consumidor")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img33.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p El #[i marketing] digital, está orientado a establecer una relación directa entre la empresa y el consumidor mediante el uso de diferentes canales de comunicación, para lograr este objetivo, esta disciplina se apoya en diferentes técnicas para que el usuario de internet tenga la información justa y necesaria de nuestra empresa.

    .row.justify.content-center.my-5
      ul.lista-ul
        li
          i.fas.fa-square
          b Análisis situacional y de mercado
    
      p El análisis situacional, corresponde a un estudio que se lleva a cabo con la finalidad de tener un claro conocimiento del estado actual de una empresa, en un momento particular o determinado.
      p Es necesario analizar tanto el entorno interno como el externo de la organización. Por lo tanto, se puede considerar por lógica, que el punto de partida a nivel del mercadeo, y en específico de un plan de mercadeo, corresponde de manera prioritaria entender el dónde se encuentra la empresa y prever cuáles son los posibles escenarios a los que se puede llegar. 

    .row.justify.content-center.my-5
      TabsB.color-acento-contenido
        .py-4.py-md-5(titulo="Análisis escenarios " :icono="require('@/assets/curso/temas/tema1/img34.png')")
          .row
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img35.png', alt='Texto que describa la imagen')
            
            .col-lg-7
              p Para llevar a cabo el análisis de los posibles escenarios proyectados, pueden existir varias alternativas, pero todas ellas empiezan con un diagnóstico situacional que permita la realización de una predicción que muestre la viabilidad y el progreso esperado, tanto a nivel propio, como de los principales competidores, especificando las conclusiones a las que se ha llegado.

        .py-4.py-md-5(titulo="Establecimiento de objetivos" :icono="require('@/assets/curso/temas/tema1/img36.png')")
          .row
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img37.png', alt='Texto que describa la imagen')
            
            .col-lg-7

              p Siempre debemos tener presente, que los objetivos son referencias parciales que se deben alcanzar para lograr una meta mayor que está asociada al crecimiento sostenible del negocio.

        .py-4.py-md-5(titulo="Cumplimiento de objetivos" :icono="require('@/assets/curso/temas/tema1/img38.png')")
          .row
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img39.png', alt='Texto que describa la imagen')
            
            .col-lg-7
              p Aunque la definición de los objetos en una organización se reviste de gran importancia, es solo el inicio, ya que el cumplimiento de las metas propuestas es lo que le da sentido real a la empresa llevando a materializar todo lo que se planea y proyecta.

        .py-4.py-md-5(titulo="Metas" :icono="require('@/assets/curso/temas/tema1/img40.png')")
          .row
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img41.png', alt='Texto que describa la imagen')
            
            .col-lg-7
              p Los objetivos corresponden de manera gráfica a una cadena de medios y fines, es decir, la meta que nos hemos trazado, que es posible de alcanzar, medir y cuantificar se le denomina objetivo. 
              p Cada vez que damos cumplimiento a esa meta, automáticamente esta se convierte en un fin para dar cumplimiento a un siguiente objetivo de orden superior.  Es así como se entrelazan cada uno de estos objetivos, tornándose a la vez en estrategias que posibilitan el logro de los siguientes. 

        .py-4.py-md-5(titulo="Resolución de problemas" :icono="require('@/assets/curso/temas/tema1/img42.png')")
          .row
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img43.png', alt='Texto que describa la imagen')
            
            .col-lg-7
              p Esta cadena de medios y fines es uno de los métodos utilizados para definir objetivos, a la vez que nos permite descomponer un objetivo mayor, en varios pequeños, es decir, en pasos más cortos, que al unirlos entre sí nos permiten alcanzar el gran objetivo propuesto inicialmente. Sin embargo, también hay métodos relacionados con la resolución de problemas, que puede ser apreciado cuando miramos la cadena, el segmento o superficie que sea de nuestro interés, analizando de forma particular y comprobando los resultados que haya generado cada uno de sus componentes.

        .py-4.py-md-5(titulo="Características de los objetivos " :icono="require('@/assets/curso/temas/tema1/img44.png')")
          .row
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img45.png', alt='Texto que describa la imagen')
            
            .col-lg-7
              p Cada objetivo que planteemos debe cumplir con todas las características mencionadas.
              ul.lista-ul
                li
                  i.fas.fa-check
                  | Ser específico.
                li
                  i.fas.fa-check
                  | Ser medible.
                li
                  i.fas.fa-check
                  | Ser alcanzable.
                li
                  i.fas.fa-check
                  | Ser relevante.
                li
                  i.fas.fa-check
                  | Tener un marco de tiempo definido.

        .py-4.py-md-5(titulo="Objetivos SMART" :icono="require('@/assets/curso/temas/tema1/img46.png')")
          .row
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/img47.png', alt='Texto que describa la imagen')
            
            .col-lg-7
              h4 Establecer objetivos #[strong SMART] 
              p Para lograr el cometido de establecer objetivos claros, pero sobre todo realistas y cumplibles, nos apoyaremos en la técnica #[i #[b SMART]] (Jiménez Vida, 2021), que proviene de un acrónimo en inglés que significa:
              ul.lista-ul
                li
                  i.fas.fa-check
                  | S: #[strong #[i specific]] : específico.
                li
                  i.fas.fa-check
                  | M: #[strong #[i measurable]] : medible.
                li
                  i.fas.fa-check
                  | A: #[strong #[i attainable]] : alcanzable.
                li
                  i.fas.fa-check
                  | R: #[strong #[i relevant]] : relevante.
                li
                  i.fas.fa-check
                  | T: #[strong #[i time based]] : limitado en el tiempo.

    .row.justify.content-center.my-5
      .col-lg-6
        ul.lista-ul
          li
            i.fas.fa-square
            b Estrategias competitivas

        p Según el diccionario de la Real Academia de la lengua española, una estrategia es:

        ul.lista-ul
          li
            i.fas.fa-check
            | Arte de dirigir las operaciones militares. 
          li
            i.fas.fa-check
            | Arte, traza para dirigir un asunto.
          li
            i.fas.fa-check
            | En un conjunto de reglas que buscan una decisión óptima en cada momento.

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img48.png', alt='Texto que describa la imagen')

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Para ampliar la información lo invitamos a ver el documento #[b Anexo 2. Estrategias competitivas], en el cual se detallan los aspectos y características a considerar en la generación de este tipo de estrategias.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-2_estrategias_competitivas.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  b Anexo 2.
                  p Estrategias competitivas

    .row.justify-content-center.my-5
      .col-lg-10
        p A principios de los años 80’s los autores Bernard Booms y Mary Bitner extendieron el <em>marketing mix</em> del modelo conocido tradicional de las 4P’s (planteado por McCarthy), a un modelo de 7P’s. 
        p Ellos incorporaron tres nuevos elementos como son: personas (#[strong #[i people]]), procesos (#[strong #[i process]]) y evidencia física (#[strong #[i physical evidence]]). Según explican los autores, esta extensión del modelo se enfocó en la humanización del servicio al tratar temas como las políticas de atención al cliente y una mayor interacción e información con el cliente. 

    .row.justify-content-center.my-5
      .col-lg-10
        .row
          .col-lg-10
            .cajon.tarjeta--rosa1.p-4
              .row
                .col-5.col-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img49.png', alt='Texto que describa la imagen') 
                .col-lg-8
                  h4 Personas (P5)
                  p Como parte del concepto de humanización del servicio, el recurso humano es un elemento fundamental, en el trato con el consumidor y como resultado de este en la gestión de ventas del producto o servicio. En la industria turística, un servicio enfocado a personas es aún más relevante, cuesta trabajo imaginar una empresa turística que realiza eventos sin personal que garantice que el servicio se preste como está planeado. En todas las industrias, y en especial en la que nos atañe, la asistencia al cliente, el servicio posventa, la interacción con telemercadeo y por las redes sociales, son ejemplos donde el cliente entra en contacto con una persona. Es por ende, la formación de estos en el manejo y afinidad con el cliente lo que marca la diferencia en el servicio al cliente y su posicionamiento.          

            .cajon.tarjeta--rosa2.p-4
              .row
                .col-5.col-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img50.png', alt='Texto que describa la imagen') 
                .col-lg-8
                  h4 Procesos (P6)
                  p Centrado en la forma de prestación del servicio, entonces es posible afirmar que una definición de los procesos, coherente con la calidad que se desea brindar, es el primer paso para asegurar un trato amable, rápido e igualitario para todos. Está probado que los procesos bien estructurados aumentan las tasas de captación y retención de clientes, así que trabajar en su definición, no solo ayuda al posicionamiento, sino que además optimiza costos y maximiza la capacidad de respuesta.

            .cajon.tarjeta--rosa1.p-4
              .row
                .col-5.col-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img51.png', alt='Texto que describa la imagen') 
                .col-lg-8
                  h5 Evidencia física (P7)
                  p Todos los elementos del entorno de una organización deben proporcionar un ambiente acogedor al cliente. Para la industria de los eventos se ponen de manifiesto tópicos como equipos, instalaciones, uniformes, identidad visual. Inclusive podemos mencionar nuevas tendencias como el #[i marketing] olfativo o sensorial, cuyo objeto es crear o reforzar una experiencia positiva de cara al cliente, a través de los sentidos. Si lo contextualizamos, podremos ver que esta idea en particular toca con bastante intensidad al sector de eventos.

          .col-2
            figure
              img(src='@/assets/curso/temas/tema1/img52.png', alt='Texto que describa la imagen').img52-t1

    separador


    .titulo-tercero.my-5
      h2 Comunicación comercial

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img53.png')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p La comunicación comercial en las organizaciones permite transmitir los beneficios de los servicios y productos de la compañía de una manera eficiente y que posibilita que los clientes potenciales se vean reflejados e identifiquen que la empresa puede cubrir sus necesidades y cumplir con sus expectativas. Entonces se hace necesario conocer lo que el cliente objetivo demanda para diseñar la estrategia de comunicación que dé respuesta a esas necesidades.
            br
            br
            p El principal objetivo de la comunicación comercial es generar un acercamiento del cliente final a la empresa y así incidir en sus decisiones de compra.

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Para ampliar la información lo invitamos a revisar el <b>Anexo 3. Comunicación comercial</b>, donde se detallan los objetivos y pasos para realizar un plan de comunicación comercial para eventos.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexo-3_comunicacion_comercial.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  b Anexo 3.
                  p Comunicación comercial



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
