import { CounterService } from './counter.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';



@NgModule({
  declarations: [
    CounterComponent,
  ],
  exports:[
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    // CounterService
  ]
})
export class CounterModule { 
  static forRoot(startValue:number = 0) : ModuleWithProviders<CounterModule>{
    return{
      ngModule: CounterModule,
      providers:[
        // CounterService,
        {
          provide: CounterService,
          useFactory: () => new CounterService(startValue)
        }
      ]
    }
  }
}
