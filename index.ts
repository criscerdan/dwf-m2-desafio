import * as minimist from "minimist";
import * as _ from "lodash";
import { PelisController } from "./controllers";


function parsearArgs(argv){
  const resultado=minimist(argv);
  return resultado;
}

async function processOptions(args){
  const pelis=new PelisController();
  if(args._[0]==="get"){
    return pelis.get({id:args._[1]})
  }
  if(args._[0]==="search"){
    return pelis.get({search:args});
  }
  if(args._[0]==="add"){
    return pelis.add({id:args.id, title:args.title, tags:args.tags})
  }
  if(!args._[0]){
    return pelis.peliculas.getAll();
  }

}


function main(){
  const argumentos=process.argv.slice(2);
  const parseado= parsearArgs(argumentos);
  processOptions(parseado).then((r)=>console.log(r))
}

main();

