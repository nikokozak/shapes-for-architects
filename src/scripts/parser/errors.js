/* ======================== ERRORS.JS =====================
 * A bunch of different error types that our semantic actions
 * can emit. Still unclear on how to best use these. 
 * Currently these all end up being caught by the try,catch block
 * in main.js
 */

export class UnknownFunctionError extends Error 
{
    constructor(value) {
        super(`Unknown function "${value}"`)
        this.value = value
        this.name = "UnknownFunctionError"
    }
}

export class DisallowedIdentifierError extends Error
{
    constructor(value) {
        super(`Cannot use "${value}" as an identifier!`)
        this.value = value
        this.name = "DisallowedIdentifierError"
    }
}

export class UndeclaredIdentifierError extends Error
{
    constructor(value) {
        super(`Identifier "${value}" has not been declared in a range!`)
        this.value = value
        this.name = "UndeclaredIdentifierError"
    }
}

export class InfiniteRangeError extends Error
{
    constructor(value) {
        super(`The range for identifier ${value} is infinite!`)
        this.value = value
        this.name = "InfiniteRangeError"
    }
}

export class RangeIdentifierParityError extends Error
{
    constructor(value) {
        super(`The identifiers for the declared ranges aren't correct!`)
        this.value = value
        this.name = "RangeIdentifierParityError"
    }
}

export class InvalidResolutionError extends Error
{
    constructor(value) {
        super(`The resolution value ${ value } is not allowed! Must be a positive int!`)
        this.value = value
        this.name = "InvalidResolutionError"
    }
}

export class ImaginaryNumberError extends Error
{
    constructor(value) {
        super(`A number cannot be raised to a float if the base is negative!`)
        this.value = value
        this.name = "ImaginaryNumberError"
    }
}

export default {
    UnknownFunctionError,
    DisallowedIdentifierError,
    UndeclaredIdentifierError,
    InfiniteRangeError,
    RangeIdentifierParityError,
    InvalidResolutionError,
    ImaginaryNumberError
}
