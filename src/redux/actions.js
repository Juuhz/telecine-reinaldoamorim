// Tipos de Actions
export const actionTypes = {
    MODAL_STATUS: 'MODAL_STATUS',
    LOADER_STATUS: 'LOADER_STATUS',
    SHOW_MODAL_SUCCESS: 'SHOW_MODAL_SUCCESS',
}

// Action que fecha/abre o Modal
export const changeStatusModal = ( status ) => {
    return { type: actionTypes.MODAL_STATUS, modalStatus: status }
}

// Action que exibe/esconde o loader
export const changeStatusLoader = ( status ) => {
    return { type: actionTypes.LOADER_STATUS, loaderStatus: status }
}

// Action que exibe mensagem de sucesso no modal
export const showModalSuccess = () => {
    return { type: actionTypes.SHOW_MODAL_SUCCESS }
}