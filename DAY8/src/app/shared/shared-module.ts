import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Button } from './components/button/button';
import { Badge } from './components/badge/badge';
import { Spinner } from './components/spinner/spinner';

import { Highlight } from './directives/highlight';
import { TruncateText } from './directives/truncate-text';

import { TruncatePipe } from './pipes/truncate-pipe';
import { RupeePipe } from './pipes/rupee-pipe';

@NgModule({
  imports: [
    CommonModule,

    Button,
    Badge,
    Spinner,

    Highlight,
    TruncateText,

    TruncatePipe,
    RupeePipe
  ],
  exports: [
    Button,
    Badge,
    Spinner,

    Highlight,
    TruncateText,

    TruncatePipe,
    RupeePipe
  ]
})
export class SharedModule { }