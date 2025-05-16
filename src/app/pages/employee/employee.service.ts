import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EmployeeModel } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:5048/api/Employee';
  constructor(private http: HttpClient) { }

  // public getAllEmployees(): Observable<EmployeeModel[]>{
  //   return this.http.get<EmployeeModel[]>(`${this.baseUrl}/GetAll`).pipe(
  //     map((response:EmployeeModel[]) => response)
  //   );
  // }

  public getAllEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.baseUrl}/GetAll`);
  }

  public getEmployeeById(id: number): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(`${this.baseUrl}/${id}`, {});
  }

  public insert(employeeModel: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(`${this.baseUrl}/insert`, employeeModel);
  }

  public update(employeeModel: EmployeeModel): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/Update`, employeeModel);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/Delete`);
  }



}