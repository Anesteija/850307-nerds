var link = document.querySelector(".write-us-btn a");
		var popup = document.querySelector(".popup");
		var overlay = document.querySelector(".overlay");
		var close = popup.querySelector(".popup-close");
		var userName = popup.querySelector("[name=name]");
		var form = popup.querySelector("form");
		var email = popup.querySelector("[name=mail]");
		var message = popup.querySelector("[name=message]");


		link.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.add("popup-show");
			overlay.classList.add("overlay-show");
			userName.focus();
		});

		close.addEventListener("click", function(){
			popup.classList.remove("popup-show");
			popup.classList.remove("popup-error");
			overlay.classList.remove("overlay-show");
		});

		form.addEventListener("submit", function(event){
			if (!userName.value || !email.value || !message.value) { 
				event.preventDefault();
				popup.classList.add("popup-error");
				console.log("ХУЙ!");
			}
		});

		window.addEventListener("keydown", function(event) {  
           if (event.keyCode === 27) { 
           if (popup.classList.contains("popup-show")){
           	popup.classList.remove("popup-show");
           	overlay.classList.remove("overlay-show");
           }
           }
           }); 