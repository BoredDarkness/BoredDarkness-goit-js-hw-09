import"./assets/modulepreload-polyfill-3cfb730f.js";let e={email:"",message:""};const a=document.querySelector(".feedback-form"),l="feedback-form-state";let s=JSON.parse(localStorage.getItem(l));a.addEventListener("input",r);a.addEventListener("submit",i);s&&(e=s);function r(t){const{name:m,value:o}=t.target;e[m]=o.trim(),localStorage.setItem(l,JSON.stringify(e))}a.email.value=e.email;a.message.value=e.message;function i(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),a.reset(),e.email="",e.message=""}
//# sourceMappingURL=commonHelpers2.js.map
