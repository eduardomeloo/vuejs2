<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal</p>
        <p>Nome é <strong> {{ nome }} </strong></p>
        <p>Idade é <strong> {{ idade }} </strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <UsuarioInfo 
                :nome="nome"
                :idade="idade"
                @nomeMudou="nome = $event"
                :reiniciarFn="reiniciarNome" />
            <UsuarioEditar 
                :idade="idade"
                @mudarIdade="idade = $event" />
        </div>
    </div>
</template>
<script>
import UsuarioInfo from './UsuarioInfo'
import UsuarioEditar from './UsuarioEditar'

export default {
    name: 'Usuario',
    components: {UsuarioInfo, UsuarioEditar},
    data() {
        return {
            nome: 'Eduardo',
            idade: 29
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Tété'
        },
        reiniciarNome() {
            this.nome = 'Eduardo'
        }
    }
}
</script>
<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>