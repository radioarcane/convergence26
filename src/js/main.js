import '@babel/polyfill';

import backgroundNoise from './components/background-noise';
import { init as initNavigation } from './components/navigation';
import { init as initScrollTo } from './components/scroll-to';
import { init as initSubmissionForm } from './components/submission-form';

backgroundNoise();
initNavigation();
initScrollTo();
initSubmissionForm();
