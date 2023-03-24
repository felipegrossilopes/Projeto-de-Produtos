class Produto{

    constructor(){
        this.id = 1;
    }

    Adicionar(){
        let produto = this.lerDados()
        
    }

    lerDados(){
         let produto = {}
        
         produto.id = this.id;
         produto.nomeProduto = document.getElementById('pdnome')
         produto.precoProduto = document.getElementById('pdpreco')

         return produto

    }
        validar(produto){
            let msg = '';

            if(produto.nomeProduto == ''){
                msg += 'Por favor, insira corretamente o nome do produto" \n'

            }

            if(produto.precoProduto == ''){
                msg += 'Por favor, insira corretamente o preco do produto" \n'
            }
            if(msg != '')
                alert(msg)
                return false
        }
        return true
}

var produto = new Produto();

