// 'use script'

let model=document.querySelector('.model');
let overlay=document.querySelector('.overlay');
let btncloseModel=document.querySelector('.close-model');
let btnopenModel=document.querySelectorAll('.show-model');

console.log(btnopenModel);


let openModel=function(){
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');

}
let closeModel=function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');

}
// for(let i=0; i<btnopenModel.length; i++){
//     btnopenModel[i].addEventListener('click', function(){
//         model.classList.remove('hidden');
//         overlay.classList.remove('hidden');

//         // model.style.display='block';
//     })
// }

// btncloseModel.addEventListener('click',function(){
//     model.classList.add('hidden');
//         overlay.classList.add('hidden');
// })

// overlay.addEventListener('click',function(){
//     model.classList.add('hidden');
//         overlay.classList.add('hidden');
// })



////-------DRY   ---------------
for(let i=0; i<btnopenModel.length; i++)
        btnopenModel[i].addEventListener('click',openModel)

btncloseModel.addEventListener('click',closeModel)
overlay.addEventListener('click',closeModel)


//KeyBoardEvent

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !model.classList.contains('hidden')){
       closeModel();
    }
})



