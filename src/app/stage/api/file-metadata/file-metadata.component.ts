import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../api.service';
import {ApiApp} from '../api.model';
import {UploadService} from './upload.service';
import {Observable} from 'rxjs';
import {startWith} from 'rxjs/operators';
@Component({
  selector: 'app-file-metadata',
  templateUrl: './file-metadata.component.html',
  styleUrls: ['./file-metadata.component.css'],
  providers:[UploadService]
})
export class FileMetadataComponent implements OnInit {
  rootPath=environment.production ? 'https://www.davidlau.xyz/api' : 'http://localhost:3000/api';
  constructor(
    private apiService:ApiService,
    private upService:UploadService
  ) { }
  file:File;
  fullPath=this.rootPath+'/file_metadata';
  apiApp:ApiApp;
  ngOnInit() {
    this.apiApp=this.apiService.getApi('File Metadata')
  }

  updateName(event){
    if (event.srcElement.value){
      this.fileName=event.srcElement.value.match(/[^\\/:*?"<>|\r\n]+$/)[0];
    }
  }
  progress:Observable<number>=new Observable().pipe(
    startWith(0)
  );
  test(event){
    console.log(event)
  }

  uploadFile(event){
    if (event.srcElement[0].files.length==1){
      this.progress=this.upService.upload(event.srcElement[0].files[0])
      this.upService.data.subscribe(data=>{
        this.fileResponse=JSON.stringify(data)
        console.log(this.fileResponse)
      })
    }
  }

  fileResponse;
  fileName:string;
}
