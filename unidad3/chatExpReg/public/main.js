var socket = io.connect('192.168.43.7:9095',{'forceNew':true});

socket.on('messages',function(data){
    console.log(data);
    render(data);
});

function render (data){
    var html = data.map(function(elem,index){
        return(`<div>
                    <strong>${elem.author}</strong>:
                    <em>${elem.text}</em>
                    <br> Numero vocales = <em>${elem.voca}</em> 
                    <br> numero palabras = <em>${elem.pala}</em>
                    <br> cantidad numeros = <em>${elem.num}</em>
                    <br> mayusculas Inicio = <em>${elem.may}</em>
                    <br> palabras que no terminan en vocal = <em>${elem.novocal}</em>
                    
                </div>`);
    }).join(" ");
    
    document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
    mensaje=document.getElementById('texto').value;
    try{
        var payload = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value,
        voca: mensaje.match(/[aeiouAEIOUÁ-ÿ]/gm).length,
        pala: mensaje.match(/([a-zA-Z0-9Á-ÿ]+)+/gm).length,
        num: mensaje.match(/[0-9]/gm).length,
        may: mensaje.match(/[A-Z][\w]*/gm).length,
        novocal : mensaje.match(/[A-Za-zÁ-ý]+([^aeiouAEIUO\? ])\b/g) 
    };
    }catch(error){
        alert('no tienes agregado alguno de estos en tu texto:\n*vocal\n*nuero\n*mayuscula al inicio\n*palabra que no termine en vocal\n¡¡Refresca y Agregalos!!');
    }
    

    socket.emit('new-message',payload);
    return false;
}