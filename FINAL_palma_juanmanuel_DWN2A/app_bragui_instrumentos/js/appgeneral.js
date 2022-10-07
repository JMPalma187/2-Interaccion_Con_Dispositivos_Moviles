'use strict';

/*
 *	PALMA, JUAN MANUEL *
 */

const d = document,
    _id = 'getElementById';
      
let carritoParcial = {
	productos: [],
	prdname: [],
	cantidad: [],
	total: 0,
};

let msjnombr, msjmail, msjdni;

const mediopagosObj = {
    "Efectivo": {
        "Contraentrega": ["Efectivo", "Débito"],
		"QR": ["MercadoPago"],
        "Cripto": ["Bitcoin", "Ethereum", "Dogecoin"]
    },
    "Tarjeta de Crédito": {
        "Visa": ["1 Cuota", "3 Cuuotas", "6 Cuotas", "12 Cuotas"],
		"Mastercard": ["1 Cuota", "6 Cuotas"],
        "American Express": ["1 Cuota", "3 Cuotas", "6 Cuotas"]
    }
}

let totaldeviolas = 0,
	contadortotal = 0;
let carritocompras = d.getElementById('minicarrito');
let divcontainercarrito = d.createElement('div');
	divcontainercarrito.className = 'container';
	carritocompras.appendChild(divcontainercarrito);
let divrowcarrito = d.createElement('div');
	divrowcarrito.className = 'row';
	divcontainercarrito.appendChild(divrowcarrito);
let divcolumncarrito = d.createElement('div');
	divcolumncarrito.className = 'col-12 col-md-4 carrito-preview';
	divrowcarrito.appendChild(divcolumncarrito);
let detallesnombresCompra = d.createElement('p');
	if ((carritoParcial.total) == 0){
		detallesnombresCompra.innerHTML = `No hay productos seleccionados`;
	} else {
		detallesnombresCompra.innerHTML = `<i class="fas fa-guitar"></i> Producto/s: ${carritoParcial.prdname}`;
	}
	detallesnombresCompra.className = `detallescompra`;
	divcolumncarrito.appendChild(detallesnombresCompra);

	divcolumncarrito = d.createElement('div');
	divcolumncarrito.className = 'col-12 col-md-4 carrito-preview';
	divrowcarrito.appendChild(divcolumncarrito);

let totalcarrito = d.createElement('p');
	totalcarrito.className = `detallescompra`;
	totalcarrito.innerHTML = `Tu carrito está vacío`;
	divcolumncarrito.appendChild(totalcarrito);

	divcolumncarrito = d.createElement('div');
	divcolumncarrito.className = 'col-12 col-md-4 carrito-preview';
	divrowcarrito.appendChild(divcolumncarrito);

let totalpagar = d.createElement('span');
	totalpagar.className = `badge badge-total`;
	totalpagar.innerHTML = `U$${carritoParcial.total} es el total`;
	divcolumncarrito.appendChild(totalpagar);

	divcolumncarrito = d.createElement('div');
	divcolumncarrito.className = 'col-12 col-md-6 carrito-preview';
	divrowcarrito.appendChild(divcolumncarrito);

let verCarro = d.createElement('button');
	verCarro.className = `btn btn-detail btn-lg btn-block`;
	verCarro.innerHTML = 'Ver Carro <i class="fas fa-shopping-cart"></i>';
	verCarro.onclick = function (){
		let divModal = d.createElement('div');
				divModal.id = 'modalCarrito';
				divModal.className = 'modal';
				d.querySelector('body').appendChild(divModal);

		let jsmodal = d.createElement('a');
			jsmodal.href = ('javascript:void(0)');
			divModal.appendChild(jsmodal);		
		
		let divmodalcont = d.createElement('div');				
			divmodalcont.className = 'container';
			divModal.appendChild(divmodalcont);	
		let divrowmdlprd = d.createElement(`div`);
			divrowmdlprd.className = `row guitar-cont`;
			divmodalcont.appendChild(divrowmdlprd);
		let divh3Modal = d.createElement(`div`);
			divh3Modal.className = `prd-title`;
			divrowmdlprd.appendChild(divh3Modal);
		let productModal = d.createElement('h1');
			productModal.className = `text-uppercase`;
			productModal.innerHTML = `Tu carrito de compras`;
			divh3Modal.appendChild(productModal);
		let prdResumen = d.createElement(`h2`);
			prdResumen.className = `prd-summary`;
			prdResumen.innerHTML = `Cantidad Total Productos: ${contadortotal}`;
			divh3Modal.appendChild(prdResumen);
		let precioModal = d.createElement('span');
			precioModal.className = `badge badge-price`;			
			precioModal.innerHTML = `US$ ${carritoParcial.total}`;			
			divh3Modal.appendChild(precioModal);	
		
		let conteintabla = d.createElement(`div`);
			conteintabla.className=`container contablita`;
			divModal.appendChild(conteintabla);

		if ((carritoParcial.cantidad) == 0){
			let divvacio = d.createElement(`div`);
				divvacio.className = `divvacio`;
				conteintabla.appendChild(divvacio);
			let carritovacio = d.createElement('h2');
				carritovacio.className = `titulovacio`;
				carritovacio.innerHTML = `No hay productos`;						
				divvacio.appendChild(carritovacio);
			let cantidadvacio = d.createElement('h3');
				cantidadvacio.className = `subtitlevacio`;
				cantidadvacio.innerHTML = `El carrito está vacío`;	
				divvacio.appendChild(cantidadvacio);
			} else {
		
		let tabladetalles = d.createElement(`table`);
			tabladetalles.className = `table table-dark`;
			conteintabla.appendChild(tabladetalles);
		let theaddet = d.createElement(`thead`);
			tabladetalles.appendChild(theaddet);
		let trheaddet = d.createElement(`tr`);
			theaddet.appendChild(trheaddet);
		let thidlista = d.createElement(`th`);
			thidlista.setAttribute(`scope`,`col`);
			thidlista.innerHTML=`#`;
			trheaddet.appendChild(thidlista);
		let thnmprdlista = d.createElement(`th`);
			thnmprdlista.setAttribute(`scope`,`col`);
			thnmprdlista.innerHTML=`Producto/s`;
			trheaddet.appendChild(thnmprdlista);
		let thcantprdlista = d.createElement(`th`);
			thcantprdlista.setAttribute(`scope`,`col`);
			thcantprdlista.innerHTML=`Cantidad`;
			trheaddet.appendChild(thcantprdlista);
		let tbodyprd = d.createElement(`tbody`);
			tabladetalles.appendChild(tbodyprd);
		for (let n = 0; n < carritoParcial.cantidad.length; n++){
			let trproductos = d.createElement(`tr`);
            tbodyprd.appendChild(trproductos);
            let thproductos = d.createElement(`th`);
                thproductos.setAttribute(`scope`, `row`);
				let indit = n+1;
				thproductos.innerHTML = `${indit}`;
                trproductos.appendChild(thproductos);
            let tdnombprd = d.createElement(`td`);
                tdnombprd.innerHTML = `${carritoParcial.prdname[n]}`;           
                trproductos.appendChild(tdnombprd);
            let tdcantprd = d.createElement(`td`);
                trproductos.appendChild(tdcantprd);
            let spancantidad = d.createElement(`span`);
                spancantidad.className = `badge badge-price badge-pill`;
                spancantidad.innerHTML = `${carritoParcial.cantidad[n]}`;
                tdcantprd.appendChild(spancantidad);
				}
			}
			let checkoutbuttonDiv = d.createElement('div');
				checkoutbuttonDiv.className = 'div-boton-checkout';
				divModal.appendChild(checkoutbuttonDiv);

		let checkoutButton = d.createElement('button');
				checkoutButton.className = `btn btn-success btncompra`;
				checkoutButton.dataset.id = `checkout`;
				if ((carritoParcial.total) == 0){
					checkoutButton.disabled = true;	
				} else {
					checkoutButton.disabled = false;
				}
				checkoutButton.onclick = function () {					
					let divModalFormulario = d.createElement('div');
						divModalFormulario.id = 'modalCheckOut';
						divModalFormulario.className = 'modal';
						divModalFormulario.tabIndex = '-1';
						divModalFormulario.setAttribute(`role`,`dialog`);
						divModalFormulario.ariaLabel = 'Modal de Checkout';
						divModalFormulario.ariaHidden = 'true';
						d.querySelector('body').appendChild(divModalFormulario);

					// let jsmodal = d.createElement('a');
					// 	jsmodal.href = ('javascript:void(0)');
					// 	divModalFormulario.appendChild(jsmodal);

					let divModalDialogForm = d.createElement('div');
						divModalDialogForm.className = 'modal-dialog';
						divModalDialogForm.setAttribute(`role`,`document`);
						divModalFormulario.appendChild(divModalDialogForm);

					let divModalContentForm = d.createElement(`div`);
						divModalContentForm.className = `modal-content`;
						divModalDialogForm.appendChild(divModalContentForm);

					let divModalHeaderForm = d.createElement(`div`);
						divModalHeaderForm.className = `modal-header prd-title`;
						divModalContentForm.appendChild(divModalHeaderForm);
					let divModalHeaderTitleForm = d.createElement(`div`);
						divModalHeaderForm.appendChild(divModalHeaderTitleForm);
					let h1ModalForm = d.createElement('h1');
						h1ModalForm.innerHTML = `Tu carrito de compras`;
						divModalHeaderTitleForm.appendChild(h1ModalForm);
					let h2ModalForm = d.createElement(`h2`);
						h2ModalForm.className = `prd-summary`;
						h2ModalForm.innerHTML = `Cantidad Total Productos: ${contadortotal}`;
						divModalHeaderTitleForm.appendChild(h2ModalForm);
					let spanModalForm = d.createElement('span');
						spanModalForm.className = `badge badge-price`;
						spanModalForm.innerHTML = `US$ ${carritoParcial.total}`;
						divModalHeaderTitleForm.appendChild(spanModalForm);

					let divModalBodyForm = d.createElement(`div`);
						divModalBodyForm.className =`modal-body`;
						divModalContentForm.appendChild(divModalBodyForm);
					let divcontcform = d.createElement(`div`);
						divcontcform.className = `contact-form`;
						divModalBodyForm.appendChild(divcontcform);
					let formCompra = d.createElement('form');
						formCompra.method = 'post';
						formCompra.action = 'success.html'
						divcontcform.appendChild(formCompra);
					let formfilanombre = d.createElement(`div`);
						formfilanombre.className = `form-fila`;
						formCompra.appendChild(formfilanombre);
					let divlabelnombre = d.createElement(`div`);
						divlabelnombre.className = `labels-forms`;
						formfilanombre.appendChild(divlabelnombre);
					let labelfullname = d.createElement(`label`);
						labelfullname.setAttribute(`for`,`fullname`);
						labelfullname.className = `col-form-label`;
						labelfullname.innerHTML = `Nombre y Apellido`;
						divlabelnombre.appendChild(labelfullname);
					let divinputnombre = d.createElement(`div`);
						formfilanombre.appendChild(divinputnombre);
					let inputNomApCo = d.createElement ('input');
						inputNomApCo.type = 'text';
						inputNomApCo.className = `form-control`;
						inputNomApCo.name = 'FullName';
						inputNomApCo.placeholder = 'Nombre y Apellido';
						inputNomApCo.required = true;
						divinputnombre.appendChild(inputNomApCo);
					let errorfullname = d.createElement(`small`);
						errorfullname.id = `mensajeerrname`;
						errorfullname.className = 'form-text text-muted';
						divinputnombre.appendChild(errorfullname);
					let formfilaemail = d.createElement(`div`);
						formfilaemail.className = `form-fila`;
						formCompra.appendChild(formfilaemail);
					let divlabelemail = d.createElement(`div`);
						divlabelemail.className = `labels-forms`;
						formfilaemail.appendChild(divlabelemail);
					let labelemail = d.createElement(`label`);
						labelemail.setAttribute(`for`,`mail`);
						labelemail.className = `col-form-label`;
						labelemail.innerHTML = `E-Mail`;
						divlabelemail.appendChild(labelemail);
					let divinputemail = d.createElement(`div`);
						formfilaemail.appendChild(divinputemail);
					let inputemail = d.createElement ('input');
						inputemail.type = 'email';
						inputemail.className = `form-control`;
						inputemail.name = 'Email';
						inputemail.placeholder = 'E-Mail (nombre@dominio.com)';
						inputemail.required = true;
						divinputemail.appendChild(inputemail);
					let erroremail = d.createElement(`small`);
						erroremail.id = `mensajeerrmail`;
						erroremail.className = 'form-text text-muted';
						divinputemail.appendChild(erroremail);
					let formfiladni = d.createElement(`div`);
						formfiladni.className = `form-fila`;
						formCompra.appendChild(formfiladni);
					let divlabeldni = d.createElement(`div`);
						divlabeldni.className = `labels-forms`;
						formfiladni.appendChild(divlabeldni);
					let labeldni = d.createElement(`label`);
						labeldni.setAttribute(`for`,`dni`);
						labeldni.className = `col-form-label`;
						labeldni.innerHTML = `DNI`;
						divlabeldni.appendChild(labeldni);
					let divinputdni = d.createElement(`div`);
						formfiladni.appendChild(divinputdni);
					let inputdni = d.createElement ('input');
						inputdni.type = 'text';
						inputdni.className = `form-control`;
						inputdni.name = 'DNI';
						inputdni.placeholder = 'DNI xx.xxx.xxx';
						inputdni.required = true;
						divinputdni.appendChild(inputdni);
					let errorDNI = d.createElement(`small`);
						errorDNI.id = `mensajeerrdni`;
						errorDNI.className = 'form-text text-muted';
						divinputdni.appendChild(errorDNI);
						let formfiladomicilio = d.createElement(`div`);
						formfiladomicilio.className = `form-fila`;
						formCompra.appendChild(formfiladomicilio);
					let divlabeldomicilio = d.createElement(`div`);
						divlabeldomicilio.className = `labels-forms`;
						formfiladomicilio.appendChild(divlabeldomicilio);
					let labeldomicilio = d.createElement(`label`);
						labeldomicilio.setAttribute(`for`,`adress`);
						labeldomicilio.className = `col-form-label`;
						labeldomicilio.innerHTML = `Domicilio de Entrega`;
						divlabeldomicilio.appendChild(labeldomicilio);
					let divinputdomicilio = d.createElement(`div`);
						formfiladomicilio.appendChild(divinputdomicilio);
					let inputdomicilio = d.createElement ('input');
						inputdomicilio.type = 'text';
						inputdomicilio.className = `form-control`;
						inputdomicilio.name = 'Domicilio';
						inputdomicilio.placeholder = 'Domicilio (Calle, Nro, Piso/Dpto, Ciudad)';
						inputdomicilio.required = true;
						divinputdomicilio.appendChild(inputdomicilio);

					let formfilafecha = d.createElement(`div`);
						formfilafecha.className = `form-fila`;
						formCompra.appendChild(formfilafecha);
					let divlabelfecha = d.createElement(`div`);
						divlabelfecha.className = `labels-forms`;
						formfilafecha.appendChild(divlabelfecha);
					let labelfechaent = d.createElement(`label`);
						labelfechaent.setAttribute(`for`,`address`);
						labelfechaent.className = `col-form-label`;
						labelfechaent.innerHTML = `Fecha de Entrega`;
						divlabelfecha.appendChild(labelfechaent);
					let divinputfecha = d.createElement(`div`);
						formfilafecha.appendChild(divinputfecha);
					let inputfecha = d.createElement ('input');
						inputfecha.type = 'datetime-local';
						inputfecha.className = `form-control`;
						inputfecha.required = true;
						inputfecha.id = `mediodepago`;
						inputfecha.name = `mediodepago`;
						divinputfecha.appendChild(inputfecha);
					let formfilapago = d.createElement(`div`);
						formfilapago.className = `form-fila`;
						formCompra.appendChild(formfilapago);
					let divlabelpago = d.createElement(`div`);
						divlabelpago.className = `labels-forms`;
						formfilapago.appendChild(divlabelpago);
					let labeltipopago = d.createElement(`label`);
						labeltipopago.setAttribute(`for`,`adress`);
						labeltipopago.className = `ol-form-label`;
						labeltipopago.innerHTML = `Seleccione medio y tipo de pago`;
						divlabelpago.appendChild(labeltipopago);
					let divinputpago = d.createElement(`div`);
						formfilapago.appendChild(divinputpago);
					let inputSelpago = d.createElement ('select');
						inputSelpago.id = `mediodepago`;
						inputSelpago.name = `mediodepago`;
						inputSelpago.className = `form-select`;
						divinputpago.appendChild(inputSelpago);
					let opcionefectivo = d.createElement('option');
						opcionefectivo.value = 'Efectivo';
						opcionefectivo.innerHTML = 'Efectivo';
						inputSelpago.appendChild(opcionefectivo);
					let opciontarjeta = d.createElement('option');
						opciontarjeta.value = 'Tarjeta';
						opciontarjeta.innerHTML = 'Tarjeta de Crédito';
						inputSelpago.appendChild(opciontarjeta);


					/* Omar o quien corresponda: como verás, el dropdown del pago me ganó </3.
					Intenté por todos los medios, inclusive con select cascading pero no tuve éxito.
					Esta fue la lógica que usé a lo último, que me trae bien para las TC
					pero no para efectivo. Entiendo que no es tan fácil y quizás
					con un select.oncharge podría ir.

					Te dejé el array que usé para el cascading.
						let selectcuotas = d.createElement ('select');
							selectcuotas.id = 'cuotas';
							selectcuotas.name = 'cuotas';
							selectcuotas.className = `form-select`;
							divinputpago.appendChild(selectcuotas);

							if (opciontarjeta.selected = true){
								let opcion1cuota = d.createElement('option');
									opcion1cuota.value = '1 Cuota';
									opcion1cuota.innerHTML = '1 Cuota';
									selectcuotas.appendChild(opcion1cuota);
								let opcion3cuota= d.createElement('option');
									opcion3cuota.value = '3 Cuotas';
									opcion3cuota.innerHTML = '3 Cuotas';
									selectcuotas.appendChild(opcion3cuota);
								let opcion6cuota = d.createElement('option');
									opcion6cuota.value = '6 Cuotas';
									opcion6cuota.innerHTML = '6 Cuotas';
									selectcuotas.appendChild(opcion6cuota);
								} else {
									let opcion1cuota = d.createElement('option');
									opcion1cuota.value = 'ContraEntrega';
									opcion1cuota.innerHTML = 'Contra Entrega';
									selectcuotas.appendChild(opcion1cuota);
					}*/
						msjnombr = d.getElementById('mensajeerrname');
						msjmail = d.getElementById('mensajeerrmail');
						msjdni = d.getElementById('mensajeerrdni');

					let divBotonesCheckout = d.createElement('div');
						divBotonesCheckout.className = 'div-checkout-btn';
						formCompra.appendChild(divBotonesCheckout);
					let buttonModalForm = d.createElement ('button');
						buttonModalForm.type = 'button';
					let inputDatosCompra = d.createElement ('input');
						inputDatosCompra.id = 'enviodatoscompra';
						inputDatosCompra.type = 'submit';
						inputDatosCompra.className = `btn btn-success btncompra btn-lg btn-block`;
						inputDatosCompra.value = 'Comprar';
						inputDatosCompra.onclick = function (){
						msjnombr.innerHTML = '';
						msjmail.innerHTML = '';
						msjdni.innerHTML = '';
						let nombrecomp = inputNomApCo.value;
						let correo = inputemail.value;
						let dni = inputdni.value;
						if (nombrecomp.length == 0 || nombrecomp.length < 3) {
							msjnombr.innerHTML = '<i class="fas fa-skull-crossbones"></i> Falta ingresar tu Nombre y Apellido mayor a 3 caracteres';
						} else if (correo.length == 0){
							msjmail.innerHTML = '<i class="fas fa-skull-crossbones"></i> Falta ingresar tu Correo';
						}
						else if (dni.length == 0) {
							msjdni.innerHTML = '<i class="fas fa-skull-crossbones"></i> Falta ingresar tu DNI';
						}
					}
					divBotonesCheckout.appendChild(inputDatosCompra);
						// Viejo botón de Submit
						// buttonModalForm.className = `btn btn-success btncompra btn-lg btn-block`;
						// buttonModalForm.innerHTML = `Comprar`;
						// buttonModalForm.onclick = function (){
						// 	msjnombr.innerHTML = '';
						// 	msjmail.innerHTML = '';
						// 	msjdni.innerHTML = '';
						// 	let nombrecomp = inputNomApCo.value;
						// 	let correo = inputemail.value;
						// 	let dni = inputdni.value;
						// 	if (nombrecomp.length == 0 || nombrecomp.length < 3) {
						// 		msjnombr.innerHTML = '<i class="fas fa-skull-crossbones"></i> Falta ingresar tu Nombre y Apellido mayor a 3 caracteres';
						// 	} else if (correo.length == 0){
						// 		msjmail.innerHTML = '<i class="fas fa-skull-crossbones"></i> Falta ingresar tu Correo';
						// 	}
						// 	else if (dni.length == 0) {
						// 		msjdni.innerHTML = '<i class="fas fa-skull-crossbones"></i> Falta ingresar tu DNI';
						// 	} else {
						// 		location.reload();
						// 	}
						// }
						// divBotonesCheckout.appendChild(buttonModalForm);
					let cancelarCompra = d.createElement('button');
						cancelarCompra.type = `button`;
						cancelarCompra.className = `btn btn-danger`;
						cancelarCompra.dataset.id = `cancelarCompra`;
						cancelarCompra.innerHTML = '<i class="fas fa-chevron-left"></i> Volver';
						cancelarCompra.onclick = function () {
							this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
						}
						divBotonesCheckout.appendChild(cancelarCompra);
					/*let closeModal = d.createElement('a');
						closeModal.href = '#';
						closeModal.innerHTML = 'X';
						closeModal.onclick = function () {
							this.parentNode.parentNode.remove();
						}
						divModal.appendChild(closeModal);*/
					}
				checkoutButton.innerHTML = 'Comprar <i class="fas fa-chevron-right"></i>';
				checkoutbuttonDiv.appendChild(checkoutButton);
			let closeModal = d.createElement('a');
				closeModal.href = '#';
				closeModal.innerHTML = 'X';
				closeModal.onclick = function () {
				this.parentNode.remove();
				}
			divModal.appendChild(closeModal);
		}
	divcolumncarrito.appendChild(verCarro);

	divcolumncarrito = d.createElement('div');
	divcolumncarrito.className = 'col-12 col-md-6 carrito-preview';
	divrowcarrito.appendChild(divcolumncarrito);

let vaciarCarro = d.createElement('button');
    vaciarCarro.id = 'reset';
	vaciarCarro.className = `btn btn-danger btn-block`;
	vaciarCarro.innerHTML = 'Vaciar Carro <i class="far fa-trash-alt"></i>';
	vaciarCarro.onclick = function () {
		location.reload();
		totalcarrito.innerHTML = `Tu carrito está vacío`;
		totalpagar.innerHTML = `<span>U$${carritoParcial.total}</span> es el total`;	      				
	}
	divcolumncarrito.appendChild(vaciarCarro);
 
	const aProductos = [
		{
			prdid: 1,
			nombre: `Gibson Slash Les Paul Standard`,
			imagen: `img/gibson01-00.jpg`,
			masfotitos: [`img/gibson01-00.jpg`,`img/gibson01-01.jpg`, `img/gibson01-02.jpg`, `img/gibson01-03.jpg`],
			resumen:  `Gibson Les Paul signature siguiendo las especificaciones del Guitar Hero del Rock, Slash`,
			descripcion: `Gibson y Slash están felices de presentar la Slash Collection Gibson Les Paul™ Standard. Representa las guitarras Gibson influyentes que Slash ha usado durante su carrera, inspirando a múltiples generaciones de guitarristas a lo largo del mundo. La Slash Collection puede ser vista en vivo en el escenario con Slash hoy en día. Cada una de estas Gibson Les Paul Standard tienen una tapa de arce flameado AAA, cuerpo de caoba maciza y toques personales de Slash que incluyen un perfil de mástil en forma de C, pastillas Gibson Custom BurstBucker ™ Alnico 2, accesorios de hardware de colores coordinados, electrónica cableada a mano con condensadores Orange Drop® y un estuche rígido vintage de color marrón. Exclusivo a la colección de Slash, está la firma “calavérica” de Slash en la parte trasera del cuerpo de la guitarra, cuerdas Slash Ernie Ball® y 4 púas Slash Jim Dunlop Tortex®.`,
			precio: 3000,
		},
		{
			prdid: 2,
			nombre: `1961 Gibson SG Standard`,
			imagen: `img/gibson02-00.jpg`,
			masfotitos: [`img/gibson02-00.jpg`,`img/gibson02-01.jpg`, `img/gibson02-02.jpg`, `img/gibson02-03.jpg`],
			resumen:  `Una guitarra clásica que ha quedado marcada en la historia de la música por artistas como Angus Young o Tony Iommi`,
			descripcion: `El SG Standard '61 Sideways Vibrola vuelve al diseño clásico que lo hizo relevante, reproducido y amado, dando forma al sonido a través de generaciones y géneros de música. Como su nombre lo indica, la Gibson SG Standard '61 Sideways Vibrola está equipada con el exclusivo vibrato Sideways de acción de tracción lateral similar a los que se encuentran en los modelos de principios de los 60. Las características estándar incluyen un cuello de caoba cónico delgado y un diapasón de palisandro encuadernado. El cuerpo de caoba presenta un pañuelo en el cuerpo profundamente esculpido, un golpeador en forma de lágrima de 5 capas y una articulación de mástil en el traste 22. El hardware niquelado incluye un puente Tune-O-Matic de estilo clásico y afinadores trapezoidales, además del cordal Sideways Vibrola. Las pastillas son humbuckers 61R y 61T para una voz clásica con mayor potencia y extremo superior. Los controles cuentan con potenciómetros cónicos de audio y condensadores de caída naranja.`,
			precio: 2000,
		},
		{
			prdid: 3,
			nombre: `Gibson EDS-1275 Doubleneck`,
			imagen: `img/gibson03-00.jpg`,
			masfotitos: [`img/gibson03-00.jpg`,`img/gibson03-01.jpg`, `img/gibson03-02.jpg`, `img/gibson03-03.jpg`],
			resumen:  `Un emblema de los 70's, siendo llevada a la fama por Jimmy Page en sus interpretaciones en vivo de Stairway to Heaven`,
			descripcion: `La Gibson EDS-1275 es un diseño icónico que ha capturado la imaginación de fanáticos y jugadores durante generaciones. Desde Jimmy Page ejecutando la clásica y universal Stariway to Heaven, a Slash en los ’90 empleandolá en el cover de Bob Dylan “Knockin’ On Heavens Door”, la Gibson EDS-1275 es un ícono del rock en todo su derecho. `,
			precio: 6500,
		},
		{
			prdid: 4,
			nombre: `1967 Gibson Flying V Vibrola`,
			imagen: `img/gibson04-00.jpg`,
			masfotitos: [`img/gibson04-00.jpg`,`img/gibson04-01.jpg`, `img/gibson04-02.jpg`, `img/gibson04-03.jpg`],
			resumen:  `La Gibson que ha inspirado a músicos como Jimmy Hendrix y Dave Mustaine.`,
			descripcion: `Cuando el Flying V debutó en 1958, se adelantó a su tiempo, unos nueve años más, para ser exactos. La demanda popular ayudó a moldear la decisión de Gibson de reintroducirlo en 1967, esta vez con un nuevo aspecto elegante y un cordal Vibrola. Los codiciados originales cuestan una gran fortuna, pero esta recreación de Custom Shop es accesible y precisa. Cada perfil, contorno y detalle se ha renderizado con un detalle excepcional para una experiencia de ejecución inolvidable.`,
			precio: 5000,
		},
		{
			prdid: 5,
			nombre: `1972 Gibson Firebird`,
			imagen: `img/gibson05-00.jpg`,
			masfotitos: [`img/gibson05-00.jpg`,`img/gibson05-01.jpg`, `img/gibson05-02.jpg`, `img/gibson05-03.jpg`],
			resumen:  `"Guitarra de Gibson que ha hecho magia en manos de Eric Clapton, Gary Moore y Johnny Winter.`,
			descripcion: `Cuando Gibson contrató al famoso diseñador automotor Ray Dietrich para crear una nueva y radical guitarra de cuerpo sólido, la historia del rock cambió. Con su forma desplazada, construcción de cuello y mini-humbuckers abrasadores, el '63 Firebird V se convirtió en un clásico instantáneo. Custom Shop se enorgullece de presentar esta réplica exacta de un original antiguo, que utiliza contornos, dimensiones y métodos de construcción auténticos para una experiencia de ejecuición y propiedad increíble.`,
			precio: 2000,
		},
		{
			prdid: 6,
			nombre: `1970 Gibson Explorer`,
			imagen: `img/gibson06-00.jpg`,
			masfotitos: [`img/gibson06-00.jpg`, `img/gibson06-01.jpg`, `img/gibson06-02.jpg`, `img/gibson06-03.jpg`],
			resumen:  `La Gibson emblema en artistas como James Hetfield y Lzzy Hale.`,
			descripcion: `Ha viajado a escenarios de todo el mundo, pero el ícono de los 70 está de regreso para explorar una nueva generación de guitarristas. Con un par de humbuckers tributo de los 70, cableados a mano con capacitores gota-naranja, este Explorer pide que lo toquen fuerte. Con su clásico acabado blanco, diapasón de palisandro encuadernado, perillas de velocidad negras y herrajes cromados, parece tan icónico como la generación de música que ayudó a crear.`,
			precio: 2000,
		},
	];

let modalAcercaDe = d.getElementById('acercaDe');
	modalAcercaDe.onclick = function () {
		// console.log('Hola Mundo');
		let divModalAcercaDe = d.createElement('div');
			divModalAcercaDe.className = 'modal';
			divModalAcercaDe.tabIndex = '-1';
			divModalAcercaDe.setAttribute(`role`, `dialog`);
			divModalAcercaDe.ariaLabel = `Modal del autor del sitio`;
			divModalAcercaDe.ariaHidden = 'true';
			d.querySelector('body').appendChild(divModalAcercaDe);
		let jsmodal = d.createElement('a');
			jsmodal.href = ('javascript:void(0)');
			divModalAcercaDe.appendChild(jsmodal);
		let divModalAcercaDeDialog = d.createElement('div');
			divModalAcercaDeDialog.className = 'modal-dialog';
			divModalAcercaDeDialog.setAttribute(`role`, `document`);
			divModalAcercaDe.appendChild(divModalAcercaDeDialog);
		let divModalAcercaDeContent = d.createElement('div');
			divModalAcercaDeContent.className = 'modal-content guitar-cont';
			divModalAcercaDeDialog.appendChild(divModalAcercaDeContent);
		let divModalAcercaDeHeader = d.createElement('div');
			divModalAcercaDeHeader.className = 'modal-header about-title';
			divModalAcercaDeContent.appendChild(divModalAcercaDeHeader);
		let divModalAcercaDeTitle = d.createElement('div');
			divModalAcercaDeHeader.appendChild(divModalAcercaDeTitle);
		let divMadalAcercaDeH1 = d.createElement('h1');
			divMadalAcercaDeH1.className = 'acerca-de-h1';
			divMadalAcercaDeH1.innerHTML = 'Acerca De';
			divModalAcercaDeTitle.appendChild(divMadalAcercaDeH1);
		let divModalAcercaDeBody = d.createElement('div');
			divModalAcercaDeBody.className = 'modal-body acerca-de-detail';
			divModalAcercaDeContent.appendChild(divModalAcercaDeBody);
		let divModalAcercaDeFotito = d.createElement('div');
			divModalAcercaDeFotito.className = 'foto-acercade-div';
			divModalAcercaDeBody.appendChild(divModalAcercaDeFotito);
		let imagenModalAcercaDe = d.createElement('img');
			imagenModalAcercaDe.src = `img/autor.jpg`;
			imagenModalAcercaDe.alt = `El bello autor de este sitio, Juan Mnauel Palma`;
			imagenModalAcercaDe.className = `img-fluid`;
			divModalAcercaDeFotito.appendChild(imagenModalAcercaDe);
		let ulModalAcercaDeAutor = d.createElement('ul');
			divModalAcercaDeBody.appendChild(ulModalAcercaDeAutor);
		let liNombreAutor = d.createElement('li');
			liNombreAutor.innerHTML = 'Hola, me llamo Juan Manuel Palma';
			ulModalAcercaDeAutor.appendChild(liNombreAutor);
		let liCarreraAutor = d.createElement('li');
			liCarreraAutor.innerHTML = 'Estudio Diseño y Programación Web';
			ulModalAcercaDeAutor.appendChild(liCarreraAutor);
		let liMateriaAutor = d.createElement('li');
			liMateriaAutor.innerHTML = 'Esta App es para la materia Interacción con Dispositivos Móviles.';
			ulModalAcercaDeAutor.appendChild(liMateriaAutor);
		let liMateriaDocente = d.createElement('li');
			liMateriaDocente.innerHTML =   `La cursé con el profesor Omar Toyos y me está evaluando el profesor Alejandro D'Addezio`;
			ulModalAcercaDeAutor.appendChild(liMateriaDocente);
		let liCaracterEntrega = d.createElement('li');
			liCaracterEntrega.innerHTML = 'El caracter de esta entrega es FINAL.';
			ulModalAcercaDeAutor.appendChild(liCaracterEntrega);
		let liComisionCuatriTurno = d.createElement('li');
			liComisionCuatriTurno.innerHTML = 'Esta materia es del 2do Cuatrimestre, del Turno Noche y Comisión A.';
			ulModalAcercaDeAutor.appendChild(liComisionCuatriTurno);
		let liAnioCursada = d.createElement('li');
			liAnioCursada.innerHTML = 'E IDM la cursé en 2020... 2 años después, rindo el final';
			ulModalAcercaDeAutor.appendChild(liAnioCursada);
		let closeModal = d.createElement('a');
			closeModal.href = '#';
			closeModal.innerHTML = 'X';
			closeModal.onclick = function () {
				this.parentNode.remove();
			}
			divModalAcercaDe.appendChild(closeModal);
	}


let generarproductos = d.getElementById(`productos`);
let nuevoDiv = d.createElement(`div`);
	nuevoDiv.className = 'row ext-center pb-3';
	generarproductos.appendChild(nuevoDiv);
for (let viola in aProductos) {
	let divArticulo = d.createElement(`div`);
		divArticulo.className = `col-10 col-md-4 offset-1 gtr`;
		nuevoDiv.appendChild(divArticulo);
	let divInfoCard = d.createElement(`div`);
		divInfoCard.className = `card-guitar-info`;
		divArticulo.appendChild(divInfoCard);	
	let nuevoH3 = d.createElement('h3');
		nuevoH3.innerHTML = `${aProductos[viola][`nombre`]}`;
		nuevoH3.className = `text-uppercase`;
		divInfoCard.appendChild(nuevoH3);
	let nuevoP = d.createElement('p');
	    nuevoP.innerHTML = `${aProductos[viola][`resumen`]}`;
		divInfoCard.appendChild(nuevoP);
	let nuevoSpan = d.createElement('span');
		nuevoSpan.innerHTML = `US$ ${aProductos[viola][`precio`]}`;
		nuevoSpan.className = `badge badge-price`;
		divInfoCard.appendChild(nuevoSpan);
	let divFotoPrinc = d.createElement(`div`);
		divFotoPrinc.className = `fotoprdpr`;
		divArticulo.appendChild(divFotoPrinc);
	let imgprd = d.createElement(`img`);
        imgprd.src = `${aProductos[viola][`imagen`]}`;
		imgprd.alt = `${aProductos[viola][`nombre`]}`;
		imgprd.className=`img-fluid`;		
		imgprd.onclick = function (){
			let divModal = d.createElement('div');
				divModal.id = 'modalProducto';
				divModal.className = 'modal';
				d.querySelector('body').appendChild(divModal);
			let jsmodal = d.createElement('a');
				jsmodal.href = ('javascript:void(0)');
				divModal.appendChild(jsmodal);
			let divgaleria = d.createElement('div');
				divgaleria.id="galeria";
				divgaleria.className = 'container-fluid';
                divModal.appendChild(divgaleria);
			let imgprinc = d.createElement('img');
				imgprinc.src = `${aProductos[viola][`imagen`]}`;
				imgprinc.id = 'foto';
				imgprinc.className = 'foto';
				divgaleria.appendChild(imgprinc);
			let divModalContainer = d.createElement('div');
				divModalContainer.className = 'container'
				divgaleria.appendChild(divModalContainer);
			let divfotitos = d.createElement('div');
				divfotitos.className = 'row galeria-fotitos';
				divModalContainer.appendChild(divfotitos);
			let aLasfotitos = aProductos[viola];					
				for (let i = 0; i < 4; i++) {
					let divGaleria = d.createElement('div');
						divGaleria.className = 'col-3';
						divfotitos.appendChild(divGaleria);
					let fototito = d.createElement('img');
            		    fototito.src = `${aLasfotitos[`masfotitos`][i]}`;
						divGaleria.appendChild(fototito);
					}				
			let grande, aImgs;
				grande = d.querySelector('#foto');					
				aImgs = d.querySelectorAll('#galeria > div > div img');		
				for (let img of aImgs) {
					img.onclick = function () {
						// console.log(this.src);
						grande.src = this.src;
					}
				}
				// console.log(aLasfotitos[`masfotitos`].length, aImgs.length);
				let closeModal = d.createElement('a');
				closeModal.href = '#';
				closeModal.innerHTML = 'X';
				closeModal.onclick = function () {
				this.parentNode.remove();
				}
			divModal.appendChild(closeModal);			
		} 
	    divFotoPrinc.appendChild(imgprd);	
	let divBtn = d.createElement(`div`);
		divBtn.className = `divbotones`;
		divFotoPrinc.appendChild(divBtn);

	let divBotonProducto = d.createElement(`div`);
		divBotonProducto.className = `div-producto-boton`;
		divBtn.appendChild(divBotonProducto);

	let nuevoDetail = d.createElement('button');
		nuevoDetail.className = `btn btn-detail btn-block`;
		nuevoDetail.innerHTML = 'Ver Detalles <i class="fas fa-guitar"></i>';
		nuevoDetail.onclick = function () {
			let divModalDetalles = d.createElement('div');
				divModalDetalles.id = 'modalProducto';
				divModalDetalles.className = 'modal';
				divModalDetalles.tabIndex = '-1';
				divModalDetalles.setAttribute(`role`,`dialog`);
				divModalDetalles.ariaLabel = `Modal de Detalles de ${aProductos[viola][`nombre`]}`;
				divModalDetalles.ariaHidden = 'true';
				d.querySelector('body').appendChild(divModalDetalles);
			let jsmodal = d.createElement('a');
				jsmodal.href = ('javascript:void(0)');
				divModalDetalles.appendChild(jsmodal);
			let divModalDetallesDialog = d.createElement('div');
				divModalDetallesDialog.className = 'modal-dialog';
				divModalDetallesDialog.setAttribute(`role`,`document`);
				divModalDetalles.appendChild(divModalDetallesDialog);
			let divModalDetallesContent = d.createElement(`div`);
				divModalDetallesContent.className = `modal-content guitar-cont`;
				divModalDetallesDialog.appendChild(divModalDetallesContent);
			let divModalDetallesHeader = d.createElement(`div`);
				divModalDetallesHeader.className = `modal-header prd-title`;
				divModalDetallesContent.appendChild(divModalDetallesHeader);
			let divModalDetallesTitle = d.createElement('div');
				divModalDetallesHeader.appendChild(divModalDetallesTitle);
			let h1ModalDetalles = d.createElement('h1');
				h1ModalDetalles.className = `detalle-h1`;
				h1ModalDetalles.innerHTML = `${aProductos[viola][`nombre`]}`;
				divModalDetallesTitle.appendChild(h1ModalDetalles);
			let modalProductoResumen = d.createElement(`h2`);
				modalProductoResumen.className = `prd-summary`;
				modalProductoResumen.innerHTML = `${aProductos[viola][`resumen`]}`;
				divModalDetallesTitle.appendChild(modalProductoResumen);
			let modalProductoPrecio = d.createElement('span');
				modalProductoPrecio.className = `badge badge-price`;
				modalProductoPrecio.innerHTML = `Precio: U$ ${aProductos[viola][`precio`]}`;
				divModalDetallesTitle.appendChild(modalProductoPrecio);
			let divModalDetalleBody = d.createElement(`div`);
				divModalDetalleBody.className = `modal-body gtrdtl`;
				divModalDetallesContent.appendChild(divModalDetalleBody);
			let detailsModal = d.createElement('p');
				detailsModal.className = `guitar-text`;
				detailsModal.innerHTML = `${aProductos[viola][`descripcion`]}`
				divModalDetalleBody.appendChild(detailsModal);
			let divModalDetallesImagen = d.createElement(`div`);
				divModalDetallesImagen.className = `photo-gallery`;
				divModalDetalleBody.appendChild(divModalDetallesImagen);
			let imgmodal = d.createElement('img');
				imgmodal.src = `${aProductos[viola][`imagen`]}`;
				imgmodal.alt = `${aProductos[viola][`nombre`]}`;
				imgmodal.className = `img-fluid`;
				divModalDetallesImagen.appendChild(imgmodal);

			let divBotonAgregarDetalles = d.createElement(`div`);
				divBotonAgregarDetalles.className = 'modalDetalles-div-btn';
				divModalDetalleBody.appendChild(divBotonAgregarDetalles);
			let agregarModal = d.createElement('button');            
				agregarModal.dataset.id = `${aProductos[viola][`prdid`]}`;
				agregarModal.dataset.val = `${aProductos[viola][`precio`]}`;
				agregarModal.className = `btn btn-success`;
				agregarModal.onclick = function () {
					let valor = parseInt(this.dataset.val);
					let id = parseInt(this.dataset.id);
					let nomprod = `${aProductos[viola][`nombre`]}`;
					let indice = carritoParcial.productos.indexOf(id);
					if (indice == -1) {
						carritoParcial.prdname.push(nomprod);
						carritoParcial.productos.push(id);
						carritoParcial.cantidad.push(1);
						} else {
						carritoParcial.cantidad[indice]++;
					}			
					contadortotal ++;			
					carritoParcial.total = parseInt(carritoParcial.total) + valor;
					detallesnombresCompra.innerHTML = `<i class="fas fa-guitar"></i> Producto/s: ${carritoParcial.prdname}`;
					totalcarrito.innerHTML = `<i class="fas fa-shopping-basket"></i>: Tenés ${contadortotal} producto/s`;
					totalpagar.innerHTML = `U$${carritoParcial.total} es el total`;
										  
				}		
				agregarModal.innerHTML = 'Agregar <i class="fas fa-cart-plus"></i>';
				divBotonAgregarDetalles.appendChild(agregarModal);
			let closeModal = d.createElement('a');
				closeModal.href = '#';
				closeModal.innerHTML = 'X';
				closeModal.onclick = function () {
				this.parentNode.remove();
				}
				divModalDetalles.appendChild(closeModal);
		}
		divBotonProducto.appendChild(nuevoDetail);

		divBotonProducto = d.createElement(`div`);
		divBotonProducto.className = `div-producto-boton`;
		divBtn.appendChild(divBotonProducto);

    let nuevoAgregar = d.createElement('button');            
        nuevoAgregar.dataset.id = `${aProductos[viola][`prdid`]}`;
		nuevoAgregar.dataset.val = `${aProductos[viola][`precio`]}`;
		nuevoAgregar.className = `btn btn-success`;
		nuevoAgregar.onclick = function () {
			let valor = parseInt(this.dataset.val);
			let id = parseInt(this.dataset.id);
			let nomprod = `${aProductos[viola][`nombre`]}`;
			let indice = carritoParcial.productos.indexOf(id);
			if (indice == -1) {			
				carritoParcial.prdname.push(nomprod);	
				carritoParcial.productos.push(id);
				carritoParcial.cantidad.push(1);
			} else {
				carritoParcial.cantidad[indice]++;
			}
			contadortotal ++;			
			carritoParcial.total = parseInt(carritoParcial.total) + valor;
			detallesnombresCompra.innerHTML = `<i class="fas fa-guitar"></i> Producto/s: ${carritoParcial.prdname}`;
			totalcarrito.innerHTML = `<i class="fas fa-shopping-basket"></i>: Tenés ${contadortotal} producto/s`;
			totalpagar.innerHTML = `U$${carritoParcial.total} es el total`;
			
		}		
	    nuevoAgregar.innerHTML = 'Agregar <i class="fas fa-cart-plus"></i>';
		divBotonProducto.appendChild(nuevoAgregar);

		divBotonProducto = d.createElement(`div`);
		divBotonProducto.className = `div-producto-boton`;
		divBtn.appendChild(divBotonProducto);

    let nuevoQuitar = d.createElement('button');            
        nuevoQuitar.dataset.id = `${aProductos[viola][`prdid`]}`;
        nuevoQuitar.dataset.val = `${aProductos[viola][`precio`]}`;
		nuevoQuitar.className = `btn btn-outline-danger`;
		nuevoQuitar.id = 'del';
		nuevoQuitar.onclick = function () {
			let valor = parseInt(this.dataset.val);
			let id = parseInt(this.dataset.id);
			let indice = carritoParcial.productos.indexOf(id);			
			if (indice != -1) {
				if (carritoParcial.productos[indice] > 0) {					
					carritoParcial.cantidad[indice]--;
					carritoParcial.productos[indice]--;					
					carritoParcial.total = parseInt(carritoParcial.total) - valor;
					contadortotal --;					
					detallesnombresCompra.innerHTML = `<i class="fas fa-guitar"></i> Producto/s: ${carritoParcial.prdname}`;
					totalcarrito.innerHTML = `<i class="fas fa-shopping-basket"></i>: Tenés ${contadortotal} producto/s`;
					totalpagar.innerHTML = `U$${carritoParcial.total} es el total`;
				} else {					
					detallesnombresCompra.innerHTML = `<i class="fas fa-guitar"></i> Producto/s: ${carritoParcial.prdname}`;					
					totalcarrito.innerHTML = `<i class="fas fa-shopping-basket"></i>: Tenés ${contadortotal} producto/s`;
					totalpagar.innerHTML = `U$${carritoParcial.total} es el total`;					
				}				
			}
		}		
	    nuevoQuitar.innerHTML = 'Quitar <i class="fas fa-minus"></i>';
		divBotonProducto.appendChild(nuevoQuitar);

		/* ---------------------------------------------------------------
			 Omar o quién sea: Intenté hacer las cosas prolijas y que, cuando el valor
			 de cantidad de un producto determinado fuese 0 -cero-, hiciese
			 un splice en el array que guarda la info.
			 Lamentablemten, fallé, pero te dejo comentado el código para que 
			 veas como estaba yendo la cosa.
		---------------------------------------------------------------------

		let id = aProductos[viola][`prdid`];
		let indice = carritoParcial.productos.indexOf(id);
		if (carritoParcial.productos[indice] = 0){
			let aPrdName = carritoParcial.prdname[indice]; 					
			let aCantidad = carritoParcial.cantidad[indice];
			let aProductos = carritoParcial.productos[indice];
			aPrdName.prdname.splice(indice,1);
			aCantidad.cantidad.splice(indice,1);
			aProductos.productos.splice(indice,1);
			console.log(aPrdName, aCantidad, aProductos);
		}		*/
}

