import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name:'serach'
})
export class SerachPipe implements PipeTransform{
    transform(items: any[], searchText: string): any[] {
        if(!items){
            return[];
        }
        if(!searchText){
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(it=>{
            return it.name.toLowerCase().includes(searchText) || it.type.toLowerCase().includes(searchText);
        })
    }
}