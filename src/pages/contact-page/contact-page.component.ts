import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.form = this.fb.group(
      {
        names: [
          null,
          [Validators.required]
        ],
        email: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            )
          ]
        ],
        comment: [
          null,
          [
            Validators.required
          ]
        ]
      }
    );
  }

  sendForm(): void {
    if (this.form.valid) {
      /**llamado al servicio*/
      this.openDialog();
    }
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
    });
  }


}


