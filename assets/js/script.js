//Función autoejecutable IIFE
const playVideo = (() => {
    //sección privada
    //Función que inserta el URL en el iframe correspondiente (según ID). Recibe ID y URL
    let fuenteVideo = (url, iframeId) =>{
        document.getElementById(iframeId).setAttribute("src", url);
    }
    //sección pública (return)
    return {
        exFuenteVideo : (url, iframeId) => {
            fuenteVideo(url, iframeId);
        }
    }
})();
//Clase multimedia
class Multimedia{
    constructor(url){
        let _url = url;

        this.getUrl = () =>{
            return _url;       
        };
        this.setUrl = (nuevoUrl) => {
            _url = nuevoUrl;
        };
    };
    get traerUrl(){
        return this.getUrl();
    };
    setInicio = () => {
        return ("Este método es para realizar un cambio en URL del video");
    };
};
//Clase reproductor. Hereda de Multimedia
class Reproductor extends Multimedia{
    constructor(url,id){
        super(url);
        let _id = id;

        this.getId = () => {
            return _id;
        };
        this.setId = (nuevoId) =>{
            _id = nuevoId;
        }
    };
    get traerId(){
        return this.getId();
    };
    playMultimedia = () =>{
        playVideo.exFuenteVideo(this.traerUrl, this.traerId);
    };
    // tiempo en segundos
    setInicio = (tiempo) => {
        document.getElementById(this.traerId).setAttribute("src", `${this.traerUrl}?start=${tiempo}`);
    };
};
let musica = new Reproductor("https://www.youtube.com/embed/-uWuvMMBWPI","musica");
let peliculas = new Reproductor("https://www.youtube.com/embed/uY6oRW9Vn4c","peliculas");
let series = new Reproductor("https://www.youtube.com/embed/evMi8bdhby4","series");

musica.playMultimedia();
musica.setInicio('1200')
peliculas.playMultimedia();
series.playMultimedia();

