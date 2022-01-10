class Persona {
	constructor (name, height, age){
		this.name = name;
		this.height = height;
		this.age = age;
		
	}
}



class UI {

		addProduct(){

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

		const product = new Persona(name, height, age);


		console.log(new Persona(name, height, age));
 

		// alert('Datos Cargados');


///  Quita el Refresco por Default

		e.preventDefault();
	 })