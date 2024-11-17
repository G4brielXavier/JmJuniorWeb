const nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(bodyParser.json())


const transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

app.post('/api/sendEmail', async(req, res) => {
    const {name, email, typeService, message} = req.body

    const mailOptions = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: 'Pedido de Orçamento',
        text:
        `
        Nome: ${name}
        E-mail: ${email}
        Tipo de Serviço: ${typeService}
        Mensagem:
        ${message}
        `
    }

    try {
        await transport.sendMail(mailOptions);
        res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ message: 'Erro ao enviar o e-mail.' });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});