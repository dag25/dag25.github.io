
const link = document.querySelector('.login-link');
const popup = document.querySelector('.modal-login');
const close = document.querySelector('.modal-close');
const login = popup.querySelector("[name=login]");
const password = popup.querySelector("[name=password]");
const form = popup.querySelector('form');



const isStorageSupport = true;
let storage ="";

try{
   storage = localStorage.getItem('login');

}catch(err){
   isStorageSupport = false;
}




link.addEventListener('click', function(event){ 
   event.preventDefault();  
   popup.classList.add('modal-show');
   
   if(storage){
      login.value = storage;
      password.focus();
   }else{
      login.focus();
   }
});
close.addEventListener('click', function(event){
   event.preventDefault();
   popup.classList.remove('modal-show');
   popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(event){
   
   if(!login.value || !password.value){
      event.preventDefault();
      popup.classList.add('modal-error');
   }else{
      if(isStorageSupport){
      localStorage.setItem("login", login.value);
   }
}
});
window.addEventListener('keydown', function(event){
   if(event.keyCode === 27){
      event.preventDefault();

      if(popup.classList.contains("modal-show")){
         popup.classList.remove("modal-show");
      }
   }
});








