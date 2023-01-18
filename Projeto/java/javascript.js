let Numero_Bola = 0;
let Numero_Caneca = 0;
let Numero_Camisola = 0;
let Numero_CamisolaGR = 0;
let Numero_Pack = 0;
let Numero_Gorro = 0;
let Preço = 0;
document.getElementById("Btn_Bola").addEventListener("click", function () {
  Numero_Bola = Numero_Bola + 1;
  if (Numero_Bola == 1){
  let btn_txt_update = `${Numero_Bola}x Bola`;
  document.getElementById("Btn_Bola").innerHTML = btn_txt_update;
  Price_Bola = document.getElementById("Price_Bola").innerHTML;
  Price_Bola = Price_Bola.replace("€","");
  Price_Bola = parseFloat(Price_Bola)
  CriarCarrinho(Price_Bola);
  }
  else if(Numero_Bola == 21){
    alert("O limite por item é 20")
    return
  }
  else{
  let btn_txt_update = `${Numero_Bola}x Bolas`;
  document.getElementById("Btn_Bola").innerHTML = btn_txt_update;
  Price_Bola = document.getElementById("Price_Bola").innerHTML;
  Price_Bola = Price_Bola.replace("€","");
  Price_Bola = parseFloat(Price_Bola)
  CriarCarrinho(Price_Bola);
  }
  });
  
document.getElementById("Btn_Caneca").addEventListener("click", function () {
  Numero_Caneca = Numero_Caneca + 1;
  if (Numero_Caneca == 1){
  let btn_txt_update = `${Numero_Caneca}x Caneca`;
  document.getElementById("Btn_Caneca").innerHTML = btn_txt_update;
  Price_Caneca = document.getElementById("Price_Caneca").innerHTML;
  Price_Caneca = Price_Caneca.replace("€","");
  Price_Caneca = parseFloat(Price_Caneca)
  CriarCarrinho(Price_Caneca);
  }
  else if(Numero_Caneca == 31){
    alert("O limite por este item é 30")
    return
  }
  else{
  let btn_txt_update = `${Numero_Caneca}x Canecas`;
  document.getElementById("Btn_Caneca").innerHTML = btn_txt_update;
  Price_Caneca = document.getElementById("Price_Caneca").innerHTML;
  Price_Caneca = Price_Caneca.replace("€","");
  Price_Caneca = parseFloat(Price_Caneca)
  CriarCarrinho(Price_Caneca);
  }
  });
  

document.getElementById("Btn_CamisolaGR").addEventListener("click", function () {
  Numero_CamisolaGR = Numero_CamisolaGR + 1;
  if (Numero_CamisolaGR == 1){
  let btn_txt_update = `${Numero_CamisolaGR}x Camisola`;
  document.getElementById("Btn_CamisolaGR").innerHTML = btn_txt_update;
  Price_CamisolaGR = document.getElementById("Price_CamisolaGR").innerHTML;
  Price_CamisolaGR = Price_CamisolaGR.replace("€","");
  Price_CamisolaGR = parseFloat(Price_CamisolaGR)
  CriarCarrinho(Price_CamisolaGR);
  }
  else if(Numero_CamisolaGR == 21){
    alert("O limite por este item é 20")
    return
  }
  else{
  let btn_txt_update = `${Numero_CamisolaGR}x Camisolas`;
  document.getElementById("Btn_CamisolaGR").innerHTML = btn_txt_update;
  document.getElementById("Btn_CamisolaGR").innerHTML = btn_txt_update;
  Price_CamisolaGR = document.getElementById("Price_CamisolaGR").innerHTML;
  Price_CamisolaGR = Price_CamisolaGR.replace("€","");
  Price_CamisolaGR = parseFloat(Price_CamisolaGR)
  CriarCarrinho(Price_CamisolaGR);
  }
  });

document.getElementById("Btn_Camisola").addEventListener("click", function () {
  Numero_Camisola = Numero_Camisola + 1;
  if (Numero_Camisola == 1){
  let btn_txt_update = `${Numero_Camisola}x Camisola`;
  document.getElementById("Btn_Camisola").innerHTML = btn_txt_update;
  Price_Camisola = document.getElementById("Price_Camisola").innerHTML;
  Price_Camisola = Price_Camisola.replace("€","");
  Price_Camisola = parseFloat(Price_Camisola)
  CriarCarrinho(Price_Camisola);
  }
  else if(Numero_Camisola == 21){
    alert("O limite por este item é 20")
    return
  }
  else{
  let btn_txt_update = `${Numero_Camisola}x Camisolas`;
  document.getElementById("Btn_Camisola").innerHTML = btn_txt_update;
  Price_Camisola = document.getElementById("Price_Camisola").innerHTML;
  Price_Camisola = Price_Camisola.replace("€","");
  Price_Camisola = parseFloat(Price_Camisola)
  CriarCarrinho(Price_Camisola);
  }
  });

document.getElementById("Btn_PackNorth").addEventListener("click", function () {
  Numero_Pack = Numero_Pack + 1;
  if (Numero_Pack == 1){
  let btn_txt_update = `${Numero_Pack}x Pack North`;
  document.getElementById("Btn_PackNorth").innerHTML = btn_txt_update;
  Price_Pack = document.getElementById("Price_PackNorth").innerHTML;
  Price_Pack = Price_Pack.replace("€","");
  Price_Pack = parseFloat(Price_Pack)
  CriarCarrinho(Price_Pack);
  }
  else if(Numero_Pack == 6){
    alert("O limite por este item é 5")
    return
  }
  else{
  let btn_txt_update = `${Numero_Pack}x Pack North`;
  document.getElementById("Btn_PackNorth").innerHTML = btn_txt_update;
  Price_Pack = document.getElementById("Price_PackNorth").innerHTML;
  Price_Pack = Price_Pack.replace("€","");
  Price_Pack = parseFloat(Price_Pack)
  CriarCarrinho(Price_Pack);
  }
  });

document.getElementById("Btn_Gorro").addEventListener("click", function () {
  Numero_Gorro = Numero_Gorro + 1;
  if (Numero_Gorro == 1){
  let btn_txt_update = `${Numero_Gorro}x Gorro`;
  document.getElementById("Btn_Gorro").innerHTML = btn_txt_update;
  Price_Gorro = document.getElementById("Price_Gorro").innerHTML;
  Price_Gorro = Price_Gorro.replace("€","");
  Price_Gorro = parseFloat(Price_Gorro);
  CriarCarrinho(Price_Gorro);
  }
  else if(Numero_Gorro == 21){
    alert("O limite por este item é 20")
    return
  }
  else{
  let btn_txt_update = `${Numero_Gorro}x Gorros`;
  document.getElementById("Btn_Gorro").innerHTML = btn_txt_update;
  Price_Gorro = document.getElementById("Price_Gorro").innerHTML;
  Price_Gorro = Price_Gorro.replace("€","");
  Price_Gorro = parseFloat(Price_Gorro);
  CriarCarrinho(Price_Gorro);
  }
  });


function CriarCarrinho(Wage){
  Preço = Preço + Wage
  Preço_Decimal = Preço.toFixed(1)
  let btn_pay_text = `${Preço_Decimal}€ Pagar Agora`;
  document.getElementById('Paybtn').innerHTML = btn_pay_text
}




