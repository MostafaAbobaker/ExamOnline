import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
    const localStorageService = inject(LocalStorageService);
    const token = localStorageService.getItem<string>('token');

  if(!token) {
    return true;
  } else {
    router.navigate(['/Dashboard']);
    return false;
  }



};
