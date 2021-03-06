import { NEXT_PAGE, PREVIOUS_PAGE, FIRST_PAGE, LAST_PAGE, GOTO_PAGE } from './paginationType'

export const nextPage = () => {
	return {
		type: NEXT_PAGE
	}
}

export const previousPage = () => {
	return {
		type: PREVIOUS_PAGE
	}
}

export const firstPage = () => {
	return {
		type: FIRST_PAGE
	}
}

export const lastPage = () => {
	return {
		type: LAST_PAGE
	}
}

export const gotoPage = (page) => {
	return {
		type: GOTO_PAGE,
		payload: page
	}
}
