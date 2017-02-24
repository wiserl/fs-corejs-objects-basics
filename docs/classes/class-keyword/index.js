export const FACTIONS = {
  Autobots: 'autobots',
  Decepticons: 'decepticons'
};

export class Robot{
  constructor(name,faction) {
    this._name = name;
    this._faction = faction;
    this._power = 1000;
    }

  get name(){
    return this._name;
  }
  get faction (){
    return this._faction;
  }
  get power(){
      return this._power;
  }
  
    greet () {
    return `Hi, I'm ${this.name}`
  }
}


export class OptimusPrime extends Robot{
  constructor (name, faction){
    super('Optimus Prime', FACTIONS.Autobots);
  }
  
  taunt(){
    return 'I am going to murder you!';
  }
}

export class Megatron extends Robot{
  constructor (name, faction){
    super('Megatron', FACTIONS.Decepticons);
  }
  
  taunt(){
    return 'No, I am going to murder you!';
  }
  
}
export let optimusPrime = new OptimusPrime("OptimusPrime","Autobots");
export let megatron = new Megatron;("Megatron","Decepticons");
//console.log(megatron.taunt());
export default {
 megatron: new Megatron(),
 optimusPrime: new OptimusPrime()
}
