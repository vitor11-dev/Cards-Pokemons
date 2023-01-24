export const getStartedButton = document.getElementById('getStartedButton');
export const loading = document.querySelector('.lds-spinner');

export function createModal(imgParam, nameParam, heigthParam, expParam) {
  const modalContainer = document.querySelector('.modalContainer');

  const modal = document.createElement('div');
  const img = document.createElement('img');
  const description = document.createElement('div');
  const name = document.createElement('h3');
  const habilities = document.createElement('div');
  const heigth = document.createElement('p');
  const exp = document.createElement('p');

  modal.className = 'modal';
  img.className = 'img';
  description.className = 'description';
  name.className = 'name';
  habilities.className = 'habilities';
  heigth.className = 'heigth';
  exp.className = 'exp';

  img.src = imgParam;
  name.innerText = nameParam;
  heigth.innerText = `Heigth: ${heigthParam}`;
  exp.innerText = `exp: ${expParam}`;

  modal.appendChild(img);
  modal.appendChild(description);
  description.appendChild(name);
  description.appendChild(habilities);
  habilities.appendChild(heigth);
  habilities.appendChild(exp);

  modalContainer.appendChild(modal);
}
