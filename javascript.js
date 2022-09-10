


const mySetofItems =new Set(['Tv','pc','remote','pen'])

mySetofItems.forEach(function(val){
    console.log(val)
})


mySetofItems.forEach((pa)=>{
    console.log(pa);
})


mySetofItems.add('Tv');
mySetofItems.add('marker');
mySetofItems.add('mobile');
mySetofItems.add('desktop');
mySetofItems.add('mouse');
mySetofItems.add('keyboard');
mySetofItems.add('chair');

mySetofItems.forEach((pa)=>{
    console.log(pa);
})


const myName ='Khan';
mySetofItems.add(myName)
mySetofItems.forEach((pa)=>{
    console.log(pa);
})




mySetofItems.delete('desktop')

for(const x of mySetofItems.values()){
    console.log(x)
//     }

const itemsAndPrice = new Map([
   ["Tv", 500],
    ["PC", 400],
    ["Pen",10],
]);
console.log(itemsAndPrice.get('Tv'));

itemsAndPrice.set('car','BMW');

console.log(itemsAndPrice.get('car'))

itemsAndPrice.forEach((key,val)=>{
    console.log(key+":"+val)
})

itemsAndPrice.set('Bik','Chinai');
var theName = 'Name'
itemsAndPrice.set(theName,'haseb')

for(const x of itemsAndPrice.entries()){
    console.log(x)
}
console.log(itemsAndPrice.has('Bik'))

console.log(itemsAndPrice.delete('Bik'));



function myfunc(){
    const theMessage = document.getElementById('msg');
          theMessage.innerHTML = ' ';

    let x = document.getElementById('theInput').value;

    try {
        if (x ==' ') throw "Empty Input box not allowed";
        if (isNaN(x))throw "Only number is valid";
        x = Number(x)
        if (x <5) throw "it is small number"
        if (x >10) throw "it is too big number"
    } catch (error) {
        theMessage.innerHTML = error
    }
    finally{
        document.getElementById('theInput').value = ' ';
    }
}



let x =1;

const theMessage = document.getElementById('msg');
try {
    x.toPrecision(500)
    console.log(x)
} catch (error) {
    theMessage.innerHTML= error.name
    
}



try {
    k.toUperCase()
} catch (error) {
    theMessage.innerHTML=error.name
}