import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Colleges } from './pages/colleges/colleges';
import { Blog } from './pages/blog/blog';
import { Contact } from './pages/contact/contact';
import { Terms } from './pages/terms/terms';
import { Privacy } from './pages/privacy/privacy';
import { Cookies } from './pages/cookies/cookies';
import { Declarations } from './pages/declarations/declarations';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'about', component: About },
	{ path: 'colleges', component: Colleges },
	{ path: 'blog', component: Blog },
	{ path: 'contact', component: Contact },
	{ path: 'terms', component: Terms },
	{ path: 'privacy', component: Privacy },
	{ path: 'cookies', component: Cookies },
	{ path: 'declarations', component: Declarations },

	// engineering lazy routes (list + detail)
	{ path: 'engineering', loadComponent: () => import('./pages/engineering/list').then(m => m.EngineeringList) },
	{ path: 'engineering/:file', loadComponent: () => import('./pages/engineering/detail').then(m => m.EngineeringDetail) },

	// medical lazy routes
	{ path: 'medical', loadComponent: () => import('./pages/medical/list').then(m => m.MedicalList) },
	{ path: 'medical/:file', loadComponent: () => import('./pages/medical/detail').then(m => m.MedicalDetail) },

	{ path: '**', redirectTo: '' }
];
