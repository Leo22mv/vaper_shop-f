import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../../../../../app/models/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  activeFilter: boolean = false;

  // totalProductList: any[] = [];
  totalProductList: any = [
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

  Productolist: any[] = this.totalProductList

  orderedProductList: any[] = this.Productolist

  added: boolean = false;

  loading: boolean = false;
  error: boolean = false;

  // params: string = "Todas";
  // params2: string | undefined;

  @Input() currentOrder: string | undefined;
  @Input() currentCategory: string | undefined;

  // constructor(private route: ActivatedRoute, private prodServ: ProductosService, private listaProdService: ProductosServicList, private http: HttpClient) {
  constructor(private route: ActivatedRoute) {
    // this.getProductos();
    this.updateCategory();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.getProductos();
    this.updateCategory();
    this.ordenar();
  }

  ngOnInit(): void {

    // this.loading = true

    this.activeFilter = false;

    // this.route.queryParams.subscribe(params => this.params = params['categoria']);
    // this.route.queryParams.subscribe(params => this.params2 = params['serie']);
    
    // this.getProductos();

    // this.http.get<any[]>("http://localhost:8080/productos").subscribe(data => {
    //   this.totalProductList = data as IProducto[];
    // });

    // this.orderedProductList = this.totalProductList;

  }

  getProductos() {
    // this.prodServ.obtener().subscribe((res: any[])=> {
    //   this.loading = false;
    //   this.totalProductList = res;
    //   this.orderedProductList = res;
    // })

    // this.prodServ.obtener().subscribe(
    //   data => {
    //     this.totalProductList = data[0];
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
    switch (this.currentOrder) {
      case "precioAscendente":
        this.Productolist = this.orderedProductList
        this.orderedProductList = this.Productolist.sort((a,b) => {
        if (a.precio < b.precio) {
          return -1;
        } else if (a.precio > b.precio){
          return 1;
        }
        return 0;
      })
      break

      case "precioDescendente":
        this.Productolist = this.orderedProductList
        this.orderedProductList = this.Productolist.sort((a,b) => {
          if (a.precio < b.precio) {
            return 1;
          } else if (a.precio > b.precio){
            return -1;
          }
          return 0;
        })
      break
    }
    this.activeFilter = true;
  }

  updateCategory() {
    switch (this.currentCategory) {
      case "todas":
        this.Productolist = this.totalProductList;
        this.orderedProductList = this.Productolist
      break

      case "ropa":
        this.Productolist = this.totalProductList.filter((producto: { category: string; }) => producto.category=="ropa")
        this.orderedProductList = this.Productolist
      break

      case "otros":
        this.Productolist = this.totalProductList.filter((producto: { category: string; }) => producto.category=="otros")
        this.orderedProductList = this.Productolist
      break
    }
    this.activeFilter = true;
  }

}
