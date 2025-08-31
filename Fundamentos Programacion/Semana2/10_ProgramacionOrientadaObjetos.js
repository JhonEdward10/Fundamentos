// //Crear el Constructor
// var Creature = function(nickname, age, x, y) {
//     this.nickname = nickname;
//     this.age = age + "yrs old";
//     this.x = x;
//     this.y = y;
// };

// //Definir las funciones para llamarlo
// Creature.prototype.talk = function() {
//     text("SUPPP!?!?!?!??!", this.x+20, this.y+140);  
// };

// //Definir cualquier objeto que vas a usar
// var Hopper = function(nickname, age, x, y) {
//     Creature.call(this, nickname, age, x, y);
// };

// //Llamarlo dependiendo del constructor

// Hopper.prototype = Object.create(Creature.prototype);

// Hopper.prototype.draw = function() {
//     fill(217, 90, 0);
//     var img = getImage("creatures/Hopper-Happy");
//     image(img, this.x, this.y);
//     var txt = this.nickname + ", " + this.age;
//     text(txt, this.x+10, this.y-7);  
// };

// Hopper.prototype.hooray = function() {
//    text("Hooooray!!!", this.x+29, this.y+140);  
// };

// var Winston = function(nickname, age, x, y) {
//     Creature.call(this, nickname, age, x, y);
// };

// Winston.prototype = Object.create(Creature.prototype);

// Winston.prototype.draw = function() {
//     fill(255, 0, 0);
//     var img = getImage("creatures/Winston");
//     image(img, this.x, this.y);
//     var txt = this.nickname + ", " + this.age;
//     text(txt, this.x+20, this.y-10);  
// };


// var winstonTeen = new Winston("Winsteen", 15, 20, 50);
// var winstonAdult = new Winston("Mr. Winst-a-lot", 30, 229, 50);

// var lilHopper = new Hopper("Little Hopper", 15, 20, 240);
// var bigHopper = new Hopper("Big Hopper", 30, 220, 240);

// winstonTeen.draw();
// winstonAdult.draw();
// lilHopper.draw();
// bigHopper.draw();

// winstonTeen.talk();
// lilHopper.talk();

// bigHopper.hooray();


//_________________________________________________________________________________________________________________



//Codigo muy Interesante

//Orientado a Objetos   

/*************
*OBJECT TYPES
**************/
/******************
*Flower Object Type
*******************/


/*****************
*Tulip Object Type
******************/
// var Tulip = function(x, y, height) {
//     this.x = x;
//     this.y = y;
//     this.height = height;
// };

// Tulip.prototype.draw = function() {
//     noStroke();
//     fill(16, 122, 12);
//     rect(this.x, this.y, 10, -this.height);
//     fill(255, 0, 0);
//     // petals
//     ellipse(this.x+5, this.y-this.height, 44, 44);
//     triangle(this.x-16, this.y-this.height, 
//             this.x+20, this.y-this.height,
//             this.x-20, this.y-this.height-31);
//     triangle(this.x-14, this.y-this.height, 
//             this.x+24, this.y-this.height,
//             this.x+3, this.y-this.height-39);
//     triangle(this.x+-4, this.y-this.height, 
//             this.x+26, this.y-this.height,
//             this.x+29, this.y-this.height-36);
// };

// Tulip.prototype.growBy = function(amount) {
//     this.height += amount;
// };

// /*********************
// *Sunflower Object Type
// **********************/
// var Sunflower = function(x, y, height) {
//     this.x = x;
//     this.y = y;
//     this.height = height;
// };

// Sunflower.prototype.draw = function() {
//     fill(16, 122, 12);
    
//     rect(this.x, this.y, 10, -this.height);
    
//     // petals
//     stroke(0, 0, 0);
//     fill(255, 221, 0);
//     ellipse(this.x-10, this.y-this.height, 20, 18);
//     ellipse(this.x+5, this.y-this.height-15, 20, 18);
//     ellipse(this.x+5, this.y-this.height+15, 20, 18);
//     ellipse(this.x+20, this.y-this.height, 20, 18);
//     fill(20, 20, 20);
//     ellipse(this.x+5, this.y-this.height, 20, 20);
// };

// Sunflower.prototype.growBy = function(amount) {
//     this.height += amount;
// };

// /**************
// *MAIN PROGRAM
// ***************/

// /** create object instances **/
// var tulip = new Tulip(38, 390, 150);
// var sunflower = new Sunflower(186, 390, 100);
// var tulip2 = new Tulip(100, 390, 150);
// var sunflower2 = new Sunflower(250, 390, 100);

// var drawScene = function() {
//     background(207, 250, 255);
//     tulip.draw();
//     sunflower.draw();
//     tulip2.draw();
//     sunflower2.draw();
// };

// mouseClicked = function() {
//     tulip.growBy(10);
//     sunflower.growBy(20);
//     tulip2.growBy(10);
//     sunflower2.growBy(20);
//     drawScene();
// };

// drawScene();


//Pasos para trabajar con la programacion orientada a objetos

// //1. Crear primero la funcion constructora

// var Book = function(title, author, numPages) {
//     this.title = title;
//     this.author = author;
//     this.numPages = numPages;
//     this.currentPage = 0;
//   };

// //2. Luego crear una variable para almacenar la palabra clave new y seguido a eso pasamos la funcion constructora
// //Para poder acceder a las propiedades

// var book = new Book("Sueños de Robot", "Isaac Asimov", 320);

// println("Me encantó leer " + book.title); // Me encantó leer Sueños de Robot
// println(book.author + " es mi autor favorito"); // "Isaac Asimov" es mi autor favorito

// //3. Luego si queremos que nuestro objetos realicen distintas acciones le añadimos el objeto Prototype

// Book.prototype.readItAll = function() {
//     this.currentPage = this.numPages;
//     println("¡Leíste " + this.numPages + " páginas!");
// };

// //4. Por consiguiente la enviamos a llamar de diferentes maneras

// var book = new Book("Rebelión en la granja", "George Orwell", 112);
// var pirate = new Book("Pirate Cinema", "Cory Doctorow", 384);
// var giver = new Book("El Dador", "Lois Lowry", 179);
// var tuck = new Book("Tuck Everlasting", "Natalie Babbit", 144);

// book.readItAll(); // ¡Leíste 112 páginas!
// pirate.readItAll(); // ¡Leíste 384 páginas!
// giver.readItAll(); // ¡Leíste 179 páginas!
// tuck.readItAll(); // ¡Leíste 144 páginas!

// //5. Como hay unas propiedades que son similares a otras, pero no son iguales los objetos se puede tamien heredar algunas caracteristicas
// var PaperBack = function(title, author, numPages, cover) {
//     Book.call(this, title, author, numPages);
//     this.cover = cover;
// };

// //5.1. Luego hacemos un constructor que se pueda generar mediante un prototype en un objeto
// PaperBack.prototype = Object.create(Book.prototype);

// //5.2 Tambien se pueden añadirle un comportamiento especifico
// PaperBack.prototype.burn = function() {
//     println("Oh no, quemaste todas las " + this.numPages + " páginas");
//     this.numPages = 0;
// };

// //5.3 ¡Y ahora podemos crear un nuevo paperback, leerlo todo y quemarlo!
// var calvin = new PaperBack("The Essential Calvin & Hobbes", "Bill Watterson", 256, "http://ecx.images-amazon.com/images/I/61M41hxr0zL.jpg");

// calvin.readItAll(); // ¡Leíste 256 páginas!
// calvin.burn(); // Oh no, ¡quemaste todas las 256 páginas!

