function celciusToFereihneit(celcius){

    return (celcius *9)/ 5 +32  ; 
}
function generateRandomNumber(){
    return Math.floor(Math.random()*100) +1 ; 
}

module.exports = {

    celciusToFereihneit , 
    generateRandomNumber
} ; 