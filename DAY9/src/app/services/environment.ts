import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  env = environment;

  constructor() {}

  isFeatureEnabled(featureName: string): boolean {
    return this.env.featureFlags[
      featureName as keyof typeof this.env.featureFlags
    ];
  }
}