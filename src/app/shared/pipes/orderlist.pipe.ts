import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderlist'
})
export class OrderlistPipe implements PipeTransform {

  transform(value: Array<any>, item:string|null=null, sort:string="asc"): TrackModel[] {
    try{
      if(item===null){
        return value;
      }else{
        const tmpList=value.sort((a, b)=>{
          if(a[item]<b[item]){
            return -1
          }else if(a[item]===b[item]){
            return 0;
          }else if(a[item]>b[item]){
            return 1;
          }else{
            return 1;
          }
        });

        return (sort==='asc')?tmpList:tmpList.reverse();
      }
    }catch(err){
      console.log(`ERROR! algo ocurrio: ${err}`);
      return value;
    }
  }
}
