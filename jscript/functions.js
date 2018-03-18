	function mask_date(){
		var n_char = document.getElementById("txtdata").value.length;
		if (n_char == 2){
		document.getElementById("txtdata").value = document.getElementById("txtdata").value + "/";
		}
		if (n_char == 5){
		document.getElementById("txtdata").value = document.getElementById("txtdata").value + "/";
		}
	}
	
	function mask_cep(){
		var c_char = document.getElementById("cepdata").value.length;
		if (c_char == 5){
		document.getElementById("cepdata").value = document.getElementById("cepdata").value + "-";
		}
	}
	
	function mask_tel(){
		var t_char = document.getElementById("teldata").value.length;
		if (t_char == 2){
		document.getElementById("teldata").value = "(" + document.getElementById("teldata").value + ") ";
		}
		if (t_char == 10){
		document.getElementById("teldata").value = document.getElementById("teldata").value + "-";
		}
	}