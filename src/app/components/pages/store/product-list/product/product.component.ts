import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInterface } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() evento: EventEmitter<boolean> = new EventEmitter<boolean>();

  botonActivo: string = "btn btn-outline-light btn-lg"

  @Input() product: ProductInterface = {
    id: 0,
    photoUrl: "",
    price: 0,
    name: "",
    description: "",
    stock: 0,
    brand: "",
    category: "",
    active: false,
    quantity: 1
  };

  // constructor(private auth: ListaProductosService, private router: Router, private prserv: ProductosService) { }
  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.producto)
  }

  agregarAlCarrito(producto: ProductInterface) {
    let estaba = false;
    // if (localStorage.getItem("token")) {
    //   if(!producto.quantity) {
    //     producto.quantity = 1;
    //   }
    //   if (this.auth.listaCarrito.length>0) {
    //     for (let item of this.auth.listaCarrito) {
    //       if (producto.nombre==item.nombre) {
    //         item.quantity++;
    //         estaba = true;
    //       }
    //       if (!estaba) {
    //         this.auth.listaCarrito.push(producto);
    //       }
    //     }
    //   } else {
    //     this.auth.listaCarrito.push(producto);
    //   }
    // } else {
    //   this.router.navigate(["/login"])
    // }
    // this.prserv.activo = producto.id

    this.actualizarBoton()

    // this.producto.activo = true

    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     activo: true
    //   }
    // }

    // this.router.navigate(["/tienda"], navigationExtras)

  }

  actualizarBoton() {
    // if (this.producto.activo) {
    //   this.botonActivo = "btn btn-outline-light btn-lg"
    // } else {
    //   this.botonActivo = "btn btn-outline-success btn-lg"
    // }

    this.botonActivo = "btn btn-outline-success btn-lg"
    setTimeout(() => {
      this.botonActivo = "btn btn-outline-light btn-lg"
    }, 500);
  }

}
