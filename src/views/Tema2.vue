<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Eventos

    .row.justify-content-center.mt-5
      p Para dar inicio cabe hacer énfasis en 2 elementos claves:

    .row.justify-content-center.my-5
      p ¿Qué es un evento?
      .col-lg-7.mt-4
        .cajon.color-acento-contenido.p-4
          p La palabra evento proviene del latín #[i «eventus»] que significa acontecimiento, suceso, eventualidad. Un evento es una actividad especial que se realiza fuera de la rutina regular para celebrar un acontecimiento que debe llevar una planificación al menos en cuanto a espacio y tiempo (lugar, fechas, horas), y que se clasifica según su naturaleza.
      
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.my-5
      p.mb-5 Eventos como relaciones públicas 
      p Desde el punto de vista del  marketing, un evento es una herramienta de relaciones públicas y comunicación que se convierten en una carta de presentación frente a posibles clientes, medios de comunicación y público en general de una empresa, organización o la misma ciudad con el fin de dar a conocer un lanzamiento de la empresa de nuevos productos y/o servicios, dar a conocer un nuevo elemento de innovación sobre procesos, materiales, etc, resaltar alguna particularidad de la marca, entre otros.


    separador

    .titulo-tercero.my-5
      h2 Clasificación de los eventos

    .row.justify-content-center.my-5
      p A continuación, se invita a revisar la clasificación más común sobre eventos y sus características diferenciadoras.
      p Los eventos se clasifican principalmente de acuerdo con la actividad a desarrollarse así: 

    .row.my-5
      LineaTiempoE.color-acento-botones
        .row(titulo="Académicos")
          .col-lg-6.mb-4.mb-lg-0
            p Su finalidad es compartir y divulgar información sobre un tema de interés en un área específica (congreso, simposio, etc.), los cuales se consideran como reunión en la cual se invita por lo general a ponentes destacados en una especialidad.  Se usan herramientas visuales como gráficos estadísticos, fotografías, videos, etc. El objetivo de un evento académico es convencer al auditorio en un determinado tema.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')

        .row(titulo="Sociales")
          .col-lg-6.mb-4.mb-lg-0
            p Son aquellos que tienen como fin el #[b encuentro entre personas], buscando la convivencia y la relación social, por medio de una actividad gastronómica.
            p Por lo tanto, los más populares son bodas, bautizos y cumpleaños; pero también son eventos sociales el homenaje a alguna persona por algo significativo como una jubilación o grado o una cena ofrecida en un congreso.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')

        .row(titulo="Eventos musicales y/o culturales")
          .col-lg-6.mb-4.mb-lg-0
            p Son eventos que dependen de su contenido y con ello variará la complejidad en la organización, logística, presupuesto, etc. Por lo tanto, podría ser un pequeño concierto o un gran festival internacional. Adicionalmente pueden ser organizados por entidades públicas o privadas.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')

        .row(titulo="Eventos virtuales")
          .col-lg-6.mb-4.mb-lg-0
            p Son una de las más nuevas tendencias en el sector de los eventos, que al igual que los otros tienen como objetivo reunir personas, pero, como gran diferencial, se realiza en un entorno virtual. 
            p Los eventos virtuales más conocidos actualmente son las ferias, conferencias, reuniones de ventas, entre otros.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img20.png', alt='Texto que describa la imagen')

        .row(titulo="Fiesta")
          .col-lg-6.mb-4.mb-lg-0
            p Para el evento fiesta, el cual es un rito social compartido entre un grupo de personas donde se marca un cierto acontecimiento a modo de celebración, se integra una presentación artística, baile, espectáculos, entre otros. Se debe considerar su alto costo para la ejecución y el control de asistentes.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img21.png', alt='Texto que describa la imagen')

    .row.my-5
      .cajon.color-acento-contenido.p-4
        p Promoción comercial: su finalidad es promocionar a las empresas de cualquier sector. Hacen parte de la actividad empresarial de las organizaciones y por tanto de las estrategias de mercadeo.

    .row.justify-content-center.my-5
      .col-5.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')
      .col-lg-10
        p Para ampliar información lo invitamos a revisar el #[strong Anexo 3.1. Promoción comercial de eventos], donde se describen tipos de eventos, su definición y entidad que lo promueve.
        .row
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/anexos/anexo_3.1.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                b Anexo 3.1.
                p Promoción comercial eventos

    separador


    .titulo-tercero.my-5
      h2 Escenarios

    .row.justify-content-center.my-5
      p Elegir un escenario o espacio para realizar un evento es una responsabilidad que requiere conocimiento detallado sobre los aspectos necesarios y que influyen en su realización. Los más significativos son:

    .row.justify-content-center.my-5
      TabsC.color-acento-contenido
        .py-3.py-md-4.p-5(titulo="Escucha del cliente")
          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')
            .col-md-6
              p Normalmente cuando se planifica un evento se escucha al cliente, quien naturalmente desea espacios personalizados y enriquecidos con elementos innovadores buscando que el componente de entretenimiento esté presente, en especial cuando según tipo de evento lo amerita. 

        .py-3.py-md-4.p-5(titulo="Necesidades del cliente")
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')
            .col-md-6
              p En la actualidad, se observa como diversos espacios son adaptados a las necesidades del cliente, presentando en ocasiones dificultades dado a que el escenario y lugar deben estar acorde con el tipo de evento a ejecutarse. 

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Para ampliar información lo invitamos a revisar el #[strong Anexo 4. Escenarios,] el cual presenta los diversos escenarios sobre los cuales se desarrollan eventos, a partir de su naturaleza.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexos/anexo_4.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  b Anexo 4.
                  p Escenarios

    separador


    .titulo-segundo.color-acento-contenido.my-5
      h2 Planeación de eventos 

    .row.justify-content-center.my-5
      p Existen diferentes aspectos que se deben tener en cuenta al momento de planear un evento para garantizar su éxito a través de la correcta logística y alcance de los objetivos.

    .row.justify.content-center.my-5
      TabsA.color-acento-contenido
        .tarjeta.tarjeta--rosa.p-5(titulo="La planeación")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p La planeación de un evento va directamente relacionada con las fases de los eventos: pre-evento, desarrollo y post evento, así como el alcance y la naturaleza del evento, pero todo comienza con una idea para satisfacer una necesidad o deseo, que se exprese en un plan estratégico.

        .tarjeta.tarjeta--rosa.p-5(titulo="Los factores")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p Los factores que dan forma al evento se incorporan luego en un plan de proyecto que proporciona la hoja de ruta hacia el éxito. 

        .tarjeta.tarjeta--rosa.p-5(titulo="Los recursos")
          .row.justify-content-center
            .col-5.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')
            
            .col-lg-10
              p Los recursos necesarios se adquieren y sincronizan en un plan de acción para producir el evento. 

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Para ampliar información lo invitamos a revisar #[strong Anexo 5. Planeación de eventos,] en este documento encuentra información sobre los factores a considerar en una planeación de eventos y sus etapas. 
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/anexos/anexo_5.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  b Anexo 5.
                  p Planeación de eventos

    separador


    .titulo-tercero.my-5
      h2  Normatividad

    .row.justify.content-center.my-5
      p Las empresas del sector turístico que tienen como actividad la organización de eventos, deben tener en cuenta los siguientes aspectos que van enfocados a la comercialización digital:
      
    .row.justify.content-center.my-5
      .col-lg-6
        ul.lista-ul
          li
            i.fas.fa-square
            b Normatividad en los eventos 

    .row.justify-content-center
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Mercado en línea")
            p Realizar actividades de mercado en línea, es considerado como ventas a distancia. Este tipo de ventas están contempladas en la ley 1480 de 2011 del estatuto del consumidor (artículo 5°, numeral 16). 
            p Este numeral indica que este tipo de ventas son las efectuadas sin tener contacto físico con el producto y se llevan a cabo vía telefónica, a través de correo y demás canales disponibles en el comercio en línea.

          .row(titulo="Ventas que utilizan métodos no tradicionales")
            p El estatuto contempla en su capítulo 5: “De las ventas que utilizan métodos no tradicionales o a distancia”, las normas a cumplir por parte de los establecimientos de comercio en línea.

          .row(titulo="Estatuto del consumidor")
            p Una vez revisado el estatuto del consumidor, es necesario analizar las normas que se establecen en la “Ley 527 de 1999: Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones”.

      .col-9.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/temas/tema2/img12.png", alt="alt")          

    separador


    .titulo-tercero.my-5
      h2 Recursos del evento

    .row.justify-content-center
      .col-8.col-lg-5
        figure
          img(src="@/assets/curso/temas/tema2/img13.png", alt="alt")          
      .col-lg-7
        .cajon.color-acento-contenido.px-4.py-2
          p Los recursos para utilizar en un evento van directamente ligados a el tipo de evento y la magnitud de este; sin embargo, independiente de estos factores los recursos serán de tres tipos: recursos humanos, recursos materiales y recursos físicos.
        
        p Para ampliar información lo invitamos a revisar el #[strong anexo 5.1. Recursos del evento], allí encuentra los recursos mínimos y más usados en la planeación de eventos.

        .col-lg-8
          a.anexo.mb-4(:href="obtenerLink('/downloads/anexos/anexo_5.1.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              b Anexo 5.1.
              p Recursos del evento

    separador


    .titulo-tercero.my-5
      h2 Logística de eventos

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img14.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La logística para eventos es una técnica elemental aplicada a las tareas y acciones vinculadas en la planeación y a la gestión de los recursos que se utilizaran para cada una de las fases del evento.
            br
            br
            p Con acciones bien diseñadas en el tiempo, se consigue el objetivo de la logística, el cual es aumentar la eficiencia de los recursos a usar con el propósito de cumplir con lo planeado cubriendo las necesidades establecidas, conduciendo a la satisfacción de nuestros públicos: clientes, asistentes y proveedores.

        p.my-4 Para ampliar información lo invitamos a revisar el #[strong Anexo 6. Logística de eventos,] donde encontrará los diversos tipos de montajes para la realización de eventos.

        .col-lg-6
          a.anexo.mb-4(:href="obtenerLink('/downloads/anexos/anexo_6.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              b Anexo 6.
              p Logística de eventos

    separador


    .titulo-tercero.my-5
      h2 Presupuestos

    .row.justify-content-center.my-5
      p Tener claridad sobre los costos asociados a la realización de un evento es fundamental; por ello, estructurar adecuadamente el presupuesto registrando los valores económicos causados, permite anticipar el cumplimiento de los compromisos financieros. 

    .row.justify-content-center.my-5
      LineaTiempoE.color-acento-contenido
        .row.justify-content-center(titulo="Objetivo del evento")
          .col-5.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema2/img15.png', alt='Texto que describa la imagen')
          .col-lg-10
            p.mt-4 Una vez se conoce el objetivo del evento, se valoran las necesidades a suplir para su realización. Tenemos dos opciones de estructura de presupuestos.

        .row.justify-content-center(titulo="Presupuesto adaptado al evento (mayor libertad)")
          .col-5.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema2/img16.png', alt='Texto que describa la imagen')
          .col-lg-10
            p.mt-4 Para este caso se debe proyectar un presupuesto, de acuerdo con una planificación general, a necesidades específicas y a objetivos preestablecidos. Se debe estimar, de la manera más realista, las posibilidades de recuperar los costos, o eventuales ganancias que reporte el evento. (Wong, 2019).

        .row.justify-content-center(titulo="Evento adaptado al presupuesto (limitados)")
          .col-5.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema2/img17.png', alt='Texto que describa la imagen')
          .col-lg-10
            p.mt-4 Es el caso de eventos sociales en general, y empresariales como lanzamientos, jornadas de capacitación, etc., donde los organizadores cuentan con un monto de dinero predeterminado, y deben adecuar la contratación de proveedores y servicios, de acuerdo con el mismo. (Wong, 2019).

    .row.my-5
      .cajon.color-acento-contenido.p-4
        p Cuando este punto está claro, se deben definir los costos asociados a la planificación del evento. Según Cordero López, L (2016), existen dos tipos de costos que se deben estipular en el momento de crear un evento: los fijos y los variables, a saber:

    .row.justify-content-center.my-5
      .col-lg-6
        h3 Costos Fijos
        p Independiente del éxito del evento, constituyen los costos fijos aquellos valores que hay que cancelar, esto es:
        ul.lista-ul
          li
            i.fas.fa-check
            | El sitio elegido para realizar el evento, es en su orden el mayor desembolso en que se incurrirá.
          li  
            i.fas.fa-check
            | Mercadeo, publicidad y promoción del evento.
          li
            i.fas.fa-check
            | Equipamiento tecnológico para la producción del evento.
          li  
            i.fas.fa-check
            | Gastos de desplazamiento para personajes especiales.
          li
            i.fas.fa-check
            | Gastos de personal. 
          li  
            i.fas.fa-check
            | Traductores si fuera necesario.
          li  
            i.fas.fa-check
            | Actos protocolares de apertura y cierre del evento.
          li  
            i.fas.fa-check
            | Sistema de inscripción y acreditación. 
          li  
            i.fas.fa-check
            | Actividades de esparcimiento contratadas, extra al evento. 
          li  
            i.fas.fa-check
            | Seguros. 
          li  
            i.fas.fa-check
            | Honorarios. 
          li  
            i.fas.fa-check
            | Logística de transporte, montaje y desarmado de estructuras.
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img18.png', alt='Texto que describa la imagen')        

    .row.justify-content-center.my-5
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img19.png', alt='Texto que describa la imagen')
      .col-lg-6
        h3 Costos Variables
        p Son aquellos que varían en relación a la cantidad de personas que deciden asistir a un evento, tenemos:
        ul.lista-ul
          li
            i.fas.fa-check
            | Material de acreditación, credenciales, folletos, #[i souvenirs], diplomas, etc.
          li  
            i.fas.fa-check
            | Servicio de #[i catering, coffe break,] almuerzos, cenas.
          li  
            i.fas.fa-check
            | Personal temporal.
          li  
            i.fas.fa-check
            | Estacionamientos.
          li  
            i.fas.fa-check
            | Computadores y mobiliario en general.
          li  
            i.fas.fa-check
            | Gastos bancarios.
          li  
            i.fas.fa-check
            | Personal de seguridad y servicios generales.
          li  
            i.fas.fa-check
            | Adicional a lo anterior, se debe tener presente un rubro de imprevistos: tomar medidas contables asignando recursos para cubrir un suceso inesperado. 

    .row.justify-content-center.my-5
      p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello diríjase al menú principal en donde encontrará la síntesis, la actividad didáctica, material complementario, entre otros.




</template>

<script>
export default {
  name: 'Tema2',
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
