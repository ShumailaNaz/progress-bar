

// Objects to be test
var arr = [
    { Name: "Crawling Web", Time: 5, Divisions: 5 },
    { Name: "Scraping Content", Time: 10, Divisions: 5 },
    { Name: "Semantic Modeling", Time: 5, Divisions: 4 },
    { Name: "Natural Language Processing", Time: 8, Divisions: 5 },
    { Name: "Competitive Analysis", Time: 5, Divisions: 4 },
    { Name: "Content Relevance", Time: 5, Divisions: 4 }
];

// Analyze Button control on input
let input_txt=document.getElementById("txt");
let btn=document.getElementById("btn-analyze");
input_txt.addEventListener('input', () => {
 if(input_txt.value.length>0){
  // console.log(input_txt.value.length)
  // console.log(btn)
btn.disabled=false;
btn.classList.remove("disable");
 }
})



// Analyze Button Event function

let disp=document.getElementById("object");


function analyze(){
for(let i=0;i<arr.length;i++){
let testing=document.createElement("p");
let span=document.createElement("span");
// span.innerText=arr[i].Time;
span.style.paddingLeft="5%";
testing.innerText=arr[i].Name;
testing.appendChild(span);
testing.classList.add("p-m")
disp.appendChild(testing);
btn.classList.add("disable");
btn.innerHTML='<i class="fa-solid fa-circle-notch"></i>';
btn.disabled=true;
let counter=0;
let diff=((arr[i].Time/arr[i].Divisions)/arr[i].Time)*10000;
// console.log("ghhjhj"+diff);
for(let j=0;j<arr[i].Divisions;j++){
  span.innerText=counter+"%";
  setInterval(()=>{
    if(counter>=100){
      clearInterval();
    }else{
      counter += arr[i].Divisions;
    span.innerText=counter+"%";
    }
     },diff);
   
    }



  }}

//   let interval;
//   let counter=0;
//   for(let i=0;i<arr.length;i++){
 
//   let diff=((arr[i].Time/arr[i].Divisions)/arr[i].Time)*100;
//   console.log("diff"+i+diff);
//   // console.log("helloe"+i+((arr[i].Time/arr[i].Divisions)/arr[i].Time)*100);
//   interval=setInterval(tests());

// }

// function tests(){
//   span[i].innerText=counter;
//   console.log("span"+i+span[i].innerText);
//  counter+=diff;
//  console.log("counter"+i+counter);
//  if(counter==100){
//    clearInterval(interval);
//    }
// }

let interval;

let parap=document.getElementById("para");
let pspan=document.getElementById("paraspan");


for(let i=0;i<arr.length;i++){

}




  