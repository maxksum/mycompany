function submitForm() {
  if (document.getElementById('name').value == '' || document.getElementById('mail').value == '' || document.getElementById('comment').value == '') {
    alert('Not all fields are filled!');
  } else {
    document.getElementById('feedback').style.display = 'block';

    document.getElementById('name').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('comment').value = '';
  }
}

function getRandom() {
  if (document.getElementById('firstnumber').value == '' || document.getElementById('secondnumber').value == '' || isNaN(document.getElementById('firstnumber').value) || isNaN(document.getElementById('secondnumber').value)) {
    document.getElementById('answer').style.display = 'none';
    alert('Data entered incorrectly!');
  } else {
    let x = parseInt(document.getElementById('firstnumber').value);
    let y = parseInt(document.getElementById('secondnumber').value);

    if (x > y) {
      min = y;
      max= x;
    } else {
      min = x;
      max = y;
    }

    let rand = Math.floor(Math.random() * (max - min + 1) + min);

    document.getElementById('answer').style.display = 'block';
    document.getElementById('randomnumber').innerHTML = rand;
  }
}
