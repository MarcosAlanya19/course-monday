import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post2 from "assets/images/examples/testimonial-6-3.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Cultural Ayacucho
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={
                "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2019/12/10160037/portada-ayacucho.jpg"
              }
              title="Semana Santa en Ayacucho
              "
              description="En estas fiestas el poblador local vive un peregrinaje de devoción y fe católica, encarnándose en los pasajes de la pasión, muerte y resurrección de Jesús."
              action={{
                type: "internal",
                route:
                  "https://www.cuscoperu.com/es/festividades-y-eventos/marzo-abril/semana-santa-en-ayacucho/",
                color: "info",
                label: "Leer más",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={"https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/03/07/000569124W.jpg"}
              title="Carnaval Ayacuchano"
              description="Con un colorido desfile protagonizado por las comparsas más representativas de la región, se lanzó el Carnaval Ayacuchano. Este festivo evento cautivó a cientos de espectadores que se contagiaron de alegría"
              action={{
                type: "internal",
                route: "https://bicentenario.gob.pe/carnaval-ayacuchano-2024/",
                color: "info",
                label: "Leer más",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={"https://portal.andina.pe/EDPFotografia3/thumbnail/2018/11/07/000542862M.jpg"}
              title="Día de la cancion Ayacuchana"
              description="Cada 6 de noviembre se conmemora el Día de la Canción Ayacuchana, instaurado en 1981 para honrar la memoria de Nery García Zárate, conocido como “El Pajarillo”, un gran cultor y difusor de la música."
              action={{
                type: "internal",
                route:
                  "https://andina.pe/agencia/noticia-dia-de-cancion-ayacuchana-conoce-por-se-conmemora-y-a-sus-exponentes-historicos-868320.aspx",
                color: "info",
                label: "Leer más",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={
                "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/09/13172228/arco-ayacucho-696x345.jpg"
              }
              title="8 imperdibles lugares turísticos de Ayacucho"
              description="Ayacucho, también conocida como Huamanga, es una hermosa ciudad de la zona sur central de Perú."
              action={{
                type: "internal",
                route: "https://www.denomades.com/blog/lugares-turisticos-ayacucho-debes-conocer/",
                label: "Leer más",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Curso Ayacucho
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3ia_fXPAjO27Ch4BZf_WHSBLEwM7TOzrFegZIMyWDA&s"
              }
              title="Curso de Cocina"
              description="Disfruta de un curso de cocina único adaptado a tus gustos y restricciones dietéticas. Nuestros chefs a domicilio personalizan la experiencia para que puedas aprovechar al máximo tu clase culinaria."
              action={{
                type: "internal",
                route: "https://www.miummium.com/es-pe/curso-de-cocina/ayacucho",
                label: "Leer más",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcdihf3_LbRei1aPNeJJFwkmEViKMA7PzLNuNUWOw1g&s"
              }
              title="Ingenieria de sistemas"
              description="Conviértete en un profesional capaz de analizar, implementar, ejecutar y gestionar proyectos de tecnología de información (TI)"
              action={{
                type: "internal",
                route: "https://www.elp.edu.pe/ingenier%C3%ADa-de-sistemas-de-informacion",
                color: "info",
                label: "Leer más",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Administracion de empresas"
              description="Licenciado en Administración Tiene como propósito la formación de Gerentes y Administradores de empresas y organizaciones con una visión internacional "
              action={{
                type: "internal",
                route: "https://www.educaedu.com.pe/carrera/administracion-de-empresas/ayacucho",
                color: "info",
                label: "Leer más",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn2v_pGyi95dzsrWQAu__1-dE75ogoiHOfFFv_A1znz0vDn4CNWDXSenEYBfWUvF_Ft4&usqp=CAU"
              }
              title="Contabilidad"
              description="Conviértete en un profesional técnico capaz de realizar el registro contable de las operaciones de las empresas."
              action={{
                type: "internal",
                route: "https://www.ilp.edu.pe/contabilidad",
                color: "info",
                label: "Leer más",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
