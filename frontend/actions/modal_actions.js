export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSSE_MODAL"

export const openModal = modal => ({
    type: OPEN_MODAL,
    modal
})

export const closeModal = () => ({
    type: CLOSE_MODEL
})