export const gerarUrlWhatsApp = (): string => {
    let numeroAleatorio:number = (Math.random() >= 0.5) ? 1 : 0;
    let numeroCelularEscolhido:string;
    let textoInicioConversa:string = "Olá, gostaria de fazer um orçamento para meu site.";
    let urlWhatsApp:string;

    numeroAleatorio == 0 ? numeroCelularEscolhido = "5562993172731" : numeroCelularEscolhido = "5562993357679";
    urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroCelularEscolhido + "&text=" + textoInicioConversa;
    return urlWhatsApp;
};