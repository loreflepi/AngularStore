import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'angular-store';
  description = 'For Harry Potter fans';
  casita = '';
  casas: Array<string> = ['Hufflepuff', 'Gryffindor', 'Ravenclaw', 'Slytherin'];
  palabras = 'hola hola hola hola hola no';
  numeros: Array<number> = [1, 8, 0, 4, 7, 3];
  texto = 'The Dursleys are a well-to-do, status-conscious family living in Surrey, England. Eager to keep up proper appearances, they are embarrassed by Mrs. Dursley’s eccentric sister, Mrs. Potter, whom for years Mrs. Dursley has pretended not to know. On his way to work one ordinary morning, Mr. Dursley notices a cat reading a map. He is unsettled, but tells himself that he has only imagined it. Then, as Mr. Dursley is waiting in traffic, he notices people dressed in brightly colored cloaks. Walking past a bakery later that day, he overhears people talking in an excited manner about his sister-in-law’s family, the Potters, and the Potters’ one-year-old son, Harry. Disturbed but still not sure anything is wrong, Mr. Dursley decides not to say anything to his wife. On the way home, he bumps into a strangely dressed man who gleefully exclaims that someone named “You-Know-Who” has finally gone and that even a Muggle like Mr. Dursley should rejoice. Meanwhile, the news is full of unusual reports of shooting stars and owls flying during the day. That night, as the Dursleys are falling asleep, Albus Dumbledore, a wizard and the head of the Hogwarts wizardry academy, appears on their street. He shuts off all the streetlights and approaches a cat that is soon revealed to be a woman named Professor McGonagall (who also teaches at Hogwarts) in disguise. They discuss the disappearance of You-Know-Who, otherwise known as Voldemort. Dumbledore tells McGonagall that Voldemort killed the Potter parents the previous night and tried to kill their son, Harry, as well, but was unable to. Dumbledore adds that Voldemort’s power apparently began to wane after his failed attempt to kill Harry and that he retreated. Dumbledore adds that the baby Harry can be left on the Dursleys’ doorstep. McGonagall protests that Harry cannot be brought up by the Dursleys. But Dumbledore insists that there is no one else to take care of the child. He says that when Harry is old enough, he will be told of his fate. A giant named Hagrid, who is carrying a bundle of blankets with the baby Harry inside, then falls out of the sky on a motorcycle. Dumbledore takes Harry and places him on the Dursley’s doorstep with an explanatory letter he has written to the Dursleys, and the three part ways. Analysis From the outset, Rowling creates a great buzz about the protagonist of the story, Harry Potter, both for the other characters in the story and for us, the readers. She does not explain Harry’s importance but simply shows how his existence affects the world. Mr. Dursley, for example, encounters all sorts of unusual occurrences—a cat reading a map, people walking around in cloaks, the giddy mention of the departure of someone called You-Know-Who. These omens create a potent aura of mystery around Harry. Additionally, though we do not yet understand why Harry is special, we see that he is destined to play an important role. Rowling situates him in opposition to the powerful and feared Voldemort, and it becomes clear that these two figures will probably confront each other at some point in a climactic battle. The contrast that Rowling establishes between day and night prefigures the more important contrast between the story’s ordinary world and its wizard world. Mr. Dursley, who walks around during the day, epitomizes the boredom and dullness of everyday life, while Albus Dumbledore, who slinks around at night, epitomizes the fantasy and mystery of wizardry. His act of magically putting out all the streetlights near the Dursleys’ house creates a separation between these two realms. Professor McGonagall’s ability to take the shape of both a cat and a human illustrates the difference between wizards, who have magic at their disposal, and Muggles, who do not. But Rowling soon shows us a much greater separation—a geographical one—between these two realms, carrying us eventually from an ordinary English town into the magical places that wizards frequent. This first chapter introduces a number of elements important to the story without explaining them, stirring our curiosity and emphasizing the idea of this mysterious other world that is far away from everyday reality. The word “Muggle,” for example, is used repeatedly, and though we hear it referred to humans, we do not fully understand its associations. However, even though the meaning of the word escapes us, we feel the importance of the distinction between Muggles and non-Muggles. Similarly, we feel that there is something meaningful about Harry’s lightning-bolt forehead scar, though we cannot explain it any more than Harry can. Like Harry, we are forced to accept a lot of information we cannot process at first, so that we are humbled before the complexity of the wizards’ world. It is important that Harry’s initiation into magic is gradual so that we can identify with what he is feeling; like us, Harry is entering an unknown world.';
  constructor() { }

  ngOnInit(): void {
    this.repetidos(this.palabras);
  }

  addHouses( nombre: string): void {
    this.casas.push(nombre);
  }

  deleteHouse(i: number): void {
    this.casas.splice(i, 1 );
  }

  mayor(numeros: number[]): void{
    numeros.reduce((aux, value) => {
      if (value > aux){
        aux = value;
      }
      return aux;
    });
  }

  repetidos(palabras: string): void{
    const mapa = new Map();
    palabras.split(' ').forEach(value => {
      if (mapa.has(value)){
        mapa.set(value , mapa.get(value) + 1);
      }
      else{
        mapa.set(value, 1);
      }
    });
    console.log(mapa);
  }

  numeritos(numeros: Array<number>): void{
    numeros.reduce((value, current) => value + current);
    numeros.filter(value => {
      (value % 2 === 0);
    });
  }

  dificil(): void{
    const objeto: Array<any> = [];
    let cont = 0;
    for (let i = 0; i < this.casas.length; i++){
        objeto[i] = {name: this.casas[i], cont: cont++};
    }
  }

  palabraRepetida(): Map<string, number>{
    const mapa = new Map();
    let reemplazo = '';
    reemplazo = this.texto.replace(',', '');
    reemplazo = reemplazo.replace('.', '');
    reemplazo.split(' ').filter(value => value.length >= 3).forEach(value => {
      if (mapa.get(value) === undefined){
        mapa.set(value, 1);
      }
      else{
        mapa.set(value, mapa.get(value) + 1);
      }
    });

    const mapSort1 = new Map([...mapa.entries()].sort((a, b) => b[1] - a[1]));

    const mapIter = mapSort1.keys();
    const palabra = [];
    const cont = [];
    let llave = '';
    for (let i = 0; i < 5; i++) {
      llave = mapIter.next().value;
      palabra.push(llave);
      cont.push(mapSort1.get(llave));
    }
    console.log(`Se repite ${palabra} ${cont} veces`);
    return mapSort1;
  }
}
