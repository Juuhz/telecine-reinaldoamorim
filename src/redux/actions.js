// Tipos de Actions
export const actionTypes = {
    SET_INFLUENCER: 'SET_INFLUENCER',
    CLOSE_MODAL: 'CLOSE_MODAL',
}

// Action que seta o objeto do influenciador no Modal
export const setInfluencerModal = ( incluencer ) => {
    return { type: actionTypes.SET_INFLUENCER, modalInfluencer: incluencer }
}

// Action que fecha o Modal
export const closeModal = () => {
    return { type: actionTypes.CLOSE_MODAL }
}