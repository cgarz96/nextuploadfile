import {useState,Fragment} from 'react'


const Form = () =>{
    const [boton, setState] = useState();

    const enviarDatos= async(e)=>{
        e.preventDefault()
        //console.log(datos)
        
        const form = document.getElementsByTagName('form')[0];
        const formdata= new FormData(form);
        console.log(formdata.get('archivo'))
        


            //var bar = _('porcentaje');
            var ajax = new XMLHttpRequest();
            ajax.upload.addEventListener("progress", progressHandler, false);
            ajax.addEventListener("load", completeHandler, false);
            ajax.addEventListener("error", errorHandler, false);
            ajax.addEventListener("abort", abortHandler, false);
            ajax.open("POST", "http://devfull.ddns.net/Proyectos-php/api-file/index.php");
            ajax.send(formdata);
            
            function _(el){
                return document.getElementById(el);
              }
               

            function progressHandler(event){
              _("status").innerHTML ="";
                var mb= Math.round(event.total* 0.000001);
              _("loaded_n_total").innerHTML = "<b>Subiendo</b> "+event.loaded+" bytes de "+event.total+ ' ('+mb+'MB)';
                  var percent = (event.loaded / event.total) * 100;
                  var percentVal = Math.round(percent);
                  console.log(percentVal)
               // bar.width(percentVal+'%');
               // bar.html(percentVal+'%');
               
            
            }
            function completeHandler(event){
              _("status").innerHTML = event.target.responseText;
            console.log(event.target.responseText)
            
            
            
             // _("progressBar").value = 0;
            
              var percentVal = '100%';
               //   bar.width(percentVal)
                console.log(percentVal)

            }
            function errorHandler(event){
              _("status").innerHTML = "Upload Failed";
            }
            function abortHandler(event){
              _("status").innerHTML = "Upload Aborted";
            }
            
      
        
    }
    return(
        <Fragment>
<form onSubmit={enviarDatos}>
  <div className="container">
    <div className="card border-success mb-3 d-flex mt-5">
      <div className="card-header bg-transparent border-success text-center"><b>Elija el archivo Max 500MB</b> </div>
      <div className="card-body text-success">
        <div id="mensaje" />
        <div className="input-group mb-3">
            <input type="file" id="archivo" name="archivo"  required  />

        </div>
        <div className="text-center"><p id="loaded_n_total" /></div>
      </div>
      <div className="card-footer bg-transparent border-success d-flex justify-content-center">
        <button type="submit" className="btn btn-info " id="bloquear">Subir</button>
       {/* <button type="submit" className="btn btn-info " id="continuar" onclick>¿Subir otro archivo?</button>*/}
      </div>
    </div>
    <div className="text-center"><p id="status" /></div>
  </div></form>
 
 
  </Fragment>
    )
}
export default Form;