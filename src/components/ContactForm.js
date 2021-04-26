import React, { useState } from "react"
import { Grid, TextField, Box, Button, Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { Send } from "mdi-material-ui"

const ContactForm = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [toast, setToast] = useState({
    open: false,
    msg: "",
    severity: "success",
  })

  const handleChange = e => {
    setFields({
      ...fields,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }
  const handleSubmit = e => {
    e.preventDefault()

    const encode = data => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...fields,
      }),
    })
      .then(() => {
        setToast({
          open: true,
          msg: "Su mensaje ha sido enviado con éxito",
          severity: "success",
        })
        setFields({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      })
      .catch(() =>
        setToast({
          open: true,
          msg:
            "Lo siento. Su mensaje no pudo ser enviado en este momento. Por favor, inténtelo más tarde.",
          severity: "error",
        })
      )
  }
  return (
    <>
      <form
        name="contact"
        action="#"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Nombre"
              name="name"
              required
              id="name"
              onChange={handleChange}
              value={fields.name}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              required
              id="email"
              type="email"
              onChange={handleChange}
              value={fields.email}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Teléfono"
              name="phone"
              id="phone"
              onChange={handleChange}
              value={fields.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              required
              label="Mensaje"
              name="message"
              id="message"
              onChange={handleChange}
              value={fields.message}
            />
          </Grid>
        </Grid>
        <Box mt={2} align="center">
          <Button endIcon={<Send />} type="submit" fullWidth>
            Enviar
          </Button>
        </Box>
      </form>
      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={() => setToast({ ...toast, open: false })}
      >
        <Alert variant="filled" severity={toast.severity}>
          {toast.msg}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ContactForm
