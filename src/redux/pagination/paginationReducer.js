import { NEXT_PAGE, PREVIOUS_PAGE, LAST_PAGE, FIRST_PAGE, GOTO_PAGE } from './paginationType'

const MAX_SIZE = 807
const PAGE_SIZE = 20

const initialState = {
	page: 0
}

const paginationReducer = (state = initialState, action) => {
	let currentPage
	switch (action.type) {
		case PREVIOUS_PAGE:
			currentPage = state.page - PAGE_SIZE
			if (currentPage < 0) currentPage = 0
			return {
				...state,
				page: currentPage
			}
		case NEXT_PAGE:
			currentPage = state.page + PAGE_SIZE
			if (currentPage > MAX_SIZE - PAGE_SIZE) currentPage = MAX_SIZE - PAGE_SIZE
			return {
				...state,
				page: currentPage
			}
		case FIRST_PAGE:
			return {
				...state,
				page: 0
			}
		case LAST_PAGE:
			return {
				...state,
				page: MAX_SIZE - PAGE_SIZE
			}
		case GOTO_PAGE:
			currentPage = action.payload * PAGE_SIZE
			if (currentPage > MAX_SIZE - PAGE_SIZE) currentPage = MAX_SIZE - PAGE_SIZE
			return {
				...state,
				page: currentPage
			}
		default:
			return state
	}
}

export default paginationReducer
