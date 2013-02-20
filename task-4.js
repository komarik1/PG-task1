function applyCSS(id, arg){
	var str =  '';
	for (var key in arg){
		str += key +':'+arg[key]+";"
	}
	var stl = document.createElement("style");
	stl.innerHTML='#'+id+'{'+str+'}';
	document.getElementById(id).appendChild(stl);
}; 


function clone (id){
	var clone = id.cloneNode(true);
	return clone;
}