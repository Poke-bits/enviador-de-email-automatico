import { logins } from './credenciais.js'
import nodeCron from 'node-cron'
import { enviarEmail } from './enviarEmail.js'
//'*/2 * * * *'
    //faz executar o pop e enviar o email dentre 2 e 2 min 
    nodeCron.schedule('*/2 * * * *', () => {
        const credenciais= logins.pop()
        console.log('começou porra dig diow')
        enviarEmail(credenciais.email, "seu login venuz produção", `seu login venuz é ${credenciais.email} e sua senha é ${credenciais.senha},\n você pode acessar pelo link https://venuz.app/login \n
        qualquer dúvida me chamar no teams! \n
        Att, \n
        Fábio Thompson\n
        Favor não responder esse email, qualquer dúvida pode me chamar no teams!` )
        console.log(`email enviado para ${credenciais.email}`)
    
    });

