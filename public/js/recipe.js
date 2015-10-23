// CLIENT-SIDE JAVASCRIPT
// On page load

$(document).ready(function(){


function addComment(){
    var userComment = document.getElementById("userComment").value;
	document.getElementById("ui-state-default").innerHTML = userComment;
}

});