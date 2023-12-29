

const menubtn=document.getElementById("menu");
const menuitems=document.getElementById('menuitems');
const menubox=document.getElementById('menubox');
let isblack=false; 


menubtn.addEventListener('click',()=>{
    

    if(isblack){
        menubtn.style.backgroundColor="";
    }else{
        menubtn.style.backgroundColor="black";
    }
    isblack =! isblack;
    menuitems.classList.toggle('hidden')
})

//  ############################## add to cart js ########################################
document.addEventListener('DOMContentLoaded', function() {
const cartbutton=document.getElementById('cartbutton');
const cartpage=document.getElementById('cartpage');
// cartpage.style.display='none';
cartbutton.addEventListener('click',function(){
    console.log('hy')
    cartpage.classList.toggle('hidden')
})
})






// ######################### cart page code ###################
const minusbtn=document.getElementById('minus');
const plusbtn=document.getElementById('plus');
const itmnumbers=document.getElementById('itm-numbers');
const updatevalue=document.getElementById('update-value');
const slectitm=document.getElementById('select-item');
const cartno=document.getElementById('cartno');
// let carno=0;
let count=0

slectitm.addEventListener('change',function(){
    const value=slectitm.value;
   
     updatevalue.innerHTML=value;
      itmnumbers.innerHTML='1';
    //   itmnumbers.innerHTML.value=+1;
})
plusbtn.addEventListener('click',function(){
    const value=parseInt (slectitm.value);
    const currentvalue=parseInt(itmnumbers.innerHTML)
    if(currentvalue < 10){
       
       itmnumbers.innerHTML=currentvalue + 1;
       updatevalue.innerHTML=parseInt(updatevalue.innerHTML) + value;
    }
       
 
    
})

minusbtn.addEventListener('click',function(){
   const value=parseInt (slectitm.value);
   const currentvalue=parseInt(itmnumbers.innerHTML)
   if(currentvalue > 0){
      
      itmnumbers.innerHTML=currentvalue - 1;
      updatevalue.innerHTML=parseInt(updatevalue.innerHTML) - value;
   }
    
})
const addTocart=document.getElementById('addTocart');
const additems=document.getElementById('addedItems');

let clickcount=0;
let cartcurrent=parseInt(cartno.innerHTML);
addTocart.addEventListener('click',function(){
   
    if(clickcount<10){
     const selectItem=document.getElementById('select-item');
     const valueofadditem=updatevalue.innerHTML;
     const selectedIndex=selectItem.selectedIndex;
     if(selectedIndex !== -1){
        const optionText = selectItem.options[selectedIndex].textContent;
        cartcurrent++;
        cartno.innerHTML=cartcurrent;
        const maindiv=document.createElement('div');
        maindiv.classList.add('item-container');
        const newItem = document.createElement('div');
        newItem.textContent = optionText + " $" + valueofadditem;
        maindiv.append(newItem)
        const removebutton=document.createElement('button')
        removebutton.textContent="remove";
        removebutton.classList.add('buttonstyle')
        maindiv.append(removebutton)
        additems.appendChild(maindiv);
        clickcount++;
        removebutton.addEventListener('click', function() {
            maindiv.remove(); // This line removes the corresponding maindiv
            clickcount--;
            if(cartcurrent > 0  ){
                const selectedIndex = selectItem.selectedIndex;
                if(selectedIndex !== -1){
                    cartcurrent--;
                    cartno.innerHTML=cartcurrent;
                }
               
            }
        });
     }
     }else{
        alert('you cannot add items more then 10')
     }
})


// ############# add to cart option #################

const select=document.getElementById('select-item');
const option=document.getElementById('optionselect');
option.slelected='true';
option.disabled='true';