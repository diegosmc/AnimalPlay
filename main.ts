import { Cachorro } from "./cachorro"; 
import prompt from 'prompt-sync';

let dog: Cachorro = new Cachorro("Bob", 100, 50, 70,); 

let teclado = prompt();
let option: number = 0; 

while (option != 9 && !dog.estaCansado()) {
    
console.log()
    console.log("########## Escolha a função de Bob #########")
    console.log("|1. Comer                                  |")
    console.log("|2. Dormir                                 |")
    console.log("|3. Receber Carinho                        |")
    console.log("|4. Morder o Carteiro                      |")
    console.log("|5. Ganhar Petisco                         |")
    console.log("|6. Brincar                                |")
    console.log("|7. Imprime Infos                          |")
    console.log("|9. Sair                                   |")
    console.log("###########################################")
    console.log()

    option = +teclado("Escolha Seu Destino: ")

    switch (option) {
        case 1: 
        dog.comer();
       console.log(dog.status());
        break;
        
        case 2: 
        dog.dormir();
        console.log(dog.status());
        break;
        
        case 3: 
        dog.receberCarinho();
        console.log(dog.status());
        break;
        
        case 4: 
        dog.morderCarteiro();
        console.log(dog.status());
        break;
        
        case 5:
        dog.ganharPetisco();
        console.log(dog.status());
        break;

        case 6: 
        let brincar: number = +teclado("Por quanto tempo você vai brincar com o Bob? ")
        dog.brincar(brincar);
        console.log(dog.status());
        break;

        case 7:
        console.log(dog.status());
        break;    
    }
} 
console.log("Ops! Bob está muito cansado para brincar agora, quem sabe mais tarde! Até mais...")