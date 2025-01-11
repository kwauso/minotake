import { atom } from 'jotai';

export const currentSectionAtom = atom<string>('');
export const currentStoryAtom = atom<string | null>(null); 