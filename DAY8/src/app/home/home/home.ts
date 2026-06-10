import { Component } from '@angular/core';

import { Button } from '../../shared/components/button/button';
import { Badge } from '../../shared/components/badge/badge';
import { Spinner } from '../../shared/components/spinner/spinner';

import { Highlight } from '../../shared/directives/highlight';
import { TruncateText } from '../../shared/directives/truncate-text';

import { TruncatePipe } from '../../shared/pipes/truncate-pipe';
import { RupeePipe } from '../../shared/pipes/rupee-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Button,
    Badge,
    Spinner,
    Highlight,
    TruncateText,
    TruncatePipe,
    RupeePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}