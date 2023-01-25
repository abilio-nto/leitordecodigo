import React ,{useEffect}from 'react';
import Quagga from 'quagga'; // ES6


 import {Video } from './styles';
// const Quagga = require('quagga').default; 
function Main() {
  useEffect(()=>{
     if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
      Quagga.init({
        inputStream:{
          name:"Live",
          type:"LiveStream",
          target: document.querySelector("#video"),
          constraints:{
            facingMode:'environment'
          }
        },
        numOfWorkers:1,
        locate:true,
        decoder:{
          readers:['ean_reader'],
        }
      },
       err =>{
        if(err){
          console.error(err);
          alert("Erro ao abrir")
          return
        }
        Quagga.start();
       }
      )
     }
  },[])
  return (
   <>
    <Video id="video" />
    </>
  );
}

export default Main;
