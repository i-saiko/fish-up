import {Injectable} from '@angular/core';

import {FormBuilder} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class TableLogic {
  fb = new FormBuilder();

  tableActions: any = {
    add: {
      type: 'header',
      custom: {
        iconClass: 'mdi mdi-plus-circle-outline',
        label: 'Вести новое поступление',
      },
    },
    edit: {
      type: 'single',
    },
    delete: {
      type: 'single',
    },
  };

  tableColumns: any = {
    user: {
      discriminator: 'TextColumn',
      paths: 'user.name',
    },
    createdDate: {
      discriminator: 'DateColumn',
      paths: 'createdDate',
    },
    fish: {
      discriminator: 'TextColumn',
      paths: 'fish01',
    },
  };
  //
  // form(entityType: LcpEntityDto = {id: null, name: null, description: null}): FormGroup {
  //   return this.fb.group({
  //     createdDate: entityType?.createdDate || 0,
  //     description: entityType?.description,
  //     id: entityType?.id,
  //     lastModifiedBy: entityType?.lastModifiedBy || null,
  //     lastModifiedDate: entityType?.lastModifiedDate || 0,
  //     name: entityType?.name,
  //   });
  // }
}


