import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('box')
  box:ElementRef<HTMLDivElement>
  x:number = 0
  velocity:number=30
  acceleration:number=-0.5 * 2
  // 힘 = 가속도/질량 -> Force = Acceleration * 1
  ngAfterViewInit(): void {
    this.draw()
  }
  draw(){
    requestAnimationFrame(()=>this.draw())
    this.box.nativeElement.style.left=`${this.x}px`
    this.x+=this.velocity
    this.velocity+=this.acceleration
  }
}
