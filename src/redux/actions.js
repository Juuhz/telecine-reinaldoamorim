// Tipos de Actions
export const actionTypes = {
    MODAL_STATUS: 'MODAL_STATUS',
    LOADER_STATUS: 'LOADER_STATUS',
}

// Action que fecha/abre o Modal
export const changeStatusModal = ( status ) => {
    return { type: actionTypes.MODAL_STATUS, modalStatus: status }
}

// Action que exibe/esconde o loader
export const changeStatusLoader = ( status ) => {
    return { type: actionTypes.LOADER_STATUS, loaderStatus: status }
}