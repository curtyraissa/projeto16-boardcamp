import joi from "joi"

//Jogos
export const jogosSchema = joi.object({
        name:  joi.string().required(),
        image: joi.string().required(),
        stockTotal: joi.number().min(1).required(),
        pricePerDay: joi.number().min(1).required()
      })


//Clientes
export const clientesSchema = joi.object({
  name: joi.string().required(),
  phone: joi.number().min(10).max(11).required(),
  cpf:  joi.number().min(11).max(11).required(),
  birthday: joi.date()
})

//Alugueis
export const alugueisSchema = joi.object({
        customerId: joi.number().required(),
        gameId:  joi.number().required(),
        daysRented:  joi.number().min(1).required()             // por quantos dias o cliente agendou o aluguel
        // rentDate: '2021-06-20',    // data em que o aluguel foi feito
        // returnDate: null,          // data que o cliente devolveu o jogo (null enquanto não devolvido)
        // originalPrice: 4500,       // preço total do aluguel em centavos (dias alugados vezes o preço por dia do jogo)
        // delayFee: null             // multa total paga por atraso (dias que passaram do prazo vezes o preço por dia do jogo)
})