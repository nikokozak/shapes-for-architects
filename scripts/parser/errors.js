export function UnknownFunctionException(value)
{
    this.value = value
    this.message = `Unknown function "${value}"`
    this.toString = () => this.message
}

export function DisallowedIdentifierException(value)
{
    this.value = value
    this.message = `Cannot use "${value}" as an identifier!`
    this.toString = () => this.message
}

export function UndeclaredIdentifierException(value)
{
    this.value = value
    this.message = `Identifier "${value}" has not been declared in a range!`
    this.toString = () => this.message
}

export function InfiniteRangeException(value)
{
    this.value = value
    this.message = `The range for identifier ${value} is infinite!`
    this.toString = () => this.message
}

