//1.crear un objeto que tenga minimo dos metodos,ademas debe tener una propiedad que sea un objeto


const ferrari = {
    nombre:'Purosangue',
    velocidad:'trecientos kilometros',
   
    motor:'V12atmosférico',
    //metodo 

      tono:{

        color:'tengo un color amarillo',
        color1:'tengo un color verde',

    },

   

    velocida:function(){
        return  `corre a  unos ${this.velocidad}`
    },

    motoress:function(){
        return  `tiene un motor  ${this.motor}`
    }


    

}

console.log(ferrari.velocida());
console.log(ferrari.motoress());

//-----------------------------------------------------------------


//2.crear una clase que herede de otra y debe poseer minimo 3 propiedades

class hotel {
    constructor(nom_hotel,num_pie,ciudad){
        this.nom_hotel = nom_hotel;
        this.num_pie=num_pie;
        this.ciudad=ciudad;

    }

    //metodo
    hottt(){
        return   `mi hotel esta en  ${this.nom_hotel} y tiene  ${this.num_pie} piesas  y esta en la ciudad de${this.ciudad}`
    }

}
//voy a usar la clase para construir una persona (un objeto) 
let personita = new hotel('pereira',' 20','pereira');
console.log(personita.hottt()); 

//herencia

class tienda extends hotel{
    constructor(nom_hotel,num_pie,ciudad,nombre_tiendas,num_productos,personal){
        super(nom_hotel,num_pie,ciudad);
        this.nombre_tiendas=nombre_tiendas;
        this.num_productos=num_productos;
        this.personal=personal;
    }
    
    con_perso(){
        return `tengo ${this.personal}personas  recibo ${this.num_productos} productos`
    }
    

    

    
}

let hom = new tienda('j_hottew',40,'cordoba','las casuelitas',500,4);

console.log(hom.con_perso());


//3.crear una funcion tipo flecha que haga uso de la clase construida y el objeto declarado

class cansion {
    constructor(nombre,duracion){
        this.nombre = nombre;
        this.duracion=duracion;
        
        this.añadirfavo =()=>{
            console.log('añadiendo a favorito');
        }

    }


}

const cansion1 = new cansion('Just The Way You Are','3 minutos');

console.log(cansion1.añadirfavo());

console.log(cansion1.nombre);

