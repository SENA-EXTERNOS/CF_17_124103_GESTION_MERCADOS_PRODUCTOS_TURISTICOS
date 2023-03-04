export default {
  global: {
    componenteFormativo: 'Planeación de eventos',
    descripcionCurso:
      'Realizar un viaje a cualquier destino conlleva diversidad de motivaciones, necesidades, intereses y deseos; uno de ellos son los eventos. Quienes se desplazan por este interés, pagan por la temática y el contenido y están dispuestos a contratar experiencias adicionales para hacer uso en su tiempo libre como visitas a atractivos turísticos, compras locales, alquiler de vehículos, alimentación y alojamiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-princiapal.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de eventos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Eventos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.4 Normatividad',
      referencia:
        'Ley 1480 de 2011. <i>Por medio de la cual se expide el Estatuto del Consumidor y se dictan otras disposiciones.</i> Octubre 12 de 2011. DO N° 48220.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306',
    },
    {
      tema: '2.4 Normatividad',
      referencia: 'Enlace web “ley 527 de 1999”',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      tema: '2.4 Normatividad',
      referencia:
        'Superintendencia de Industria y Comercio. <i>Guía sobre el tratamiento de datos personales para fines de comercio electrónico.</i> 2019.',
      tipo: 'Guía',
      link:
        'https://www.sic.gov.co/sites/default/files/files/pdf/Guia%20SIC%20Tratamiento%20Datos%20Personales%20ComercioElectronico(1).pdf',
    },
    {
      tema: '2.3 Planeación de eventos',
      referencia:
        'López Gómez, MP (sf). <i>Organización de actos: definir recursos y asignar responsabilidades.</i> Protocolo.org.',
      tipo: '<b>Página web<b>',
      link:
        'https://www.protocolo.org/ceremonial/eventos/recursos-para-la-organizacion-de-actos.html ',
    },
  ],
  glosario: [
    {
      termino: 'Maestro de ceremonia',
      significado:
        'persona que efectúa las presentaciones, da la bienvenida y despide las sesiones plenarias en un evento.',
    },
    {
      termino: 'Recinto ferial',
      significado:
        'edificio especializado en la celebración de ferias y exposiciones con facilidades adicionales para celebrar reuniones de negocios relativas al evento ferial o a la exposición.',
    },
    {
      termino: 'Segmentar',
      significado: 'separar o dividir una cosa en segmentos.',
    },
    {
      termino: '<i>Stand<i>',
      significado:
        'espacio de exhibición en una feria o exposición que consta de una superficie determinada de piso de exposición y mamparas que lo separan de otros <em>stand</em> además de un rótulo de identificación.',
    },
    {
      termino: 'Mapa de procesos',
      significado:
        'considerado como una herramienta gráfica que facilita la representación de procesos, enseñando de manera global entradas y salidas, interrelacionamiento entre los actores participantes y conllevando una secuencia en su desarrollo; para el caso de procesos en la planeación de eventos, hace visible la estructura de los procesos diseñados para el servicio, su  funcionamiento y relación con los miembros del equipo . El propósito de un mapa de procesos es mejorar la eficiencia de las organizaciones y los negocios.',
    },
    {
      termino: 'Diagramas de flujo',
      significado:
        'el diagrama de flujo es una herramienta necesaria que permite visualizar las relaciones y su variación para una serie de acciones que tienen un objetivo común.',
    },
    {
      termino: 'Manuales de procedimiento',
      significado:
        'son documentos que contienen información detallada, ordenada, sistemática e integral sobre las actividades y responsabilidades que se realizan en un área específica de la organización, teniendo como objetivo el proveer los lineamientos, reglas o normas de cómo utilizar algo de una forma explícita y ordenada.',
    },
    {
      termino: 'Mapa de empatía',
      significado:
        'para entender los deseos y necesidades del cliente a la hora de realizar un evento, se requiere recopilar información sobre él; pero no la información típica de edad, sexo, estudios, etc. Se debe ampliar la información demográfica con un conocimiento profundo del entorno que permita saber el comportamiento, las inquietudes y aspiraciones de los clientes, de tal forma que este perfil logrado oriente el diseño de propuestas de valor, canales de contacto y conexión con los clientes adecuados.',
    },
    {
      termino: 'Hoja de verificación',
      significado:
        'esta es una herramienta útil para la evaluación del desempeño de cada actor con responsabilidades en la realización de procedimientos en eventos. Se caracteriza por ser una lista de oraciones, frases o párrafos que describen aspectos específicos de la conducta a controlar durante la observación del evento.',
    },
    {
      termino: 'Análisis situacional y de mercado',
      significado:
        'el análisis situacional, corresponde a un estudio que se lleva a cabo con la finalidad de tener un claro conocimiento del estado actual de una empresa, en un momento particular o determinado. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta, R. (2009). <i>Flujograma</i>. El Cid Editor | apuntes.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/28942 ',
    },
    {
      referencia:
        'Business Review, H. & Merino Gómez, B. (Trad.). (2018). <i>Empatía.</i> Editorial Reverté.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/128587 ',
    },
    {
      referencia:
        'Bantu Group. (2020, June 25). <i>Las 5 ventajas del análisis de datos para mejorar la experiencia del cliente.</i> Bantu Group. Retrieved September 7, 2022, obtenido de ',
      link:
        'https://www.bantugroup.com/blog/ventajas-del-analisis-de-datos-para-mejorar-la-experiencia-del-cliente',
    },
    {
      referencia:
        'Comunicare. (2022, August 26). <i>Plan de comunicación comercial: lo que necesitas saber - Comunicare.</i> COMUNICARE, Márketing Online. Retrieved September 7, 2022, obtenido de ',
      link: 'https://www.comunicare.es/plan-de-comunicacion-comercial/',
    },
    {
      referencia:
        'El Espectador. (30 de octubre de 2018). <i>El Espectador.</i> (Redacción Comercial) Recuperado el 10 de abril de 2019, de El Espectador:',
      link:
        'https://www.elespectador.com/actualidad/los-eventos-empresariales-una-industria-en-crecimiento-article-820835/#:~:text=Los%20eventos%20empresariales%20una%20industria%20en%20crecimiento',
    },
    {
      referencia:
        'Colaborador Blog Fosbury. (2021, septiembre 22). <i>El marketing de eventos o cómo crear experiencias memorables. Blog Fosbury.</i> ',
      link:
        'https://eventosempresa.fosburycafe.es/ideasyconsejos/el-marketing-de-eventos-o-como-crear-experiencias-memorables/',
    },
    {
      referencia:
        'Hazelton, J. (2020, abril 28). <i>Marketing experiencial – 4 ejemplos de marcas que acertaron.</i> Eventtia. ',
      link:
        'https://www.eventtia.com/es/blog/marketing-experiencial-4-ejemplos-de-marcas-que-acertaron ',
    },
    {
      referencia:
        'Moreira Quesada, E. D. (2015). <i>UNIVERSIDAD TÉCNICA DE MACHALA UNIDAD ACADÉMICA DE CIENCIAS EMPRESARIALES CARRERA DE ADMINISTRACIÓN DE HOTELERÍA Y TURISMO T.</i> Repositorio Digital de la UTMACH. Retrieved September 7, 2022, obtenido de ',
      link:
        'http://repositorio.utmachala.edu.ec/bitstream/48000/5467/1/ECUACE-2015-HT-CD00032.pdf ',
    },
    {
      referencia:
        'Rankmi. (2019, February 20). <i>Estrategias prácticas para vencer a tus competidores en 2019.</i> Rankmi. Retrieved September 7, 2022, from',
      link:
        'https://www.rankmi.com/blog/estrategias-practicas-para-vencer-a-tus-competidores-en-2019 ',
    },
    {
      referencia:
        'Reier, R. (2020, July 29). <i>Ricardo Reier: <i>“La transformación digital no es una opción, es una necesidad” - Ucavila.</i> UCAV. Retrieved September 7, 2022, obtenido de',
      link:
        'https://www.ucavila.es/noticias/noticias/ricardo-reier-la-transformacion-digital-no-es-ya-una-opcion-es-una-necesidad/ ',
    },
    {
      referencia:
        'Rovira, B. (2021, December 8). ᐅ <i>Transformación digital: Proceso, pasos a seguir y retos.</i> InboundCycle. Retrieved September 7, 2022, obtenido de ',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/transformacion-digital-retos ',
    },
    {
      referencia:
        'Universidad Tecnológica del Perú. (2021, November 5). <i>Estrategias competitivas: ¿cómo funcionan?</i> Escuela de Postgrado UTP. Retrieved September 7, 2022, obtenido de ',
      link:
        'https://www.postgradoutp.edu.pe/blog/a/estrategias-competitivas-como-funcionan-y-como-se-adaptan-a-los-tiempos-de-cambio/ ',
    },
    {
      referencia:
        'Wong, M. (2019, April 18). <i>Cómo desarrollar un presupuesto de evento para tu reunión o evento.</i> EventMobi. Retrieved September 7, 2022, obtenido de ',
      link:
        'https://www.eventmobi.com/es/blog/como-desarrollar-un-presupuesto-de-evento-para-tu-reunion-o-evento/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
