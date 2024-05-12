/*
=========================================================
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Totalmente integrado"
                    description="Tu Puerta al Saber Global - Explora, Aprende, Crece con nuestra plataforma totalmente integrada."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Funcionalidad optimizada"
                    description="Tu Puerta al Saber Global - Explora, Aprende, Crece con una funcionalidad optimizada para tu experiencia educativa."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Experiencia mejorada"
                    description="Tu Puerta al Saber Global - Explora, Aprende, Crece con una experiencia mejorada en nuestra plataforma educativa/cultural en línea."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Acceso ampliado"
                    description="Tu Puerta al Saber Global - Explora, Aprende, Crece con un acceso ampliado al conocimiento en nuestra plataforma educativa/cultural en línea."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Obtén Ideas Sobre Búsqueda"
              description="
              Los usuarios de EducaCultura buscan una experiencia de búsqueda sin obstáculos para descubrir contenido educativo y cultural de calidad. Nos esforzamos por ofrecer una experiencia sin fricciones que satisfaga las expectativas de nuestros usuarios."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
