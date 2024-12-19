import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Info } from '../module/Info';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  http :HttpClient = inject(HttpClient);

  formSubmit(data:Info){
   this.http.post<{ name: string }>('https://angularhttp-ed902-default-rtdb.firebaseio.com/form.json',data).subscribe((response)=>{
       console.log(response);
       
   })
  }

  
  getData(){
   return this.http.get('https://angularhttp-ed902-default-rtdb.firebaseio.com/form.json').pipe(map((response) => {
       let data =[]
       for (let key in response) {
           if (response.hasOwnProperty(key)) {
             data.push({ ...response[key], id: key });
           }
         }
         return data;
   }))}

   deleteData(){
     this.http.delete('https://angularhttp-ed902-default-rtdb.firebaseio.com/form.json').subscribe(()=>{
       console.log("deleted");
       
     })
   }
  }

