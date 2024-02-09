import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../organization.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list-orgnization',
  templateUrl: './list-orgnization.component.html',
  styleUrls: ['./list-orgnization.component.scss']
})
export class ListOrgnizationComponent implements OnInit {
  organizationForm!: FormGroup;
  organizationsArr : any =[]
  constructor(private organizationService : OrganizationService,private fb : FormBuilder,private router : Router,private authService : AuthService) { }

  ngOnInit(): void {
    this.organizationForm = this.fb.group({
      organizationName: ['', [Validators.required,Validators.maxLength(100)]],
      organizationShortName: ['', [Validators.required,Validators.maxLength(50)]],
      organizationURL: ['', [Validators.required]],
      organizationLOGO: ['', [Validators.required,Validators.maxLength(200)]]
    });
    this.getAllOrganizations();
  }

  getOrganizationFormControls(){
    return this.organizationForm.controls;
  }

  getAllOrganizations(){
    this.organizationService.getAllOrganizations().subscribe(((res: any) => {
      this.organizationsArr = res.data;
      console.log(this.organizationsArr);
      
    }))

  }

  addOrganization(){
    let organization ={
      ...this.organizationForm.value
    }
    this.organizationService.addOrganization(organization).subscribe((res: any)=>{
      this.organizationsArr.push(res);
      let ref = document.getElementById('cancel')
      ref?.click();
      this.organizationForm.reset();
    })
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}