import { Component, OnInit, Input } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';


const SRC_URL = 'http://localhost:3000/api/src';
const DEST_URL = 'http://localhost:3000/api/dest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sg-duco-ui';
  srcData: string[];
  destData: string[];

  public uploader1: FileUploader = new FileUploader(
    {
      url: SRC_URL,
      itemAlias: "source"
    }
  );

  public uploader2: FileUploader = new FileUploader(
    {
      url: DEST_URL,
      itemAlias: "destination"
    }
  );

  ngOnInit() {
    this.uploader1.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader1.onCompleteItem = (item: any, response: string, status: any, headers: any) => {
      this.srcData = Object.keys(JSON.parse(response))
    };
    this.uploader2.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader2.onCompleteItem = (item: any, response: string, status: any, headers: any) => {
      this.destData = Object.keys(JSON.parse(response))
    };
  }
}
