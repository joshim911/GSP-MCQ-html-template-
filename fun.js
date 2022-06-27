let gsp_input_no = 0;
gsp_msq_add_option.onclick = () => {
	gsp_input_no += 1;
	let newDiv = document.createElement('div');
	newDiv.setAttribute('class','input-group mt-3');
	newDiv.innerHTML='<input type="text" class="gsp-mcq-options form-control mr-2" placeholder="Please Write the option" /> <spna id="gsp_mcq_delete_option_'+gsp_input_no+'" class="text-danger gsp-mcq-span" onclick="gsp_mcq_delete_option('+gsp_input_no+')">Delete</span>'
	gsp_mcq_option_box.appendChild(newDiv);

}

function gsp_mcq_delete_option(x){
	let removeItem = document.getElementById('gsp_mcq_delete_option_'+x);
	gsp_mcq_option_box.removeChild(removeItem.parentElement);
	console.log(removeItem.parentElement)
}

gsp_msq_data_submit.onclick = () => {
	let inputs = document.getElementsByClassName('gsp-mcq-options');
	let array = []; 
	let keyName='option_'; let jsonData = {
		'title': 'GSP MCQ',
		'options': null,
		'solution': ''
	};
	for (var i =0; i<inputs.length; i++) {
		array[keyName+i] = inputs[i].value;
	}
	jsonData.options = array;
	console.log(typeof(jsonData));
	console.log(jsonData);

}

/**
 * Visibility
 * 
*/

gsp_add_mcq.onclick = () => {

}

gsp_edit_mcq.onclick = () => {
	
}

gsp_delete_mcq.onclick = () => {
	
}