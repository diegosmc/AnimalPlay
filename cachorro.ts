export class Cachorro {

    constructor(
      private _nome: string,
      private _energia: number,
      private _felicidade: number,
      private _ataque: number,
  
    ) { }
  
public status(): string {
      return (
        "Cachorro: \n" +
        "\nNome: " + this._nome +
        ("\n Energia: " + this._energia.toFixed(1)) +
        ("\n Feliciade: " + this._felicidade.toFixed(1)) +
        ("\n Ataque: " + this._ataque.toFixed(1)))
    }
public comer(): void {
      this._energia += 10;
      console.log("Você esta com fome, Bob... Coma!")
    }
public dormir(): void {
      this._energia += 20;
      this._felicidade += 20;
      console.log("Bob, você está cansado, vai dormir!")
    }
public receberCarinho(): void {
      this._felicidade += 30;
      this._energia += 10;
      console.log("Bom Garoto!!")
    }
public morderCarteiro(): void {
      this._ataque += 10 + this.randomizar(6)
      this._energia -= 5 + this.randomizar(10) 
      this._felicidade -= 5 + this.randomizar(10)
  
      if (this._energia < this.randomizar(20)) {
        console.log("O Carteiro foi mais rápido... Mais sorte da próxima vez Bob! ")
      } else {
        console.log("Boa Bob! Bom Garoto!")
      }
    }
public ganharPetisco(): void {
      this._felicidade += this.randomizar(10);
      this._energia += this.randomizar(5)
      let dadoDaMordida = this.randomizar(10);
  
      if (this._energia > dadoDaMordida) {
        console.log("Opa Bob, assim não vai pegar o carteiro!")
      } else {
        console.log("Pega, Bob")
      }
    }
public brincar(brinca: number): void {
      this._felicidade += 10
      this._energia -= brinca * this.randomizar(10)
    }
public estaCansado(): boolean{
  
      if (this._energia < 80){
        return true;
      }
        else{
        return false;
      }
    }
private randomizar(fator: number): number{ 
        return Math.random() * fator
    }
  }