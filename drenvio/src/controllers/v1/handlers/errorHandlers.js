const errorCodes = require('../../../enums/error_codes.enum')
module.exports.errorHandlers = () => ({
    functionNotFound: (message) =>
    ({
        success: false,
        error_code: errorCodes.FUNCTION_NOT_FOUND,
        message: (!message) ? "The Function not found." : message,
    }),
    internalErrorServer: (message) => ({
        success: false,
        error_code: errorCodes.INTERNAL_SERVER_ERROR,
        message: (!message) ? 'Oops! Something went wrong on our end. Please try again later.' : message,
    }),
    dataIdRequired: (message) => ({
        success: false,
        error_code: errorCodes.DATA_ID_REQUIRED,
        message: (!message) ? 'Data id is required' : message,
    })
})