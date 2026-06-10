import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-logger',
  imports: [CommonModule],
  templateUrl: './lifecycle-logger.html',
  styleUrl: './lifecycle-logger.css',
})
export class LifecycleLogger implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() data = 0;

  logs: string[] = [];

  addLog(hook: string) {
    this.logs.push(hook);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.addLog('ngOnChanges');
  }

  ngOnInit(): void {
    this.addLog('ngOnInit');
  }

  ngDoCheck(): void {
    this.addLog('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.addLog('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.addLog('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.addLog('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.addLog('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}