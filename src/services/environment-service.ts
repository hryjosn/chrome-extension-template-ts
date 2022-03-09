export const checkIsExtension = (): boolean =>
    process.env.REACT_APP_BUILD_TARGET === 'extension'
