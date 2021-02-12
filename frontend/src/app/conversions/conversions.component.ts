import { Component, OnInit } from '@angular/core';
import { CONVERSIONS } from '../std_conversions';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { ApiService } from '../services/api.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.css']
})
export class ConversionsComponent implements OnInit {
  form: FormGroup;
  conversions = CONVERSIONS;
  chemicals : String[];
  chemlist : String;
  chem : String;
  results = "";

  get conversionsFormArray() {
    return this.form.controls.conversions as FormArray;
  }
  constructor(private formBuilder: FormBuilder, private apiService : ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      conversion: this.formBuilder.array([], [Validators.required])
    })
    this.chemicals = [];
    this.chemlist = "";
    this.chem = "";
    this.results = "";
    
  }
  ngOnInit(){
  }
  onCheckboxChange(e:any) {
    const conversion: FormArray = this.form.get('conversion') as FormArray;
   
    if (e.target.checked) {
      conversion.push(new FormControl(e.target.value));
    } else {
       const index = conversion.controls.findIndex(x => x.value === e.target.value);
       conversion.removeAt(index);
    }
  }

  update(e:any) {
      this.chem = e.target.value;
  }

  addToList() {
    let cleanString = this.chem.replace(/([^a-z0-9]+)/gi, "").toLowerCase()
    this.chemlist = `${this.chemlist}${cleanString},`;
    this.chemicals.push(this.chem);
    this.chem = "";
  }

  submit(){
    let conversionTypes = this.form.value['conversion'];
    conversionTypes.forEach((conversion:String) => {
      this.apiService.get(conversion, this.chemicals)
      .subscribe(
        response => {
            response.forEach((res:any) => {
              this.results = this.results + `${res[0]} with conversion ${conversion}: ${res[1]} \n`
            });
        },
        error => {
          alert('No response. Please validate your input or try again later.')
        }
      )
    });
    this.chemicals = [];
    this.chemlist = "";
    this.chem = "";
    
  }

  
}
