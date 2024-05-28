import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../../../../../app/models/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  filtroActivo: boolean = false;

  // listaProductosTotal: any[] = [];
  listaProductosTotal: any = [
    {
    id: 1,
    photoUrl: "../../../../../../assets/img/vaper1.jpeg",
    price: 99999,
    name: "Vaper 1",
    description: "Descripción del vaper 1.",
    stock: 1,
    brand: "HQD",
    category: "ropa",
    active: false,
    quantity: 1
    },
    {
      id: 2,
      photoUrl: "../../../../../../assets/img/vaper2.jpeg",
      price: 50,
      name: "Vaper 2",
      description: "Este es el que usa nicky yam",
      stock: 1,
      brand: "Marca",
      category: "ropa",
      active: false,
      quantity: 1
    },
    {
      id: 3,
      photoUrl: "../../../../../../assets/img/vaper3.jpeg",
      price: 1,
      name: "Vaper 3",
      description: "Zarpado vaper con 2 pantallas",
      stock: 1,
      brand: "MTRX",
      category: "otros",
      active: false,
      quantity: 1
    }
  ]

  listaProductos: any[] = this.listaProductosTotal

  listaProductosOrdenada: any[] = this.listaProductos

  agregado: boolean = false;

  loading: boolean = false;
  error: boolean = false;

  // params: string = "Todas";
  // params2: string | undefined;

  @Input() ordenActual: string | undefined;
  @Input() categoriaActual: string | undefined;

  // constructor(private route: ActivatedRoute, private prodServ: ProductosService, private listaProdService: ListaProductosService, private http: HttpClient) {
  constructor(private route: ActivatedRoute) {
    // this.getProductos();
    this.actualizarCategoria();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.getProductos();
    this.actualizarCategoria();
    this.ordenar();
  }

  ngOnInit(): void {

    // this.loading = true

    this.filtroActivo = false;

    // this.route.queryParams.subscribe(params => this.params = params['categoria']);
    // this.route.queryParams.subscribe(params => this.params2 = params['serie']);
    
    // this.getProductos();

    // this.http.get<any[]>("http://localhost:8080/productos").subscribe(data => {
    //   this.listaProductosTotal = data as IProducto[];
    // });

    // this.listaProductosOrdenada = this.listaProductosTotal;

  }

  getProductos() {
    // this.prodServ.obtener().subscribe((res: any[])=> {
    //   this.loading = false;
    //   this.listaProductosTotal = res;
    //   this.listaProductosOrdenada = res;
    // })

    // this.prodServ.obtener().subscribe(
    //   data => {
    //     this.listaProductosTotal = data[0];
    //     // console.log(data)
    //   },
    //   error => {
    //     alert("Error")
    //   }
    // )
  }



  mostrarSucces(product: ProductInterface) {
    product.active = true;
  }

  ordenar() {
    switch (this.ordenActual) {
      case "precioAscendente":
        this.listaProductos = this.listaProductosOrdenada
        this.listaProductosOrdenada = this.listaProductos.sort((a,b) => {
        if (a.precio < b.precio) {
          return -1;
        } else if (a.precio > b.precio){
          return 1;
        }
        return 0;
      })
      break

      case "precioDescendente":
        this.listaProductos = this.listaProductosOrdenada
        this.listaProductosOrdenada = this.listaProductos.sort((a,b) => {
          if (a.precio < b.precio) {
            return 1;
          } else if (a.precio > b.precio){
            return -1;
          }
          return 0;
        })
      break
    }
    this.filtroActivo = true;
  }

  actualizarCategoria() {
    switch (this.categoriaActual) {
      case "todas":
        this.listaProductos = this.listaProductosTotal;
        this.listaProductosOrdenada = this.listaProductos
      break

      case "ropa":
        this.listaProductos = this.listaProductosTotal.filter((producto: { category: string; }) => producto.category=="ropa")
        this.listaProductosOrdenada = this.listaProductos
      break

      case "otros":
        this.listaProductos = this.listaProductosTotal.filter((producto: { category: string; }) => producto.category=="otros")
        this.listaProductosOrdenada = this.listaProductos
      break
    }
    this.filtroActivo = true;
  }

}
