import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';
import { DepartmentServiceService } from '../../services/department-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  listRayons: any;
  listProducts: any;
  department!: Department;
  closeResult!: String;
  userId = Department.userId;

  constructor(private ds: DepartmentServiceService) { }

  ngOnInit(): void {
    this.getAllDepartments();
    this.getAllProducts();

    this.department = {
      id: null,
      nom: null,
      description: null,
      evenement: null,
      typeRayon: null,
      productId: null
    }
  }
  getAllDepartments() {
    this.ds.getAllRayons().subscribe(res => this.listRayons = res);
  }

  getAllProducts() {
    this.ds.allProducts().subscribe(res1 => this.listProducts = res1);
  }
}
