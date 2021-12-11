console.log('Bem-vindo(a) ao jogo de BlackJack!')

const jogo = confirm('Quer iniciar uma nova rodada?')

if (jogo) {
   const carta1Usuario = comprarCarta()
   const carta2Usuario = comprarCarta()
   const carta1Pc = comprarCarta()
   const carta2Pc = comprarCarta()

   const pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
   const pontuacaoPc = carta1Pc.valor + carta2Pc.valor

   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)
   
   if (pontuacaoUsuario > pontuacaoPc) {
      console.log('O usuário ganhou!')
   } else if (pontuacaoPc > pontuacaoUsuario) {
      console.log('O computador ganhou!')
   } else if (pontuacaoUsuario === pontuacaoPc) {
      console.log('Empate!')
   } else {
      console.log('Erro! Tente novamente.')
   }

   // if (pontuacaoUsuario > pontuacaoPc || pontuacaoPc > pontuacaoUsuario || pontuacaoUsuario === pontuacaoPc ) {
   //    confirm('Deseja começar uma nova partida?')
   // } 

} else {
   console.log('O jogo acabou!')
}