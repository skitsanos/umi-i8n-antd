import {session} from '@/entities/session';
import {locales} from '@/entities/locales';
import {makeEntity} from 'react-entities';

export const useSession = makeEntity(session);
export const useLocales = makeEntity(locales);