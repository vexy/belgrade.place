import type {SanityLocals} from '@sanity/sveltekit'

declare global {
	namespace App {
		// interface Error {}
		interface Locals extends SanityLocals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
