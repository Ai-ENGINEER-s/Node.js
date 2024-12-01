// "I/O operations "
// const fs = require('fs')

// fs.readFile('myTextFile.txt', 'utf-8' , (err , data)=>{


// if(err){console.log('Erreur lors de la lecture du fichier : ' ,err ); return ; }

// console.log('Contenu du fichier : ' , data )
// })



// "ouput operations "



// fs.appendFile('myTextFile.txt', 'Mais pourquoi depuis la tu te marie pas BARRY ou bien tu es celibataire sometime i am happy and sometime not ', 'utf-8' , (err)=>{
//     if (err){
//         console.log('Erreur lors de l\'ecriture dans le fichier : ', err); return ; 
//     }
//     console.log('Le fichier a été écrit avec succés ')
// })


const http = require('http');

// Fonction simulant une tâche CPU intensive
function calculIntensif() {
  let total = 0;
  for (let i = 0; i < 1e9; i++) {  // Boucle énorme
    total += i;
  }
  return total;
}

const server = http.createServer((req, res) => {
  if (req.url === '/compute') {
    const result = calculIntensif();  // Bloque ici pendant plusieurs secondes
    res.end(`Result: ${result}`);
  } else {
    res.end('Hello, World!');
  }
});

server.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
