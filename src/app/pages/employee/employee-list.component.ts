import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employee.model';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  employeeList: EmployeeModel[] = [];
  public id: number = 0;
  constructor(private employeeService: EmployeeService, private router: Router) { }
  ngOnInit(): void {
    this.loadEmployee();
  }
  public loadEmployee(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employeeList = data
    })
  }


  public delete(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.delete(id).subscribe(() => {
        alert('Employee deleted successfully!');
        this.loadEmployee();
      }, error => {
        console.error('Delete failed:', error);
      });
    }
  }

  public edit(id: number): void {
    this.router.navigate(['/employee-form', id]);
  }

}
