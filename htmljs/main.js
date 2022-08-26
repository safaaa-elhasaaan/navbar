

let opens = document.getElementById('open');
let closese= document.getElementById('close');
let container = document.getElementById('container');

closese.onclick =function(){
closese.classList.add('head')
container.classList.add('head')
opens.classList.remove('head')

}
opens.onclick =function(){
    opens.classList.add('head')
    container.classList.remove('head')
    closese.classList.remove('head')
    
    }