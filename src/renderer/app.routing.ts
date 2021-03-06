import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewComponent, LoggerComponent, ParsersComponent, SettingsComponent } from './components';
import { HrefGuard } from './guards';

const AppRouter: Routes = [
    {
        path: '',
        component: PreviewComponent
    },
    {
        path: 'preview',
        component: PreviewComponent
    },
    {
        path: 'logger',
        component: LoggerComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'parsers/:index',
        component: ParsersComponent
    },
    {
        path: '**',
        component: ParsersComponent,
        canActivate: [HrefGuard]
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(AppRouter, {
    useHash: true, initialNavigation: false
});