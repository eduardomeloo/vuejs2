<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário <strong>{{ idadeProps }}</strong></p>
        <button @click="alterarIdadeComEventBusFunctions">Alterar Idade</button>
    </div>
</template>
<script>
import barramento from '@/barramento'

export default {
    name: 'UsuarioEditar',
    props: { idade: Number },
    data() {
        return {
            idadeProps: this.idade
        }
    },
    methods: {
        alterarIdade() {
            this.$emit('mudarIdade', 33)
        },
        alterarIdadeComEventBus() {
            this.idadeProps += 1
            barramento.$emit('mudarIdade', this.idadeProps)
        },
        alterarIdadeComEventBusFunctions() {
            this.idadeProps += 1
            barramento.alterarIdade(this.idadeProps)
        }
    },
}
</script>
<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>