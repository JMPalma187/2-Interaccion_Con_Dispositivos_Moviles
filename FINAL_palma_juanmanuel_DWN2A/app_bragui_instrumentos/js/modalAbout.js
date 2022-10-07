'use strict';

/*
 *	PALMA, JUAN MANUEL *
 */

const d = document,
    _id = 'getElementById';


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


