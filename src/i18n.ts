/**
 * l18n configuration to provide internationalized messages. This way, messages are easy to maintaining.
 *
 * The messages are generated inside locales directory, each json containing messages from the respective
 * language.
 */
import { I18n } from 'i18n';
import path from 'path';

export const i18n = new I18n();

i18n.configure({
	defaultLocale: 'en',
	directory: path.join('./', 'locales'),
});

i18n.setLocale('en');
