import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setCurrentPage } from "../state"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Toolbar,
  Box,
  Container,
  Typography,
  Link as MLink,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Button,
  useTheme,
} from "@material-ui/core"
import { Information } from "mdi-material-ui"
import Seo from "../components/seo"

const CursosPage = ({ dispatch, isMobile }) => {
  const theme = useTheme()
  const data = useStaticQuery(graphql`
    {
      allSheetsCoursesCourses {
        edges {
          node {
            price
            ref
            studyLevel
            time
            days
            age
          }
        }
      }
    }
  `)

  var cleanCourses = []

  const courses = data.allSheetsCoursesCourses.edges
    .map(i => {
      const { days, time, age, studyLevel, price, ref } = i.node
      return {
        days,
        time,
        age,
        studyLevel,
        price,
        ref,
      }
    })
    .sort((a, b) => {
      return a.age < b.age ? -1 : a.age > b.age ? 1 : 0
    })
  courses.forEach((i, ind) => {
    if (ind === 0 || courses[ind].studyLevel !== courses[ind - 1].studyLevel) {
      cleanCourses.push({
        label: i.studyLevel,
        age: i.age,
        classes: [i],
      })
    } else {
      cleanCourses = cleanCourses.map(j => {
        if (j.label === i.studyLevel) {
          const replacement = {
            label: j.label,
            age: j.age,
            classes: [...j.classes, i],
          }

          return replacement
        } else {
          return j
        }
      })
    }
  })

  cleanCourses = cleanCourses.map(i => {
    i.classes.sort((a, b) => {
      const sortStringA = `${a.days} ${a.time}`
      const sortStringB = `${b.days} ${b.time}`
      return sortStringA < sortStringB ? -1 : sortStringA > sortStringB ? 1 : 0
    })
    return i
  })

  useEffect(() => {
    dispatch(setCurrentPage("cursos"))
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Seo title="Cursos" />
      <Toolbar />
      <Box mb={3} align={isMobile ? "center" : "left"}>
        <Container maxWidth="md">
          <Typography variant="h2">Cursos</Typography>
          <Box>
            <Typography paragraph>
              ¿Quieres saber tu nivel actual de inglés?{` `}
              <MLink
                href="https://www.cambridgeenglish.org/test-your-english/"
                target="_blank"
              >
                Haz una prueba de nivel gratis aquí
              </MLink>
              .
            </Typography>
            <Typography variant="h4" paragraph>
              Clases programadas para niños
            </Typography>
            <Typography paragraph>
              Todos los cursos tienen 2 clases por semana durante el período
              escolar. El precio es de 45€ al mes salvo que se indique lo
              contrario. Hay una tasa de inscripción de 15€ y un costo de 30€
              por libros y materiales.
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Calendario 2020/2021
            </Typography>
            <List dense disablePadding>
              {cleanCourses.map((i, indA) => (
                <React.Fragment key={indA}>
                  <ListSubheader
                    key={indA}
                    color="primary"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {i.label}
                    <span style={{ fontSize: ".75rem" }}>{` (${i.age})`}</span>
                  </ListSubheader>
                  {i.classes.map((j, indB) => (
                    <ListItem key={indB} divider>
                      <ListItemText
                        primary={j.days}
                        secondary={j.time}
                        primaryTypographyProps={{
                          style: { display: "inline" },
                        }}
                        secondaryTypographyProps={{
                          style: {
                            color: theme.palette.text.primary,
                            display: "inline",
                            float: "right",
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </React.Fragment>
              ))}
            </List>
          </Box>
          <Box my={2}>
            <Typography variant="h4" paragraph>
              Clases privadas para todas las edades
            </Typography>
            <List>
              <ListItem divider>
                <ListItemText
                  primary="1 hora"
                  secondary="15.00€"
                  primaryTypographyProps={{
                    style: { display: "inline" },
                  }}
                  secondaryTypographyProps={{
                    style: {
                      color: theme.palette.text.primary,
                      fontSize: "1rem",
                      display: "inline",
                      float: "right",
                    },
                  }}
                />
              </ListItem>
            </List>
            <Typography paragraph>
              Ya sea que desee prepararse para un examen de inglés, usted (o su
              hijo) necesite apoyo con su trabajo escolar o simplemente quiera
              practicar sus habilidades de conversación, proporcionamos clases
              individuales en persona y también por Skype. Podemos ofrecer
              clases privadas por la mañana o por la tarde.
            </Typography>
          </Box>
          <Box align="center">
            <Button
              color="primary"
              variant="contained"
              startIcon={<Information />}
              component={Link}
              to="/contacto"
              fullWidth={isMobile}
            >
              Contáctenos para más información
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

const mapStateToProps = state => ({
  isMobile: state.isMobile,
})

export default connect(mapStateToProps)(CursosPage)
