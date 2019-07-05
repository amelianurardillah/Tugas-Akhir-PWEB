
function cari() {
	var kata = document.formcari.keyword.value;
	var hasil= "http://www.google.com/search?q=" + kata ;
	window.open(hasil, 'google', config='height=500, width=auto, scrollbars=yes location=yes') 
}

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function daftar() {
	var nama= document.formdaftar.nama.value;
	if(nama== "") alert("nama tidak boleh kosong");
}