import nodemailer from 'nodemailer'

// usa o nodemailer para enviar emaiis.
export async function enviarEmail(para,assunto, descricao) {
    //cria a conexão
    const transporter =  await nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: "fabio.thompson44@outlook.com",
            pass: "32920097f"
        }
    })
    //evnia o email
    await transporter.sendMail({
        from: ' "fabio" <fabio.thompson44@outlook.com>',
        to: para,
        subject: assunto,
        text: descricao
    }).catch((err)=>{
        console.error('erro ao enviar email',err);
    })
}