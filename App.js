class Persona {
	constructor (name, height, age){
		this.name = name;
		this.height = height;
		this.age = age;
		
	}
}



class UI {

		addProduct(Persona){
			const productList = document.getElementById('product-list');
			const element = document.createElement('div');
		
				
			
		}


		deleteProduct(){
			
		}


		showMessage(){
			
		}


}
 


/// DOM Event

document.getElementById('product-form')
	.addEventListener('submit', function (e) {

		document.getElementById




		const name = document.getElementById('name').value;
		const height = document.getElementById('height').value;
		const age = document.getElementById('age').value;
		console.log(name, height, age);

		
		var http = require('http');
		var fs = require('fs');

		fs.whiteFile('./data/personas.txt' , 'Hola',function(error){
			if (error){
				console.log(error)
			}else {
				console.log('Archivo Creado');
			}
		});



		 alert('Datos Cargados');


///  Quita el Refresco por Default

		e.preventDefault();
	 })