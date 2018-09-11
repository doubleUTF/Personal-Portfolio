import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {startWith} from 'rxjs/operators';

const url = 'http://localhost:3000/api/file_metadata';

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) {}
  data=new Subject<object>();
  public upload(file:File): Observable<number> {
      let status;
      const formData:FormData=new FormData();
      const progress=new Subject<number>();
      formData.append('upfile',file,file.name);
      const req=new HttpRequest('POST',url,formData,{
        reportProgress:true
      })
      this.http.request(req).subscribe(event=>{
        if (event.type === HttpEventType.UploadProgress) {
          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);
          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          this.data.next(event.body)
          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          // this.progress.complete();
        }
      })

      status=progress.asObservable()
      return status;
  }
}
