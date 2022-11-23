function iniciarJSON(){
    fetch(`./items.json`).then(respuesta => respuesta.json()).then(respuesta=>console.log(item=>{
        item.forEach(item  => {
            console.log(item);
        });
    }))
};
iniciarJSON();