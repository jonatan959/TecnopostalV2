document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "525581471436";
  
    
    let cliente = document.querySelector("#cliente").value;
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;
    let portatil = document.querySelector("#portatil").value;
    let arrenda = document.querySelector("#arrenda").value;
    let cantidad = document.querySelector("#cantidad").value;
    let mano = document.querySelector("#mano").value;
    let software = document.querySelector("#software").value;
    let pago = document.querySelector("#pago").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
            *_Tecnopostal_*%0A
          *Formato de pedido*%0A%0A
          *Indique el nombre de la persona que reciba o que ordeno*%0A
          ${cliente}%0A
          *Indica la fecha de entrega*%0A
          ${fecha}%0A
          *Indica la hora de entrega de producto*%0A
          ${hora}%0A
          *Indique modelo de portatil*%0A
          ${portatil}%0A
          *Indique equipo de arrendamiento*%0A
          ${arrenda}%0A
          *Cantidad de equipos*%0A
          ${cantidad}%0A
          *Indique equipos de segunda mano*%0A
          ${mano}%0A
          *Indique nombre de software*%0A
          ${software}%0A
          *Forma de pago*%0A
          ${pago}`;
  
  if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });
  
  window.alert("El pedido se realizara por via whatsapp");
  
    