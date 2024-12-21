console.log("Hola")

const productos = [
    {
        nombre: "Skate Lab Okusai",
        descripcion: "Tabla cóncava con doble kick, compuesto por laminas de madera y resina epoxi. <br>Truck reforzados de aluminio <br> Bujes 95 A <br> Rulemanes Abec 9 <br> Ruedas de Uretano 52 a 54 mm. <br> Madera Guatambú: resiste hasta 90 kg",
        imagen:"imagenes/skate_lab_01.jpg",
        precio: 100000,
    },
    {
        nombre: "Skate Lab Bicolor",
        descripcion: "Tabla cóncava con doble kick, compuesto por laminas de madera y resina epoxi. <br>Truck reforzados de aluminio <br> Bujes 95 A <br> Rulemanes Abec 9 <br> Ruedas de Uretano 52 a 54 mm. <br> Madera Guatambú: resiste hasta 90 kg",
        imagen:"imagenes/skate_lab_02.jpg",
        precio: 75000,
    },
    {
        nombre: "Skate Lab Canadá",
        descripcion: "Tabla cóncava con doble kick, compuesto por laminas de madera y resina epoxi. <br>Truck reforzados de aluminio <br> Bujes 95 A <br> Rulemanes Abec 9 <br> Ruedas de Uretano 52 a 54 mm. <br> Madera Guatambú: resiste hasta 90 kg",
        imagen:"imagenes/skate_lab_03.jpg",
        precio:80000,
    },
    {
        nombre: "Skate Lab Pride",
        descripcion: "Tabla cóncava con doble kick, compuesto por laminas de madera y resina epoxi. <br>Truck reforzados de aluminio <br> Bujes 95 A <br> Rulemanes Abec 9 <br> Ruedas de Uretano 52 a 54 mm. <br> Madera Guatambú: resiste hasta 90 kg",
        imagen:"imagenes/skate_lab_04.jpg",
        precio:120000,

    },
    {
        nombre: "Longboard Cruiser",
        descripcion: "Tabla cóncava compuesta por 7 laminas de madera y resina epoxi. <br> Largo: 80cm <br> Ancho: 25cm <br> WB: 42,5cm",
        imagen:"imagenes/long_lab_01.jpg",
        precio:120000,
    },
    {
        nombre: "Longboard Rider Pro",
        descripcion: "Tabla cóncava compuesta por 7 laminas de madera y resina epoxi. <br> Largo: 80cm <br> Ancho: 25cm <br> WB: 42,5cm",
        imagen:"imagenes/long_lab_02.jpg",
        precio:135000,
    },
    {
        nombre: "Longboard Ether",
        descripcion: "Tabla cóncava compuesta por 7 laminas de madera y resina epoxi. <br> Largo: 80cm <br> Ancho: 25cm <br> WB: 42,5cm",
        imagen:"imagenes/long_lab_03.jpg",
        precio:120000,
    },
    {
        nombre: "Longboard Sunset",
        descripcion: "Tabla cóncava compuesta por 7 laminas de madera y resina epoxi. <br> Largo: 80cm <br> Ancho: 25cm <br> WB: 42,5cm",
        imagen:"imagenes/long_lab_04.jpg",
        precio:140000,
    },
    {
        nombre:"Casco Lab",
        descripcion: "Plástico exterior: Polipropileno. <br> Material interior: Goma Eva con espuma y poliéster <br> No removible. <br>Tiras de Polyester nylon <br> Orificios de ventilación",
        imagen:"imagenes/casco.jpg",
        precio:36900,
    },
    {
        nombre:"Protecciones",
        descripcion:"Kit de protecciones para skate o longboard.<br> Talle S/M.<br> Incluye: set de 2 rodilleras + set de 2 coderas + set de 2 muñequeras.",
        imagen:"imagenes/protecciones.jpg",
        precio:69300,

    },
    {   nombre: "Lija de papel",
        descripcion:"Lija adhesiva doble AA de 23x85cm de papel.",
        imagen:"imagenes/lija.jpg",
        precio:9000,
    },
    {
        nombre:"Trucks de Skate",
        descripcion:" Trucks de Skate de alta calidad para profesionales. <br> Construidos en fundición de aluminio y ejes de acero templado. <br> Es ideal para tablas de 7.50″, 7.75″ y 8″",
        imagen:"imagenes/trucks.jpg",
        precio:37000,
    },
    {
        nombre:"Gorra Santa Cruz",
        descripcion:"Gorra de gabardina negra",
        imagen:"imagenes/gorra.jpg",
        precio:25000,

    },
    {
        nombre:"Gorro Santa Cruz",
        descripcion:"Gorro de lana gris tejido con parche en el frente",
        imagen:"imagenes/gorro_lana.jpg",
        precio:25000,
        
    },
    {
        nombre:"Remera Santa Cruz",
        descripcion:"Remera de algodón 100% premium",
        imagen:"imagenes/remera.jpg",
        precio:15000,
        
    },
    {
        nombre:"Buzo Santa Cruz",
        descripcion:"Buzo doble friza negro estampado.",
        imagen:"imagenes/buzo.jpg",
        precio:25000,
        
    },
    
]

console.log(productos[1].nombre);


let productosTienda="";
for (let indice= 0; indice < productos.length; indice++){
  
    productosTienda += `
                    <div class="producto-destacado">
                        <img src=${productos[indice].imagen}
                            alt="skate-lab-01">
                        <div class="producto-contenedor">
                            <h2 class="nombre-producto">${productos[indice].nombre}</h2>
                            <h3 class="precio-producto">$${productos[indice].precio}</h3>
                            <p><strong>Descripción:</strong><br><br>${productos[indice].descripcion}</p>
                            <input id="boton-agregar-carrito" type="button" value="AGREGAR"></imput>
                        </div>
                    </div>

`;
}

console.log(productosTienda);

const contenedorProductos = document.getElementById("contenedorProductos");
contenedorProductos.innerHTML = productosTienda;
