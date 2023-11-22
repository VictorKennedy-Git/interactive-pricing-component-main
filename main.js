// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

let viewerstext = document.querySelector("span#pageviwes")
let value_input = document.querySelector("input[type='range']")
let text_value = document.querySelector("span#valor")


value_input.addEventListener('input', () => {
    parseInt(value_input.value)
    text_value.innerHTML = `R$ ${parseInt(value_input.value).toLocaleString('pt-br', { minimumFractionDigits: 2 })}`


    switch (true) {
        case value_input.value == 20:
            value_input.value = 24
            text_value.innerHTML = "R$ 24,00"
            break;
        case value_input.value >= 28:
            value_input.value = 36
            text_value.innerHTML = "R$ 36,00"
            break;
        default:
            break;
    }

    switch (true) {
        case value_input.value == "8":
            viewerstext.innerHTML = "10K"
            break;
        case value_input.value == "12":
            viewerstext.innerHTML = "50K"
            break;
        case value_input.value == "16":
            viewerstext.innerHTML = "100K"
            break;
        case value_input.value == "24":
            viewerstext.innerHTML = "500K"
            break;
        case value_input.value == "36":
            viewerstext.innerHTML = "1M"
            break;
        default:
            break;
    }
})