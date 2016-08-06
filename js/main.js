var jsonObject = new Object();
jsonObject.sideName = 'cuda';
jsonObject.subject = 'cuda이용하기';
jsonObject.context = 'what the test!';

var text = JSON.stringify(jsonObject);

function test(x){
	m = document.getElementById('side').childNodes[1];
	
	attacha = document.createElement('a');
	attacha.href = '#what';
	attacha.textContent = 'add';
	li1 = document.createElement('li');
	li1.appendChild(attacha);
	m.appendChild(li1);

}