// card 4 & 5
function showData(title, firstValue, secondValue){
    // get the data from html using id
    const title1 = document.getElementById(title).innerText;
    const firstValue1= document.getElementById(firstValue).innerText;
    const secondValue2 = document.getElementById(secondValue).innerText;
    const totalArea = 0.5 * parseFloat(firstValue1) * parseInt(secondValue2);
    const total = totalArea.toFixed(2);
    
    // show the data
    displayData(title1, total, count)
    
    };



    // function get data
function displayData(title, total, count,) {
    // show the data
    const container = document.getElementById('table-container');
  
    const tr = document.createElement('tr');
    tr.innerHTML = `
   
   <td>${count}</td>
   <td>${title}</td>
   <td>${total}cm<sup>2</sup></td>
   <td>
   <button class='btn btn-primary'>Covert to m<sup>2</sup></button>
   </td
   
   `;
    container.appendChild(tr);
  };
  
  
  
  // background color Random Changes
  
  const cards = document.querySelectorAll('.card');
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  
  function changeBackgroundColor(card) {
    const color = getRandomColor();
    card.style.backgroundColor = color;
  };
  
  
  // Attach event listeners to all card elements
  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      changeBackgroundColor(card);
    });
  
    card.addEventListener('mouseout', () => {
      card.style.backgroundColor = '';
    });
  });
  
  
  