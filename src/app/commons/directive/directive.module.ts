import { NgModule } from '@angular/core';
import { OnlynumberDirective } from './onlynumber.directive';
import { OnlydecimalDirective } from './onlydecimal.directive';
import { OnlyalfanumberWithoutSpacesDirective } from './onlyalfanumberwithoutspaces.directive';
import { OnlyalfanumberCustomDirective } from './onlyalfanumbercustom';

@NgModule({
  exports: [
    OnlynumberDirective,
    OnlydecimalDirective,
    OnlyalfanumberWithoutSpacesDirective,
    OnlyalfanumberCustomDirective,
  ],
  declarations: [
    OnlynumberDirective,
    OnlydecimalDirective,
    OnlyalfanumberWithoutSpacesDirective,
    OnlyalfanumberCustomDirective,
  ],
})
export class DirectiveModule { }
