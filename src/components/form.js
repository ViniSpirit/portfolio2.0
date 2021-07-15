import { useState } from "react"
import stylesC from "../styles/contact.module.css"
import axios from "axios"

function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [assunto, setAssunto] = useState("")
  const [textArea, setTextArea] = useState("")

  const [enviando, setEnviando] = useState(false)

  async function submitHandler(e) {
    e.preventDefault()
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    }

    setEnviando(true)

    try {
      const response = await axios.post(
        "/api/email",
        {
          name: name,
          from: email,
          title: assunto,
          content: textArea,
        },
        config
      )
      console.log(response.data)
    } catch (error) {
      console.error(error.message)
    }
    setName("")
    setEmail("")
    setAssunto("")
    setTextArea("")

    setEnviando(false)
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Assunto"
        value={assunto}
        required
        onChange={(e) => setAssunto(e.target.value)}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="6"
        placeholder="Mensagem"
        value={textArea}
        required
        onChange={(e) => setTextArea(e.target.value)}
      ></textarea>

      {enviando ? <p>Enviando...</p> : <button type="submit">Enviar</button>}
    </form>
  )
}

export default Form
