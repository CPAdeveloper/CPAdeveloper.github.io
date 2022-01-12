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

		




		const name = document.getElementById('name').value;
		const height = document.getElementById('height').value;
		const age = document.getElementById('age').value;
		console.log(name, height, age);

		



		 alert('Datos Cargados');


///  Quita el Refresco por Default

		//e.preventDefault();
	 })



/// Reacciona al CLick
var iconoVar = document.getElementById('SVG1')
iconoVar.addEventListener("click", clicked)

function clicked(){
	if 	(SVG1.classList.contains('tutuca')){
		SVG1.classList.remove('tutuca');
		SVG1.classList.add('aniClick');
		 } else {
		SVG1.classList.remove('aniClick');
		SVG1.classList.add('tutuca');

		 }
		///alert('Funciona EventListener');

}