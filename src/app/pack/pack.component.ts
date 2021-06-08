import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pack } from '../pack';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit {
  public packs:Pack[];
  public editPack: Pack;
  public deletePack: Pack;
  pack:Pack;
  id:any;
  closeResult: string;

  
  constructor(private packService: PackService,private modalService: NgbModal) { }
  
  ngOnInit() {
    this.getPacks();
  }

  public getPacks(): void {
    this.packService.getPacks().subscribe(
      (response: Pack[]) => {
        this.packs = response;
        console.log(this.packs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddPack(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.packService.addPack(addForm.value).subscribe(
      (response: Pack) => {
        console.log(response);
        this.getPacks();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onUpdateEmloyee(employee: Pack): void {
    this.packService.updatePack(employee).subscribe(
      (response:  Pack) => {
        console.log(response);
        this.getPacks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteEmloyee(packId:number): void {
 
    this.packService.deletePack(packId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPacks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public findPackById(){
  let resp= this.packService.getPackById(this.pack.id_pack);
  resp.subscribe((data)=>this.id=data);
 }
 open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
}