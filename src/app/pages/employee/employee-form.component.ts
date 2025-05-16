import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeModel } from './employee.model';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule, FormsModule , NzFormModule, NzInputModule, NzButtonModule, NzGridModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnInit {
  public employee: EmployeeModel = new EmployeeModel();

  constructor(private employeeService: EmployeeService,
    private router: Router, 
  private route: ActivatedRoute) { }

   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployeeById(+id).subscribe(res => this.employee = res);
    }
  }

onSubmit() {
  if (this.employee.id) {
    this.employeeService.update(this.employee).subscribe(() => {
      alert('Employee updated successfully!');
      this.router.navigate(['/employee-list']);
    });
  } else {
    this.employeeService.insert(this.employee).subscribe(() => {
      alert('Employee added successfully!');
      this.router.navigate(['/employee-list']);
    });
  }
}


}
