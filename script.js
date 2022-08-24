function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if(hora >= 0 && hora < 12){
        img.src = 'dia.png'
        document.body.style.background = '#ffffa5'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#ff6b36'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#000080'

    }
}
