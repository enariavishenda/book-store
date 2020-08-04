const compose = (...func) => (comp) => {
    return func.reduceRight((prevResult, f) => f(prevResult), comp) //comp = initial prevResult
}
export default compose