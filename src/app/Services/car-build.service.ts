import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarBuildService {
  private storageKey = 'carBuilds';

  constructor() {}

  getBuilds(): any[] {
    const builds = localStorage.getItem(this.storageKey);
    return builds ? JSON.parse(builds) : [];
  }

  saveBuild(build: any): void {
    const builds = this.getBuilds();
    builds.push(build);
    localStorage.setItem(this.storageKey, JSON.stringify(builds));
  }

  clearBuilds(): void {
    localStorage.removeItem(this.storageKey);
  }
}
