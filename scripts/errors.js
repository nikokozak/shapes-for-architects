export function UnknownFunctionException(value)
{
    this.value = value
    this.message = `Unknown function "${value}"`
    this.toString = () => this.message
}


