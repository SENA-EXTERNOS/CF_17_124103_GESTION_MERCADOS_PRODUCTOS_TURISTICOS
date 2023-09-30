<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido.mt-5
      .titulo-principal__numero
        span 
          i.fas.fa-puzzle-piece
      h1 Actividad didáctica  
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch

    
    .row.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar-soltar.png", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-contenido
          h2 Planeación de eventos
        p.mb-4.mt-5 Apreciado aprendiz, a continuación, encontrará una actividad que deberá resolver, con el objetivo de evaluar la aprehensión de los conocimientos expuestos en este componente formativo.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
