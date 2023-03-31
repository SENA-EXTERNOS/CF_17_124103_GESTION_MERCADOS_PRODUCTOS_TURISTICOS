<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.my-5
      .col-lg-5.mb-3
        figure
          img(src="@/assets/curso/temas/introduccion/img1.png", alt="alt")
      .col-lg-7
        p Estimado aprendiz, bienvenido a este componente formativo, el cual describe aspectos a considerar en la planeación de eventos desde la gestión administrativa, la gestión comercial y la comunicación comercial, con el estudio de este componente aprenderá sobre la clasificación de eventos, escenarios, normatividad aplicable en su estructuración a partir de las labores de logística, los recursos y el presupuesto.
        b En el siguiente video conocerá de forma general, todas las temáticas que estudiará. ¡Muchos éxitos en este proceso de aprendizaje!


    .row.my-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/7VD_pHqw2xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
