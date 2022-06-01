import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
  const getPost = async () =>{
    try {     
      //Url del API
      const url = "https://jsonplaceholder.typicode.com/posts";

      let result = await axios({
        url,
        method: 'GET'
      });
        
        let datos =result.data;
        console.log(datos);
        
        if(datos===0){
          alert("No hay datos :( ");
          return(0);
        }
    }
    catch (error) {
      console.log(error);
    }
  }

    

  return (
    <div className='App'>
      <div className='container-xl'>
        <div className='row text-center mt-4'>
          <h1>Segundo Examen</h1>
          <div className='col-md-6'>
            <button className='btn btn-primary' type='button' onClick={getPost}>Primer botón</button>
          </div>
          <div className='col-md-6'>
            <button className='btn btn-secondary' type='button'>Segundo botón</button>
          </div>
        </div>
        <div id='cambio'>

          {/*[API POST]*/}
          <div className='row text-center mt-4'>
            <div className='col-md-12'>
              <h1>Posts</h1>
            </div>
          </div>

          <div className='table-responsive'>
            <table className='table table-bordered'>
              <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Post Completo</th>
              </tr>
              </thead>
              <tbody>
                {/*[Aquí va lo que salga del json]*/}
              </tbody>
            </table>
          </div>

          {/*[API Imagenes]*/}
          <div className='row text-center mt-4'>
            <div className='col-md-12'>
              <h1>Imágenes</h1>
            </div>
          </div>

          <div className='row text-center mt-4'>
            <div className='col-md-3'>
              
              <img src=''/>

            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;