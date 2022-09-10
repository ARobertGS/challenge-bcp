import { NgModule } from '@angular/core';
import { AgenciesComponentModule } from './components/agencies-components.module';

const modules = [
  AgenciesComponentModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
})
export class AgenciesCommonsModule { }
