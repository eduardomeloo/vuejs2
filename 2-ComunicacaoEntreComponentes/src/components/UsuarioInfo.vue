<template>
    <div class="componente">
        <h2>As informações de Usuário</h2>
        <p>Vários detalhes</p>
        <p>Nome do Usuário: <strong> {{ inverterNome() }}  </strong></p>
        <p>Idade do Usuário <strong>{{ idadeProps }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>
<script>
import barramento from '@/barramento'
export default {
    name: 'UsuarioInfo',
    // props: ['nome'],
    props: {
        nome: {
            type: String,
            // default: function() {
            //      return Array(10).fill(0).join(',')
            // },
            // required: true,
            default: 'Anônimo'
        },
        reiniciarFn: Function,
        idade: Number
    },
    data() {
        return {
            nomeAlternativo: this.nome,
            idadeProps: this.idade
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            const novo = 'Eduardo'
            // this.nome = 'Eduardo' Não usar dessa forma
            this.$emit('mudarIdade', novo)
        }
    },
    created() {
        barramento.$on('mudarIdade', idade => {
            this.idadeProps = idade
        }),
        barramento.quandoIdadeMudar(idade => {
            this.idadeProps = idade
        })
    },
}
</script>
<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>