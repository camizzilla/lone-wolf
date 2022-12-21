import { Component, OnInit } from '@angular/core';
import { CharacterDateService } from 'src/app/shared/services/character-date.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUpload:boolean = false;

  constructor(
    private cdService: CharacterDateService,
    public storeService: StoreService
    ) { }

  ngOnInit(): void {
  }

  saveLocal(){
    this.cdService.saveStore()
  }

  clear(){
    this.storeService.cancelLocalStorageJson()
  }

  upload(){
    this.isUpload = true;
  }

  downLoad(){
    this.cdService.downLoad()
  }

  uploadFile(event:any){
    let jsonObj:{} = {}

    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, 'UTF-8');

    fileReader.onload = () => {
      jsonObj= fileReader?.result && JSON.parse( fileReader.result.toString() );
      this.cdService.loadStore(JSON.stringify(jsonObj))
      this.isUpload = false;
    }

    fileReader.onerror = (error) => {
    console.log(error);
    }
  }

}
